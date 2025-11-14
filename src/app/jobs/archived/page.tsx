// app/jobs/archived-jobs/page.tsx  (App Router)
// or pages/jobs/archived-jobs.tsx  (Pages Router)

"use client";

type ArchivedJob = {
  ref: string;
  vacancy: string;
  project?: string;
  status: "Open" | "Closed";
  lastDate: string;
  document: {
    adv: string;
    apply?: string; // optional
  };
};

const archivedJobs: ArchivedJob[] = [
  {
    ref: "•",
    vacancy: "Application for the post of Senior Web Administrator",
    status: "Closed",
    lastDate: "28 June 2025",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_Senior_Web_Admin.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/RecruitmentSeniorWebAdministratorihub2025/formperma/ZZYhM8u0rHb0vtJk5trShOd1Gxwyh6voinfi6_49LOs",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Business Development Officer",
    status: "Closed",
    lastDate: "28 June 2025",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Business_Develop_Officer.pdf",
      // apply:
      //   "https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/BusinessDevelopmentOfficer2025/formperma/g7_SVC0WoQdLLE96cnQ1J8iES2LI6ELIUuSKn7svEp8",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Chief Executive Officer",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_CEO_New.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Chief Technology Officer",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/adv_CTO.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Executive Assistant (Store and Purchase)",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Executive_Assistant_store_purchase.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Business Development Officer",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Business_DeveOff.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Senior Accounts Officer",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Senior_account_officer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Technical Support Engineer",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_Technical_Support_Engineer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Project Scientist-II",
    project:
      "Non-invasive Diagnosis of Coronary Artery Disease using miRNA and Coronary Imaging",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/project_scientist_2.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Young Professional-I and Field Worker",
    project: "Computer Vision for Plant Phenomics and Smart Agriculture",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/young_proff_1.pdf",
    },
  },
  // {
  //   ref: "•",
  //   vacancy: "Application for the post of Chief Executive Officer",
  //   status: "Closed",
  //   lastDate: "Closed",
  //   document: {
  //     adv: "/pdf/Archived_jobs_advertisement/YP1_and_FW.pdf",
  //   },
  // },
  // {
  //   ref: "•",
  //   vacancy: "Application for the post of Chief Technology Officer",
  //   status: "Closed",
  //   lastDate: "Closed",
  //   document: {
  //     adv: "/pdf/Archived_jobs_advertisement/adv_CTO.pdf",
  //   },
  // },
  {
    ref: "•",
    vacancy: "Application for the post of Network Engineer",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_Network_Engineer.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Advertisement TIH/iHub Drishti/2023-24/Project Recruitment/09",
    project:
      "Human-in-loop Control for Semi-Autonomous system under presence of Sensing and actuation delay",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_3Human in loop Control.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Junior Research Fellow/Project Associate(s)",
    project: "Seeing Through Partial Occlusion",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Ads_JRF_PA.pdf",
    },
  },

  {
    ref: "•",
    vacancy:
      "Application for the post of Junior Research Fellow/Project Associate",
    project: "Visual Intelligence Generation from Wide Area Sensing",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/JRF_VISUAL.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Advertisement TIH/iHub Drishti/2024-25/Project Recruitment/01",
    project:
      "Computer vision based monitoring of fishes in marine cage farming",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/COMPUTERVISION_FISHES.pdf",
      // apply: "http://tinyurl.com/ihubdrishtiProjectrec08",
    },
  },
  // {
  //   ref: "•",
  //   vacancy: "Application for the post of Senior Accounts Officer",
  //   status: "Closed",
  //   lastDate: "Closed",
  //   document: {
  //     adv: "/pdf/Archived_jobs_advertisement/AdSenior_Accounts_Officer_3.pdf",
  //   },
  // },
  {
    ref: "•",
    vacancy: "Application for the post of Research Associate",
    project:
      "AI based risk stratification referral models, using eye images in a public health setting",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Project_Recruitment_AI_Based.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Engineer",
    project:
      "Computer Vision for Plant Phenomics and Smart Agriculture",
    status: "Closed",
    lastDate: "Closed",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Project_Recruitment_Computer_Vision_for_Plant_Phenomics_and_Smart_Agriculture.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Executive Assistant (Legal and Compliances)",
    status: "Closed",
    lastDate: "15th December 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/ExecutiveAssistantLegalCompliances.pdf",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Executive Assistant (Accounts)",
    status: "Closed",
    lastDate: "15th December 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/ExecutiveAssistant_Accounts.pdf",
    },
  },
  // {
  //   ref: "•",
  //   vacancy:
  //     "Advertisement TIH/iHub Drishti/2023-24/Project Recruitment/08",
  //   project:
  //     "Computer Vision for Plant Phenomics and Smart Agriculture",
  //   status: "Closed",
  //   lastDate:
  //     "Applications will be accepted until the position is filled",
  //   document: {
  //     adv: "/pdf/Archived_jobs_advertisement/Adv_2Computer_Vision.pdf",
  //     // apply: "http://tinyurl.com/ihubdrishtiProjectrec08",
  //   },
  // },
  {
    ref: "•",
    vacancy: "Advertisement for Multi Tasking Staff",
    status: "Closed",
    lastDate: "25th February 2024",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_MultiTasking_Staff.pdf",
      // apply: "http://tinyurl.com/42t6uewp",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of UI/UX Designer (AR VR Application)",
    status: "Closed",
    lastDate: "4th January 2024 20th January 2024",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_UIUX.pdf",
      // apply: "https://tinyurl.com/45y9vjsk",
    },
  },
  {
    ref: "•",
    vacancy:
      "Application for the post of Animator and Motion Graphics Artist",
    status: "Closed",
    lastDate: "4th January 2024 20th January 2024",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_AMGA.pdf",
      // apply: "https://tinyurl.com/5n6cfxrv",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Web Administrator",
    status: "Closed",
    lastDate: "4th January 2024 20th January 2024",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_WEB_ADMINISTRATOR.pdf",
     
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Research Associate",
    project:
      "Capturing dynamics of cellular behaviour using bioinspired tunable soft hydrogel: Development of a bio-imaging based machine learning method to decipher cell fate & morphology",
    status: "Closed",
    lastDate: "17 November 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Project_RESEARCH_ASSOCIATE.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Software Developer (AI/ML)",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 31st October 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_SoftwareDeveloper_AI_ML.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Software Developer (Full stack)",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 31st October 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/SoftwareDeveloper_Fullstack.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Integration Engineer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 31st October 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_Integration_Engineer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Executive Assistant - Sales and Marketing",
    status: "Closed",
    lastDate: "16th October 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_Sales.pdf",
    },
  },

  {
    ref: "•",
    vacancy: "Application for the post of 3D Designer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 30th September 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/3D_Designer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Device Development Engineer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/3D_Device_Dev_Engineer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of AR Developer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 30th September 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/AR_Developer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of VR Developer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 30th September 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/VR_Developer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Game Developer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled 30th September 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Game_Developer.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Manager Finance",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Manager_Finance.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Accounts Officer",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_AccountsOfficer.pdf",
    },
  },
  // {
  //   ref: "•",
  //   vacancy: "Application for the post of Senior Accounts Officer",
  //   status: "Closed",
  //   lastDate:
  //     "Applications will be accepted until the position is filled",
  //   document: {
  //     adv: "/pdf/Archived_jobs_advertisement/AdSenior_Accounts_Officer_1.pdf",
  //   },
  // },
  {
    ref: "•",
    vacancy: "Application for the post of Techno Manager",
    status: "Closed",
    lastDate:
      "Applications will be accepted until the position is filled.",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Techno_Manager_advertisement.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Procurement Officer",
    status: "Closed",
    lastDate:
      "August 17th, 2023 Applications will be accepted until the position is filled",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/ProcurementOfficer_ADV.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Optometrist",
    project:
      "AI based risk stratification referral models, using eye images in a public health setting",
    status: "Closed",
    lastDate: "8 September 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Optometrist_ads",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Field Investigator",
    project:
      "AI based risk stratification referral models, using eye images in a public health setting",
    status: "Closed",
    lastDate: "8 September 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Field_Investigator.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Research Associate",
    project:
      "AI based risk stratification referral models, using eye images in a public health setting",
    status: "Closed",
    lastDate: "30-June-2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/RA_Ads.pdf",
    },
  },
  
  {
    ref: "•",
    vacancy: "Application for the post of Young Professional-II",
    project:
      "Computer vision based monitoring of fishes in marine cage farming",
    status: "Closed",
    lastDate: "28-April-2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/JOb_Comp_Vision_based_young2.pdf",
    },
  },

  {
    ref: "•",
    vacancy: "Application for the post of Research Associate",
    project:
      "Non-invasive Diagnosis of Coronary Artery Disease using miRNA and Coronary Imaging",
    status: "Closed",
    lastDate: "March 10th, 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/RA_CoronaryArteryDisease.pdf",
    },
  },

  {
    ref: "•",
    vacancy: "Application for the post of Executive Assistant (Outreach)",
    status: "Closed",
    lastDate: "February 17th, 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/EAOutreach_ADV.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Executive Assistant (Admin)",
    status: "Closed",
    lastDate: "February 17th, 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/EAadmin_ADV.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Junior Research Fellow",
    project:
      "Haptics based Medical Simulator for Abdomen Palpation and Pulse Behavior",
    status: "Closed",
    lastDate: "February 10th, 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/JRF_haptics.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Field Optometrist",
    project:
      "AI based risk stratification referral models, using eye images in a public health setting",
    status: "Closed",
    lastDate: "-",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/RA_using_eye.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Application for the post of Research Associate",
    project:
      "AI based risk stratification referral models, using eye images in a public health setting",
    status: "Closed",
    lastDate: "-",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/RA_using_eye.pdf",
    },
  },
 
  {
    ref: "•",
    vacancy:
      "Application for the post of Research Nurse (Follow up)",
    project:
      "Long term outcome of infants born to COVID-19 positive mothers: A prospective cohort study",
    status: "Closed",
    lastDate: "-",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Research_Nurse _Follow up.pdf",
    }, 
  },

  {
    ref: "•",
    vacancy: "Application for the post of Project Associate",
    project:
      "Generalizing Robot Perception for Indoor and Outdoor Scenarios by Combining Spatial and Semantic Reasoning",
    status: "Closed",
    lastDate: "10 September 2022",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Generalizing Robot Perception.pdf",
    },
  },
 
 
  {
    ref: "•",
    vacancy: "Application for the post of Digital Marketing Officer",
    status: "Closed",
    lastDate: "24th December 2021",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Adv_Digi_Marketing_Officer.pdf",
    },
  },
    {
    ref: "•",
    vacancy: "Openings For Management Interns (Live project)",
    status: "Closed",
    lastDate: "31 July 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/intern_live_mgt.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Openings For Tech Interns",
    status: "Closed",
    lastDate: "20 April 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Tech_Intern_new.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Openings For Management Interns",
    status: "Closed",
    lastDate: "25 January 2023",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/SME_Intern.pdf",
    },
  },
  {
    ref: "•",
    vacancy: "Openings For Tech Interns",
    status: "Closed",
    lastDate: "15 December 2022",
    document: {
      adv: "/pdf/Archived_jobs_advertisement/Tech_Intern.pdf",
    },
  },
];

