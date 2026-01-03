"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Lab {
  name: string;
  description: string;
  image?: string;
}

const labData: Lab[] = [
  {
    name: "Robotics Laboratory",
    description: "Our robotics lab is equipped with cutting-edge technology for developing and testing advanced robotic systems, including industrial automation, collaborative robots, and autonomous systems.",
    image: "/image/labs/robotics.webp"
  },
  {
    name: "AI & Machine Learning Lab",
    description: "The AI lab focuses on developing intelligent systems, computer vision applications, and machine learning models for various industrial and research applications.",
    image: "/image/labs/ai-ml.webp"
  },
  {
    name: "IoT & Embedded Systems Lab",
    description: "Our IoT lab specializes in developing connected devices, sensor networks, and embedded systems for smart manufacturing and industrial applications.",
    image: "/image/labs/iot.webp"
  },
  {
    name: "Advanced Manufacturing Lab",
    description: "The manufacturing lab is equipped with advanced 3D printers, CNC machines, and other tools for prototyping and manufacturing innovative solutions.",
    image: "/image/labs/manufacturing.webp"
  }
];

const LabCard = ({ lab }: { lab: Lab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="w-80 bg-white border-2 border-white p-8 rounded-lg shadow-lg overflow-hidden flex flex-col items-center min-h-96">
        <div className="mx-auto mb-8 w-36 h-36 rounded-full bg-gray-100 overflow-hidden ring-4 ring-[#021954]/20 relative group flex items-center justify-center">
          {lab.image ? (
            <Image
              src={lab.image}
              alt={lab.name}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 group-hover:blur-sm"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-[#021954]">
              {lab.name.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="text-3xl font-semibold text-[#021954] mb-4 text-center">{lab.name}</h3>
        <p className="text-xl text-[#021954] text-center">{lab.description}</p>
      </div>
    </motion.div>
  );
};

export default function RAndDLabs() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 text-[#021954]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#021954] mb-6">Research & Development Labs</h1>
          <p className="text-2xl text-[#021954] max-w-3xl mx-auto">
            Explore our state-of-the-art research and development facilities
          </p>
        </div>

        <div className="space-y-16">
          {/* First Row - Two Cards */}
          <div className="flex justify-center space-x-24">
            {labData.slice(0, 2).map((lab, index) => (
              <LabCard key={index} lab={lab} />
            ))}
          </div>

          {/* Second Row - Two Cards */}
          <div className="flex justify-center space-x-24">
            {labData.slice(2, 4).map((lab, index) => (
              <LabCard key={index} lab={lab} />
            ))}
          </div>
        </div>

        {/* Research Focus */}
        <div className="mt-16 bg-white border-2 border-[#021954]/20 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#021954] mb-8 text-center">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-[#021954]">
              <h3 className="text-2xl font-semibold mb-4">Industry 4.0</h3>
              <p className="text-xl">Smart manufacturing, industrial IoT, and digital transformation</p>
            </div>
            <div className="text-[#021954]">
              <h3 className="text-2xl font-semibold mb-4">Autonomous Systems</h3>
              <p className="text-xl">Self-driving vehicles, drones, and robotic automation</p>
            </div>
            <div className="text-[#021954]">
              <h3 className="text-2xl font-semibold mb-4">AI Applications</h3>
              <p className="text-xl">Computer vision, natural language processing, and predictive analytics</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 