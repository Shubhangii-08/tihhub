import Image from "next/image";

export default function VadnagarGameProjectPage() {
  return (
    <main className="min-h-screen bg-white text-[#021954] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-4xl px-4 py-5 md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Vadnagar Excavation: 2D Platformer Game Proposal
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

            {/* Two-column: text left, image right */}
            <div className="grid gap-5 md:grid-cols-5 md:gap-6 items-start">
              <div className="md:col-span-3">
                <div className="space-y-3 leading-7 text-gray-800">
                  <p>
                    Vadnagar in Mehsana District (Gujarat) lies 12 km north of Visnagar and has been excavated by ASI, Vadodara since 2014, revealing seven cultural periods in 2016–17. Excavations yielded key finds including a seated skeleton (10th century CE+), a square platform with central socket identified as a memorial stupa (5th–7th century CE), an elliptical structure from 1st–2nd century CE later altered, and a well‑finished solid brick platform exposed up to 104 courses at Amba Ghat for an Experiential Museum.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-xs">
                  <Image
                    src="/image/Call_for_proposal/game-development_cfp.webp" // replace with your image
                    alt="Vadnagar excavation site"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Objective & Deliverables */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Objective & Deliverables</h2>
             
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 leading-7 text-gray-800">
              <li>Create a 2D side‑scrolling single‑player platformer set at Vadnagar with 3 game levels.</li>
              <li>Use suitable game technology and best‑practice development techniques.</li>
              <li>All data and excavation knowledge to be provided by iHuB Drishti.</li>
            </ul>
          </div>
        </section>

        {/* Game Design Specifications */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Game Design Specifications</h2>
             
            </div>
            <hr className="my-4 border-gray-100" />

            <div>
              <h3 className="font-medium">Game Engine</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Adopt a production‑ready engine capable of exporting to target platforms; choose complexity suited to team expertise.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Game Mechanics</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Core movement: walking, running, jumping with tight, “crispy” feel.</li>
                <li>Unique rope mechanics tailored to characters to elevate navigation and fun.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Art Design</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Stylized environments inspired by Vadnagar excavation sites.</li>
                <li>Storytelling via text dialogue boxes and/or 2D animations.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Sound Design</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Include background scores, voiceovers, and character dialogues.</li>
                <li>Score influenced by Hindustani classical music with a modern electronic spin.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Story / Plot</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>Exploration and excavation‑themed narrative featuring an archaeologist protagonist.</li>
                <li>Progress via creativity, deduction, and problem‑solving using clues rooted in factual site information.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Level Design</h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-800 leading-7">
                <li>At least three levels; allow variability for different user types.</li>
                <li>Each level presents distinct challenges requiring innovative navigation and mechanics mastery.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proposal Structure */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Proposal Structure</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 leading-7 text-gray-800">
              <li>Proposal must satisfy all requirements defined above.</li>
              <li>Include complete technical and commercial details.</li>
              <li>Development duration: 90 days.</li>
              <li>Team composition: academic researcher/group plus an industry/start‑up partner.</li>
              <li>Developer team retains first right of license to commercialize the developed game assets.</li>
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
                  <li>Deadline for proposal submission: 15 January 2022.</li>
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
