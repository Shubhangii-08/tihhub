import Image from "next/image";

export default function DoctorPatientCommunicationVRPage() {
  return (
    <main className="min-h-screen bg-white text-[#021954] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-4xl px-4 py-5 md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Improving doctor–patient communication using VR
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

            {/* Two-column */}
            <div className="grid gap-5 md:grid-cols-5 md:gap-6 items-start">
              <div className="md:col-span-3">
                <p className="leading-7 text-gray-800">
                  Communication and empathy are central to doctor–patient relationships. Lockdowns reduce human contact, challenging empathetic training for MBBS students. VR with responsive, interactive agents enables safe communication practice.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-xs">
                  <Image
                    src="/image/Call_for_proposal/doctor-patient-communication-vr_cfp.webp" // replace as needed
                    alt="Doctor–patient VR simulation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              
              </div>
            </div>
          </div>
        </section>

        {/* Scope of the problem */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Scope of the problem</h2>
             
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>First interaction: doctor requests consent to examine the patient.</li>
              <li>Variety via complaints, personality, and behavior differences.</li>
              <li>Preloaded disease modules aligned with NMC UG curriculum.</li>
              <li>Initial focus on adult simulations across genders.</li>
              <li>Adaptive simulations: respond to speech, facial expressions, interactions.</li>
              <li>Backend agent framework; start with consent scenario as a frontend example.</li>
              <li>Backend extensions: patient memory for repeat visits; child agents.</li>
              <li>Frontend extensions: complex symptoms, diagnosis, conditions, interactions.</li>
            </ul>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6 space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Technical Challenges</h2>
               
              </div>
              <hr className="my-4 border-gray-100" />
              <h3 className="mt-2 font-medium">Medical challenges</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Define patient types with symptoms, physiology, medications, case histories.</li>
                <li>Create checklists for quick evaluation of trainee actions.</li>
                <li>Provide feedback mechanisms from recorded interactions.</li>
                <li>Run tests and gather structured feedback; short-term research projects.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Engineering challenges</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Develop ECAs to simulate diverse patient types.</li>
                <li>Facial and full-body animation for emotion/behavior; localize to Indian settings.</li>
                <li>Parse and respond to doctor speech/actions; add speech synthesis for agents.</li>
                <li>Support communication in local languages.</li>
                <li>Model assets and environments to populate simulations.</li>
                <li>Implement scenarios envisioned by medical teams.</li>
                <li>Visual scripting to author scenarios via parameters.</li>
                <li>Real-time visual performance feedback to trainees.</li>
                <li>Record and archive interactions for offline expert review.</li>
              </ul>
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
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>Competence: anatomy, image segmentation, modeling, rendering.</li>
              <li>Eligible: PIs/co‑PIs from Indian industry, academia, hospitals.</li>
              <li>Teams may mix categories; ensure complete expertise coverage.</li>
              <li>Eligible roles: faculty, research lab scientists, individual experts via institutions/SIRO labs.</li>
              <li>Startups/MSMEs with credibility; COP may address proven entities.</li>
              <li>Include all PI/Co‑PI details; justify each partner’s role by experience and proposed work.</li>
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
              <li>Detailed work division, integration, and delivery plan.</li>
              <li>Six‑monthly budget estimates for the entire duration.</li>
              <li>Framework for doctor‑patient communication; finalize scenarios with medical partners.</li>
              <li>ECA implementation, capabilities, and interaction flow; open‑source backends allowed.</li>
              <li>Separate backend (simulation/interaction) from frontend (scenario knowledge/customization).</li>
              <li>Include scope details; clarify where necessary.</li>
              <li>Documentation, unit tests, and Git versioning.</li>
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
              <li>Provide a detailed overall budget split by partner and head.</li>
              <li>Duration: two or three years with regular monitoring.</li>
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
              <li>TIH AR/VR advisory sub‑committee reviews proposals and monitors awarded projects.</li>
              <li>Six‑monthly reviews; next tranche released only after milestones and deliverables are met.</li>
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
