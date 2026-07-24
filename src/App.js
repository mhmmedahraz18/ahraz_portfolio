import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Cpu,
  Award,
  GraduationCap,
  Sparkles,
  Rocket,
  Zap,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
    backend: ["Node.js", "Express.js", "Python", "Django", "Flask"],
    database: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "AWS", "Azure", "Docker"],
    ai: [
      "Machine Learning",
      "OpenCV",
      "TensorFlow",
      "Natural Language Processing",
    ],
    soft: [
      "Team Collaboration",
      "Problem Solving",
      "Time Management",
      "Communication",
    ],
  };

  const projects = [
    {
      title: "RoboMigo - AI Chatbot & Person Detection",
      tech: ["Python", "OpenCV", "NLP", "Machine Learning"],
      description:
        "AI-powered chatbot with real-time person detection capabilities using computer vision and natural language processing.",
      github: "#",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Sports Club Management System",
      tech: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      description:
        "Comprehensive web platform for managing sports club operations including member registration, event scheduling, and analytics.",
      github: "#",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Garden Vehicle",
      tech: ["Embedded Systems", "IoT", "C++", "Arduino"],
      description:
        "Automated garden maintenance vehicle with intelligent navigation and watering systems.",
      github: "#",
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "Instagram Clone Application",
      tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
      description:
        "Full-stack social media application replicating core Instagram features with real-time updates and media sharing.",
      github: "#",
      gradient: "from-orange-600 to-red-600",
    },
  ];

  const experience = [
    {
      role: "Python Full Stack Development Trainee",
      company: "QSpiders",
      location: "Trivandrum",
      period: "Oct 2023 - Apr 2024",
      points: [
        "Completed comprehensive training in Python Full Stack Development",
        "Built multiple web applications using Django and Flask frameworks",
        "Gained hands-on experience with frontend and backend integration",
      ],
      icon: <Code className="w-6 h-6" />,
    },
    {
      role: "Full Stack Development Intern",
      company: "Gigabyte Labs",
      location: "Trivandrum",
      period: "Apr 2024 - Jul 2024",
      points: [
        "Developed and deployed full-stack web applications",
        "Worked with MERN stack technologies",
        "Collaborated with team on real-world client projects",
      ],
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      role: "IBM Cloud Internship",
      company: "IBM",
      period: "2024",
      points: [
        "Gained expertise in cloud computing and IBM Cloud services",
        "Deployed applications on cloud infrastructure",
        "Learned about scalability and cloud architecture patterns",
      ],
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      role: "CyberSecurity Internship",
      company: "Various",
      period: "2024",
      points: [
        "Studied cybersecurity principles and best practices",
        "Learned about network security and threat analysis",
        "Implemented security measures in web applications",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "APJ Abdul Kalam Technological University",
      location: "Kerala",
      year: "2020 - 2024",
      grade: "CGPA: 7.8",
    },
    {
      degree: "Higher Secondary Education",
      institution: "KHIHSS Puthukurichy",
      location: "Kerala",
      year: "2018 - 2020",
      grade: "Percentage: 77%",
    },
  ];

  const certifications = [
    "IBM Cloud Essentials",
    "Salesforce Developer Virtual Internship",
    "Postman API Fundamentals Student Expert",
    "Skill India Python Programming",
    "CyberSecurity Fundamentals",
    "Full Stack Web Development",
    "Machine Learning Basics",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold group cursor-pointer">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-500">
                Ahraz
              </span>
              <Sparkles className="inline ml-2 text-cyan-400 w-5 h-5 animate-pulse" />
            </div>

            <div className="hidden md:flex space-x-1 bg-slate-900/50 backdrop-blur-sm rounded-full p-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Certifications",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Certifications",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full animate-fadeIn">
            <span className="text-cyan-400 text-sm font-semibold">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Mohammed Ahraz
            </span>
          </h1>

          <p
            className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 mb-6 animate-fadeInUp font-bold"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Developer | AI & Cloud Enthusiast
          </p>

          <p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Computer Science Engineer passionate about building innovative web
            applications with cutting-edge technologies
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Hire Me
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group px-8 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-blue-500/50 text-white rounded-full font-bold text-lg hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </span>
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section id="about" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/50 group-hover:shadow-cyan-500/50 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-2 p-1 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Mohammed Ahraz"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Rest of the about content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  A highly motivated Computer Science & Engineering graduate
                  with a passion for technology and innovation. Proficient in
                  the MERN stack, Python, and cloud technologies, with hands-on
                  experience in developing full-stack web applications and
                  AI-powered solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I have completed multiple internships and training programs,
                  working on real-world projects that demonstrate my ability to
                  deliver scalable and efficient solutions. My expertise spans
                  across web development, artificial intelligence, embedded
                  systems, and cloud computing.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <ContactItem icon={<Mail />} text="ahrazy2002@gmail.com" />
                  <ContactItem icon={<Phone />} text="+91 8157997355" />
                  <ContactItem icon={<MapPin />} text="Trivandrum, Kerala" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Skills & Expertise</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="Frontend Development"
                icon={<Code />}
                skills={skills.frontend}
                delay={0}
              />
              <SkillCard
                title="Backend Development"
                icon={<Database />}
                skills={skills.backend}
                delay={100}
              />
              <SkillCard
                title="Databases"
                icon={<Database />}
                skills={skills.database}
                delay={200}
              />
              <SkillCard
                title="Tools & Cloud"
                icon={<Cloud />}
                skills={skills.tools}
                delay={300}
              />
              <SkillCard
                title="AI & ML"
                icon={<Cpu />}
                skills={skills.ai}
                delay={400}
              />
              <SkillCard
                title="Soft Skills"
                icon={<Award />}
                skills={skills.soft}
                delay={500}
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Featured Projects</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} delay={index * 100} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} delay={index * 100} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <EducationCard key={index} {...edu} delay={index * 100} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Certifications</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertCard key={index} cert={cert} delay={index * 50} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
                <div className="space-y-6">
                  <InputField label="Name" placeholder="Your Name" />
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3 text-lg">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </button>
                </div>
                <div className="flex justify-center gap-8 mt-12">
                  <SocialIcon
                    href="https://github.com"
                    icon={<Github size={28} />}
                  />
                  <SocialIcon
                    href="https://linkedin.com"
                    icon={<Linkedin size={28} />}
                  />
                  <SocialIcon
                    href="mailto:ahrazy2002@gmail.com"
                    icon={<Mail size={28} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Mohammed Ahraz. All rights reserved.
          </p>
          <p className="text-gray-600 mt-2">
            Built with React & Tailwind CSS ✨
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-slideDown { animation: slideDown 0.3s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite 3s; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 5s ease infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const AnimatedSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
  const node = ref.current;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );

  if (node) {
    observer.observe(node);
  }

  return () => {
    if (node) {
      observer.unobserve(node);
    }
  };
}, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <div className="text-center mb-20">
    <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
      {children}
    </h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-4 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
    <div className="text-cyan-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors">
      {text}
    </span>
  </div>
);

