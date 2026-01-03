"use client";

import Image from 'next/image';

export default function VisualComputingLab() {
  const capabilities = [
    {
      name: "Computer Vision",
      image: '/image/labs/visual-computing/computer-vision.jpg',
      description: "Advanced computer vision algorithms and applications for real-world problems."
    },
    {
      name: "Image Processing",
      image: '/image/labs/visual-computing/image-processing.jpg',
      description: "High-performance image processing and enhancement techniques."
    },
    {
      name: "Visual Analytics",
      image: '/image/labs/visual-computing/visual-analytics.jpg',
      description: "Interactive visualization and analysis of complex data sets."
    }
  ];

  const researchAreas = [
    {
      name: "Deep Learning for Vision",
      image: '/image/labs/visual-computing/deep-learning.jpg',
      description: [
        "Neural network architectures for vision tasks",
        "Transfer learning and model optimization",
        "Real-time inference systems"
      ]
    },
    {
      name: "3D Vision",
      image: '/image/labs/visual-computing/3d-vision.jpg',
      description: [
        "3D reconstruction and modeling",
        "Depth estimation and stereo vision",
        "Point cloud processing"
      ]
    },
    {
      name: "Visual Intelligence",
      image: '/image/labs/visual-computing/visual-intelligence.jpg',
      description: [
        "Object detection and tracking",
        "Scene understanding",
        "Visual reasoning systems"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#021954] mb-6">Visual Computing Laboratory</h1>
          <p className="text-xl text-[#021954] max-w-3xl mx-auto">
            Advancing the frontiers of computer vision and visual computing technologies
          </p>
        </div>

        {/* Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#021954] text-center mb-10">Our Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border-2 border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="relative w-full h-48">
                  <Image 
                    src={capability.image}
                    alt={capability.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-[#021954] text-center mb-2">{capability.name}</h3>
                  <p className="text-[#021954] text-sm text-center">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas Section */}
        <section>
          <h2 className="text-3xl font-bold text-[#021954] text-center mb-10">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4">
                  <Image 
                    src={area.image}
                    alt={area.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#021954] mb-3">{area.name}</h3>
                <ul className="text-[#021954] list-disc list-inside text-left w-full space-y-1">
                  {area.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 