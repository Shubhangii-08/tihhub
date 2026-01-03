"use client";

import React from "react";
import Link from "next/link";

type Row = {
  id: number;
  title: string;
  status: "Open" | "Closed";
  date: string;
  applyLink?: string;
  adLink?: string;
};

// Simple error boundary to handle transient chunk issues during dev
class ChunkBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: unknown) {
    console.error("Chunk load/runtime error:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-900">
            A temporary loading issue occurred. Please reload this page.
          </p>
          <button
            className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded"
            onClick={() => location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CallForProposalPage() {
  const rows: Row[] = [
    {
      id: 1,
      title: "India-US Collaborative Research",
      status: "Closed",
      date: "—",
      adLink: "/call-for-proposal/india-us-collaborative-research",
    },
    {
      id: 2,
      title: "Game Development",
      status: "Closed",
      date: "—",
      adLink: "/call-for-proposal/game-development",
    },
    {
      id: 3,
      title: "“India Anatomy Project” umbrella",
      status: "Closed",
      date: "—",
      adLink: "/call-for-proposal/india-anatomy-project",
    },
    {
      id: 4,
      title: "Improving doctor-patient communication using VR",
      status: "Closed",
      date: "—",
      adLink: "/call-for-proposal/doctor-patient-communication-vr",
    },
    {
      id: 5,
      title:
        "Haptics Based Medical Simulators for Palpation and Tele-diagnosis",
      status: "Closed",
      date: "—",
      adLink: "/call-for-proposal/haptics-medical-simulators",
    },
    {
      id: 6,
      title: "Content Creation Solutions for AR/VR",
      status: "Closed", // was Open; now Closed
      date: "—",
      // applyLink removed because Closed
      adLink: "/call-for-proposal/content-creation-ar-vr",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#021954]">
      <div className="mx-auto max-w-6xl p-4 md:p-6 lg:p-8">
        <ChunkBoundary>
          {/* Calls for Proposal Table */}
          <section className="rounded-2xl border border-gray-200 bg-white p-0 shadow-sm overflow-hidden">
            <div className="bg-[#0d1b4c] px-6 py-4 text-sm font-semibold text-white">
              Calls for Proposal
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#0d1b4c] text-white">
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs uppercase tracking-wide w-10"
                    >
                      Ref.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs uppercase tracking-wide"
                    >
                      Name of Vacancy
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs uppercase tracking-wide"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs uppercase tracking-wide"
                    >
                      Last Date for Application
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs uppercase tracking-wide"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 align-top">
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400"
                          aria-hidden="true"
                        />
                      </td>
                      <td className="px-6 py-4 align-top text-gray-900">
                        {row.title}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <span
                          className={
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset " +
                            (row.status === "Open"
                              ? "bg-green-50 text-green-700 ring-green-200"
                              : "bg-gray-100 text-gray-700 ring-gray-200")
                          }
                          aria-label={`Status: ${row.status}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-top text-gray-700">
                        {row.date}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="flex flex-col">
                          <Link
                            href={row.adLink ?? "#"}
                            className="text-indigo-700 hover:text-indigo-900 text-sm"
                            aria-label={`Learn more about ${row.title}`}
                          >
                            &gt; Learn more
                          </Link>

                          {row.status === "Open" && row.applyLink && (
                            <Link
                              href={row.applyLink}
                              className="text-red-600 hover:text-red-700 text-sm"
                              aria-label={`Apply for ${row.title}`}
                            >
                              &gt; Click here to apply
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </ChunkBoundary>

        {/* Contact */}
        <section className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold">Questions?</h3>
          <p className="mt-1 text-gray-700">
            Write to us at{" "}
            <a
              href="mailto:admin@ihub-drishti.ai"
              className="text-[#021954] underline hover:text-[#0a3070]"
            >
              admin@ihub-drishti.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
