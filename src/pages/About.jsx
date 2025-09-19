import React from "react";
import { motion } from "framer-motion";
import Sai from "../assets/Sai_Nath.png";
import Charan from "../assets/Charan.jpeg";
import Vishnu from "../assets/Vishnu.jpeg";
import Vamshi from "../assets/Vamshi.jpeg";
const teamMembers = [
  {
    name: "Sai Vishnu Alabaka",
    role: "CEO",
    img: Vishnu,
  },
  {
    name: "Charan Vadla",
    role: "CTO",
    img: Charan,
  },
  {
    name: "Vamshi Alabaka",
    role: "COO",
    img: Vamshi,
  },
  {
    name: "Sainath Kancharakuntla",
    role: "Project Manager",
    img: Sai,
  },
];

export default function About({ id }) {
  return (
    <div
      id={id}
      className="relative min-h-screen w-full bg-background-dark text-white px-6 py-16 container mx-auto"
    >
      {/* Hero Section */}
      <motion.section
        className="grid items-center gap-12 lg:grid-cols-2 mb-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8YfLs3fIxnMLLv_nGRNjjfBQ10QmKdNNHqtu6uCK7F5tpTaYiAlf5tG-fvsGN7uhb5eZK39AyIWmqfy6TOgvtLSQJ8DBk2LYSdvsimojoz5gQYO42R7rp2ctNJ2F_J2mLPaXOFiLTEFBnqFJsFUaIskEKHobxyEFQVJPRe0nEQegCFfsByHtieEzGx95h8wnLIiP-XbbgyPExDARQqwbhyIBCyrnEtey8MKsQO1kQikOPgpnlU43VzPFk4QvWUq92zaLIPAVSrBE"
          alt="Go Next Technology Team"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl shadow-primary/20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl inline-block rounded-lg bg-primary/10 px-3 py-1 font-medium text-primary">
            About Us
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Innovating for Tomorrow
          </h2>
          <p className="max-w-2xl text-gray-400 md:text-lg">
            We are a leading technology company specializing in Mobile App
            Development, Web Development, and AI/ML services for startups and
            enterprises. Our mission is to empower businesses with innovative
            solutions that drive growth and success.
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold btn-primary cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Our Team
        </div>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Meet Our Experts
        </h2>
        <p className="mt-4 max-w-2xl text-gray-400 md:text-lg">
          A dedicated team of passionate professionals committed to excellence.
        </p>
      </motion.section>

      {/* Team Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center text-center max-w-6xl">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-bold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
