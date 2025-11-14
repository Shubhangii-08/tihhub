
// "use client";

// const projectCategories = [
//   {
//     title: "Culture and Heritage",
//     color: "bg-[#021954] text-white",
//     border: "border-[#021954]",
//     projects: [
//       "Digitization of five Museum of Rajasthan",
//       "chARatram: AR based Ancient storytelling from Painting",
//       "Kiradu Temple 3D Reconstruction",
//       "Digitally Immersive and Interactive Tour of Dharohar Museum",
//     ],
//   },
//   {
//     title: "Edtech",
//     color: "border-2 border-dashed border-[#B71C1C] text-[#021954]",
//     border: "border-[#B71C1C]",
//     projects: [
//       "Gamification of ASI Vadanagar site",
//       "Gamification of Physics Concept",
//       "VR Simulation for Industrial and medical training",
//       "Design and Development of A Software Platform to Create Immersive Content from Digitized and Born Digital Documents",
//     ],
//   },
//   // ...add other categories similarly
// ];

// export default function Projects() {
//   return (
//     <div className="container mx-auto py-16 px-4">
//       <h1 className="text-5xl font-bold mb-12 text-[#021954] text-center">Our Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {projectCategories.map((category, idx) => (
//           <div key={idx}>
//             <div className={`${category.color} rounded-t-lg px-4 py-3 text-lg font-semibold text-center`}>
//               {category.title}
//             </div>
//             <div className={`border ${category.border} border-t-0 rounded-b-lg px-6 py-4 bg-white`}>
//               <ul className="list-disc list-inside space-y-3 text-[#021954]">
//                 {category.projects.map((project, pIdx) => (
//                   <li key={pIdx}>{project}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// projects.tsx

// "use client";

// import Link from "next/link";
// // 1. Import the new, consolidated project data
// import { projectCategories, ProjectCategory } from "./projectData"; // Adjust the path if necessary

// export default function Projects() {
//   return (
//     <div className="container mx-auto py-16 px-4">
//       <h1 className="text-5xl font-bold mb-12 text-[#021954] text-center">
//         Our Projects
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Map through each category */}
//         {projectCategories.map((category: ProjectCategory, idx: number) => (
//           <div key={idx} className="flex flex-col">
//             {/* Category Header */}
//             <div
//               className={`bg-[#021954] text-white rounded-t-lg px-4 py-3 text-lg font-semibold text-center`}
//             >
//               {category.title}
//             </div>

//             {/* Projects List within the card */}
//             <div className="border border-[#021954] border-t-0 rounded-b-lg px-6 py-4 bg-white flex-grow">
//               <ul className="space-y-4">
//                 {/* 2. Map through the full project objects */}
//                 {category.projects.map((project) => (
//                   <li key={project.slug} className="text-[#021954]">
//                     {/* Project Name as a clickable link */}
//                     <Link
//                       href={`/projects/${project.slug}`}
//                       className="font-bold hover:underline"
//                     >
//                       {project.name}
//                     </Link>
//                     {/* 3. Display the project description */}
//                     <p className="text-sm mt-1 text-gray-600">
//                       {project.description}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { projectCategories, ProjectCategory } from "./projectData";

// export default function Projects() {
//   return (
//     <div className="container mx-auto py-16 px-4">
//       <h1 className="text-5xl font-bold mb-12 text-[#021954] text-center">
//         Our Projects
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projectCategories.map((category: ProjectCategory, idx: number) => (
//           <div key={idx} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full">
//             {/* Category Header */}
//             <div className="bg-[#021954] text-white px-4 py-3 text-lg font-semibold text-center">
//               {category.title}
//             </div>

//             {/* Projects List within the card */}
//             <div className="p-6 flex-grow">
//               <ul className="space-y-8">
//                 {category.projects.map((project) => (
//                   <li key={project.slug} className="text-[#021954] flex flex-col">
//                     {/* Image Section */}
//                     {project.image && (
//                       <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
//                         <Image
//                           src={project.image}
//                           alt={`Image for ${project.name}`}
//                           layout="fill"
//                           objectFit="cover"
//                         />
//                       </div>
//                     )}

//                     {/* Content Section */}
//                     <div className="flex flex-col">
//                        <Link href={`/projects/${project.slug}`}>
//                         <a className="font-bold text-lg hover:underline mb-1">
//                           {project.name}
//                         </a>
//                       </Link>
//                       <p className="text-sm text-gray-600 line-clamp-3">
//                         {project.description}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
