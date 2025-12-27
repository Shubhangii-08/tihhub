"use client";

// removed unused useState import
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

const teamData: TeamMember[] = [
  {
    name: "Prof. Gaurav Bhatnagar",
    role: "Project Director",
    image: "/image/team/gaurav_b (2) (1).jpg",
    linkedin: "#",
  },
  {
    name: "Dr. Vishakha Pareek",
    role: "Scientific Officer",
    image: "/image/team/Drvishakha.webp",
    linkedin: "#",
  },
  {
    name: "Dr. Ronak Gupta",
    role: "Scientific Officer",
    image: "/image/team/dr_ronak_g.webp",
    linkedin: "#",
  },
  {
    name: "Vandan Kothari",
    role: "Accounts Officer",
    image: "/image/team/vandan.webp",
    linkedin: "#",
  },
  {
    name: "Akshay Roop Rai",
    role: "Executive Assistant - Procurement & Commercialization",
    image: "/image/team/akshay_r_p.webp",
    linkedin: "#",
  },
  {
    name: "Mukesh Kumar Bagari",
    role: "Network Engineer",
    image: "/image/team/mukesh.webp",
    linkedin: "#",
  },
  {
    name: "Ritu Jaju",
    role: "Executive Assistant (Accounts)",
    image: "/image/team/ritu.webp",
    linkedin: "#",
  },
  {
    name: "Aditi Loonker",
    role: "Executive Assistant (Legal)",
    image: "/image/team/aditi.webp",
    linkedin: "#",
  },
  {
    name: "Kalpesh Sompura",
    role: "3D Designer",
    image: "/image/team/kalpesh.webp",
    linkedin: "#",
  },
  {
    name: "Ajay Parakh",
    role: "Device Development Engineer",
    image: "/image/team/Ajay.webp",
    linkedin: "#",
  },
  {
    name: "Aasurjya Bikash Handique",
    role: "Research Associate",
    image: "/image/team/Aasurjya.webp",
    linkedin: "#",
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-gray-100 overflow-hidden ring-4 ring-[#021954]/20 relative flex items-center justify-center group">
          {member.image ? (
            <>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {/* LinkedIn SVG */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className="text-white">
                    <rect width="40" height="40" rx="8" fill="#0A66C2"/>
                    <path d="M12.5 16.667h3.333v10H12.5v-10zm1.667-1.667c-1.104 0-2-.896-2-2s.896-2 2-2c1.104 0 2 .896 2 2s-.896 2-2 2zm4.166 1.667h3.2v1.367h.046c.445-.84 1.534-1.725 3.158-1.725 3.378 0 4.004 2.225 4.004 5.12v5.238h-3.333v-4.646c0-1.108-.02-2.535-1.545-2.535-1.547 0-1.783 1.21-1.783 2.457v4.724h-3.333v-10z" fill="white"/>
                  </svg>
                </a>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-[#021954]">
              {member.name.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="text-3xl font-semibold text-[#021954] mb-4 text-center">{member.name}</h3>
        <p className="text-xl text-[#021954] text-center">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default function Teams() {
  return (
    <main className="bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#021954]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#021954] mb-6">Our Team</h1>
          <p className="text-2xl text-[#021954] max-w-3xl mx-auto">
            Meet the dedicated individuals driving our mission forward
          </p>
        </div>

        <div className="space-y-16">
          {/* First Row - Single Card */}
          <div className="flex justify-center">
            <TeamMemberCard member={teamData[0]} />
          </div>

          {/* Next Rows - Adjust spacing */}
          <div className="flex flex-wrap justify-center gap-12">
            {teamData.slice(1).map((member, index) => (
              <TeamMemberCard key={index + 1} member={member} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
