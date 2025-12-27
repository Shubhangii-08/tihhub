"use client";
import Image from "next/image";

export default function PrayasProgram() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Image Container */}
        <div className="flex-shrink-0 flex justify-center items-start md:w-1/2">
          <Image
            src="/image/prayas.webp" // Update this path to your actual image
            alt="PRAYAS Program"
            width={350}
            height={350}
            className="rounded-lg object-contain"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[#021954] mb-2">PRAYAS</h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            CPS- Promotion and Acceleration Of Young And Aspiring Technology Entrepreneurs (PRAYAS)
          </h2>
          <p className="text-[#021954] mb-4">
            iHub Drishti Foundation, IIT-Jodhpur initiates this program to support the young and aspiring technology entrepreneurs. It will nurture and support innovations and ideas in the fields of Computer Vision, Augmented Reality & Virtual Reality.
          </p>
          <p className="text-[#021954] mb-4">
            The program focuses on the Idea-to-prototyping journey of young startups/innovators. The individuals&apos; innovators or startups in the idea-prototype stage can benefit from this scheme with a maximum grant of up to INR 6 Lakhs and access to the iHub Drishti labs. The duration of the engagement can range from 6-18 months.
          </p>
          <p className="text-[#021954] mb-4">
            The program aims to attract a large number of young innovators and entrepreneurs to come forward to try out their ideas. Eventually, such an approach would bring in many potential ideas into the incubation programs, thereby increasing the flow of quality incubators to the incubator.
          </p>
          <h3 className="text-xl font-semibold text-[#021954] mb-2">Other Support</h3>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>Guidance from successful tech-entrepreneurs on the business concept, strategy, and insight into specific industries or markets from the domain experts.</li>
            <li>Co-working spaces and accommodation (as per the hostel availability) for developing the idea into a marketable product.</li>
            <li>Technical Support from IIT Jodhpur and other partner & premier national & international institute&apos;s faculties.</li>
            <li>Incubation support from TISC (Technology Incubation & Startup Centre, IIT Jodhpur) and other relevant Incubators.</li>
            <li>Guidance & support from various domain experts and industry partners.</li>
            <li>Access to dedicated labs for Augmented Reality & Virtual Reality lab, Vision base Autonomous lab, Data Collection and Annotation Lab, Real-time Computer Vision and Sensing Lab, Trustable Visual Intelligence Lab & Visual Computing Lab at TIH iHub Drishti.</li>
          </ul>
          <h3 className="text-xl font-semibold text-[#021954] mb-2">Who Can Apply</h3>
          <ul className="list-disc list-inside text-[#021954] space-y-1 mb-4">
            <li>The individuals&apos; innovators or startups are in the idea-prototype stage.</li>
            <li>The Individual having innovative ideas and a strong desire to become an entrepreneur.</li>
            <li>Students in full-time programs in educational institutes can apply with a NOC from their institution. The permission should state that:
              <ul className="list-disc ml-6">
                <li>The applicant has been permitted to apply for this program.</li>
                <li>The institution will extend sufficient time to the applicant to work on the project</li>
                <li>The applicant have to follow the TIH iHub Drishti IP Policy.</li>
              </ul>
            </li>
          </ul>
          {/* <h3 className="text-xl font-semibold text-[#021954] mb-2">How to Apply</h3>
          <p className="text-[#021954] mb-4">
            <a href="https://forms.ihub-drishti.ai/ihubdrishtifoundation/form/PRAYAS/formperma/awksVsk6Gz-CN_6Ru3_AK_MMUZf1xma4gFkiYBJTXAI?_gl=1*a4e2r*_ga*MTQ5NjExMzM5Ny4xNzQ4MzM4ODUw*_ga_FBTYDFEWS4*czE3NTAyMzMxMDgkbzM5JGcxJHQxNzUwMjMzMTk5JGo2MCRsMCRoMA.." className="text-blue-700 underline">Click here to apply</a>
          </p>
          <p className="text-[#021954] mb-4">
            The duration will be for 6-18 Months and maximum grant of up to 6 Lakh INR will be given
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