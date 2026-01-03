import Image from "next/image";

export default function IndiaAnatomyProjectPage() {
  return (
    <main className="min-h-screen bg-white text-[#021954] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-4xl px-4 py-5 md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">“India Anatomy Project” umbrella</h1>
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

            {/* Two-column: text + optional image */}
            <div className="grid gap-5 md:grid-cols-5 md:gap-6 items-start">
              <div className="md:col-span-3">
                <div className="space-y-3 leading-7 text-gray-800">
                  <p>
                    Virtual Reality has matured, and Healthcare applications need accessible, realistic, general, and detailed
                    anatomical models usable for education, simulation, and clinical reference.
                  </p>
                  <p>
                    Models unlock teaching at all levels, field reference for professionals, procedure simulation, physiology
                    demonstrations, pathology modeling, and more. The project targets shape models for teaching, learning, and
                    re‑learning across nursing, MBBS, MS, MD, DNB, DM, MCh, and other super‑specialties.
                  </p>
                 
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-xs">
                  <Image
                    src="/image/Call_for_proposal/India Anatomy Project_cfp.webp" // replace with your asset path
                    alt="Open anatomical models concept"
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
                <li>Gross and detailed macroscopic models with organ shapes for realistic surface visualization.</li>
                <li>Surface color via textures/parameterization; support animation of natural motion (e.g., heart‑beat).</li>
                <li>Enable dissection and radiological scan simulation; include both volume and surface representations.</li>
                <li>Attach extendable annotations: names, dimension ranges, hardness, etc.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Population specialization by age, gender, weight, height, and common variations (shape/size/position).</li>
                <li>Variations from real patient data and statistical models.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Realism prioritized: derive shapes from CT/MR/Angio scans and endoscopic/microscopic imagery.</li>
                <li>Tools for automated/semi‑automated segmentation and model generation are in scope.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Collaborative effort towards a complete anatomy reflective of the Indian population.</li>
                <li>Teams may cover whole anatomy, a single system, or parts; emphasis on Nervous and Cardiovascular systems.</li>
                <li>All parts must integrate into a common model with shared format, scaling, and co‑registration.</li>
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
            <p className="text-gray-800 leading-7">
              Participation is invited from entities with competence in anatomy, image segmentation, modeling, and rendering.
            </p>

            <h3 className="mt-3 font-medium">Who can submit a proposal?</h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>PIs and co‑PIs from Indian industry (big industry/startups), academia, and hospitals.</li>
              <li>Teams may mix categories; ensure expertise across all project components.</li>
              <li>Faculty of academic institutes; scientists from research laboratories.</li>
              <li>Individual experts via institutions/SIRO‑recognized labs.</li>
              <li>Startups & MSMEs with established credibility; COP may address proven entities.</li>
              <li>Include all PI/Co‑PI details and justify partner roles by experience and proposed work.</li>
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
              <li>Six‑monthly detailed budget estimates for the entire duration.</li>
              <li>Complete representation of selected anatomy parts; include tools for automated image‑to‑model processing where relevant.</li>
              <li>Open visualization software demonstrating delivered anatomical detail.</li>
              <li>Present data sources and methodology to generate shape models (devices/subject payments not funded).</li>
              <li>Documented software, unit tests, and Git‑based version control.</li>
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
              <li>Provide a detailed overall budget with division by partner and budget head.</li>
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
              <li>A TIH AR/VR advisory and monitoring sub‑committee will review and monitor the project.</li>
              <li>Six‑monthly reviews; subsequent budget release depends on meeting milestones and deliverables.</li>
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
