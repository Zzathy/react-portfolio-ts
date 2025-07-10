// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import profileImage from "./assets/images/profile.jpg";
import {
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoGoLang,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPython,
  BiLogoTypescript,
  BiLogoBootstrap,
  BiLogoDjango,
  BiLogoGraphql,
  BiLogoJquery,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoAws,
  BiLogoDigitalocean,
  BiLogoDocker,
  BiLogoGitlab,
  BiLogoGoogleCloud,
  BiLogoHeroku,
  BiLogoKubernetes,
  BiLogoNetlify,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import {
  FaArrowRight,
  FaArrowUp,
  FaBars,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import {
  SiDotnet,
  SiAdonisjs,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFilament,
  SiGin,
  SiJsonwebtokens,
  SiLaravel,
  SiLivewire,
  SiNextdotjs,
  SiOpencv,
  SiRabbitmq,
  SiStrapi,
  SiMariadb,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiApache,
  SiCloudflare,
  SiGithubactions,
  SiJenkins,
  SiNginx,
  SiVercel,
  SiBitbucket,
  SiEslint,
  SiNotion,
  SiNpm,
  SiPostman,
  SiPrettier,
  SiUbuntu,
  SiCpanel,
} from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Section IDs in order
      const sections = ["home", "resume", "skills", "projects", "contact"];
      let foundSection = "home";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is considered active if its top is above 120px and its bottom is below 120px
          if (rect.top <= 120 && rect.bottom >= 120) {
            foundSection = section;
            break;
          }
        }
      }
      // Special handling for Contact: highlight if at bottom of page
      const contactElem = document.getElementById("contact");
      if (
        contactElem &&
        (window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 2 ||
          (contactElem.getBoundingClientRect().top <= 120 &&
            contactElem.getBoundingClientRect().bottom > 0))
      ) {
        foundSection = "contact";
      }
      setActiveSection(foundSection);
    };
    window.addEventListener("scroll", handleScroll);
    // Run on mount for direct navigation/bookmarking
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileNavOpen(false); // Close mobile nav on click
    }
  };
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 dark:bg-[#121212] dark:text-gray-200 transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
          isScrolled
            ? "bg-white/70 shadow-lg dark:bg-black/70 dark:shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-5 flex items-center relative justify-center">
          <div className="absolute left-6 text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
            IIF
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-gray-100/90 dark:bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full space-x-4 sm:space-x-10 transition-colors duration-300">
            {["Home", "Resume", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`!rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 text-xs sm:text-sm font-medium
                  hover:text-gray-900 dark:hover:text-gray-100
                  ${
                    activeSection === item.toLowerCase()
                      ? "text-black dark:text-white font-bold"
                      : "text-gray-500 dark:text-gray-400"
                  }
                `}
              >
                {item}
              </button>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300 border border-gray-300 dark:border-gray-600"
              aria-label="Toggle dark/light mode"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
          <button
            className="md:hidden absolute right-6 cursor-pointer !rounded-button whitespace-nowrap p-2 rounded-full border transition-colors duration-300 bg-gray-200 text-black border-gray-300 hover:bg-gray-300 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <FaBars size={24} />
          </button>
          {/* Mobile Nav Dropdown */}
          {mobileNavOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center md:hidden">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setMobileNavOpen(false)}
              />
              {/* Menu Card */}
              <div className="relative w-full max-w-xs mx-auto mt-20 rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-slideDown border transition-colors duration-300 bg-white border-gray-200 dark:bg-[#1E1E1E] dark:border-[#2a2a2a]">
                <button
                  className="absolute -top-5 -right-5 bg-gray-200 text-black rounded-full p-2 shadow-lg hover:bg-gray-300 hover:text-black transition-colors text-2xl font-bold leading-none border border-gray-300 dark:bg-[#2a2a2a] dark:text-white dark:border-[#444] dark:hover:bg-white dark:hover:text-black"
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation menu"
                  style={{ width: 40, height: 40 }}
                >
                  <RxCross2 />
                </button>
                <nav className="w-full flex flex-col items-center space-y-6 mt-2">
                  {["Home", "Resume", "Skills", "Projects", "Contact"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`w-full text-lg font-bold py-3 rounded-xl transition-all duration-200 tracking-wide shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border border-gray-200 dark:border-[#232329] 
                          ${
                            activeSection === item.toLowerCase()
                              ? "bg-gray-100 text-black font-bold scale-105 shadow-lg border-gray-300 dark:bg-white/5 dark:text-white dark:border-white/10"
                              : "bg-transparent text-gray-500 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"
                          }
                        `}
                      >
                        {item}
                      </button>
                    )
                  )}
                </nav>
                {/* Theme Toggle Button (Mobile, bottom) */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="mt-8 px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 transition-colors duration-300 mx-auto"
                  aria-label="Toggle dark/light mode"
                >
                  {theme === "dark" ? "🌙" : "☀️"}
                </button>
              </div>
              {/* Animation keyframes */}
              <style>{`
                @keyframes slideDown {
                  0% { opacity: 0; transform: translateY(-40px) scale(0.98); }
                  100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-slideDown {
                  animation: slideDown 0.35s cubic-bezier(.4,2,.6,1) both;
                }
              `}</style>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 sm:pt-16 bg-white dark:bg-[#121212] transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-6 sm:mb-8 border-2 border-gray-600"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img
                src={profileImage}
                alt=""
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-white dark:to-gray-400 leading-tight sm:leading-[1.15] md:leading-[1.18] pb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Izza Ihsan Fathony
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-6 sm:mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Backend Developer
            </p>
            {/* Description/Introducing Section */}
            <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
              <p
                className="text-base sm:text-lg text-gray-700 dark:text-gray-400 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                A Back-End Developer specializing in the PHP and Laravel
                ecosystem. Through various projects, I've collaborated with
                development teams to build and launch new features. I am
                passionate about continuously learning new technologies to grow
                as a developer.
              </p>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-900 transition-colors !rounded-button whitespace-nowrap cursor-pointer text-xs sm:text-base dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  <span>View CV</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="py-20 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Resume
          </h2>

          <div className="flex flex-col gap-12">
            {/* Education Row */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Education
              </h3>
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                <div className="bg-white dark:bg-[#1a1a1a] flex-1 p-6 rounded-xl space-y-4 border border-gray-200 dark:border-[#222] transition-colors duration-300 min-w-[260px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Bachelor of Computer Science
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        University of Muhammadiyah Malang
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">2021 - 2025</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 text-sm transition-colors duration-300">
                    Specialized in Software Engineering. Achieved 3.8 GPA.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] flex-1 p-6 rounded-xl space-y-4 border border-gray-200 dark:border-[#222] transition-colors duration-300 min-w-[260px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        SMKN 1 Banyuwangi
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        Vocational High School
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">2019 - 2021</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 text-sm transition-colors duration-300">
                    Major in Software Engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Experience
              </h3>

              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl space-y-4 border border-gray-200 dark:border-[#222] transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Web Developer Intern
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      API Banyuwangi (Indonesian Pilot Academy)
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    February 2025 - March 2025
                  </span>
                </div>
                <ul className="text-gray-700 dark:text-gray-400 text-sm list-disc list-inside space-y-2 transition-colors duration-300">
                  <li>
                    Transformed the static Public Information (PPID) portal into
                    a dynamic Laravel application by building the entire
                    back-end and a custom admin panel from scratch.
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl space-y-4 border border-gray-200 dark:border-[#222] transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Laboratory Assistant (Part-time)
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Informatics Laboratory, University of Muhammadiyah Malang
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2022 - Present</span>
                </div>
                <ul className="text-gray-700 dark:text-gray-400 text-sm list-disc list-inside space-y-2 transition-colors duration-300">
                  <li>
                    Gained extensive teaching and mentoring experience by
                    assisting in a total of 40 practicum classes from semester 3
                    to 8, guiding classes of up to 40 students each.
                  </li>
                  <li>
                    As Practicum Coordinator for 16 core courses, was entrusted
                    to lead entire lab sessions in the lecturer's absence, in
                    addition to managing a team of 4 other assistants and
                    serving as the primary liaison for all course-related
                    matters.
                  </li>
                  <li>
                    Served as the Lead Assistant for the 2021 batch,
                    coordinating schedules and managing responsibilities for a
                    team of 19 laboratory assistants.
                  </li>
                  <li>
                    Contributed to the re-engineering of the "i-Lab" practicum
                    application by developing activity logging API service using
                    Go (Golang) and the Gin framework.
                  </li>
                  <li>
                    Contributed to the development of a new peer-review feature
                    within the "Simutu" application, enabling assistants to
                    provide performance feedback to one another using Laravel.
                  </li>
                  <li>
                    Designed and developed the back-end system for "Jacketlab,"
                    a new e-commerce platform built with Laravel to digitize and
                    simplify the process of purchasing lab jackets for students.
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl space-y-4 border border-gray-200 dark:border-[#222] transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Web Developer (Part-time)
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Pixel Dev Factory
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    January 2021 - September 2021
                  </span>
                </div>
                <ul className="text-gray-700 dark:text-gray-400 text-sm list-disc list-inside space-y-2 transition-colors duration-300">
                  <li>
                    Contributed to the development of a School Budgeting
                    Application (RAPBS), implementing a full CRUD system in
                    Laravel for student data with Excel import/export
                    functionality.
                  </li>
                  <li>
                    Contributed to the development of an e-commerce web
                    application for SMEs (Small and Medium-sized Enterprises),
                    with a focus on back-end development using Laravel.
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            {/* <div className="md:col-span-2 mt-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-xl flex items-center space-x-4">
                  <i className="fab fa-aws text-3xl text-gray-400"></i>
                  <div>
                    <h4 className="font-semibold text-white">
                      AWS Solutions Architect
                    </h4>
                    <p className="text-gray-400 text-sm">Amazon Web Services</p>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-xl flex items-center space-x-4">
                  <i className="fab fa-google text-3xl text-gray-400"></i>
                  <div>
                    <h4 className="font-semibold text-white">
                      Google Cloud Professional
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Google Cloud Platform
                    </p>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-xl flex items-center space-x-4">
                  <i className="fab fa-microsoft text-3xl text-gray-400"></i>
                  <div>
                    <h4 className="font-semibold text-white">
                      Azure Solutions Expert
                    </h4>
                    <p className="text-gray-400 text-sm">Microsoft Azure</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center">
            Technical Skills
          </h2>
          <div className="flex flex-col gap-8 md:gap-12">
            {[
              {
                category: "Programming Languages",
                skills: [
                  // { name: "C", icon:  },
                  { name: "C++", icon: <BiLogoCPlusPlus /> },
                  { name: "CSS", icon: <BiLogoCss3 /> },
                  { name: "Go", icon: <BiLogoGoLang /> },
                  { name: "HTML", icon: <BiLogoHtml5 /> },
                  { name: "Java", icon: <BiLogoJava /> },
                  { name: "Javascript", icon: <BiLogoJavascript /> },
                  { name: "PHP", icon: <BiLogoPhp /> },
                  { name: "Python", icon: <BiLogoPython /> },
                  { name: "Typescript", icon: <BiLogoTypescript /> },
                ],
              },
              {
                category: "Frameworks & Libraries",
                skills: [
                  { name: ".NET", icon: <SiDotnet /> },
                  { name: "AdonisJS", icon: <SiAdonisjs /> },
                  { name: "Bootstrap", icon: <BiLogoBootstrap /> },
                  { name: "Django", icon: <BiLogoDjango /> },
                  { name: "Express.js", icon: <SiExpress /> },
                  { name: "FastAPI", icon: <SiFastapi /> },
                  { name: "Fastify", icon: <SiFastify /> },
                  { name: "Filament", icon: <SiFilament /> },
                  { name: "Gin", icon: <SiGin /> },
                  { name: "GraphQL", icon: <BiLogoGraphql /> },
                  { name: "JQuery", icon: <BiLogoJquery /> },
                  { name: "JWT", icon: <SiJsonwebtokens /> },
                  { name: "Laravel", icon: <SiLaravel /> },
                  { name: "Livewire", icon: <SiLivewire /> },
                  { name: "Next.js", icon: <SiNextdotjs /> },
                  { name: "Node.js", icon: <BiLogoNodejs /> },
                  { name: "OpenCV", icon: <SiOpencv /> },
                  { name: "RabbitMQ", icon: <SiRabbitmq /> },
                  { name: "React", icon: <BiLogoReact /> },
                  { name: "React Native", icon: <BiLogoReact /> },
                  { name: "Strapi", icon: <SiStrapi /> },
                  { name: "TailwindCSS", icon: <BiLogoTailwindCss /> },
                ],
              },
              {
                category: "Databases",
                skills: [
                  { name: "Firebase", icon: <BiLogoFirebase /> },
                  { name: "MariaDB", icon: <SiMariadb /> },
                  { name: "MongoDB", icon: <BiLogoMongodb /> },
                  { name: "MySQL", icon: <SiMysql /> },
                  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
                  { name: "Redis", icon: <SiRedis /> },
                  { name: "SQLite", icon: <SiSqlite /> },
                ],
              },
              {
                category: "DevOps & Cloud",
                skills: [
                  { name: "Apache", icon: <SiApache /> },
                  { name: "AWS", icon: <BiLogoAws /> },
                  { name: "Cloudflare", icon: <SiCloudflare /> },
                  { name: "cPanel", icon: <SiCpanel /> },
                  { name: "DigitalOcean", icon: <BiLogoDigitalocean /> },
                  { name: "Docker", icon: <BiLogoDocker /> },
                  { name: "Github Actions", icon: <SiGithubactions /> },
                  { name: "Gitlab CI", icon: <BiLogoGitlab /> },
                  { name: "Google Cloud", icon: <BiLogoGoogleCloud /> },
                  { name: "Heroku", icon: <BiLogoHeroku /> },
                  { name: "Jenkins", icon: <SiJenkins /> },
                  { name: "Kubernetes", icon: <BiLogoKubernetes /> },
                  { name: "Netlify", icon: <BiLogoNetlify /> },
                  { name: "Nginx", icon: <SiNginx /> },
                  { name: "Vercel", icon: <SiVercel /> },
                ],
              },
              {
                category: "Tools & Platforms",
                skills: [
                  { name: "Bitbucket", icon: <SiBitbucket /> },
                  { name: "ESLint", icon: <SiEslint /> },
                  { name: "Git", icon: <BiLogoGit /> },
                  { name: "Github", icon: <BiLogoGithub /> },
                  { name: "Gitlab", icon: <BiLogoGitlab /> },
                  { name: "Notion", icon: <SiNotion /> },
                  { name: "NPM", icon: <SiNpm /> },
                  { name: "Postman", icon: <SiPostman /> },
                  { name: "Prettier", icon: <SiPrettier /> },
                  { name: "Ubuntu", icon: <SiUbuntu /> },
                ],
              },
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-6 text-center transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center justify-center p-2 sm:p-3 bg-gray-200 dark:bg-[#1a1a1a] rounded-lg min-w-[70px] max-w-[90px] min-h-[70px] max-h-[90px] m-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-800 dark:text-gray-400 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 bg-gray-50 dark:bg-[#121212] transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "E-Commerce Microservice",
                description:
                  "Scalable microservice architecture for a high-traffic e-commerce platform handling 10k+ transactions daily.",
                image:
                  "https://readdy.ai/api/search-image?query=Modern%20digital%20technology%20visualization%20with%20abstract%20code%20structures%20and%20server%20racks%20in%20a%20dark%20blue%20environment%20with%20glowing%20elements%20representing%20microservices%20architecture%20for%20e-commerce%20systems&width=600&height=400&seq=1&orientation=landscape",
                technologies: [
                  "Node.js",
                  "Docker",
                  "MongoDB",
                  "Redis",
                  "Kubernetes",
                ],
                link: "#",
              },
              {
                title: "Real-time Analytics Dashboard",
                description:
                  "Real-time data processing pipeline and analytics dashboard for monitoring system performance metrics.",
                image:
                  "https://readdy.ai/api/search-image?query=Futuristic%20data%20visualization%20dashboard%20with%20dark%20theme%20showing%20real-time%20analytics%20graphs%20and%20charts%20with%20glowing%20blue%20and%20purple%20elements%20on%20computer%20screens%20in%20a%20modern%20office%20environment&width=600&height=400&seq=2&orientation=landscape",
                technologies: [
                  "Python",
                  "Kafka",
                  "ElasticSearch",
                  "React",
                  "D3.js",
                ],
                link: "#",
              },
              {
                title: "Banking API Gateway",
                description:
                  "Secure API gateway for a banking system, handling authentication, rate limiting, and request routing.",
                image:
                  "https://readdy.ai/api/search-image?query=Secure%20digital%20banking%20infrastructure%20visualization%20with%20glowing%20network%20connections%20and%20data%20encryption%20symbols%20in%20a%20dark%20professional%20environment%20with%20blue%20accent%20lights%20representing%20API%20security&width=600&height=400&seq=3&orientation=landscape",
                technologies: [
                  "Java",
                  "Spring Boot",
                  "OAuth2",
                  "PostgreSQL",
                  "RabbitMQ",
                ],
                link: "#",
              },
              {
                title: "IoT Device Management Platform",
                description:
                  "Centralized platform for managing and monitoring thousands of IoT devices across multiple locations.",
                image:
                  "https://readdy.ai/api/search-image?query=Connected%20IoT%20devices%20network%20visualization%20with%20smart%20home%20gadgets%20and%20industrial%20sensors%20communicating%20with%20central%20management%20system%20in%20a%20futuristic%20dark%20environment%20with%20glowing%20connection%20lines&width=600&height=400&seq=4&orientation=landscape",
                technologies: [
                  "Node.js",
                  "MQTT",
                  "InfluxDB",
                  "WebSockets",
                  "AWS IoT",
                ],
                link: "#",
              },
              {
                title: "Content Delivery Network",
                description:
                  "Custom CDN solution with edge caching, image optimization, and global load balancing capabilities.",
                image:
                  "https://readdy.ai/api/search-image?query=Global%20network%20infrastructure%20visualization%20showing%20content%20delivery%20nodes%20across%20world%20map%20with%20data%20streams%20and%20caching%20mechanisms%20in%20a%20dark%20professional%20environment%20with%20blue%20accent%20lights&width=600&height=400&seq=5&orientation=landscape",
                technologies: [
                  "Golang",
                  "Nginx",
                  "Redis",
                  "Terraform",
                  "Cloudflare Workers",
                ],
                link: "#",
              },
              {
                title: "Blockchain Payment System",
                description:
                  "Secure payment processing system built on blockchain technology with smart contract integration.",
                image:
                  "https://readdy.ai/api/search-image?query=Blockchain%20technology%20visualization%20with%20connected%20blocks%20and%20cryptocurrency%20payment%20processing%20in%20a%20secure%20digital%20environment%20with%20glowing%20transaction%20paths%20and%20encryption%20symbols&width=600&height=400&seq=6&orientation=landscape",
                technologies: [
                  "Solidity",
                  "Ethereum",
                  "Web3.js",
                  "Node.js",
                  "PostgreSQL",
                ],
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col border border-gray-200 dark:border-[#222]"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-400 mb-2 sm:mb-4 h-10 sm:h-12 line-clamp-2 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] sm:text-xs bg-gray-200 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex w-fit items-center bg-gray-200 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors !rounded-button whitespace-nowrap cursor-pointer text-xs sm:text-base"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center">
            Get In Touch
          </h2>
          <div className="mt-10 sm:mt-16 flex flex-col items-center">
            {/* Email & Social Media Icons Row */}
            <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6">
              {/* Email */}
              <a
                href="mailto:izzafathony27@gmail.com"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black group"
                aria-label="Email"
              >
                <FaEnvelope className="text-gray-700 dark:text-gray-300 text-xl sm:text-2xl group-hover:text-white dark:group-hover:text-black transition-colors" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Zzathy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black group"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-700 dark:text-gray-300 text-xl sm:text-2xl group-hover:text-white dark:group-hover:text-black transition-colors" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/izza-fathony"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-gray-700 dark:text-gray-300 text-xl sm:text-2xl group-hover:text-white dark:group-hover:text-black transition-colors" />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/izza.fathony"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-700 dark:text-gray-300 text-xl sm:text-2xl group-hover:text-white dark:group-hover:text-black transition-colors" />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/izza.fathony.7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-[#2a2a2a] rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black group"
                aria-label="Facebook"
              >
                <FaFacebook className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl group-hover:text-white dark:group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-black py-8 sm:py-10 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col justify-between items-center">
            <div className="mb-4 sm:mb-6 md:mb-0">
              <p className="text-gray-800 dark:text-gray-400 text-xs sm:text-base transition-colors duration-300">
                &copy; {new Date().getFullYear()} Izza Ihsan Fathony. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black dark:bg-white text-white dark:text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
export default App;
