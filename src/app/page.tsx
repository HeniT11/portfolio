"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <button
              className="md:hidden text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  John Doe
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8">
                Full-Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                I create beautiful, functional, and user-centered digital
                experiences. Passionate about clean code, innovative design, and
                solving complex problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications. I specialize in React,
                Node.js, and modern web technologies, creating scalable and
                maintainable solutions.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    50+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  B.S. Computer Science, University of Technology
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Location
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  San Francisco, CA (Open to Remote)
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Interests
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Open Source, AI/ML, Web3, Travel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiReact className="text-4xl mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                React
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiNextdotjs className="text-4xl mx-auto mb-4 text-slate-900 dark:text-white" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Next.js
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiTypescript className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                TypeScript
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiTailwindcss className="text-4xl mx-auto mb-4 text-cyan-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Tailwind CSS
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiNodedotjs className="text-4xl mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Node.js
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiMongodb className="text-4xl mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                MongoDB
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiPostgresql className="text-4xl mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                PostgreSQL
              </h3>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <SiDocker className="text-4xl mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Docker
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  E-Commerce Platform
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A full-stack e-commerce solution with React, Node.js, and
                  MongoDB. Features include user authentication, payment
                  processing, and admin dashboard.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  Task Manager
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Task Manager App
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A collaborative task management application with real-time
                  updates, drag-and-drop functionality, and team collaboration
                  features.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  AI Chat App
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  AI Chat Application
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  An intelligent chat application powered by AI, featuring
                  natural language processing, sentiment analysis, and smart
                  responses.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">
                    OpenAI
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to connect!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:john.doe@example.com"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400">
            © 2024 John Doe. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
