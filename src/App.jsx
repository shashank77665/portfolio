import React from 'react';
import { 
  Mail, MapPin, Phone, ExternalLink, 
  Briefcase, Code, Server, Database, Award, User, ChevronDown
} from 'lucide-react';

// --- DATA ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Shashank Kumar",
    titles: ["SAP BODS Consultant", "Flutter Developer", "Infrastructure Enthusiast"],
    email: "shashank77665@gmail.com",
    phone: "+91-9931077665",
    location: "New Town, Kolkata 700161",
    linkedin: "https://www.linkedin.com/in/shashank77665/"
  },
  education: {
    university: "Chandigarh University",
    degree: "Bachelor of Engineering - Computer Science and Engineering",
    duration: "2021 - 2025",
    gpa: "7.84 CGPA"
  },
  experience: [
    {
      id: 1,
      role: "SAP BODS Consultant",
      company: "IBM",
      duration: "Nov 2025 - Present",
      description: "Working in the Data Migration Factory (DMF) team supporting SAP S/4HANA data migration. Developing ETL pipelines using SAP Data Services (BODS) for migration from SAP, Microsoft NAV, JDE, and Azure. Monitoring migration jobs and resolving failures.",
      skills: ["SAP BODS", "S/4HANA", "ETL", "BAPI", "Data Migration"]
    },
    {
      id: 2,
      role: "SAP EIM Trainee",
      company: "IBM",
      duration: "Sept 2025 - Oct 2025",
      description: "Completed training in SAP Enterprise Information Management (EIM) with hands-on experience in SAP Data Services (BODS) and ETL pipeline development. Worked on data extraction, transformation, profiling, and validation.",
      skills: ["SAP EIM", "Data Profiling", "Validation"]
    },
    {
      id: 3,
      role: "Flutter Developer Intern",
      company: "SembAI",
      duration: "Dec 2024 - Jan 2025",
      description: "Developed features for FieldApp, implementing dynamic task fetching and barcode scanning. Improved UI based on client feedback and optimized backend API communication.",
      skills: ["Flutter", "Dart", "Mobile App Development", "API Integration"]
    },
    {
      id: 4,
      role: "Flutter Developer Intern",
      company: "Medoc",
      duration: "Jul 2024 - Aug 2024",
      description: "Built and optimized cross-platform mobile application features.",
      skills: ["Flutter", "Dart"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Home Lab Infrastructure",
      category: "Virtualization & Self-Hosted Systems",
      description: "Built a home lab using Proxmox to run and manage virtualized services. Deployed Pi-hole for network-wide DNS filtering and ad blocking. Implemented Frigate AI surveillance with RTSP cameras for real-time object detection.",
      tags: ["Proxmox", "Pi-hole", "Frigate AI", "Self-Hosting"]
    },
    {
      id: 2,
      title: "ShieldBot",
      category: "Cybersecurity & DevOps Platform",
      description: "Developed an end-to-end cybersecurity simulation platform capable of replicating DDoS and brute-force scenarios with mitigation mechanisms. Built rate-limiting and IP subnet-based blocking systems. Deployed on AWS EC2.",
      tags: ["Django", "Flutter", "AWS EC2", "Cybersecurity"]
    },
    {
      id: 3,
      title: "WiFi-Zone",
      category: "Computer Networks & Infrastructure",
      description: "Designed and deployed a community Wi-Fi network with secure connectivity and intelligent bandwidth management. Implemented captive portal authentication, NAT, and subnet-based access controls.",
      tags: ["Networking", "Captive Portal", "Bandwidth Management"]
    }
  ],
  skills: {
    programming: ["C++", "Java", "Python", "SQL", "Dart"],
    sap: ["SAP Data Services (BODS)", "SAP BAPI", "SAP S/4HANA", "Data Migration Factory (DMF)", "ETL Pipelines"],
    cloudAndTools: ["AWS", "Firebase", "Git", "Postman", "VS Code", "Wireshark"],
    databases: ["MySQL", "MongoDB"]
  },
  certifications: [
    {
      id: 1,
      name: "SAP Certified Associate - Data Engineer SAP HANA",
      issuer: "SAP",
      date: "Dec 2025"
    },
    {
      id: 2,
      name: "Package Specialist - SAP EIM Certificate",
      issuer: "IBM Consulting",
      date: "Oct 2025"
    },
    {
      id: 3,
      name: "Networking Basics",
      issuer: "Cisco",
      date: "Feb 2025"
    }
  ]
};