export default function ArchivedJobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#07165E] mb-8 text-center">
          Archived Jobs
        </h1>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full">
            <thead className="bg-[#07165E]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Ref.
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Name of Vacancy
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Project Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Last Date For Application
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Document
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {archivedJobs.map((job, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 align-top text-center font-bold text-gray-700">
                    {job.ref}
                  </td>
                  <td className="px-6 py-4 align-top text-sm text-gray-800 font-medium">
                    {job.vacancy}
                  </td>
                  <td className="px-6 py-4 align-top text-sm text-gray-800">
                    {job.project ?? "-"}
                  </td>
                  <td className="px-6 py-4 align-top">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        job.status === "Open"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 align-top text-sm text-gray-600">
                    {job.lastDate}
                  </td>
                  <td className="px-6 py-4 align-top text-sm">
                    <div className="flex flex-col items-start">
                      <a
                        href={job.document.adv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        &gt; Advertisement
                      </a>
                      {job.document.apply && (
                        <a
                          href={job.document.apply}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 font-semibold hover:underline hover:text-red-800"
                        >
                          Click here to apply
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {archivedJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-gray-800 font-bold pr-2">{job.vacancy}</p>
                <span
                  className={`flex-shrink-0 mt-1 inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold text-gray-800">Project:</span>{" "}
                {job.project ?? "-"}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                <span className="font-semibold text-gray-800">Last Date:</span>{" "}
                {job.lastDate}
              </p>
              <div className="flex flex-col items-start space-y-2 text-sm">
                <a
                  href={job.document.adv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  &gt; Advertisement
                </a>
                {job.document.apply && (
                  <a
                    href={job.document.apply}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold hover:underline hover:text-red-800"
                  >
                    Click here to apply
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip to match your UI */}
        <div className="mt-10">
          <div className="border-t border-gray-200"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-8 text-center">
              <a
                href="/jobs"
                className="inline-block text-sm font-semibold text-[#07165E] hover:underline"
              >
                Back to Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
