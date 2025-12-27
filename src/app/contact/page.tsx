"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#021954] mb-4">Contact Us</h1>
          <div className="mx-auto w-24 h-1 bg-[#021954] rounded-full mb-6" />
          <p className="text-2xl text-[#021954] max-w-2xl mx-auto">
            Get in touch with us for any inquiries or support.
          </p>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-row items-center justify-between w-full max-w-4xl mx-auto">
            <div className="flex flex-col flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#021954] mb-2">
                Mail us at
              </h2>

              <div className="flex items-center mb-4">
                <span className="bg-[#021954]/10 rounded-full p-2 mr-3">
                  <FaEnvelope className="text-[#021954] text-2xl" />
                </span>
                <a
                  href="mailto:admin@ihub-drishti.ai"
                  className="text-xl font-semibold text-[#021954] hover:underline truncate"
                >
                  admin@ihub-drishti.ai
                </a>
              </div>

              <h3 className="text-lg font-semibold text-[#021954] mb-2">
                You can also contact us here:
              </h3>

              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="bg-[#021954]/10 rounded-full p-2">
                    <FaLinkedin className="text-[#021954] text-2xl" />
                  </span>
                  <a
                    href="https://www.linkedin.com/company/ihub-drishti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#021954] hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Contacts Table */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#021954] mb-6 text-center">
              Key Contacts
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#021954] text-white">
                    <th className="px-6 py-3 text-left rounded-tl-xl">S No</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left rounded-tr-xl">Phone</th>
                  </tr>
                </thead>

                <tbody className="text-[#021954]">
                  {[
                    ["01", "Project Director", "0291 280 2241"],
                    ["02", "CEO", "0291 280 2242"],
                    ["03", "Admin", "0291 280 2244"],
                    ["04", "Store and Purchase", "0291 280 1760"],
                    ["05", "Accounts", "0291 280 2243"],
                    ["09", "HR And Legal", "0291 280 2244"],
                    [
                      "06",
                      "Scientific Officer - Vision based Autonomous Systems",
                      "0291 280 2245",
                    ],
                    [
                      "07",
                      "Web Admin and Business Development Executive",
                      "0291 280 2246",
                    ],
                    ["08", "Research Engineer", "0291 280 2247"],
                    [
                      "09",
                      "Scientific Officer - Mixed Reality",
                      "0291 280 2248",
                    ],
                  ].map(([no, name, phone], index) => (
                    <tr
                      key={index}
                      className="border-b last:border-b-0 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-3">{no}</td>
                      <td className="px-6 py-3">{name}</td>
                      <td className="px-6 py-3">
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="text-[#021954] hover:underline font-medium"
                        >
                          {phone}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#021954] mb-6 text-center">
              Our Location
            </h2>

            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5115957556122!2d73.11136597637193!3d26.47146787691293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941ebd0b5e0ebc1%3A0x1247fe2e4f7f387b!2sTIH%2C%20iHub%20Drishti%20Foundation%2C%20IIT%20Jodhpur!5e0!3m2!1sen!2sin!4v1751874661806!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TIH, iHub Drishti Foundation, IIT Jodhpur"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
