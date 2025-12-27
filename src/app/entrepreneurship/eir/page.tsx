"use client";
import Image from "next/image";

export default function EIRProgram() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Image Container */}
        <div className="flex-shrink-0 flex justify-center items-start md:w-1/2">
          <Image
            src="/image/eirp.webp" // Update this path to your actual image
            alt="Entrepreneurs in Residence (EIR) Program"
            width={350}
            height={350}
            className="rounded-lg object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[#021954] mb-2">Entrepreneurs in Residence (EIR)</h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Entrepreneurs in Residence (EIR) Program in Cyber-Physical Systems
          </h2>
          <p className="text-[#021954] mb-4">
            iHub Drishti Foundation, IIT-Jodhpur initiates this program to support the entrepreneurs. It will nurture and support innovations and ideas in the fields of Computer Vision, Augmented Reality & Virtual Reality.
          </p>
          <p className="text-[#021954] mb-4">
            The program offers an entrepreneurship fellowship to a budding entrepreneur who has a passion for technology and/or has a promising technology business idea. Further, the EIR program will provide enormous opportunities for young entrepreneurs to expand their networks while working in the innovative environment of IIT Jodhpur and other premier institutes and get critical feedback on their ventures to promote their entrepreneurial aspirations. In this way, iHub&apos;s EIR program considerably minimizes the risk involved in pursuing start-ups and partially setting off the opportunity costs of high-paying jobs.
          </p>
          <p className="text-[#021954] mb-4">
            Grant support of up to INR 30,000 per month for 6-12 months post proper screening and evaluation.
          </p>
          <h3 className="text-xl font-semibold text-[#021954] mb-2">Other Support</h3>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>Guidance from successful tech-entrepreneurs on the business concept, strategy, and insight into specific industries or markets from the domain experts</li>
            <li>Possibility of getting funded (up to 50 lakhs) by iHUB Drishti after the successful completion of the EIR program and subsequent screening and evaluation as per funding norms. Co-working spaces and accommodation (as per the hostel availability) for developing the idea into a marketable product.</li>
            <li>Technical Support from IIT Jodhpur and other partner & premier national & international institute&apos;s faculties.</li>
            <li>Incubation support from TISC (Technology Incubation & Startup Centre, IIT Jodhpur) and other relevant Incubators</li>
            <li>Support in business marketing, commercialization of the product. Support in connecting with government organizations for the data or any other support.</li>
            <li>Support to expand the professional network with potential investors or potential partners</li>
            <li>Guidance & support from various domain experts and industry partners.</li>
            <li>Access to dedicated labs for Augmented Reality & Virtual Reality lab, Vision base Autonomous lab, Data Collection and Annotation Lab, Real-time Computer Vision and Sensing Lab, Trustable Visual Intelligence Lab & Visual Computing Lab at TIH iHub Drishti.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#021954] mb-2">Who Can Apply</h3>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>EIR applicant should be a citizen of India. An Indian citizen is defined as one who owns a government-approved proof of nationality such as a valid passport, voter&apos;s id, Aadhaar card etc.</li>
            <li>Applicant should have completed a minimum of 4 years of formal full-time undergraduate/post-graduate education in sciences or engineering towards one or more degree programs or Completed 3 years degree or diploma program in sciences or engineering along with 2 years of full-time work experience post-degree or diploma.</li>
          </ul>
          {/* <h3 className="text-xl font-semibold text-[#021954] mb-2">How to Apply</h3>
          <p className="text-[#021954] mb-4">
            <a href="https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/LibraryMembershipRegistration/formperma/DYSk4DOoTxB-xPGNuv2JfCO-C14R-sMuIoFm_5jvyMs?_gl=1*560r0y*_ga*MTQ5NjExMzM5Ny4xNzQ4MzM4ODUw*_ga_FBTYDFEWS4*czE3NTAyMzMxMDgkbzM5JGcxJHQxNzUwMjMzODAxJGo2MCRsMCRoMA.." className="text-blue-700 underline">Click here to apply</a>
          </p>
          <p className="text-[#021954] mb-4">
            The duration will be for 6-12 Months and up to 30000 INR will be given per Month
          </p>
          <p className="text-sm text-gray-600 italic mb-2">
            It is a rolling call, the applications shall be evaluated every month. After screening, shortlisted applicants are required to present their ideas to selection committee.
          </p> */}
          <p className="text-[#021954]">
            Please feel free to write to us at <a href="mailto:admin@ihub-drishti.ai" className="underline">admin@ihub-drishti.ai</a> for any further information/clarification.
          </p>
        </div>
      </div>
    </main>
  );
} 