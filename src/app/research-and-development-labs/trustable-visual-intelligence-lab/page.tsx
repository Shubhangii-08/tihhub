// "use client";

// import Image from 'next/image';

// export default function TrustableVisualIntelligenceLab() {
//   const capabilities = [
//     {
//       name: "Explainable AI",
     
//       description: "Developing transparent and interpretable AI systems for visual intelligence."
//     },
//     {
//       name: "Robust Vision Systems",
    
//       description: "Building resilient computer vision systems that can handle real-world challenges."
//     },
//     {
//       name: "Ethical AI",
     
//       description: "Ensuring fairness, privacy, and ethical considerations in visual AI systems."
//     }
//   ];

//   const researchAreas = [
//     {
//       name: "AI Safety & Security",
//       image: '/image/labs/trustable-vi/ai-safety.jpg',
//       description: [
//         "Adversarial robustness",
//         "Privacy-preserving vision",
//         "Secure AI deployment"
//       ]
//     },
//     {
//       name: "Interpretability",
//       image: '/image/labs/trustable-vi/interpretability.jpg',
//       description: [
//         "Model explanation techniques",
//         "Decision visualization",
//         "Human-AI interaction"
//       ]
//     },
//     {
//       name: "Fairness & Bias",
//       image: '/image/labs/trustable-vi/fairness.jpg',
//       description: [
//         "Bias detection and mitigation",
//         "Fair representation learning",
//         "Inclusive AI systems"
//       ]
//     }
//   ];

//   return (
//     <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-[#021954] mb-6">Trustable Visual Intelligence Laboratory</h1>
//           <p className="text-xl text-[#021954] max-w-3xl mx-auto">
//             Advancing the development of reliable, ethical, and trustworthy visual AI systems
//           </p>
//         </div>

//         {/* Capabilities Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-[#021954] text-center mb-10">Our Capabilities</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {capabilities.map((capability, index) => (
//               <div key={index} className="bg-white border-2 border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
//                 <div className="relative w-full h-48">
                
//                 </div>
//                 <div className="p-6 flex-grow">
//                   <h3 className="text-xl font-semibold text-[#021954] text-center mb-2">{capability.name}</h3>
//                   <p className="text-[#021954] text-sm text-center">{capability.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Research Areas Section */}
//         <section>
//           <h2 className="text-3xl font-bold text-[#021954] text-center mb-10">Research Areas</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {researchAreas.map((area, index) => (
//               <div key={index} className="bg-white border-2 border-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center">
//                 <div className="relative w-24 h-24 mb-4">
//                   <Image 
//                     src={area.image}
//                     alt={area.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-full"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#021954] mb-3">{area.name}</h3>
//                 <ul className="text-[#021954] list-disc list-inside text-left w-full space-y-1">
//                   {area.description.map((item, itemIndex) => (
//                     <li key={itemIndex}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// } 


"use client";

export default function TrustableVisualIntelligenceLab() {
  const capabilities = [
    {
      name: "Explainable AI",
      description: "Developing transparent and interpretable AI systems for visual intelligence."
    },
    {
      name: "Robust Vision Systems",
      description: "Building resilient computer vision systems that can handle real-world challenges."
    },
    {
      name: "Ethical AI",
      description: "Ensuring fairness, privacy, and ethical considerations in visual AI systems."
    }
  ];

  const researchAreas = [
    {
      name: "AI Safety & Security",
      image: '/image/labs/trustable-vi/ai-safety.jpg',
      description: [
        "Adversarial robustness",
        "Privacy-preserving vision",
        "Secure AI deployment"
      ]
    },
    {
      name: "Interpretability",
      image: '/image/labs/trustable-vi/interpretability.jpg',
      description: [
        "Model explanation techniques",
        "Decision visualization",
        "Human-AI interaction"
      ]
    },
    {
      name: "Fairness & Bias",
      image: '/image/labs/trustable-vi/fairness.jpg',
      description: [
        "Bias detection and mitigation",
        "Fair representation learning",
        "Inclusive AI systems"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#021954] mb-6">Trustable Visual Intelligence Laboratory</h1>
          <p className="text-xl text-[#021954] max-w-3xl mx-auto">
            Advancing the development of reliable, ethical, and trustworthy visual AI systems
          </p>
        </div>

        {/* Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#021954] text-center mb-10">Our Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white border-2 border-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col">
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
