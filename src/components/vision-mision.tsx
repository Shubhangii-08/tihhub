import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function VisionMision() {
  const scientificHorizontals = [
    { 
      text: "Seeing and Sensing",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
      ),
      description: "Developing robust vision systems using cameras, thermal, multispectral, and event-based sensors. Enables accurate perception even in fog, rain, underwater, or occluded environments."
    },
    { 
      text: "Real-time Computer Vision",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      ),
      description: "Designing optimized algorithms and hardware accelerators for real-time video analytics. Focuses on fast, low-power edge processing for smart cameras and autonomous systems."
    },
    { 
      text: "Dependability", 
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path></svg>
      ),
      description: "Building trustworthy AI systems with fairness, explainability, and security at the core. Ensures robust and ethical deployment in sensitive areas like defense and healthcare."
    },
    {
      text: "Data Collection & Annotation",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      ),
      description: "Creating standardized, diverse, and high-quality datasets. Supports automated annotation, curation, and secure data sharing across verticals like medical and autonomous tech."
    },
  ];

  const applicationVerticals = [
    {
      text: "Computer Vision for Autonomous Systems",
      description: "Empowering autonomous platforms to perceive and navigate complex environments using advanced computer vision techniques.",
      image: "/image/vission_and_mission/Vision for Autonomous Systems.webp"
    },
    {
      text: "Computer Vision for Better Living: Healthcare and Biosphere",
      description: "Leveraging computer vision for public health, biosafety, and environmental sustainability.",
      image: "/image/vission_and_mission/Computer Vision for Better Living.webp"
    },
    {
      text: "Imaging for Document Analysis",
      description: "Digitizing and analyzing documents for historical, educational, and multilingual content using computer vision and NLP.",
      image: "/image/vission_and_mission/Imaging for Document Analysis.webp"
    },
    {
      text: "CV and VR for Industry 4.0",
      description: "Driving smart manufacturing and automation through computer vision and virtual reality technologies.",
      image: "/image/vission_and_mission/CV & VR for Industry 4.0.webp"
    },
    {
      text: "AR-VR for X (including Games)",
      description: "Developing immersive AR/VR platforms for training, education, gaming, and simulation.",
      image: "/image/vission_and_mission/Dependable AR & VR for X.webp"
    },
    {
      text: "RAKSHAK (AI and Data Science for COVID)",
      description: "Applying AI and data science for COVID-19 response, monitoring, and public health solutions.",
      image: "/image/vission_and_mission/AI and DS.jpeg"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Scientific Horizontals Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">What We Do?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our core research areas that drive innovation and technological advancement
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scientificHorizontals.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col p-8 mb-10 bg-white rounded-xl shadow-md mx-4"
              >
                <div className="mr-6">
                    {item.icon}
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-3">
                      {item.text}
                    </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Verticals Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">Verticals – Focus Application Areas</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Practical applications of our research in various domains
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationVerticals.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                      {item.text}
                    </h3>
                    <p className="text-gray-600 text-base mb-4">{item.description}</p>
                    <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4 aspect-video">
                      <Image
                        src={item.image}
                        alt={item.text}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Link
                      href={`/projects#vertical-0${index + 1}`}
                      className="mt-auto inline-block px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMision; 
