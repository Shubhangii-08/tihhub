"use client";

import Link from "next/link";

type Job = {
  ref: string;
  vacancy: string;
  project: string;
  status: "Open" | "Closed";
  lastDate: string;
  document: {
    adv: string;
    apply?: string;
  };
};

const jobs: Job[] = [
  {
    ref: "•",
    vacancy: "Application for the post of Principal Project Associate",
    project: "Computer Vision for Plant Phenomics and Smart Agriculture",
    status: "Closed",
    lastDate: "21 February 2025",
    document: {
      adv: "/pdf/jobs_advertisement/Principal_Project_Associate.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/ProjectRecruitmentProjectScientistD/formperma/DVtNMxQLQ41AUlBVwLZ_oaG3LvRNw_r-PhsqXLU93-0",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Project Associate",
    project:
      "Haptics based Medical Simulator for Abdomen Palpation and Pulse Behavior",
    status: "Closed",
    lastDate: "25 February 2025",
    document: {
      adv: "/pdf/jobs_advertisement/Haptics_Project.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/ProjectRecruitmentProjectAssociateIhapticsBased/formperma/iO60GiL6Z0tZQmpWReJ8ZnOw573dp_RU9aW4GnqMyuY",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Project Associate",
    project:
      "Non-invasive Diagnosis of Coronary Artery Disease using miRNA and Coronary Imaging",
    status: "Closed",
    lastDate: "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/jobs_advertisement/Non_Invasive.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/ProjectRecruitmentProjectAssociate1/formperma/F9c3v7K7qIz5tSqK-f5WLWC9yw8TqgKiKgKpyWuBYlY",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Project Scientist I/II/III",
    project: "HuB for Radiogenomics Research and Service",
    status: "Closed",
    lastDate: "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/jobs_advertisement/Radiogenomics_Research.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/ProjectRecruitmentProjectScientistIIIIII/formperma/lTRKKBoYPAtxgAu6qPKrkUo_1c_V9ZfT2bhpa_mAdUM",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Project Engineer (Software Developer) / Project Associate",
    project: "HuB for Radiogenomics Research and Service",
    status: "Closed",
    lastDate: "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/jobs_advertisement/HUB_ProjectEngineer.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/ProjectRecruitmentProjectEngineerSoftwareDeveloper/formperma/iZk1i6U5Seb9O4hxFCsxyMihZEoKYOyYeTlKmYnSUdc",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Junior Research Fellow",
    project:
      "Real-Time 3D Scene Reconstruction and Localization of Autonomous Ground Vehicles in Unknown Environment",
    status: "Closed",
    lastDate: "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/jobs_advertisement/JRF_3d_scene_reconstruction.pdf",
      // apply:
      //   "https://tinyurl.com/ihubdrishtiProjectrec6",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Research Associate",
    project:
      "Non-invasive Diagnosis of Coronary Artery Disease using miRNA and Coronary Imaging",
    status: "Closed",
    lastDate: "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/jobs_advertisement/Research_Associate_non_invasive.pdf",
    //   apply:
    //     "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/ProjectRecruitmentResearchAssociate/formperma/GThuj5IwqJ7BrUq7sVwQMMGlAEjNeDUmsSkskphCcrg",
    },
  },
];

export default function ProjectJobs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#07165E] mb-2 text-center tracking-tight">
            Project Jobs
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Opportunities on sponsored projects at iHub‑Drishti. Apply using the links in the Document column.
          </p>

          {/* Desktop table matching Call for Interns page */}
          <div className="hidden md:block overflow-x-auto rounded-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#07165E] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider rounded-tl-2xl">
                    Ref.
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Name of Vacancy
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Project Name
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Last Date
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider rounded-tr-2xl">
                    Document
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jobs.map((job, idx) => {
                  const statusClasses =
                    job.status === "Open"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-200 text-[#07165E] border-gray-300";
                  return (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-gray-50 hover:bg-blue-50 transition"
                          : "bg-white hover:bg-blue-50 transition"
                      }
                    >
                      <td className="px-4 py-4 align-top text-center font-semibold text-[#07165E]">
                        {job.ref}
                      </td>
                      <td className="px-4 py-4 align-top text-[#07165E] font-medium">
                        {job.vacancy}
                      </td>
                      <td className="px-4 py-4 align-top text-[#07165E]">
                        {job.project}
                      </td>
                      <td className="px-4 py-4 align-top text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${statusClasses}`}>
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 align-top text-center text-[#07165E]">
                        {job.lastDate}
                      </td>
                      <td className="px-4 py-4 align-top text-center space-y-2">
                        <a
                          href={job.document.adv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline font-semibold hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                        >
                          &gt; Advertisement
                        </a>
                        {job.document.apply && (
                          <>
                            <br />
                            <a
                              href={job.document.apply}
                              className="text-red-600 font-semibold underline hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click here to apply
                            </a>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards identical in style to interns page */}
          <div className="md:hidden space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-4">
                <div className="text-[#07165E] font-bold mb-2">{job.vacancy}</div>
                <p className="text-[#07165E] text-sm mb-1">
                  <span className="font-semibold">Project:</span> {job.project}
                </p>
                <p className="text-[#07165E] text-sm mb-1">
                  <span className="font-semibold">Status:</span> {job.status}
                </p>
                <p className="text-[#07165E] text-sm mb-1">
                  <span className="font-semibold">Last Date:</span> {job.lastDate}
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
                  <a
                    href={job.document.adv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 text-sm underline font-semibold hover:text-blue-900 mb-2 sm:mb-0"
                  >
                    &gt; Advertisement
                  </a>
                  {job.document.apply && (
                    <a
                      href={job.document.apply}
                      className="text-red-600 text-sm font-semibold underline hover:text-red-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to apply
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip matching interns page */}
        <div className="mt-6">
          <div className="border-t border-gray-200"></div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="py-6 text-center">
              <p className="text-[13px] leading-6 text-gray-500">
                * If you wish to be part of our journey, please write to us at{" "}
                <a
                  href="mailto:hr@ihub-drishti.ai"
                  className="text-[#07165E] hover:underline underline-offset-4"
                >
                  hr@ihub-drishti.ai
                </a>
              </p>
              <Link
                href="/jobs/archived"
                className="mt-2 inline-block text-sm font-semibold text-red-600 tracking-wide hover:underline"
              >
                Archived Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
