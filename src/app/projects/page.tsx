// "use client";

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { projectCategories, Project } from './projectData';

// const ProjectCard = ({ project }: { project: Project }) => {
//   const statusColor = project.status === 'Completed'
//     ? 'text-green-600'
//     : project.status === 'Ongoing'
//     ? 'text-orange-500'
//     : 'text-gray-600';

//   const cardContent = (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.04 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
//     >
//       {/* MODIFICATION: Changed aspect ratio to 3:2 */}
//       <div className="aspect-[3/2] bg-gray-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
//         <img
//           src={project.image ?? '/image/projects/default.jpg'}
//           alt={project.name}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           onError={(e) => { e.currentTarget.src = '/image/projects/default.jpg'; }}
//         />
//       </div>
//       <h3 className="text-2xl font-bold text-[#021954] mb-2">{project.name}</h3>
      
//       <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
      
//       <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mt-auto">
//         <p className="flex items-center gap-2 text-[#021954] mb-1">
//           <span className="font-medium">PI:</span> {project.pi}
//         </p>
//         {project.status && (
//           <p className={`flex items-center gap-2 font-medium mb-1 ${statusColor}`}>
//             Status: {project.status}
//           </p>
//         )}
//       </div>
//     </motion.div>
//   );
//   return cardContent;
// };

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState(0);

//   const applicationVerticals = [
//     "Computer Vision for Autonomous Systems",
//     "Computer Vision for Better Living: Healthcare and Biosphere",
//     "CV and VR for Industry 4.0",
//     "AR-VR for X(including Games)",
//     "RAKSHAK (AI and Data Science for COVID)"
//   ];

//   // Handle hash navigation to activate the correct category and scroll
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash;
//       if (hash.startsWith('#vertical-')) {
//         const idx = parseInt(hash.replace('#vertical-', '')) - 1;
//         if (!isNaN(idx) && idx >= 0 && idx < applicationVerticals.length) {
//           setActiveCategory(idx);
//           // Scroll to the anchor after a short delay to ensure rendering
//           setTimeout(() => {
//             const el = document.getElementById(`vertical-0${idx + 1}`);
//             if (el) {
//               el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             }
//           }, 100);
//         }
//       }
//     };
//     // Run on mount
//     handleHashChange();
//     // Listen for hash changes
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#021954]">
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-bold text-[#021954] mb-6">Projects & Research</h1>
//         <p className="text-2xl text-[#021954] max-w-3xl mx-auto">
//           Explore our innovative research projects across various domains
//         </p>
//       </div>

//       {/* Application Verticals Section for Projects */}
//       {/* Category Navigation */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12">
//         {applicationVerticals.map((vertical, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveCategory(index)}
//             className={`px-6 py-3 rounded-full transition-all duration-300 ${
//               activeCategory === index
//                 ? 'bg-[#021954] text-white'
//                 : 'bg-white border-2 border-white text-[#021954] hover:bg-gray-100'
//             }`}
//             id={`vertical-btn-0${index + 1}`}
//           >
//             {vertical}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid with Anchors for Each Vertical */}
//       {applicationVerticals.map((vertical, index) => (
//         <div key={index}>
//           <span id={`vertical-0${index + 1}`}></span>
//           {activeCategory === index && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {projectCategories[index] && projectCategories[index].projects.map((project: Project, pIndex: number) => (
//                 <ProjectCard key={pIndex} project={project} />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* Contact Section */}
//       <div className="mt-16 text-center">
//         <p className="text-[#021954] mb-4">
//           If you wish to be part of our journey, please write to us at{' '}
//           <a href="mailto:admin@ihub-drishti.ai" className="text-[#021954] hover:text-[#0a3070]">
//             admin@ihub-drishti.ai
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { projectCategories, Project } from "./projectData";

const ProjectCard = ({ project }: { project: Project }) => {
  const statusColor =
    project.status === "Completed"
      ? "text-green-600"
      : project.status === "Ongoing"
      ? "text-orange-500"
      : "text-gray-600";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative isolate h-full flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg supports-[backdrop-filter]:bg-white/60 focus-within:ring-2 focus-within:ring-indigo-300"
    >
      {/* Title: no hover/group-hover color */}
      <h3 className="text-lg font-semibold text-gray-900">
        {project.name}
      </h3>

      {/* Meta row */}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="text-gray-700">PI: {project.pi}</span>
        {project.status ? (
          <span className={`ml-auto font-medium ${statusColor}`}>
            {project.status}
          </span>
        ) : null}
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-gray-700">
        {project.description}
      </p>

      {/* Highlights (first 2) */}
      {project.highlights && project.highlights.length > 0 ? (
        <ul className="mt-3 space-y-1 text-sm text-gray-600">
          {project.highlights.slice(0, 2).map((h, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
};

export default function Page() {
  // mounted state removed because it was unused

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Explore our innovative research projects across various domains
          </h1>
      
        </header>

        {/* Categories */}
        <div className="mt-10 space-y-12">
          {projectCategories.map((category) => (
            <section key={category.title} className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h2>
              </div>

              {/* Responsive container */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 sm:gap-7 md:gap-8 xl:gap-10">
                {category.projects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
