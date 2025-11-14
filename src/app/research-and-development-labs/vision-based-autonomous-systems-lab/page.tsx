"use client";

import { FaRobot, FaPlane, FaWarehouse, FaCar, FaMapMarkedAlt, FaVideo } from 'react-icons/fa';
import { MdScience } from 'react-icons/md';

interface Member {
  name: string;
  role: string;
  image?: string;
}

const TeamMemberCard = ({ member }: { member: Member }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Removed avatar/image block entirely */}
      <h3 className="text-xl font-semibold text-[#021954] mb-2 text-center">{member.name}</h3>
      <p className="text-md text-[#021954] text-center">{member.role}</p>
    </div>
  );
};

export default function VisionBasedAutonomousSystemsLab() {
  const capabilities = [
    { 
      title: "Robot Teleoperation", 
      icon: <FaRobot className="w-8 h-8" />
     
    },
    { 
      title: "Multi-sensor Integration for Autonomy", 
      icon: <MdScience className="w-8 h-8" />
     
    },
    { 
      title: "Autonomy in Drone Flight control", 
      icon: <FaPlane className="w-8 h-8" />
      
    },
    { 
      title: "Autonomous Navigation", 
      icon: <FaCar className="w-8 h-8" />
      
    },
  ];

  const researchAreas = [
    { 
      title: "Warehouse Automation", 
      icon: <FaWarehouse className="w-8 h-8" />
     
    },
    { 
      title: "Tasks Automation for Retail Store routines", 
      icon: <FaRobot className="w-8 h-8" />
      
    },
    { 
      title: "Advanced Driver Assistance Systems", 
      icon: <FaCar className="w-8 h-8" />
      
    },
    { 
      title: "3D reconstruction of Construction site from Swarm of drones", 
      icon: <FaPlane className="w-8 h-8" />
      
    },
    { 
      title: "Surveying and Mapping using AGV and AAV", 
      icon: <FaMapMarkedAlt className="w-8 h-8" />
     
    },
    { 
      title: "Event Driven Change Detection using Aerial Drones for Monitoring", 
      icon: <FaVideo className="w-8 h-8" />
    
    },
  ];

  const teamMembers = [
    { name: "Dr. Ronak Gupta", role: "Scientific Officer" },
    { name: "Sudhir Pratap Yadav", role: "PhD Student, Department of Inter-disciplinary Research in Robotics and Mobility Systems (IDRP), IIT Jodhpur" },
  ];

  const verticalCoordinators = [
    { name: "Prof. Suril Vijaykumar Shah", role: "Professor, Dept. of Mechanical Engg., IIT Jodhpur" },
    { name: "Prof. Riby Abraham Boby", role: "Assistant Professor, Dept. of Mechanical Engg., IIT Jodhpur" },
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#021954] text-center mb-12">Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                  {/* Removed image banner */}
                  <div className="p-6">
                    <div className="text-[#021954] mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-[#021954]">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research Areas Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#021954] text-center mb-12">Focus Areas / Research Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                  {/* Removed image banner */}
                  <div className="p-6">
                    <div className="text-[#021954] mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-[#021954]">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#021954] text-center mb-12">Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </section>

          {/* Vertical Coordinators Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#021954] text-center mb-12">Vertical Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {verticalCoordinators.map((coordinator, index) => (
                <TeamMemberCard key={index} member={coordinator} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}


