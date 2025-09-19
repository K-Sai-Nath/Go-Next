// components/Portfolio.jsx
import React, { useState, useEffect } from "react";

// Import local images from assets
import sjmedspace from "../assets/medsapce.jpeg";
import smashlive from "../assets/smashline.jpeg";
import ultimfitness from "../assets/ultim.jpeg";
import QR_Image from "../assets/QR_Project.jpg";
const projects = [
  {
    title: "SJMedSpace EdTech Platform",
    description:
      "Designed and developed an EdTech platform tailored for medical aspirants, providing easy access to a wide range of research publications, journals, and study materials. The platform helps students stay updated with the latest medical knowledge, streamlines content discovery through categorized resources, and offers a responsive, secure interface to ensure accessibility across devices.",
    image: sjmedspace,
  },

  {
    title: "SmashLive Sports Booking App",
    description:
      "A mobile-first application that allows users to seamlessly book and manage sports sessions such as tennis, pickleball, and badminton. The app features real-time court availability, secure online payments, session reminders, and a smooth user experience designed for both players and venue owners. Built with a focus on scalability and performance, SmashLive enhances sports engagement by simplifying the booking process and promoting active lifestyles.",
    image: smashlive,
  },
  {
    title: "UltimFitness Gym Session Platform",
    description:
      "A comprehensive gym session booking platform designed to simplify fitness scheduling. Users can browse available workout sessions, reserve spots in advance, and manage their bookings seamlessly. The platform aims to provide an intuitive experience for both gym-goers and administrators, enabling streamlined session management, attendance tracking, and future integration with payment and membership systems. Currently under active development.",
    image: ultimfitness,
  },
  {
    title: "Tailgate QR System",
    description:
      "Implemented a QR-based entry & exit system (“Tailgate QR System”) that automatically grants or denies access by validating unique QR codes. Features include time-limited access rights, user role-based permissions, audit logging of entry/exit events, and a responsive front-end for both mobile and desktop. Built with secure back-end authentication, real-time scanning, and alerting for unauthorized access.",
    image: QR_Image,
  },
];

const Portfolio = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedProject]);
  return (
    <main
      id={id}
      className="px-10 md:px-20 lg:px-40 flex flex-col justify-center py-16"
    >
      {/* Centered Heading */}
      <div className="flex flex-col gap-6 mb-12 text-center">
        <h1 className="text-white text-5xl font-bold tracking-tighter leading-tight">
          Our Portfolio
        </h1>
        <p className="text-[#9da6b9] text-lg font-normal leading-normal">
          Explore our innovative projects and see how we've helped businesses
          grow with cutting-edge technology.
        </p>
      </div>

      {/* If a project is selected, show details */}
      {selectedProject ? (
        <div className="bg-[#1e293b] rounded-xl p-6 md:p-8 text-white relative flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>

          {/* Image side */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              {selectedProject.description}
            </p>
          </div>
        </div>
      ) : (
        /* Grid of Projects */
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h3 className="text-white text-2xl font-bold leading-tight line-clamp-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold text-sm group">
                  View Project
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Portfolio;
