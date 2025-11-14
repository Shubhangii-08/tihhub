"use client";
import Image from "next/image";

export default function IncubationProgram() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Image Container */}
        <div className="flex-shrink-0 flex justify-center items-start md:w-1/2">
          <Image
            src="/image/incubation.webp" // Update this path to your actual image
            alt="Startup Incubation Program"
            width={350}
            height={350}
            className="rounded-lg object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[#021954] mb-2">Startup Incubation Program</h1>
         
          <p className="text-[#021954] mb-4">
            iHub Drishti follows a Technology Life Cycle approach - addressing all stages viz. Knowledge-Development, Translation & Commercialization of Technologies dealt by it, including facilitation of new business development through Technology Business Incubator (TBI) by startups venturing on HUB supported/licensed novel technologies. iHub Drishti has partnered with IITJ Technology Innovation & Start-up Centre (TISC) (<a href="http://tisc.iitj.ac.in" className="text-blue-700 underline" target="_blank">http://tisc.iitj.ac.in</a>) as TBI for facilitating the promotion and enhancement of Innovation, entrepreneurship and startup ecosystem pivoting around the HUB assigned technology areas. We promote new technology/knowledge/innovation based startups in the area of computer vision, augmented reality and virtual reality. This start up support program will provide a platform for speedy commercialization of technologies developed by any academic/technical/R&D institution or by an individual. Under this program, startups will be supported by cost effective, value added services like mentoring, legal, financial, technical, intellectual property related services.
          </p>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>AVGC (Animation, Visual Effects, Gaming, Comics)</li>
            <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
            <li>Mixed Reality and Metaverse</li>
            <li>Computer Vision for Healthcare & Biosphere</li>
            <li>Vision based Autonomous Systems</li>
            <li>Computer Vision and VR for Industry 4.0</li>
            <li>Data Collection, Curation & Annotation</li>
            <li>Other applications related to AR, VR and computer vision may also be considered which are not explicitly mentioned in this list.</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 