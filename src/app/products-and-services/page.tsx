"use client";

import Image from 'next/image';
import { FaLaptopCode, FaGraduationCap, FaBrain, FaVrCardboard } from 'react-icons/fa'; // Example icons, replace with actual images

export default function ProductsAndServices() {
  const products = [
    { 
      name: "Telemedicine", 
      image: '/image/product_and_service/Telemedicine.webp', 
      description: "Providing remote healthcare services using advanced technology."
    },
    { 
      name: "Cultural heritage digitisation and preservation", 
      image: '/image/product_and_service/Cultural heritage digitisation and preservation (2).webp', 
      description: "Digitizing and preserving cultural artifacts and sites using 3D scanning and VR."
    },
    { 
      name: "Machine vision application for industry", 
      image: '/image/product_and_service/Machine vision application for industry.webp', 
      description: "Implementing computer vision solutions for quality control, automation, and inspection in industrial settings."
    },
    { 
      name: "Industrial simulators", 
      image: '/image/product_and_service/Industrial simulators.webp', 
      description: "Developing realistic simulators for training and operational planning in various industries."
    },
    { 
      name: "Digital Gaming", 
      image: '/image/product_and_service/Digital Gaming.webp', 
      description: "Creating immersive and engaging digital gaming experiences with cutting-edge graphics and interaction."
    },
    { 
      name: "Medical simulator", 
      image: '/image/product_and_service/Medical simulator.webp', 
      description: "Building advanced medical simulators for training healthcare professionals in surgical procedures and diagnostics."
    },
    { 
      name: "Immersive content creation for culture and education", 
      image: '/image/product_and_service/Immersive content creation for culture and education .webp', 
      description: "Producing immersive VR/AR content for educational purposes and cultural experiences."
    },
    { 
      name: "Digital olfaction for marketing & diagnosis", 
      image: '/image/product_and_service/Digital olfaction for marketing & diagnosis.webp', 
      description: "Developing technology for digital scent creation and detection for applications in marketing and medical diagnosis."
    },
  ];

  const services = [
    {
      name: "Education & Training",
      image: '/image/product_and_service/Education.webp',
      description: [
        "VR, AR, and MR for hands-on learning.",
        "3D, interactive patient data for diagnosis.",
        "Virtual training to reduce risks and costs.",
      ],
    },
    {
      name: "Multisensory XR",
      image: '/image/product_and_service/multisensoryxr.webp',
      description: [
        "Engages multiple senses to boost focus and retention.",
        "Integration of Olfaction & Haptics to MR experiences.",
        "Specially Designed Application for Healthcare.",
      ],
    },
    {
      name: "Gen AI Solutions for XR",
      image: '/image/product_and_service/Gen AI solution for XR.webp',
      description: [
        "Automated High-quality texture generation.",
        "Multi level detail control.",
        "Flexibility for designers and developers.",
      ],
    },
    {
      name: "Ancient Stories Via AR/VR/Gaming",
      image: '/image/product_and_service/ancient stories aaar vr.webp',
      description: [
        "Interactive, time-travel-inspired experience at Vadamnagar.",
        "Scripted storytelling using Augmented Reality.",
        "Immersive VR experience of historical tales.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
      <div className="max-w-7xl mx-auto">

        {/* Products Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-[#021954] text-center mb-10">Current Advanced Technology Capability</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
              <div key={index} className="bg-white border-2 border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="relative w-full aspect-[3/2]">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold text-[#021954] text-center mb-2">{product.name}</h2>
                  <p className="text-[#021954] text-sm text-center">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h1 className="text-4xl font-bold text-[#021954] text-center mb-10">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/2]">
                   <Image 
                    src={service.image}
                    alt={service.name}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#021954] mb-3">{service.name}</h2>
                <ul className="text-[#021954] list-disc list-inside text-left w-full space-y-1">
                  {service.description.map((item, itemIndex) => (
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