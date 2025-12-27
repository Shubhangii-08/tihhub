"use client";

import { FaRocket, FaLightbulb, FaSeedling, FaUserTie } from "react-icons/fa";
import Link from "next/link";

const programs = [
  {
    title: "Startup Incubation Program",
    icon: <FaRocket className="text-3xl text-blue-700" />,
    description: "Support for startups in Computer Vision, AR, VR, and related fields. Access mentoring, legal, financial, technical, and IP services.",
    button: { text: "Incubate with Us", href: "/entrepreneurship/incubation" }
  },
  // {
  //   title: "Grand Challenges & Competition",
  //   icon: <FaTrophy className="text-3xl text-yellow-600" />,
  //   description: "Participate in innovation challenges and competitions to solve real-world problems.",
  //   button: { text: "Read More", href: "#" }
  // },
  {
    title: "PRAYAS",
    icon: <FaSeedling className="text-3xl text-green-600" />,
    description: "Prototype grant and support for early-stage innovators.",
    button: { text: "Read More", href: "/entrepreneurship/prayas" }
  },
  {
    title: "Entrepreneurs in Residence (EIR)",
    icon: <FaUserTie className="text-3xl text-purple-600" />,
    description: "Mentorship and support for aspiring entrepreneurs.",
    button: { text: "Read More", href: "/entrepreneurship/eir" }
  },
  {
    title: "Startup Seed Support Program",
    icon: <FaLightbulb className="text-3xl text-orange-600" />,
    description: "Seed funding and business support for promising startups.",
    button: { text: "Read More", href: "/entrepreneurship/seed-support" }
  }
];

export default function Entrepreneurship() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#021954] mb-4">Entrepreneurship & Startup Ecosystem</h1>
          <p className="text-xl text-[#021954] max-w-2xl mx-auto">
            Empowering innovation and startups in Computer Vision, Augmented Reality, and Virtual Reality.
          </p>
        </div>

        {/* Program Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow hover:shadow-lg transition">
              <div className="mb-4">{prog.icon}</div>
              <h2 className="text-2xl font-semibold text-[#021954] mb-2">{prog.title}</h2>
              <p className="text-[#021954] mb-4">{prog.description}</p>
              <Link href={prog.button.href} className="inline-block bg-[#021954] text-white px-5 py-2 rounded hover:bg-blue-900 transition">{prog.button.text}</Link>
            </div>
          ))}
        </div>

        {/* About the Ecosystem */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#021954] mb-4">About the Ecosystem</h2>
          <p className="text-[#021954] mb-4">
            iHub Drishti follows a Technology Life Cycle approach, supporting all stages from knowledge development to commercialization. In partnership with IITJ TISC, we promote startups in Computer Vision, AR, VR, and related fields.
          </p>
          <ul className="list-disc list-inside text-[#021954] space-y-1">
            <li>AVGC (Animation, Visual Effects, Gaming, Comics)</li>
            <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
            <li>Mixed Reality and Metaverse</li>
            <li>Computer Vision for Healthcare & Biosphere</li>
            <li>Vision based Autonomous Systems</li>
            <li>Computer Vision and VR for Industry 4.0</li>
            <li>Data Collection, Curation & Annotation</li>
            <li>Other AR/VR/Computer Vision applications</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 