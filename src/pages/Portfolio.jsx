// components/Portfolio.jsx
import React, { useState } from "react";

// Import local images from assets
import sjmedspace from "../assets/medsapce.jpeg";
import smashlive from "../assets/smashline.jpeg";
import ultimfitness from "../assets/ultim.jpeg";

const projects = [
  {
    title: "SJMedSpace Healthcare Platform",
    description:
      "Developed a healthcare platform to streamline patient and doctor interactions with a responsive, secure web app.",
    image: sjmedspace,
  },
  {
    title: "SmashLive Sports Booking App",
    description:
      "Developing an app where users can book sports sessions such as tennis and pickleball.",
    image: smashlive,
  },
  {
    title: "UltimFitness Gym Session Platform",
    description:
      "A unified booking platform for gym sessions, currently under development.",
    image: ultimfitness,
  },
  {
    title: "Tailgate QR System",
    description:
      "QR-based entry and exit system to restrict or grant access automatically.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCceBxEZZSRI_ZlfJhxJHBZTa1HWxUfOYkUq-Qeu3Mrq0zxM1BxX6rgf1VqH-ifWISAlKpRcdqdNWDMrMi8vtaLX851Ff7l9_q-IkXfsobJ_9Fw3vxmqK2fHIyATffgxgzBft_-_N6iWubDd-FVNEEbhcYp_-esso9oGN7c5c1IAiFWCQ-gJ4M16gpdoMFwtdlKgEJX0iCEuTR2ppElRsAWT4ub2f9MLVFYhNVBJ3LN2BDetxbywJyUB1K_AgWCK8y3HI7B2IzyxSk",
  },
];

const Portfolio = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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
