"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

export default function Training() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#021954] mb-6">Training Programs</h1>
          <p className="text-xl text-[#021954] max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation with cutting-edge skills in computer vision, augmented reality, and virtual reality through our comprehensive training initiatives
          </p>
        </motion.div>

        {/* CHANAKYA Program Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#021954] to-[#1a365d] rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          {/* Program Header */}
          <div className="p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">CHANAKYA UG/PG Internship/Fellowship Program</h2>
                <p className="text-lg text-blue-100">
                  A unique opportunity for undergraduate and postgraduate students to gain hands-on research experience
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Program Content */}
          <div className="p-8 bg-white">
            {/* About Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#021954] mb-6 flex items-center">
                <FaUsers className="mr-3 text-blue-600" />
                About iHub Drishti Foundation
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-[#021954]">
                  <p className="leading-relaxed">
                    iHub Drishti Foundation (iHub-Drishti) is a Section-8, Not-for-profit Company, promoted by and at the Indian Institute of Technology Jodhpur under a National Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS) of the Government of India.
                  </p>
                  <p className="leading-relaxed">
                    iHub-Drishti is a Technology Innovation Hub focused around &quot;Computer Vision (CV), Augmented Reality (AR) and Virtual Reality (VR)&quot;.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/ihub-Photoroom (1).png"
                    alt="iHub Drishti Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#021954] mb-6">Core Research Areas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Seeing and Sensing",
                  "Dependability", 
                  "Real-time Computer Vision Systems",
                  "Data Collection, Curation and Annotation",
                  "Computer Vision for Autonomous Systems",
                  "Computer Vision for Better Living: Healthcare and Biosphere",
                  "Imaging for Document Analysis",
                  "CV and VR for Industry 4.0",
                  "Dependable AR-VR for X (Including Games)"
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <p className="text-[#021954] font-medium">{area}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Financial Support */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#021954] mb-6 flex items-center">
                <FaMoneyBillWave className="mr-3 text-gray-600" />
                Financial Support
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* UG Students */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-[#021954] mb-4">Undergraduate (UG) Students</h4>
                  <ul className="space-y-3 text-[#021954]">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Duration:</strong> Up to 10 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Monthly Scholarship:</strong> INR 5,000/-</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Consumables & Contingency:</strong> Up to INR 20,000/- per student</span>
                    </li>
                  </ul>
                </motion.div>

                {/* PG Students */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-[#021954] mb-4">Postgraduate (PG) Students</h4>
                  <ul className="space-y-3 text-[#021954]">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Duration:</strong> Up to 1 year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Monthly Fellowship:</strong> INR 15,000/-</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Consumables & Contingency:</strong> Up to INR 50,000/- per student per year</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                * The contingency fund may be utilized for covering the cost of travel and stay of the student.
              </p>
            </div>

            {/* Eligibility & Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#021954] mb-6">Eligibility & Requirements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Who Can Apply */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-semibold text-[#021954] mb-4">Who Can Apply</h4>
                  <ul className="space-y-3 text-[#021954]">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Minimum CGPA/CPI of 7 on scale of 0-10 or 70% marks in aggregate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Should not be receiving other government scholarships/grants during fellowship period</span>
                    </li>
                  </ul>
                </div>

                {/* Desirables */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-semibold text-[#021954] mb-4">Desirables</h4>
                  <ul className="space-y-3 text-[#021954]">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Bachelor&apos;s/Master&apos;s degree in engineering discipline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Programming skills in Python, Java or other languages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Skills in image processing, speech processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Proficiency in software engineering tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Hands-on experience on multi-core GPU</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

    

        
          </div>
        </motion.div>

        {/* Additional Programs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#021954] mb-8">Other Training Opportunities</h2>
          <p className="text-lg text-[#021954] mb-8">
            Stay tuned for more training programs and workshops in computer vision, AR/VR, and related technologies.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-[#021954] hover:bg-[#1a365d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Contact Us for More Information
          </a>
        </motion.div>
      </div>
    </main>
  );
} 