

import Image from "next/image";

export default function ContentCreationARVRPage() {
  return (
    <main className="min-h-screen bg-white text-[#021954] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-4xl px-4 py-5 md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Content Creation Solutions for AR/VR
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Status: Closed • Last date: 25 Nov 2021
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 space-y-6">
        {/* Introduction */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Introduction</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />

            <div className="grid gap-5 md:grid-cols-5 md:gap-6 items-start">
              {/* Text */}
              <div className="md:col-span-3">
                <p className="leading-7 text-gray-800">
                  Virtual reality (VR) has at last become a consumer‑grade technology after being a research novelty for decades. This is primarily due to the easy availability of display hardware from companies like HTC, Oculus and Valve. Another contributing factor has been progress in real‑time visuals using modern GPUs and algorithms from computer graphics, vision, and machine learning. Augmented reality (AR) has benefited similarly from advances in both hardware and algorithms.
                </p>
              </div>
              {/* Image */}
              <div className="md:col-span-2">
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-xs">
                  <Image
                    src="/image/Call_for_proposal/ContentCreationARVR_cfp.png" // replace with your actual image
                    alt="AR/VR illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
               
              </div>
            </div>
          </div>
        </section>

        {/* Target Areas */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Target Areas</h2>
            <hr className="my-4 border-gray-100" />
            <ul className="grid gap-2 sm:grid-cols-2 text-gray-800">
              <li className="rounded-md px-3 py-2 bg-gray-50 shadow-xs">Storytelling and Narrative Design</li>
              <li className="rounded-md px-3 py-2 bg-gray-50 shadow-xs">3D Object Design</li>
              <li className="rounded-md px-3 py-2 bg-gray-50 shadow-xs">3D Animation Design</li>
              <li className="rounded-md px-3 py-2 bg-gray-50 shadow-xs">Engineering Training Simulators</li>
              <li className="rounded-md px-3 py-2 bg-gray-50 shadow-xs">Medical Training Simulators</li>
              <li className="rounded-md px-3 py-2 bg-gray-50 shadow-xs">Procedural Training Simulators</li>
            </ul>
          </div>
        </section>

        {/* Desired Qualities */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Desired Qualities of the Content Creation Solution</h2>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>Layer over open 3D/2D tools and provide functionality beyond existing capabilities; clearly explain how creation is made easier than with current tools.</li>
              <li>Aim to produce complete AR/VR experiences wherever possible, not just standalone models or videos.</li>
            </ul>
          </div>
        </section>

        {/* Abstract Design Concept */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Abstract Design Concept of a Content Creation Solution</h2>
            <hr className="my-4 border-gray-100" />
            <ol className="list-decimal pl-6 space-y-3 text-gray-800 leading-7">
              <li>
                <span className="font-medium">Core Content Creation Layer:</span> Layered over open tools (e.g., Blender, OpenCV, Unity) and VR/AR SDKs (OpenXR, MRTK); manages data, inputs, and final rendering.
              </li>
              <li>
                <span className="font-medium">Content Authoring Interface:</span> Visual authoring with load/save and drag‑drop; may be in‑situ in VR/AR.
              </li>
              <li>
                <span className="font-medium">Asset Management Layer:</span> Naming, retrieval, and sharing across created/imported assets using consistent vocabulary.
              </li>
              <li>
                <span className="font-medium">VR/AR Experience:</span> Deliver at least two complete end‑to‑end experiences with technical details, testing, and usability guarantees.
              </li>
            </ol>
          </div>
        </section>

        {/* Project Call Details */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Project Call Details</h2>
            <hr className="my-4 border-gray-100" />
            <h3 className="font-medium">Who can submit a proposal under the call?</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-800 leading-7">
              <li>Principal investigators and co‑PIs from:</li>
              <li>a. Indian industry (big industry or startups) with AR/VR stack experience</li>
              <li>b. Indian academia with AR/VR R&amp;D experience</li>
              <li>Include PI/Co‑PI details and justify each partner’s role by experience and work.</li>
            </ul>
          </div>
        </section>

        {/* Project specifics and deliverables */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Project specifics and deliverables</h2>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>Work division and final integration plan.</li>
              <li>Full budget for the project duration.</li>
              <li>Preliminary platform design: language, features, hardware/OS, testing, usability.</li>
              <li>Robust implementation of layers plus at least two complete AR/VR experiences.</li>
              <li>Desktop or mobile target.</li>
              <li>Documentation, unit tests, Git versioning.</li>
            </ul>
          </div>
        </section>

        {/* Project Budget and Duration */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Project Budget and Duration</h2>
            <hr className="my-4 border-gray-100" />
            <p className="text-gray-800 leading-7">
              Provide a detailed budget by partner and head. Duration up to two years with regular monitoring.
            </p>
          </div>
        </section>

        {/* Project Monitoring */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <h2 className="text-lg font-semibold">Project Monitoring</h2>
            <hr className="my-4 border-gray-100" />
            <p className="text-gray-800 leading-7">
              Six‑monthly reviews; subsequent budget release depends on achieving milestones. Testing criteria for each layer/component will be notified and must be met.
            </p>
          </div>
        </section>

        {/* Project Submission */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Project Submission</h2>
                <p className="mt-1 text-gray-800 leading-7">
                  Deadline: 25 November 2021
                </p>
              </div>
              <a
                href="/call-for-proposal"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition"
              >
                ← Go Back 
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
