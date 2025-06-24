// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
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
  FaLocationDot,
  FaPhone,
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
} from "react-icons/si";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Determine active section based on scroll position
      const sections = ["home", "resume", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#121212] text-gray-200 min-h-screen font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
          isScrolled ? "bg-black/70 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex justify-center items-center relative">
          <div className="absolute left-6 text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            JD
          </div>
          <div className="hidden md:flex items-center bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full space-x-10">
            {["Home", "Resume", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`!rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 text-sm font-medium hover:text-gray-100 ${
                  activeSection === item.toLowerCase()
                    ? "text-white scale-105"
                    : "text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden absolute right-6 text-white cursor-pointer !rounded-button whitespace-nowrap bg-white/5 p-2 rounded-full backdrop-blur-sm">
            <FaBars />
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-8 border-2 border-gray-600">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Backend Developer & System Architect
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Resume
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Education
              </h3>

              <div className="bg-[#1a1a1a] p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Bachelor of Computer Science
                    </h4>
                    <p className="text-gray-400">
                      University of Muhammadiyah Malang
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2021 - 2025</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Specialized in Software Engineering. Achieved 3.8 GPA.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      SMKN 1 Banyuwangi
                    </h4>
                    <p className="text-gray-400">Vocational High School</p>
                  </div>
                  <span className="text-sm text-gray-500">2019 - 2021</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Major in Software Engineering.
                </p>
              </div>
            </div>

            {/* Experience Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Experience
              </h3>

              <div className="bg-[#1a1a1a] p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Web Developer Intern
                    </h4>
                    <p className="text-gray-400">
                      API Banyuwangi (Indonesian Pilot Academy)
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    February 2025 - March 2025
                  </span>
                </div>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-2">
                  <li>
                    Transformed the static Public Information (PPID) portal into
                    a dynamic Laravel application by building the entire
                    back-end and a custom admin panel from scratch.
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Laboratory Assistant (Part-time)
                    </h4>
                    <p className="text-gray-400">
                      Informatics Laboratory, University of Muhammadiyah Malang
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">2022 - Present</span>
                </div>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-2">
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
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Web Developer (Part-time)
                    </h4>
                    <p className="text-gray-400">Pixel Dev Factory</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    January 2021 - September 2021
                  </span>
                </div>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-2">
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
      <section id="skills" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
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
              <div
                key={categoryIndex}
                className={`space-y-4 ${
                  categoryIndex >= 2 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center justify-center p-4 bg-[#1a1a1a] rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20"
                    >
                      <div className="text-3xl md:text-4xl mb-2 text-gray-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs text-gray-400">
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 h-12 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors !rounded-button whitespace-nowrap cursor-pointer"
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
      <section id="contact" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto bg-[#1a1a1a] rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none text-sm"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full !rounded-button whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-3">
                <FaEnvelope className="text-white" />
              </div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-400">contact@johndoe.dev</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-3">
                <FaLocationDot className="text-white" />
              </div>
              <h3 className="text-lg font-medium">Location</h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-3">
                <FaPhone className="text-white" />
              </div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} John Doe. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fab fa-medium text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
export default App;
