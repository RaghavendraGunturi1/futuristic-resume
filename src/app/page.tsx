"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function FuturisticResume() {
  useEffect(() => {
    document.title = "🚀 Raghavendra Gunturi | Futuristic Resume";
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 relative">

        {/* Floating Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition z-50"
          title="Back to top"
        >
          ↑
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-cyan-400">Raghavendra Gunturi</span>
          </h1>
          <p className="mt-3 text-xl text-gray-300">
            B.Tech CSE Student @ ACE Engineering College, Hyderabad
          </p>
          <p className="mt-2 text-lg text-gray-400 italic max-w-xl mx-auto">
            Dreaming in code. Building for the world. Engineering the future, one bold idea at a time.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500 text-cyan-300"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <Card className="bg-black/30 backdrop-blur-lg border border-cyan-400 shadow-cyan-500/20 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold mb-4 text-cyan-300">About Me</h2>
              <p className="text-gray-200 leading-relaxed">
                I’m a Computer Science student with a futuristic mindset and a drive to turn ideas into systems that matter.
                Whether it's solving real-world problems or learning new technologies, I thrive at the intersection of creativity and logic.
                With every line of code, I aim to build tools that create real impact and inspire innovation.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="bg-black/30 backdrop-blur-lg border border-purple-400 shadow-purple-500/20 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">Experience & Highlights</h2>
              <ul className="list-disc list-inside space-y-4 text-gray-200">
                <li>🧠 Participated in <strong>Tech Trove 2K24</strong> – Coding Contest, Quiz, and Tech Debate at ACE Engineering College.</li>
                <li>🚀 Winner/Participant at <strong>Ideathon 2025</strong> by ACE Venture Labs for pitching a visionary tech solution.</li>
                <li>🛩️ Attended a <strong>Drone Workshop</strong> at ACE Wings of Innovation (FoundersLab) – 2-day intensive program on UAV tech.</li>
                <li>💡 Competed in <strong>Daksha 3.0</strong> National-Level GAC Art Contest held by Anurag University.</li>
                <li>📊 Completed <strong>The Convergence Challenge: AI & Digital Marketing</strong> by SkillTyro + Programming Hub.</li>
                <li>👓 Completed certified course on <strong>AR Glasses</strong> – July 2024.</li>
                <li>🐍 Certified in <strong>Python Programming</strong> – foundational training in problem-solving using Python.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="bg-black/30 backdrop-blur-lg border border-cyan-400 shadow-cyan-500/20 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold mb-6 text-cyan-300">Featured Projects</h2>
              <ul className="space-y-6 text-gray-200">
                <li>
                  <strong>🦴 Dog Adoption Portal</strong><br />
                  A web-based adoption system connecting potential adopters with shelter dogs. Includes search filters, request forms, and admin pet management.<br />
                  <span className="text-sm text-cyan-200">Tech Stack: HTML, CSS, JS, Bootstrap, PHP, MySQL</span>
                </li>
                <li>
                  <strong>🧠 Jarvis - Desktop AI Assistant</strong><br />
                  A Python-based voice-controlled AI assistant capable of executing commands like opening apps, searching the web, reading the news, telling time, and more.<br />
                  <span className="text-sm text-cyan-200">Tech Stack: Python, SpeechRecognition, pyttsx3, webbrowser, datetime</span>
                </li>
                <li>
                  <strong>🌐 Tech-O-Learn EdTech Platform</strong><br />
                  An educational platform for managing courses, users, and assessments. Built to simulate a learning management system for academic institutions.<br />
                  <span className="text-sm text-cyan-200">Tech Stack: HTML, CSS, JS, Firebase</span>
                </li>
                <li>
                  <strong>💡 HTML-CSS Bulb Toggle</strong><br />
                  A basic JavaScript DOM manipulation project that simulates turning a light bulb on/off, demonstrating event handling and visual state changes.<br />
                  <span className="text-sm text-cyan-200">Tech Stack: HTML, CSS, JavaScript</span>
                </li>
                <li>
                  <strong>🧩 CodeLoop Platform</strong><br />
                  A full-stack web application featuring coding assessments, timed challenges, quiz-based questions, user authentication, and admin dashboards.<br />
                  <span className="text-sm text-cyan-200">Tech Stack: Django, Python, HTML, CSS, JS, SQLite</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="bg-black/30 backdrop-blur-lg border border-green-400 shadow-green-500/20 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold mb-6 text-green-300">Technical Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-600 hover:scale-105 transition">
                  <strong className="text-green-200">Languages</strong>
                  <ul className="mt-2 text-gray-200 space-y-1">
                    <li>Python</li><li>C</li><li>HTML, CSS</li><li>JavaScript</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-600 hover:scale-105 transition">
                  <strong className="text-green-200">Frameworks/Tools</strong>
                  <ul className="mt-2 text-gray-200 space-y-1">
                    <li>Django</li><li>Bootstrap</li><li>Firebase</li><li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-600 hover:scale-105 transition">
                  <strong className="text-green-200">Platforms</strong>
                  <ul className="mt-2 text-gray-200 space-y-1">
                    <li>Git & GitHub</li><li>Linux</li><li>VS Code</li><li>Vercel</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-600 hover:scale-105 transition">
                  <strong className="text-green-200">Domains</strong>
                  <ul className="mt-2 text-gray-200 space-y-1">
                    <li>Web Development</li><li>AI Assistants</li><li>Automation</li><li>EdTech & LMS</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <ContactSection />

      </div>
    </AnimatePresence>
  );
}

// ContactSection moved outside FuturisticResume
function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto text-center mb-20"
    >
      <Card className="bg-black/30 backdrop-blur-lg border border-pink-400 shadow-pink-500/20 shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-3xl font-semibold mb-6 text-pink-300">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            I’m always open to collaborating on exciting projects or chatting about futuristic ideas.
            Let’s build something amazing together!
          </p>

          {/* Contact Buttons */}
          <div className="flex justify-center gap-6 mb-6">
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="text-pink-300 hover:text-white transition"
            >
              📧 Email
            </button>

            <a
              href="https://www.linkedin.com/in/raghavendragunturi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-white transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/RaghavendraGunturi1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-white transition"
            >
              🐙 GitHub
            </a>
          </div>

          {/* Email Reveal Card */}
          {showEmail && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 bg-gray-900/70 text-white p-4 rounded-lg border border-pink-500 shadow-lg"
            >
              <p className="text-sm text-gray-300">📮 You can reach me at:</p>
              <p className="font-semibold text-lg text-pink-300">vsrgunturi@gmail.com</p>
            </motion.div>
          )}

          {/* Resume Button */}
          <Button className="bg-pink-600 hover:bg-pink-700 mt-6">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FuturisticResume;