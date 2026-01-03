
"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type GalleryItem = {
  imageUrl: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    imageUrl: '/image/gallery/office_group_photo.jpg',
    description: 'Office Group Photo - Team TIH',
  },
  {
    imageUrl: '/image/gallery/US_Workshop.jpg',
    description: 'US Workshop - Knowledge Sharing Session',
  },
  {
    imageUrl: '/image/gallery/Chairman_s Visit 3.jpg',
    description: "Chairman's Visit - Strategic Planning",
  },
  {
    imageUrl: '/image/gallery/Game Jam 2.jpg',
    description: 'Game Jam - Innovation in Gaming',
  },
  {
    imageUrl: '/image/gallery/staff.jpg',
    description: 'Staff Gathering - Team Building',
  },
  {
    imageUrl: '/image/gallery/MSME Event Pics 2.jpg',
    description: 'MSME Event - Supporting Small Businesses',
  },
  {
    imageUrl: '/image/gallery/TIPS 5.0.jpg',
    description: '5th National Workshop on Technology Innovation in Cyber-Physical Systems',
  },
  {
    imageUrl: '/image/gallery/ICPR 2024.webp',
    description: 'ICPR 2024 (International Conference on Pattern Recognition)',
  },
  {
    imageUrl: '/image/gallery/6.jpg',
    description: 'Indra gandhi Museum Visit',
  },
  // {
  //   imageUrl: '/image/gallery/startup_cellverse.webp',
  //   description: 'Coming Soon',
  // },
  {
    imageUrl: '/image/gallery/TIPS 6.0.webp',
    description: 'Technology Innovation in Cyber-Physical Systems (TIPS 6.0)',
  },
  {
    imageUrl: '/image/gallery/welcome Shri Vaibhav Galriya (IAS).webp',
    description: 'welcoming Shri Vaibhav Galriya (IAS)',
  },
  {
    imageUrl: '/image/gallery/cvip.jpg',
    description: ' CVIP (International Conference on Computer Vision and Image Processing) ',
  },
  {
    imageUrl: '/image/gallery/CVIP 4.jpg',
    description: 'CVIP Event - Celebrating Innovation',
  },
  // {
  //   imageUrl: '/image/gallery/1705596232459.jpg',
  //   description: 'Coming Soon',
  // },
  {
    imageUrl: '/image/gallery/Mou Sign.jpg',
    description: 'MoU Signing Ceremony',
  },
  {
    imageUrl: '/image/gallery/STEM 2024.webp',
    description: 'Empowering Young Women in STEM: IIT Jodhpur Welcomes Vigyan Jyoti Scholars',
  },
  {
    imageUrl: '/image/gallery/TIPS4.0.webp',
    description: 'Technology Innovation in Cyber-Physical Systems (TIPS 4.0)',
  },
  {
    imageUrl: '/image/gallery/Indo-Korean 3.webp',
    description: 'Indo-Korean',
  },
  {
    imageUrl: '/image/gallery/pgagatti.webp',
    description: 'Pragatti ',
  },
];

function chunkArray(arr: GalleryItem[], size: number): GalleryItem[][] {
  const result: GalleryItem[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function GalleryPage() {
  const rows = chunkArray(galleryItems, 2);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleViewFullImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeFullImage = () => {
    setSelectedImage(null);
  };

  function GalleryRow({ row, idx }: { row: GalleryItem[]; idx: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        key={idx}
        className="flex flex-col md:flex-row gap-10 justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {row.map((item: GalleryItem, i: number) => (
          <div
            key={i}
            className="
              w-full md:w-[800px]
              aspect-video
              bg-white border-2 border-white p-4 rounded-lg
              shadow-lg flex items-center justify-center
              overflow-hidden group relative cursor-pointer
            "
            onClick={() => handleViewFullImage(item.imageUrl)}
          >
            <Image
              src={item.imageUrl}
              alt={`Gallery Image ${idx * 2 + i + 1}`}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-125"
              loading="lazy"
              quality={75}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold text-center px-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#021954] mb-8 text-center">Gallery</h1>
          <div className="flex flex-col gap-10">
            {rows.map((row, idx) => (
              <GalleryRow key={idx} row={row} idx={idx} />
            ))}
          </div>
        </div>
      </main>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeFullImage}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
              onClick={closeFullImage}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Full Gallery View"
              width={1200}
              height={800}
              className="rounded-lg object-contain"
              style={{ maxWidth: '100%', maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
