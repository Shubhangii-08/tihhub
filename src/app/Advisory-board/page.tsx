"use client";

import Image from 'next/image';

function BoardOfDirectorPage() {
  const governingBodyMembers = [
     {
      id: 1,
      name: "Prof. Avinash Kumar Agarwal",
      title: "Director IIT Jodhpur, Chairman",
      imageUrl: "/image/hub governing body/prof_avi_ag (1).webp",
    },
    {
      id: 2,
      name: "Prof. Richa Singh",
      title: "Deptt. of CS & E, IIT Jodhpur",
      imageUrl: "/image/hub governing body/prof_richa (1).webp",
    },
    {
      id: 4,
      name: "Prof. Kaushal A. Desai",
      title: "Deptt. of ME, IIT Jodhpur",
      imageUrl: "/image/hub governing body/prof_kaushal-_1_.webp",
    },
    {
      id: 5,
      name: "Prof. Anil Tiwari",
      title: "Deptt. of Elect. Engg, IIT Jodhpur",
      imageUrl: "/image/hub governing body/prof_anil (1).webp",
    },
    {
      id: 6,
      name: "Prof. C. V. Jawahar",
      title: "IIIT Hyderabad",
      imageUrl: "/image/hub governing body/prof_cv (1).webp",
    },
    {
      id: 7,
      name: "Prof. Vijay Chandru",
      title: "Strancl-LS, Bangalore",
      imageUrl: "/image/hub governing body/prof_vijay-_1_.webp",
    },
    {
      id: 8,
      name: "Dr. Kaushik Saha",
      title: "SRl, Delhi",
      imageUrl: "/image/hub governing body/dr_kaushik (1).webp",
    },
    {
      id: 9,
      name: "Dr. Manish Gupta",
      title: "Google Research India, Bangalore",
      imageUrl: "/image/hub governing body/dr_manish (1).webp",
    },
    {
      id: 10,
      name: "Dr. Ekta Kapoor",
      title: "Mission Director, NM-ICPS",
      imageUrl: "/image/hub governing body/dr_ekta_k-_1_.webp",
    },
    {
      id: 11,
      name: "Dr. J.B.V. Reddy",
      title: "Scientist F, Director, Technology Mission, Division",
      imageUrl: "/image/hub governing body/jbv_reddy-_1_.webp",
    },
    {
      id: 12,
      name: "Dr. Rahul Yadav",
      title: "Director, IFD, DST",
      imageUrl: "/image/hub governing body/rahul_yadav.webp",
    },
    {
      id: 13,
      name: "Prof. Gaurav Bhatnagar",
      title: "Project Director, iHub Drishti Foundation",
      imageUrl: "/image/team/gaurav.webp",
    },
  ];

  const advisoryBoardData = [
    {
      id: 1,
      name: "Prof. Avinash Kumar Agarwal",
      title: "Director IIT Jodhpur, Chairperson",
      imageUrl: "/image/advisoryBoard/prof_avi_ag (1).webp",
    },
    {
      id: 2,
      name: "Prof. Surajit Ghosh",
      title: "Professor, Department of Bioscience & Bioengineering, IIT Jodhpur",
      imageUrl: "/image/advisoryBoard/prof_surajit (2).webp",
    },
    {
      id: 3,
      name: "Prof. Gaurav Bhatnagar",
      title: "Professor, Department of Mathematics, Indian Institute of Technology Jodhpur",
      imageUrl: "/image/advisoryBoard/gaurav_b (2) (1).jpg",
    },
    {
      id: 4,
      name: "Prof. Samanwita Pal",
      title: "Professor, Department of Chemistry, Indian Institute of Technology Jodhpur",
      imageUrl: "/image/advisoryBoard/samanwita.webp",
    },
    {
      id: 5,
      name: "Mr. Ashoke Guha",
      title: "ex CFO (MLCP JV), Delhi International Airport P. Ltd - GMR Group",
      imageUrl: "/image/advisoryBoard/ashoke_guha.webp",
    }
  ];

  return (
    <>
      <main className="pt-16 min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
        <div className="max-w-7xl mx-auto">
          {/* Hub Governing Body Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#021954] mb-4">Hub Governing Body</h1>
            <p className="text-xl text-[#021954]">
              Meet the members of our Hub Governing Body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {governingBodyMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border-2 border-white p-8 rounded-lg shadow-lg text-center min-h-80 transform transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="mx-auto mb-8 w-36 h-36 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center ring-4 ring-[#021954]/20">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={144}
                    height={144}
                    objectFit="cover"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#021954] mb-1">{member.name}</h2>
                <p className="text-[#021954]">{member.title}</p>
              </div>
            ))}
          </div>

          {/* Advisory Board Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#021954] mb-4">Board Of Directors</h1>
         
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryBoardData.map((member) => (
              <div
                key={member.id}
                className="bg-white border-2 border-white p-8 rounded-lg shadow-lg text-center min-h-80 transform transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="mx-auto mb-8 w-36 h-36 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center ring-4 ring-[#021954]/20">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={144}
                    height={144}
                    objectFit="cover"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#021954] mb-1">{member.name}</h2>
                <p className="text-[#021954]">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default BoardOfDirectorPage; 