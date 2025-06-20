"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";


function FuturisticResume() {
  useEffect(() => {
    document.title = "🚀 Raghavendra Gunturi | Futuristic Resume";
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-24 px-6 relative">
        <Navbar />

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button asChild variant="outline" className="border-cyan-500 text-cyan-300">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </motion.div>

        {/* About */}
        <Section id="about" title="About Me" color="cyan">
          <p className="text-gray-200 mb-4">
            👋 Hi there! I’m Raghavendra, a passionate Computer Science student with a love for technology and innovation.
            I thrive on challenges and enjoy turning complex problems into elegant solutions.
          I’m a Computer Science student with a futuristic mindset and a drive to turn ideas into systems that matter.
          Whether it's solving real-world problems or learning new technologies, I thrive at the intersection of creativity and logic.
          With every line of code, I aim to build tools that create real impact and inspire innovation.
        </p>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience & Highlights" color="cyan">
          <ul className="list-disc list-inside space-y-4 text-gray-200">
            <li>🧠 Participated in <strong>Tech Trove 2K24</strong> – Coding Contest, Quiz, and Tech Debate at ACE Engineering College.</li>
            <li>🚀 Finalist at <strong>Ideathon 2025</strong> by ACE Venture Labs for pitching a visionary tech solution.</li>
            <li>🛩️ Attended <strong>Drone Workshop</strong> at ACE Wings of Innovation – 2-day UAV program.</li>
            <li>💡 Competed in <strong>Daksha 3.0</strong> National-Level GAC Art Contest (Anurag University).</li>
            <li>📊 Completed <strong>The Convergence Challenge</strong> on AI & Digital Marketing by SkillTyro.</li>
            <li>👓 Certified in <strong>AR Glasses (July 2024)</strong>.</li>
            <li>🐍 Certified in <strong>Python Programming</strong>.</li>
          </ul>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects" color="cyan">
          <ul className="space-y-6 text-gray-200">
            <li>
              <strong>🦴 Dog Adoption Portal</strong><br />
              A full-stack system for shelter dog adoptions with filters, forms, and admin panel.<br />
              <span className="text-sm text-cyan-200">HTML, CSS, JS, Bootstrap, PHP, MySQL</span>
            </li>
            <li>
              <strong>🧠 Jarvis - AI Desktop Assistant</strong><br />
              Voice-command Python assistant for opening apps, reading news, browsing, and more.<br />
              <span className="text-sm text-cyan-200">Python, SpeechRecognition, pyttsx3</span>
            </li>
            <li>
              <strong>🌐 Tech-O-Learn EdTech Platform</strong><br />
              Firebase-based LMS simulating a course-user-assessment system.<br />
              <span className="text-sm text-cyan-200">HTML, CSS, JS, Firebase</span>
            </li>
            <li>
              <strong>💡 HTML-CSS Bulb Toggle</strong><br />
              A basic DOM manipulation exercise to toggle bulb states.<br />
              <span className="text-sm text-cyan-200">HTML, CSS, JS</span>
            </li>
            <li>
              <strong>🧩 CodeLoop Platform</strong><br />
              A Django-based coding quiz platform with editor, timer, evaluation, and dashboard.<br />
              <span className="text-sm text-cyan-200">Django, Python, SQLite, JS</span>
            </li>
          </ul>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Technical Skills" color="cyan">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
            {[
              { label: "Languages", items: ["Python", "C", "HTML/CSS", "JavaScript"] },
              { label: "Frameworks/Tools", items: ["Django", "Bootstrap", "Firebase", "Tailwind CSS"] },
              { label: "Platforms", items: ["Git/GitHub", "Linux", "VS Code", "Vercel"] },
              { label: "Domains", items: ["Web Dev", "AI Assistants", "Automation", "EdTech"] },
            ].map((group, idx) => (
              <div key={idx} className="bg-green-900/20 p-3 rounded-lg border border-green-600 hover:scale-105 transition">
                <strong className="text-green-200">{group.label}</strong>
                <ul className="mt-2 text-gray-200 space-y-1">{group.items.map((i, ix) => <li key={ix}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <div id="contact"><ContactSection /></div>
      </div>
    </AnimatePresence>
  );
}

function Section({ id, title, color, children }: any) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`max-w-5xl mx-auto mb-20`}
    >
      <Card className={`bg-black/30 backdrop-blur-lg border border-${color}-400 shadow-${color}-500/20 shadow-xl`}>
        <CardContent className="p-6">
          <h2 className={`text-3xl font-semibold mb-6 text-${color}-300`}>{title}</h2>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <motion.div
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
          <div className="flex justify-center gap-6 mb-6">
            <button onClick={() => setShowEmail(!showEmail)} className="text-pink-300 hover:text-white transition">📧 Email</button>
            <a href="https://www.linkedin.com/in/raghavendragunturi/" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white transition">🔗 LinkedIn</a>
            <a href="https://github.com/RaghavendraGunturi1" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white transition">🐙 GitHub</a>
          </div>
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
          <Button className="bg-pink-600 hover:bg-pink-700 mt-6">
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FuturisticResume;
