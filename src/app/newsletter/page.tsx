"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Newsletter = {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  pdfUrl: string;
};

const newsletters: Newsletter[] = [
  {
    id: 1,
    title: "Newsletter - June 2022",
    date: "June 2022",
    imageUrl: "/image/Newsletter/newsletter_june2022.png",
    pdfUrl: "/pdf/newsletter/newsletter_june2022.pdf",
  },
  {
    id: 2,
    title: "Newsletter - April 2024",
    date: "April 2024",
    imageUrl: "/image/Newsletter/newsletter_april2024.png",
    pdfUrl: "/pdf/newsletter/newsletter_april2024.pdf",
  },
  {
    id: 3,
    title: "Newsletter - March 2023",
    date: "March 2023",
    imageUrl: "/image/Newsletter/newsletter_march2023.png",
    pdfUrl: "/pdf/newsletter/newsletter_march2023.pdf",
  },
];

function chunkArray<T>(arr: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function NewsletterPage() {
  const rows = chunkArray(newsletters, 2);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDownloadPdf = (pdfUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.replace(/[^a-z0-9]/gi, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewFullImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#021954]">
            Newsletters
          </h1>
          <p className="text-gray-600 mt-2">Explore Our Past Issues</p>
        </div>

        <div className="space-y-10">
          {rows.map((row, rowIdx) => {
            const ref = useRef<HTMLDivElement | null>(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                key={rowIdx}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {row.map((newsletter) => (
                  <div
                    key={newsletter.id}
                    className="bg-white border-2 border-white p-4 rounded-lg shadow-lg overflow-hidden group"
                  >
                    {/* Aspect-ratio box: 635 / 897 with fixed width control */}
                    <div
                      className="relative w-full"
                      style={{
                        // Choose one sizing strategy:
                        // Width-driven card height computed from ratio.
                        // If you want a fixed card width, tweak maxWidth below.
                        maxWidth: 520,
                        margin: "0 auto",
                        aspectRatio: "635 / 897",
                      }}
                    >
                      <Image
                        src={newsletter.imageUrl}
                        alt={newsletter.title}
                        fill
                        priority={false}
                        className="rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                        quality={75}
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#021954]">
                          {newsletter.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {newsletter.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewFullImage(newsletter.imageUrl);
                          }}
                          className="bg-white text-[#021954] px-4 py-2 rounded-md font-semibold border hover:bg-gray-50 transition-colors"
                        >
                          View
                        </button> */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownloadPdf(
                              newsletter.pdfUrl,
                              newsletter.title
                            );
                          }}
                          className="bg-white text-[#021954] px-4 py-2 rounded-md font-semibold border hover:bg-gray-50 transition-colors"
                        >
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          onClick={closeFullImage}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg p-2 max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[90vw] max-h-[80vh]">
              {/* Object-contain to preserve original ratio inside modal */}
              <Image
                src={selectedImage}
                alt="Full newsletter image"
                fill
                className="object-contain"
                sizes="90vw"
                quality={85}
                priority
              />
            </div>

            <button
              onClick={closeFullImage}
              className="absolute -top-3 -right-3 bg-white text-[#021954] rounded-full w-9 h-9 flex items-center justify-center shadow-md border"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
