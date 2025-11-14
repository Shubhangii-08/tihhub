import Image from "next/image";

export default function HapticsMedicalSimulatorsPage() {
  return (
    <main className="min-h-screen bg-white text-[#021954] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-4xl px-4 py-5 md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Haptics Based Medical Simulators for Palpation and Tele-diagnosis
          </h1>
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
                <div className="space-y-3 leading-7 text-gray-800">
                  <p>
                    In the recent past, various medical simulators using VR/AR have emerged for training. Many lack sense‑of‑touch feedback and only provide audio/video, limiting realistic hands‑on experience.
                  </p>
                  <p>
                    Adding haptics (force, temperature, vibration, pressure) enables broader healthcare applications. A prime application is teaching and training across nursing, MBBS, MS, MD, DNB, DM, MCh, and other super‑specialty degrees.
                  </p>
                  <p>
                    This call invites teams to build medical simulators enabled with haptics.
                  </p>
                </div>
              </div>

              {/* Optional image */}
              <div className="md:col-span-2">
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-xs">
                  <Image
                    src="/image/Call_for_proposal/Haptics_medical_simulator_crp.webp" // replace with your asset
                    alt="Haptics-enabled simulator concept"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Scope</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="space-y-4 text-gray-800 leading-7">
              <ul className="list-disc list-inside space-y-2">
                <li>Domains: neurological training and orthopaedics inspection, with emphasis on palpation tasks.</li>
                <li>Haptic modalities: pain, temperature, touch, vibration to assist clinician decisions.</li>
                <li>Model modalities from real patient data; expert validation required for realism.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Efficient graphical and haptic rendering for realistic simulators.</li>
                <li>Collaborative builds: whole simulator, a single system, or parts—all must integrate to a common model.</li>
                <li>Common format with ability to scale and co‑register with the platform.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Few suggestive topics */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Few suggestive topics</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="space-y-6 text-gray-800 leading-7">
              <div>
                <h3 className="font-medium">Palpation Simulation</h3>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li>Train palpation to assess size, shape, firmness, and location of abnormalities.</li>
                  <li>Simulate thoracic, abdominal, uterine, breast, and hernia palpations.</li>
                  <li>Leverage haptic devices for realistic training feedback.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Haptics Gloves for Tele‑diagnosis and Palpation</h3>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li>Use gloves/robots to palpate virtual/real patients for training or tele‑diagnostics.</li>
                  <li>Capture tactile, vibration, pain, and temperature for remote specialists in real time.</li>
                  <li>Reduce repeat visits; enable emergency referrals; integrate with AR/VR simulators.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Participation Requirement */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Participation Requirement</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <p className="text-gray-800 leading-7">
              Participation is invited from entities with technical competence in anatomy, image segmentation, modeling, and rendering.
            </p>
            <h3 className="mt-3 font-medium">Who can submit a proposal?</h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>PIs and co‑PIs from Indian industry (big industry/startups), academia, and hospitals.</li>
              <li>Teams may include one, two, or all three categories; ensure full expertise coverage.</li>
              <li>Faculty of academic institutes; scientists from research labs.</li>
              <li>Individual experts via institutions/SIRO‑recognized labs.</li>
              <li>Startups & MSMEs with established credibility; COP may address proven entities.</li>
              <li>Include all PI/Co‑PI details and justify each partner’s role by experience and scope of work.</li>
            </ul>
          </div>
        </section>

        {/* Project specifics and deliverables */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Project specifics and deliverables</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>Detailed work division and plan, including final integration and delivery.</li>
              <li>Six‑monthly detailed budget estimates for the entire project duration.</li>
              <li>Complete coverage of selected simulator components within scope.</li>
              <li>Software must be documented per community standards, unit tested, and versioned with Git.</li>
            </ul>
          </div>
        </section>

        {/* Project Budget and Duration */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Project Budget and Duration</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>Provide a detailed overall budget and division by partner and budget head.</li>
              <li>Project duration: two or three years with regular monitoring.</li>
            </ul>
          </div>
        </section>

        {/* Project Monitoring */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Project Monitoring</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>A project advisory and monitoring sub‑committee from the TIH AR/VR core will review and monitor.</li>
              <li>Six‑monthly reviews; subsequent tranche released only if milestones and deliverables are met.</li>
            </ul>
          </div>
        </section>

        {/* Project Submission */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Project Submission</h2>
                <ul className="list-disc list-inside text-gray-800 leading-7">
                  <li>Deadline of submission of proposal: 15 January 2022.</li>
                </ul>
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
