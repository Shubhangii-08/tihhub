"use client";
import Image from "next/image";

export default function SeedSupportProgram() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Image Container */}
        <div className="flex-shrink-0 flex justify-center items-start md:w-1/2">
          <Image
            src="/image/seed.webp" // Update this path to your actual image
            alt="Startup Seed Support Program"
            width={350}
            height={350}
            className="rounded-lg object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[#021954] mb-2">Startup Seed Support Program</h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Program Details & Features
          </h2>
          <p className="text-[#021954] mb-4">
            iHub Drishti Foundation, IIT-Jodhpur initiates this program to support the startups for seed support. It will nurture and supports technology based new startups in the fields of Computer Vision, Augmented Reality & Virtual Reality.
          </p>
          <p className="text-[#021954] mb-4">
            It is a equity based funding support program.
          </p>
          <p className="text-[#021954] mb-4">
            The aim of this program is providing financial assistance to potential startups with great ideas, innovations and technologies, which are at initial stages. The seed grant will help them to grow.
          </p>
          <p className="text-[#021954] mb-4">
            This provides seed funding of up to 50 Lakhs post proper screening and evaluation.
          </p>
          <p className="text-[#021954] mb-4">
            The seed support will help the selected startups to reach a position where they will be able to raise funds from angel funding schemes, apply for loans from banks and seek funding from big industrialists. Under this program, TIH-iHub Drishti foundation will also help the startups to connect with these investors at later stage.
          </p>
          <h3 className="text-xl font-semibold text-[#021954] mb-2">Other Support</h3>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>iHub Drishti also has other various programs for startups and other ventures with great ideas, innovations, and technologies to enable them to survive and grow in the current market.</li>
            <li>Technical Support from IIT Jodhpur and other partner & premier national & international institute&apos;s faculties.</li>
            <li>Incubation support from TISC (Technology Incubation & Startup Centre, IIT Jodhpur) and other relevant Incubators.</li>
            <li>Support in business marketing, commercialization of the product. Support in connecting with government organizations for the data or any other support.</li>
            <li>Support to expand the professional network with potential investors or potential partners.</li>
            <li>Guidance & support from various domain experts and industry partners.</li>
            <li>Access to dedicated labs for Augmented Reality & Virtual Reality lab, Vision base Autonomous lab, Data Collection and Annotation Lab, Real-time Computer Vision and Sensing Lab, Trustable Visual Intelligence Lab & Visual Computing Lab at TIH iHub Drishti.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#021954] mb-2">Who Can Apply</h3>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>The company should be incorporated under the Ministry of Corporate Affairs as private limited company</li>
            <li>The company should be recognized by Startup India as &quot;Startup&quot;. If not, then it should meet the eligibility criteria for being recognized as Startup.</li>
            <li>Preference shall be given for: Technology business products, Technology business products with considerable potential for the social impact, Startups having any paid customers at present, Startups having any other angel investors onboard till date.</li>
          </ul>
          {/* <h3 className="text-xl font-semibold text-[#021954] mb-2">How to Apply</h3>
          <p className="text-[#021954] mb-4">
            <a href="https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/SeedSupportGrantForm/formperma/kvlHpkaQkmUTz7-XGJICtI_kt4qXdn48IvmLTInxVng?_gl=1*1hy80wx*_ga*MTQ5NjExMzM5Ny4xNzQ4MzM4ODUw*_ga_FBTYDFEWS4*czE3NTAyMzMxMDgkbzM5JGcxJHQxNzUwMjMzOTUxJGo1OSRsMCRoMA.." className="text-blue-700 underline">Click here to apply</a>
          </p>
          <p className="text-[#021954] mb-4">
            Upto 50 Lakhs seed support fund can be granted on equity basis
          </p>
          <p className="text-sm text-gray-600 italic mb-2">
            It is a rolling call, the applications shall be evaluated every month. After screening, shortlisted applicants are required to submit the detailed documents for proposal, business model and investment plan for presentation to selection committee.
          </p> */}
          <p className="text-[#021954]">
            Please feel free to write to us at <a href="mailto:admin@ihub-drishti.ai" className="underline">admin@ihub-drishti.ai</a> for any further information/clarification.
          </p>
        </div>
      </div>
    </main>
  );
} 