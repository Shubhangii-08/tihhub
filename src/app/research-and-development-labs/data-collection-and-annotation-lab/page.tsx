// "use client";

// import Image from "next/image";

// export default function DataCollectionAndAnnotationLab() {
//   const introDescription =
//     "Building CV, AR and VR systems for unconstrained applications require a large amount of labeled data. The availability of correctly labeled and validated data is a major bottleneck in building accurate trustable systems. For several problems, classification engines can be designed by performing convenience sampling and collecting data from the web. However, building trustable and explainable systems require annotations not only with respect to the output class, but also with respect to attributes, semantic segmentation, and marking the regions of importance. While data annotation for object recognition can be outsourced, annotation for specialized applications like the ones in the healthcare vertical requires close collaboration with domain experts. To facilitate this activity, we plan to set up a data collection and annotation lab.";

//   const capabilities = [
//     {
//       name: "Data Collection",
//       image: "/image/labs/data-collection/collection.jpg",
//       description:
//         "Comprehensive data collection services for various AI and computer vision applications.",
//     },
//     {
//       name: "Data Annotation",
//       image: "/image/labs/data-collection/annotation.jpg",
//       description:
//         "High-quality data annotation and labeling services for machine learning models.",
//     },
//     {
//       name: "Quality Assurance",
//       image: "/image/labs/data-collection/quality.jpg",
//       description:
//         "Rigorous quality control and validation of collected and annotated datasets.",
//     },
//   ];

//   const researchAreas = [
//     "Custom dataset creation",
//     "Data preprocessing",
//     "Dataset versioning",
//     "Tool development",
//     "Workflow optimization",
//     "Automation solutions",
//     "Data organization",
//     "Storage solutions",
//     "Access control",
//   ];

//   // Borderless, ringless, outline-less Card
//   const Card = ({ children }: { children: React.ReactNode }) => (
//     <div className="h-full rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
//       {children}
//     </div>
//   );

//   return (
//     <main className="min-h-screen bg-white px-6 pb-16 pt-12 text-[#021954] border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
//       <div className="mx-auto max-w-7xl border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
//         {/* Hero */}
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-[#021954]">
//             Data Collection and Annotation Laboratory
//           </h1>
//           <p className="mx-auto max-w-3xl text-xl text-[#021954]">
//             Building high-quality datasets for advancing AI and computer vision research
//           </p>
//         </div>

//         {/* Intro Description Card (no border/ring/outline) */}
//         <div className="mb-12 rounded-lg bg-white p-8 shadow-lg border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
//           <p className="text-[#021954]">{introDescription}</p>
//         </div>

//         {/* Capabilities */}
//         <section className="mb-12 border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
//           <h2 className="mb-6 text-center text-2xl font-bold text-[#021954]">
//             Technology / Capabilities
//           </h2>
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-within:ring-0 focus-within:outline-none">
//             {capabilities.map((cap) => (
//               <Card key={cap.name}>
//                 <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md border-0 outline-none ring-0">
//                   <Image
//                     src={cap.image}
//                     alt={cap.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-md"
//                     priority={false}
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold">{cap.name}</h3>
//                 <p className="mt-2 text-sm leading-6 text-[#021954]">{cap.description}</p>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Research Areas */}
//         <section className="border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
//           <h2 className="mb-6 text-center text-2xl font-bold text-[#021954]">
//             Focus Areas / Research Areas
//           </h2>
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-within:ring-0 focus-within:outline-none">
//             {researchAreas.map((title) => (
//               <Card key={title}>
//                 <h3 className="text-lg font-semibold">{title}</h3>
//               </Card>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

"use client";

import React from "react";

export default function DataCollectionAndAnnotationLab() {
  const introDescription =
    "Building CV, AR and VR systems for unconstrained applications require a large amount of labeled data. The availability of correctly labeled and validated data is a major bottleneck in building accurate trustable systems. For several problems, classification engines can be designed by performing convenience sampling and collecting data from the web. However, building trustable and explainable systems require annotations not only with respect to the output class, but also with respect to attributes, semantic segmentation, and marking the regions of importance. While data annotation for object recognition can be outsourced, annotation for specialized applications like the ones in the healthcare vertical requires close collaboration with domain experts. To facilitate this activity, we plan to set up a data collection and annotation lab.";

  const capabilities = [
    {
      name: "Data Collection",
      image: "/image/labs/data-collection/collection.jpg",
      description:
        "Comprehensive data collection services for various AI and computer vision applications.",
    },
    {
      name: "Data Annotation",
      image: "/image/labs/data-collection/annotation.jpg",
      description:
        "High-quality data annotation and labeling services for machine learning models.",
    },
    {
      name: "Quality Assurance",
      image: "/image/labs/data-collection/quality.jpg",
      description:
        "Rigorous quality control and validation of collected and annotated datasets.",
    },
  ];

  const researchAreas = [
    "Custom dataset creation",
    "Data preprocessing",
    "Dataset versioning",
    "Tool development",
    "Workflow optimization",
    "Automation solutions",
    "Data organization",
    "Storage solutions",
    "Access control",
  ];

  // Borderless, ringless, outline-less Card
  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="h-full rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
      {children}
    </div>
  );

  return (
    <main className="min-h-screen bg-white px-6 pb-16 pt-12 text-[#021954] border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
      <div className="mx-auto max-w-7xl border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#021954]">
            Data Collection and Annotation Laboratory
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-[#021954]">
            Building high-quality datasets for advancing AI and computer vision research
          </p>
        </div>

        {/* Intro Description Card */}
        <div className="mb-12 rounded-lg bg-white p-8 shadow-lg border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
          <p className="text-[#021954]">{introDescription}</p>
        </div>

        {/* Capabilities (image removed) */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#021954]">
            Technology / Capabilities
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <Card key={cap.name}>
                {/* Image removed so no placeholder space */}
                <h3 className="text-lg font-semibold">{cap.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#021954]">
                  {cap.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section>
          <h2 className="mb-6 text-center text-2xl font-bold text-[#021954]">
            Focus Areas / Research Areas
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((title) => (
              <Card key={title}>
                <h3 className="text-lg font-semibold">{title}</h3>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
