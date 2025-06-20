
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-700 px-6 py-3 flex items-center justify-between text-white"
    >
      <a href="#" className="text-cyan-400 font-bold text-lg">Raghavendra</a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={"#" + section.id}
            className="hover:text-cyan-300 transition"
          >
            {section.label}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-cyan-400">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-black/80 px-6 py-4 flex flex-col space-y-4 md:hidden"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={"#" + section.id}
              onClick={() => setOpen(false)}
              className="text-white hover:text-cyan-300"
            >
              {section.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
