import React from 'react';
import NavBar from '@/components/NavBar';
import SideNav from '@/components/SideNav';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jayditya Dhaka",
      role: "Full Stack Developer",
      image: "/api/placeholder/150/150",
      github: "https://github.com/member1",
      linkedin: "https://linkedin.com/in/member1",
      email: "member1@carekonnect.com"
    },
    {
      name: "Harshita Nahata",
      role: "UI/UX Designer",
      image: "/api/placeholder/150/150",
      github: "https://github.com/member2",
      linkedin: "https://linkedin.com/in/member2",
      email: "member2@carekonnect.com"
    },
    {
      name: "Shubham Soni",
      role: "Backend Developer",
      image: "/api/placeholder/150/150",
      github: "https://github.com/member3",
      linkedin: "https://linkedin.com/in/member3",
      email: "member3@carekonnect.com"
    }
  ];

  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-1">
        <NavBar />
        <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Project Overview Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">CareKonnect: Emergency Response System</h1>
              <p className="text-lg text-gray-700 mb-6">
                CareKonnect is an innovative emergency response system designed to bridge the gap between patients 
                and ambulance services. Our platform enables real-time coordination and tracking of emergency medical services,
                ensuring faster response times and better patient outcomes.
              </p>
            </section>

            {/* Team Members Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition-shadow">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <div className="flex space-x-4">
                      <a href={member.github} className="text-gray-600 hover:text-blue-600">
                        <Github size={20} />
                      </a>
                      <a href={member.linkedin} className="text-gray-600 hover:text-blue-600">
                        <Linkedin size={20} />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-blue-600">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gap Analysis Section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Gap Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Current Challenges</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Delayed response times in emergency situations</li>
                    <li>Limited real-time tracking capabilities</li>
                    <li>Poor coordination between stakeholders</li>
                    <li>Inefficient resource allocation</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Solutions</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Real-time GPS tracking and navigation</li>
                    <li>Centralized communication platform</li>
                    <li>Smart resource allocation algorithm</li>
                    <li>Automated dispatch system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Real World Implementation Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Real World Implementation</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Phase 1: Pilot Program</h3>
                  <p className="text-gray-700">
                    Initial deployment in selected urban areas, partnering with local hospitals and ambulance services
                    to test and refine the system.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Phase 2: Scale-Up</h3>
                  <p className="text-gray-700">
                    Expansion to multiple cities, integration with existing emergency response infrastructure,
                    and implementation of feedback-driven improvements.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Phase 3: Full Integration</h3>
                  <p className="text-gray-700">
                    Complete integration with national emergency services, standardization of protocols,
                    and establishment of a nationwide network.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;