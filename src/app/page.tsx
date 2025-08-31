"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
  FaRocket,
  FaCode,
  FaPalette,
  FaLightbulb,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaStar,
  FaExternalLinkAlt,
  FaPlay,
  FaPause,
  FaUsers,
  FaClipboardList,
  FaSearch,
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
  SiJavascript,
  SiPython,
  SiGit,
  SiFigma,
  SiExpress,
  SiNestjs,
  SiRemix,
  SiStrapi,
  SiDjango,
  SiPrisma,
} from "react-icons/si";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Floating particles effect
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Gradient Orbs with Animation */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-xl font-bold text-white flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "skills", "projects", "contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-white/80 hover:text-white transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ),
              )}
            </div>
            <motion.button
              className="md:hidden text-white hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
          {/* Enhanced Mobile menu */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["about", "experience", "skills", "projects", "contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <motion.section
        style={{ y, opacity }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Enhanced Avatar with Multiple Animations */}
              <motion.div
                className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.6)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow" />
                <div className="relative z-10 w-44 h-44 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">JD</span>
                </div>
                {/* Floating elements around avatar */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.div>

              {/* Enhanced Title with Typewriter Effect */}
              <motion.h1
                className="text-6xl sm:text-8xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Henok Tesfahun
                </span>
              </motion.h1>

              {/* Enhanced Subtitle with Floating Animation */}
              <motion.p
                className="text-2xl sm:text-3xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Software Engineer
              </motion.p>

              {/* Enhanced Description */}
              <motion.p
                className="text-lg text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I am a software engineer with over five years of hands-on
                experience building modern web applications using React,
                Node.js, Next.js, and Remix.js. I have successfully delivered
                more than 10 projects, each sharpening my expertise in creating
                sleek, efficient, and scalable solutions.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaRocket className="group-hover:animate-bounce" />
                    Get In Touch
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  className="group relative px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold overflow-hidden backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaDownload className="group-hover:animate-bounce" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { number: "10+", label: "Projects", icon: FaCode },
                  { number: "5+", label: "Years", icon: FaBriefcase },
                  { number: "100%", label: "Satisfaction", icon: FaStar },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-purple-400 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.2, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <AnimatedSection
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                I am a software engineer with over five years of hands-on
                experience building modern web applications using React,
                Node.js, Next.js, and Remix.js. I have successfully delivered
                more than 10 projects, each sharpening my expertise in creating
                sleek, efficient, and scalable solutions. My work reflects a
                balance of technical precision and creative problem-solving,
                allowing me to approach complex challenges with confidence.
                Backed by a degree in Computer Engineering from Addis Ababa
                Institute of Technology, I combine strong academic foundations
                with practical industry experience to consistently deliver
                high-quality applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-white/60">
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-white/60">Years Experience</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FaGraduationCap,
                  title: "Education",
                  content:
                    "Computer Engineering, Addis Ababa Institute of Technology",
                },
                {
                  icon: FaPalette,
                  title: "Location",
                  content: "Addis Ababa, Ethiopia",
                },
                {
                  icon: FaLightbulb,
                  title: "Interests",
                  content: "Open Source, AI/ML, Web3, Travel",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="text-white text-xl" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/70">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* New Work Experience Section */}
      <AnimatedSection id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                company: "Freelance",
                position: "Frontend Developer",
                duration: "Dec 2023 - Present",
                description:
                  "Developed Electronic Health Records website and Medical Billing and Insurance Management system for US-based clients.",
                technologies: ["React.js", "JavaScript", "HTML", "CSS"],
                achievements: [
                  "Built Electronic Health Records website",
                  "Developed Medical Billing and Insurance Management system",
                  "Delivered healthcare solutions for US market",
                ],
              },
              {
                company: "Freelance",
                position: "Full Stack Developer",
                duration: "Jul 2023 - Nov 2023",
                description:
                  "Developed animation-intensive betting website with real-time gaming features including Keno and Spin games.",
                technologies: [
                  "Next.js",
                  "Nest.js",
                  "BullMQ",
                  "Socket.io",
                  "React",
                ],
                achievements: [
                  "Built real-time gaming platform with Socket.io",
                  "Implemented queue management with BullMQ",
                  "Created animation-intensive games (Keno and Spin)",
                ],
              },
              {
                company: "2F Capital",
                position: "Full Stack Developer",
                duration: "May 2022 - Sep 2024",
                description:
                  "Leading development of multiple enterprise applications including royalty fee collection systems, ride hailing integrations, payment systems, and talent competition platforms.",
                technologies: [
                  "Remix.js",
                  "Next.js",
                  "Express.js",
                  "PostgreSQL",
                  "Playwright",
                  "Cypress",
                  "Socket.io",
                ],
                achievements: [
                  "Built royalty fee collection and distribution system using Remix.js and PostgreSQL",
                  "Implemented comprehensive testing with Playwright and Cypress",
                  "Developed ride hailing system integration with Express.js and Huawei's Macle to create a mini app",
                  "Created ringback tone customizing app with Remix.js, React and Express.js",
                  "Built SMS gateway with Remix.js, Node.js and Kannel",
                  "Developed payment and subscription system for music streaming platform (Including a mini app)",
                  "Built blog app like Medium using Next.js",
                  "Created talent competition hosting website using Remix.js",
                  "Implemented reward system for music streaming platform subscribers",
                  "Built device financing platform with 12-month installment options connecting to banks",
                  "Developed job posting platform with admin management for jobs, trainings, and CV reviews",
                ],
              },
              {
                company: "Ice Addis",
                position: "Full Stack Developer",
                duration: "Nov 2020 - Feb 2020",
                description:
                  "Developed platform connecting Honey Farmers with Investors for equipment investment and profit sharing.",
                technologies: ["Vue.js", "Laravel", "PHP", "MySQL"],
                achievements: [
                  "Built investment platform for honey farming",
                  "Implemented profit sharing system",
                  "Connected farmers with investors",
                ],
              },
              {
                company: "ZAYTECH IT SOLUTIONS",
                position: "Full Stack Developer",
                duration: "Sep 2020 - Nov 2020",
                description:
                  "Developed full-stack websites with content management systems and database design.",
                technologies: ["HTML", "CSS", "PHP", "MySQL"],
                achievements: [
                  "Built full-stack websites",
                  "Designed and implemented databases",
                  "Created admin content management system",
                ],
              },
              {
                company: "Gobeze Consult",
                position: "Full Stack Developer",
                duration: "Feb 2020 - Mar 2020",
                description:
                  "Developed unit rent management website with user authentication and building registration features.",
                technologies: ["React.js", "Django", "SQLite"],
                achievements: [
                  "Built unit rent management system",
                  "Implemented user authentication (Registration and Login)",
                  "Created building registration and management features",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={job.company}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline connector */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

                <div className="relative pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-slate-900"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  <motion.div
                    className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {job.position}
                        </h3>
                        <p className="text-purple-400 font-semibold">
                          {job.company}
                        </p>
                      </div>
                      <motion.span
                        className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {job.duration}
                      </motion.span>
                    </div>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center gap-2 text-white/70"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <FaAward className="text-yellow-400 text-sm" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Skills Section */}
      <AnimatedSection
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>

          {/* Skill Categories */}
          <div className="space-y-12">
            {[
              {
                category: "Frontend Development",
                skills: [
                  {
                    icon: SiReact,
                    name: "React.js",
                    color: "text-blue-500",
                    level: 95,
                  },
                  {
                    icon: SiJavascript,
                    name: "JavaScript",
                    color: "text-yellow-400",
                    level: 95,
                  },
                  {
                    icon: SiTypescript,
                    name: "TypeScript",
                    color: "text-blue-600",
                    level: 88,
                  },
                  {
                    icon: SiTailwindcss,
                    name: "Tailwind CSS",
                    color: "text-cyan-500",
                    level: 92,
                  },
                ],
              },
              {
                category: "Backend Development",
                skills: [
                  {
                    icon: SiNodedotjs,
                    name: "Node.js",
                    color: "text-green-600",
                    level: 90,
                  },
                  {
                    icon: SiExpress,
                    name: "Express.js",
                    color: "text-gray-400",
                    level: 90,
                  },
                  {
                    icon: SiNestjs,
                    name: "Nest.js",
                    color: "text-red-500",
                    level: 85,
                  },
                  {
                    icon: SiDjango,
                    name: "Django",
                    color: "text-green-700",
                    level: 80,
                  },
                ],
              },
              {
                category: "Full-Stack Development",
                skills: [
                  {
                    icon: SiRemix,
                    name: "Remix.js",
                    color: "text-purple-500",
                    level: 92,
                  },
                  {
                    icon: SiNextdotjs,
                    name: "Next.js",
                    color: "text-white",
                    level: 90,
                  },
                  {
                    icon: SiStrapi,
                    name: "Strapi",
                    color: "text-blue-400",
                    level: 85,
                  },
                ],
              },
              {
                category: "Databases & ORM",
                skills: [
                  {
                    icon: SiPostgresql,
                    name: "PostgreSQL",
                    color: "text-blue-600",
                    level: 88,
                  },
                  {
                    icon: SiMongodb,
                    name: "MongoDB",
                    color: "text-green-500",
                    level: 85,
                  },
                  {
                    icon: SiPrisma,
                    name: "Prisma",
                    color: "text-gray-300",
                    level: 82,
                  },
                ],
              },
              {
                category: "DevOps & Tools",
                skills: [
                  {
                    icon: SiDocker,
                    name: "Docker",
                    color: "text-blue-500",
                    level: 85,
                  },
                  {
                    icon: SiGit,
                    name: "Git",
                    color: "text-orange-500",
                    level: 90,
                  },
                  {
                    icon: SiFigma,
                    name: "Figma",
                    color: "text-purple-500",
                    level: 75,
                  },
                ],
              },
              {
                category: "Soft Skills",
                skills: [
                  {
                    icon: FaLightbulb,
                    name: "Clear Communication",
                    color: "text-green-400",
                    level: 95,
                  },
                  {
                    icon: FaUsers,
                    name: "Team Collaboration",
                    color: "text-blue-400",
                    level: 90,
                  },
                  {
                    icon: FaClipboardList,
                    name: "Planning & Organization",
                    color: "text-purple-400",
                    level: 88,
                  },
                  {
                    icon: FaSearch,
                    name: "Attention to Detail",
                    color: "text-yellow-400",
                    level: 92,
                  },
                  {
                    icon: FaGraduationCap,
                    name: "Quick Learning",
                    color: "text-cyan-400",
                    level: 95,
                  },
                ],
              },
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <skill.icon className={`text-3xl ${skill.color}`} />
                        <div>
                          <h4 className="font-semibold text-white">
                            {skill.name}
                          </h4>
                          <p className="text-white/60 text-sm">
                            {skill.level}%
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Projects Section */}
      <AnimatedSection id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
                gradient: "from-blue-500 to-purple-600",
                tags: ["React", "Node.js", "MongoDB"],
                liveUrl: "#",
                githubUrl: "#",
                image: "/api/placeholder/400/250",
              },
              {
                title: "Task Manager App",
                description:
                  "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                gradient: "from-green-500 to-teal-600",
                tags: ["Next.js", "TypeScript", "PostgreSQL"],
                liveUrl: "#",
                githubUrl: "#",
                image: "/api/placeholder/400/250",
              },
              {
                title: "AI Chat Application",
                description:
                  "An intelligent chat application powered by AI, featuring natural language processing, sentiment analysis, and smart responses.",
                gradient: "from-orange-500 to-red-600",
                tags: ["React", "Python", "OpenAI"],
                liveUrl: "#",
                githubUrl: "#",
                image: "/api/placeholder/400/250",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <span className="text-white text-2xl font-bold relative z-10">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </motion.div>
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-white mb-4 text-xl">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 text-white/90 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-white/60 hover:text-white/80 text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Contact Section */}
      <AnimatedSection
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to connect!
          </motion.p>
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: FaEnvelope,
                href: "mailto:heni.me.tes@gmail.com",
                label: "Email",
              },
              {
                icon: FaGithub,
                href: "https://github.com/HeniT11",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/henok-tesfahun-32228a19a/",
                label: "LinkedIn",
              },
              {
                icon: FaTwitter,
                href: "https://twitter.com/johndoe",
                label: "Twitter",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:border-purple-400/50 transition-colors">
                  <social.icon className="text-xl group-hover:scale-110 transition-transform" />
                </div>
                <span>{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/50"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <motion.textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/50 resize-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Enhanced Footer */}
      <motion.footer
        className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm text-center border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-white/60">
            © 2024 Henok Tesfahun. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

// Simple Animated Section Component
function AnimatedSection({
  id,
  className,
  children,
}: {
  id: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
