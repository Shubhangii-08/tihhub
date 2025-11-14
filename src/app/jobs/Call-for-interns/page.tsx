"use client";

type Job = {
  ref: string;
  role: string;
  status: "Open" | "Closed";
  lastDate: string;
  document: {
    adv: string;
    apply?: string;
  };
};

const jobs: Job[] = [
  // 1) AR-VR Interns — rolling call (from screenshot/live page)
  {
    ref: "1",
    role: "Rolling Advertisement for AR-VR Interns",
    status: "Open",
    lastDate: "Applications will be accepted throughout the year",
    document: {
      // Replace with your hosted PDF if different
      adv: "/images/pdf/Tech_Intern_new_Rolling.pdf",
      // Replace with your actual application form URL if different
      apply: "https://tinyurl.com/ihubdrishtiinternarvr",
    },
  },


];

export default function CallForInternsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#021954] mb-2 text-center tracking-tight">
            Call for Interns
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Explore current internship opportunities and rolling calls at iHub‑Drishti, IIT Jodhpur.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#021954] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider rounded-tl-2xl">
                    Sr. No.
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                    Last Date For Application
                  </th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider rounded-tr-2xl">
                    Document
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jobs.map((job, idx) => {
                  const statusClasses =
                    job.status === "Open"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-200 text-[#021954] border-gray-300";
                  return (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-gray-50 hover:bg-blue-50 transition"
                          : "bg-white hover:bg-blue-50 transition"
                      }
                    >
                      <td className="px-4 py-4 align-top text-center font-semibold text-[#021954]">
                        {job.ref}
                      </td>
                      <td className="px-4 py-4 align-top text-[#021954] font-medium">
                        {job.role}
                      </td>
                      <td className="px-4 py-4 align-top text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${statusClasses}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 align-top text-center text-[#021954]">
                        {job.lastDate}
                      </td>
                      <td className="px-4 py-4 align-top text-center space-y-2">
                        <a
                          href={job.document.adv}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline font-semibold hover:text-blue-900"
                        >
                          &gt; Advertisement
                        </a>
                        {job.document.apply && (
                          <>
                            <br />
                            <a
                              href={job.document.apply}
                              className="text-red-600 font-semibold underline hover:text-red-700"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click here to apply
                            </a>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-4">
                <div className="text-[#021954] font-bold mb-2">
                  {job.ref}. {job.role}
                </div>
                <p className="text-[#021954] text-sm mb-1">
                  <span className="font-semibold">Status:</span> {job.status}
                </p>
                <p className="text-[#021954] text-sm mb-1">
                  <span className="font-semibold">Last Date:</span> {job.lastDate}
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
                  <a
                    href={job.document.adv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 text-sm underline font-semibold hover:text-blue-900 mb-2 sm:mb-0"
                  >
                    &gt; Advertisement
                  </a>
                  {job.document.apply && (
                    <a
                      href={job.document.apply}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 text-sm font-semibold underline hover:text-red-700"
                    >
                      Click here to apply
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-6">
          <div className="border-t border-gray-200"></div>
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="py-6 text-center">
              <p className="text-[13px] leading-6 text-gray-500">
                * If you wish to be part of our journey, please write to us at{" "}
                <a
                  href="mailto:hr@ihub-drishti.ai"
                  className="text-[#021954] hover:underline underline-offset-4"
                >
                  hr@ihub-drishti.ai
                </a>
              </p>
              <a
                href="/jobs/archived"
                className="mt-2 inline-block text-sm font-semibold text-red-600 tracking-wide hover:underline"
              >
                Archived Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