const SkillCard = ({ title, icon, skills, delay }) => (
  <div
    className="group relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500"></div>
    <div className="relative">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-cyan-400 rounded-full text-sm font-medium border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, tech, description, github, gradient, delay }) => (
  <div
    className="group relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
    ></div>
    <div className="relative">
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded-lg text-sm border border-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={github}
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
      >
        <Github size={20} />
        View Code
        <ExternalLink
          size={16}
          className="group-hover/link:translate-x-1 transition-transform"
        />
      </a>
    </div>
  </div>
);

const ExperienceCard = ({
  role,
  company,
  location,
  period,
  points,
  icon,
  delay,
}) => (
  <div
    className="group relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500"></div>
    <div className="relative flex gap-6">
      <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white group-hover:scale-110 transition-transform h-fit">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              {role}
            </h3>
            <p className="text-cyan-400 font-semibold text-lg">{company}</p>
            {location && <p className="text-gray-400">{location}</p>}
          </div>
          <span className="text-gray-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            {period}
          </span>
        </div>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"
            >
              <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const EducationCard = ({
  degree,
  institution,
  location,
  year,
  grade,
  delay,
}) => (
  <div
    className="group relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-500"></div>
    <div className="relative flex items-start gap-6">
      <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
        <GraduationCap size={32} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {degree}
        </h3>
        <p className="text-cyan-400 font-semibold text-lg mb-1">
          {institution}
        </p>
        <p className="text-gray-400 mb-3">
          {location} • {year}
        </p>
        <p className="text-white font-semibold bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-slate-700">
          {grade}
        </p>
      </div>
    </div>
  </div>
);

const CertCard = ({ cert, delay }) => (
  <div
    className="group relative bg-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500"></div>
    <div className="relative">
      <Award
        className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform"
        size={36}
      />
      <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
        {cert}
      </h3>
    </div>
  </div>
);

const InputField = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-gray-300 font-semibold mb-3 text-lg">
      {label}
    </label>
    <input
      type={type}
      className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500"
      placeholder={placeholder}
    />
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-slate-800/50 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-110 hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Portfolio;