// --- REUSABLE COMPONENTS ---

const SectionHeading = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="p-3 bg-cyan-500/10 rounded-lg">
      <Icon className="text-cyan-400 w-6 h-6" />
    </div>
    <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
    <div className="flex-1 h-px bg-slate-800 ml-4"></div>
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs font-medium rounded-full border border-slate-700">
    {children}
  </span>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* NAVBAR (Sticky) */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-100 tracking-tight">
            S<span className="text-cyan-500">.</span>K<span className="text-cyan-500">.</span>
          </span>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full text-left md:text-center flex flex-col md:items-center">
          <p className="text-cyan-400 font-mono mb-4 text-sm md:text-base">Hello World, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-6">
            {PORTFOLIO_DATA.personal.name}.
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-8 max-w-3xl">
            I bridge the gap between <span className="text-slate-200">enterprise data migration</span> and <span className="text-slate-200">modern application development.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg mb-10 leading-relaxed">
            Currently working at IBM as a SAP BODS Consultant handling complex S/4HANA migrations, with a strong foundation in Flutter development and self-hosted infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              View My Work
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 space-y-32 pb-32">
        
        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="scroll-mt-24">
          <SectionHeading title="About Me" icon={User} />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a versatile software engineer with a dual passion for building user-facing applications and architecting robust backend data pipelines. 
              </p>
              <p>
                My professional journey currently has me at IBM, where I specialize in SAP Data Services and ETL pipelines for massive enterprise migrations. Before that, I spent time in the startup world building cross-platform mobile apps using Flutter.
              </p>
              <p>
                When I'm not writing code for work, you'll probably find me tinkering with my Proxmox home lab, setting up AI surveillance systems, or exploring cybersecurity protocols.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full"></div>
              <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" /> Education
              </h3>
              <div className="space-y-2 relative z-10">
                <p className="text-lg font-medium text-slate-100">{PORTFOLIO_DATA.education.degree}</p>
                <p className="text-cyan-400">{PORTFOLIO_DATA.education.university}</p>
                <div className="flex justify-between text-sm text-slate-400 mt-2">
                  <span>{PORTFOLIO_DATA.education.duration}</span>
                  <span>{PORTFOLIO_DATA.education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <SectionHeading title="Experience" icon={Briefcase} />
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            
            {PORTFOLIO_DATA.experience.map((job, index) => (
              <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="w-4 h-4" />
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                    <span className="text-sm font-mono text-cyan-400">{job.duration}</span>
                  </div>
                  <h4 className="text-lg text-slate-400 mb-4">{job.company}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <SectionHeading title="Featured Projects" icon={Code} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {PORTFOLIO_DATA.projects.map((project) => (
              <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Server className="w-6 h-6 text-cyan-400" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-xs font-mono text-blue-400 mb-4">{project.category}</p>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-slate-500">#{tag}</span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* SKILLS & CERTIFICATIONS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Skills */}
            <div>
              <SectionHeading title="Technical Arsenal" icon={Database} />
              <div className="space-y-6">
                
                <div>
                  <h4 className="text-slate-300 font-semibold mb-3">SAP & Data Engineering</h4>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.sap.map(skill => <Badge key={skill}>{skill}</Badge>)}
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-300 font-semibold mb-3">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.programming.map(skill => <Badge key={skill}>{skill}</Badge>)}
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-300 font-semibold mb-3">Cloud & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.cloudAndTools.map(skill => <Badge key={skill}>{skill}</Badge>)}
                  </div>
                </div>

              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeading title="Certifications" icon={Award} />
              <div className="space-y-4">
                {PORTFOLIO_DATA.certifications.map(cert => (
                  <div key={cert.id} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="p-2 bg-slate-950 rounded-lg shrink-0">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-medium leading-tight">{cert.name}</h4>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <span className="text-slate-400">{cert.issuer}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                        <span className="text-cyan-400 font-mono text-xs">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER & CONTACT */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </a>
            
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              
              <span>LinkedIn</span>
            </a>
            
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-5 h-5" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="w-5 h-5" />
              <span>{PORTFOLIO_DATA.personal.phone}</span>
            </div>
            
          </div>
          
          <p className="text-slate-600 text-sm font-mono">
            Designed & Built by {PORTFOLIO_DATA.personal.name}
          </p>
        </div>
      </footer>

    </div>
  );
}