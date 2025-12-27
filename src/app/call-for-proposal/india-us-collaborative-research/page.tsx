import Image from "next/image";

export default function USIndiaCollaborationsPage() {
  return (
    <main className="min-h-screen bg-white text-[#021954] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-4xl px-4 py-5 md:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            U.S.–India Bilateral Research Collaborations (NSF × iHub Drishti)
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
              <div className="md:col-span-3">
                <div className="space-y-3 text-gray-800 leading-7">
                  <p>
                    In line with TIH’s vision to be the most coveted technology destination in Computer Vision (CV), Augmented Reality (AR) and Virtual Reality (VR), iHub Drishti intends to pursue cutting‑edge research with the U.S. National Science Foundation’s (NSF) CISE and ENG directorates.
                  </p>
                  {/* <p>
                    Explore the joint opportunity here:{" "}
                    <a
                      className="text-indigo-700 underline"
                      href="https://ihub-drishti.ai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facilitating U.S.-India Bilateral Research Collaborations
                    </a>
                  </p> */}
                </div>
              </div>

              {/* Optional image */}
              <div className="md:col-span-2">
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] shadow-xs">
                  <Image
                    src="/image/Call_for_proposal/call_for_proposal_indiaus.webp" // replace with your asset
                    alt="U.S.–India research collaboration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
             
              </div>
            </div>
          </div>
        </section>

        {/* Opportunity */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Opportunity</h2>
            
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="space-y-3 text-gray-800 leading-7">
              <p>
                NSF (CISE/ENG) plans to support supplemental funding for active U.S. awards to conduct India–U.S. collaborative research in coordination with Indian TIHs. iHub Drishti (IIT Jodhpur) focuses on CV and ARVR across autonomous systems, healthcare, biosphere, document processing, industry 4.0, dependable and real‑time CV, and related areas. India costs are supported by iHub Drishti; U.S. costs are supported by U.S. programs.
              </p>
              <p>
                Active NSF‑funded researchers may request supplements for collaboration with Indian counterparts. Find collaborators and eligible awards via the NSF database:{" "}
                <a className="text-indigo-700 underline" href="https://www.nsf.gov/awardsearch/advancedSearch.jsp" target="_blank" rel="noreferrer">
                  nsf.gov/awardsearch/advancedSearch.jsp
                </a>{" "}
                and search help:{" "}
                <a className="text-indigo-700 underline" href="https://www.nsf.gov/awards/award-search-guide.jsp" target="_blank" rel="noreferrer">
                  nsf.gov/awards/award-search-guide.jsp
                </a>.
              </p>
              <p>
                iHub Drishti notifies the Indian research community of its intention to support funding requests for India–U.S. collaborative research.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Eligibility</h2>
              
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>PIs and co‑PIs from Indian academia.</li>
              <li>All PI/Co‑PI details must be included; justify each partner’s role by experience and proposed work.</li>
              <li>Indian teams can identify U.S. counterparts via TIH postings and the NSF database.</li>
              <li>Funds may support PI/co‑PIs, senior personnel, postdocs, students, and travel for collaboration.</li>
            </ul>
          </div>
        </section>

        {/* How to apply */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">How to apply</h2>
             
            </div>
            <hr className="my-4 border-gray-100" />
            <ul className="list-disc list-inside space-y-2 text-gray-800 leading-7">
              <li>
                Submit proposal via iHub Drishti website:{" "}
                <a className="text-indigo-700 underline" href="https://ihub-drishti.ai/" target="_blank" rel="noreferrer">
                  ihub-drishti.ai
                </a>, aligned with NSF PAPPG scope.
              </li>
              <li>Include NSF award summary: vision, goals, activities, accomplishments; Intellectual Merit and Broader Impacts; relation to proposed work (≈1 page).</li>
              <li>Provide the collaborating project description (same as submitted to U.S. counterpart).</li>
              <li>Detailed work division and plan including final integration and delivery.</li>
              <li>Bio‑sketch of Indian PI/Co‑PIs and U.S. lead (one page each).</li>
              <li>Detailed budget with justifications; division by partner and budget head.</li>
              <li>Project term: one or two years with six‑monthly reviews.</li>
            </ul>
          </div>
        </section>

        {/* When to apply */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">When to apply</h2>
             
            </div>
            <hr className="my-4 border-gray-100" />
            <p className="text-gray-800 leading-7">
              Proposals are accepted on a rolling basis and as per NSF‑defined deadlines.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Intellectual Property</h2>
            
            </div>
            <hr className="my-4 border-gray-100" />
            <p className="text-gray-800 leading-7">
              TIH will follow ANNEX I of the Agreement on Science and Technology Cooperation between the Governments of the United States of America and the Republic of India for intellectual property provisions.
            </p>
          </div>
        </section>

        {/* Back link */}
        <section className="rounded-2xl bg-white shadow-sm">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Navigation</h2>
                <p className="mt-1 text-gray-800 leading-7">Use the link below to return to Calls.</p>
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
