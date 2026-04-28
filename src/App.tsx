import { motion } from 'motion/react';
import { 
  FileText, 
  Map, 
  Database, 
  Users, 
  Code, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Workflow,
  Cpu,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import ProfileImg from './Profile.jpg';
import AiVideoDemo from './AI_gen/Con cáo và chùm nho.mp4';
import ErpLogin from './ERP/đăng nhập.png';
import ErpEmployeeProfile from './ERP/hồ sơ nhân viên.png';
import ErpSchedule from './ERP/quản lý lịch làm việc.png';
import ErpRequest from './ERP/request.png';
import ErpNotification from './ERP/thông báo.png';
import ErpShiftTable from './ERP/bảng phân ca.png';
import Ba1 from './BA/anh1.png';
import Ba2 from './BA/anh2.png';
import Ba3 from './BA/anh3.png';
import Ba4 from './BA/anh4.png';
import Ba5 from './BA/anh5.png';
import Ba6 from './BA/anh6.png';
import Ba7 from './BA/anh7.png';
import Ba8 from './BA/anh8.png';
import Ba9 from './BA/anh9.png';
import Ba10 from './BA/anh10.png';

// --- Types ---
type ProjectMedia =
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; caption?: string };

interface Project {
  id: string;
  title: string;
  category: string;
  overview: string;
  role: string;
  responsibilities: string[];
  features: string[];
  deliverables: string[];
  tools: string[];
  outcomes: string[];
  media?: ProjectMedia[];
}

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-3 left-3 right-3 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[calc(100%-24px)] mx-auto px-10 flex justify-between items-center">
        <a href="#home" className="text-lg font-black tracking-tighter text-brand-dark uppercase">
          HOANG ANH NGUYEN <span className="text-brand-primary">//</span> BUSINESS ANALYST INTERN
        </a>
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-extrabold text-brand-dark hover:text-brand-primary transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && (
      <span className="section-label">
        {subtitle}
      </span>
    )}
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
    >
      {children}
    </motion.h2>
  </div>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
    <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
    
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-[15px] font-bold tracking-[0.2em] uppercase mb-8">
          Available for Opportunities
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-brand-dark mb-8 leading-[0.9]">
          Nguyen Thi <br />
          <span className="text-brand-primary drop-shadow-sm">Hoang Anh</span>
        </h1>
        <p className="text-lg text-brand-text mb-10 max-w-lg leading-relaxed font-medium">
          A <span className="text-brand-dark font-bold underline decoration-brand-primary uppercase italic text-base">Business Analyst Intern</span> with hands-on experience in digital transformation, process modeling, requirement documentation, and AI-powered business solutions.
        </p>
        <div className="flex flex-wrap gap-5">
          <a href="#projects" className="btn-primary flex items-center gap-3">
            View Projects <ChevronRight size={18} />
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative hidden md:block"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl rotate-0 h-[600px]">
           <img 
              src={ProfileImg}
              alt="Hoang Anh Nguyen Portrait"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-brand-primary/0" />
        </div>
        <div className="absolute -inset-4 bg-brand-primary/15 rounded-[40px] -z-10 rotate-0" />
        
    
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-10 bg-white h-full border-b border-brand-line">
    <div className="">
      <SectionHeading subtitle="Profile">About Me</SectionHeading>
      <div className="space-y-10">
        <div className="space-y-6 text-base leading-relaxed text-brand-secondary">
          <p>
            I am a <strong className="text-brand-dark">Junior Digital Business & Artificial Intelligence student</strong> with hands-on experience in IT business analysis, process modeling, and AI-driven business solutions.
          </p>
          <p>
            My expertise lies in <strong className="text-brand-dark">system analysis, process modeling (BPMN), and requirement documentation</strong>.
          </p>
        </div>
        
        <div className="space-y-8 mt-12">
          <div className="border-l-3 border-brand-primary pl-4">
            <h4 className="font-black text-brand-dark text-sm uppercase tracking-wider mb-1">Analytical Mindset</h4>
            <p className="text-[20px] text-brand-secondary leading-tight">Structured problem-solving applied to business challenges.</p>
          </div>
          <div className="border-l-3 border-brand-primary pl-4">
            <h4 className="font-black text-brand-dark text-sm uppercase tracking-wider mb-1">Strategic Liaison</h4>
            <p className="text-[20px] text-brand-secondary leading-tight">Clear communication between tech teams and stakeholders.</p>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-line">
          <span className="section-label mb-6">Education</span>
          <div className="space-y-6">
            <div>
              <p className="font-mono text-[18px] text-brand-primary mb-1">2023 - 2027</p>
              <h4 className="font-black text-brand-dark text-base leading-tight mb-1">UEL (VNU-HCMC)</h4>
              <p className="text-[20px] text-brand-secondary font-medium">Digital Business & AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code className="text-brand-primary" size={24} />,
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Applications & Tools",
      icon: <Workflow className="text-brand-primary" size={24} />,
      skills: ["BRD", "SRS", "BPMN", "Wireframes"]
    },
    {
      title: "Platforms & Frameworks",
      icon: <Layers className="text-brand-primary" size={24} />,
      skills: ["GitHub", "n8n", "Agile/Scrum", "SDLC", "UAT"]
    },
    {
      title: "Languages",
      icon: <Users className="text-brand-primary" size={24} />,
      skills: ["English (TOEIC B2)"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-10 border-b border-brand-line h-full flex flex-col items-stretch">
      <SectionHeading subtitle="Core Competencies">Skills</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-12 font-mono flex-1">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 border-b border-brand-line pb-2">
              {group.icon}
              <h3 className="text-base font-black uppercase tracking-tight">{group.title}</h3>
            </div>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-[18px] font-bold text-brand-secondary leading-tight truncate">
                  → {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const items = [
    {
      role: "Research Associate",
      company: "BA-AI LAB – UEL",
      period: "Oct 2025 - Present",
      tasks: ["Research practical applications of AI in business, education, and technology-driven industries", "Built an AI-powered automation workflow using n8n to transform user prompts into video scripts and generate short-form video content", "Integrated AI models and automation tools to support script generation, content structuring, and video production within an end-to-end workflow", "Evaluated generated scripts against original story content using semantic similarity techniques to assess content relevance and consistency"]
    },
    {
      role: "Business Analyst Intern",
      company: "THD CYBER SECURITY",
      period: "Jun 2025 - Nov 2025",
      tasks: ["Gathered and analyzed business requirements to ensure alignment with project scope and stakeholder needs","Created business workflows and BPMN diagrams to document processes and propose improvements","Prepared BA documentation, including SRS, BRD, User Guides, and requirement notes", "Supported project tracking, issue reporting, and stakeholder coordination with the Project Manager"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-10 bg-white border-b border-brand-line">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
           <SectionHeading subtitle="Career Evolution">Experience</SectionHeading>
           
        </div>
        <div className="lg:col-span-8 lg:pl-8 lg:w-[calc(125%+2rem)] flex flex-col gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="border border-brand-line p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="font-mono text-[18px] text-brand-primary shrink-0 uppercase tracking-widest">{item.period}</div>
              <div className="flex-1">
                <h3 className="text-lg font-black uppercase mb-1 tracking-tight">{item.role}</h3>
                <p className="text-[17px] font-bold text-brand-secondary mb-4 italic uppercase">{item.company}</p>
                <div className="grid grid-cols-1 gap-2">
                   {item.tasks.map((task, i) => (
                     <p key={i} className="text-[16px] font-medium text-brand-secondary flex gap-3"><span className="text-brand-primary">→</span> {task}</p>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
       id: "erp-hrm",
       title: "ERP HRM SYSTEM",
       category: "Check-in, Request, Notification modules",
       overview: "A modular HRM transformation focusing on digitizing core employee operations with clear request approval flow, attendance check-in, and automated notifications.",
       role: "Main Business Analyst",
       responsibilities: [
         "System flow: Employee → Request module → Approver → Notification module → Check-in module",
         "Request module: Create, submit, track, and approve employee requests",
         "Request module: Support configurable request types and approval levels",
         "Request module: Sync approved request data with Check-in",
         "Check-in module: Record check-in / check-out data",
         "Check-in module: Support GPS and camera-based validation",
         "Check-in module: Manage attendance history, timesheets, and work schedules",
         "Notification module: Send automatic and manual notifications",
         "Notification module: Support In-App, Email, and SMS channels",
         "Notification module: Track read/click interactions and user preferences"
       ],
       features: [
         "System flow: Employee → Request module → Approver → Notification module → Check-in module",
         "Module functions: Request / Check-in / Notification"
       ],
       deliverables: ["Wireframes", "BRD", "SRS", "BPMN 2.0 Models"],
       tools: ["Figma", "Draw.io", "Excel", "Agile Framework"],
       outcomes: [
         "Clear end-to-end request approval process across modules",
         "Centralized attendance and scheduling management",
         "Consistent multi-channel notification experience"
       ],
       media: [
         { type: "image", src: ErpRequest, alt: "ERP HRM — Request module wireframe" },
         { type: "image", src: ErpNotification, alt: "ERP HRM — Notification module wireframe" },
         { type: "image", src: ErpEmployeeProfile, alt: "ERP HRM — Employee profile wireframe" },
         { type: "image", src: ErpSchedule, alt: "ERP HRM — Work schedule management wireframe" },
         { type: "image", src: ErpShiftTable, alt: "ERP HRM — Shift table wireframe" },
         { type: "image", src: ErpLogin, alt: "ERP HRM — Login wireframe" }
       ]
    },
    {
       id: "ai-video",
       title: "AI-GENERATED VIDEO RESEARCH",
       category: "AI-Agent-Based Story-to-Video Pipeline",
       overview: "A research-based AI automation by n8n project transforming short fables into animated educational videos using multi-agent workflow, prompt engineering, and text-to-video generation",
       role: "Project Manager",
       responsibilities: [
         "Designed the end-to-end process from story input to final video output",
         "Defined the role of each AI agent (analysis, character/script/video generation, rendering)",
         "Structured prompts to control story consistency & character identity",
         "Contributed to research documentation & pipeline explanation"
       ],
       features: [
         "Pipeline: Chat input → Story Analysis + Script Generation → Character generation → Video Generation → Assembly & Render",
         "Output: Complete animated video from story input (characters, scene scripts, clips, final render)"
       ],
       deliverables: [
         "Workflow Analysis & Design",
         "Agent Logic Definition",
         "Prompt Engineering Structure",
         "Research Documentation"
       ],
       tools: ["n8n", "Gemini", "Google Drive", "Vertex AI / Veo", "Supabase", "Shotstack", "API Workflow"],
       outcomes: [
         "Animated storytelling supports children's learning by combining visual and auditory channels, making educational content more engaging and easier to understand",
      
       ],
       media: [
         {
           type: "video",
           src: AiVideoDemo,
           caption: "Product Deployment Website Interface"
         }
       ]
    },
    {
       id: "competency",
       title: "COMPETENCY MANAGEMENT & RESOURCE ALLOCATION SYSTEM",
       category: "Manage employee competencies",
       overview: "A system analysis and design project focused on helping project-based companies manage employee competencies and allocate resources more effectively",
       role: "Main Business Analyst/Project Manager",
       responsibilities: [
         "Competency Update: HR initializes competency periods and employees' skill profiles are updated through evaluation",
         "Project Requirement Setup: Project Managers define project information, required skills, levels, workload, and priority",
         "Matching & Recommendation: The system matches employee competencies with project requirements and current workload",
         "Approval & Confirmation: Line Managers review suggested allocations, while employees confirm participation",
         "Performance & Overload Monitoring: The system periodically monitors workload and sends alerts when overload risks are detected"
       ],
       features: [
         "Workflow: Competency Update → Project Requirement Setup → Matching & Recommendation → Approval & Confirmation → Performance & Overload Monitoring"
       ],
       deliverables: ["Wireframes", "BRD", "DFD Level 1", "ERD", "Sequence Diagrams"],
       tools: ["Figma", "Draw.io", "Excel", "SQL"],
       outcomes: [
         "Improved competency visibility and employee skill tracking",
         "More effective resource allocation based on skills and workload",
         "Early overload detection through monitoring and alerts"
       ],
       media: [
         { type: "image", src: Ba1, alt: "Competency system — Employee list & detail" },
         { type: "image", src: Ba5, alt: "Competency system — Employee list (alternate)" },
         { type: "image", src: Ba3, alt: "Competency system — Evaluation form" },
         { type: "image", src: Ba8, alt: "Competency system — Evaluation periods list" },
         { type: "image", src: Ba9, alt: "Competency system — Skills list & create skill" },
         { type: "image", src: Ba6, alt: "Competency system — Projects list & detail" },
         { type: "image", src: Ba4, alt: "Competency system — Create allocation request / create project" },
         { type: "image", src: Ba2, alt: "Competency system — Allocation request detail" },
         { type: "image", src: Ba7, alt: "Competency system — Allocation request status" },
         { type: "image", src: Ba10, alt: "Competency system — Employee evaluation history" }
       ]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Strategic Impact">Projects</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedProject(project)}
              className="card-hover rounded-[2.5rem] overflow-hidden cursor-pointer flex flex-col h-full ring-1 ring-gray-100"
            >
              <div className="aspect-[16/10] bg-brand-bg flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-transparent opacity-50" />
                <div className="z-10 text-center px-10">
                  <span className="text-[18px] font-black text-brand-primary uppercase tracking-[0.18em] mb-4 block">{project.category}</span>
                  <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter leading-[0.9]">{project.title}</h3>
                </div>
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                   <ChevronRight size={20} />
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col bg-white">
                <p className="text-base font-medium text-brand-text mb-8 flex-1 leading-relaxed italic">
                  "{project.overview}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map(tool => (
                    <span key={tool} className="text-[15px] font-black uppercase tracking-[0.18em] text-brand-text/40">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md"
            />
            <motion.div 
              layoutId={selectedProject.id}
              className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row ring-1 ring-black/5"
            >
              {/* Left Column: Visual/Heading */}
              <div className={`p-10 md:p-14 bg-white flex flex-col justify-between border-r border-gray-100 ${selectedProject.media?.length ? 'md:w-1/2' : 'md:w-2/5'}`}>
                <div className="min-h-0">
                  {selectedProject.media?.length ? (
                    <div className="mb-10">
                      {selectedProject.media.some((m) => m.type === 'image') && (
                        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3">
                          {selectedProject.media
                            .filter((m) => m.type === 'image')
                            .map((m) => (
                              <div
                                key={`${m.type}-${m.src}`}
                                className="snap-start shrink-0 w-[90%] md:w-full"
                              >
                                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50">
                                  <img
                                    src={m.src}
                                    alt={m.alt}
                                    className="w-full h-[320px] md:h-[380px] object-cover"
                                    loading="lazy"
                                  />
                                </div>
                                {m.caption && (
                                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-text/50">
                                    {m.caption}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      )}

                      {selectedProject.media[0].type === 'video' && (
                        <div>
                          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50">
                            <video
                              src={selectedProject.media[0].src}
                              controls
                              playsInline
                              className="w-full h-[320px] md:h-[380px] object-cover"
                            />
                          </div>
                          {selectedProject.media[0].caption && (
                            <p className="mt-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-text/50">
                              {selectedProject.media[0].caption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between gap-6">
                    <button 
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 text-brand-primary font-black uppercase text-[12px] tracking-[0.25em] hover:translate-x-1 transition-transform"
                  >
                   <ChevronRight className="rotate-180" size={14} /> Back to Projects
                  </button>
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.35em]">Case Study</span>
                  </div>

                  <h2 className="mt-6 text-4xl md:text-5xl font-black text-brand-dark tracking-tighter leading-[0.9]">
                    {selectedProject.title}
                  </h2>

                  <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-brand-primary/5 rounded-2xl text-sm font-black text-brand-dark uppercase tracking-tight">
                    <Users size={16} className="text-brand-primary" /> {selectedProject.role}
                  </div>
                </div>
                
                <div className="mt-14 pt-10 border-t border-gray-100">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-5">Core Technology</h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px] font-bold text-brand-primary">
                    {selectedProject.tools.map(tool => (
                       <span key={tool}>· {tool}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Info */}
              <div className={`p-10 md:p-14 bg-brand-bg overflow-y-auto max-h-[90vh] space-y-14 ${selectedProject.media?.length ? 'md:w-1/2' : 'md:w-3/5'}`}>
                <div className="grid sm:grid-cols-2 gap-10">
                   <div>
                    <h4 className="text-[12px] font-black uppercase tracking-[0.25em] mb-5 text-brand-primary">Project Overview</h4>
                    <p className="text-brand-text font-medium leading-relaxed text-[15px]">{selectedProject.overview}</p>
                  </div>
                   <div>
                    <h4 className="text-[12px] font-black uppercase tracking-[0.25em] mb-5 text-brand-primary">Outcomes & Value</h4>
                    <ul className="space-y-3">
                      {selectedProject.outcomes.map((item, i) => (
                        <li key={i} className="flex gap-4 text-[14px] font-bold text-brand-dark leading-snug">
                          <CheckCircle2 size={16} className="mt-0.5 text-brand-primary shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                   <h4 className="text-[12px] font-black uppercase tracking-[0.25em] mb-6 text-brand-primary">Key BA Deliverables</h4>
                   <div className="grid sm:grid-cols-2 gap-5">
                      {selectedProject.responsibilities.map((item, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm text-[14px] font-medium leading-relaxed text-brand-text">
                           {item}
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-12">
                   <div>
                    <h4 className="text-[12px] font-black uppercase tracking-[0.25em] mb-6 text-brand-primary">Pipeline & Output</h4>
                    <div className="space-y-3">
                      {selectedProject.features.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-200">
                          <div className="mt-1 shrink-0"><Cpu size={14} className="text-brand-primary" /></div>
                          <p className="text-[14px] font-bold text-brand-dark leading-snug">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                   <div>
                    <h4 className="text-[12px] font-black uppercase tracking-[0.25em] mb-6 text-brand-primary">BA Deliverables</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.deliverables.map(item => (
                        <span
                          key={item}
                          className="px-4 py-2 bg-brand-dark text-white rounded-xl text-[12px] font-black uppercase tracking-[0.25em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
      <div>
        <SectionHeading subtitle="Contact Me">Let's Connect</SectionHeading>
        <p className="text-xl text-brand-text mb-16 max-w-md leading-relaxed font-medium">
          Ready to bring an <span className="text-brand-dark font-black">analytical mindset</span> and <span className="text-brand-dark font-black">strategic thinking</span> to your team? Let's discuss how I can contribute.
        </p>
        
        <div className="space-y-12">
          <a href="mailto:anh.ng2202.work@gmail.com" className="flex items-center gap-8 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-xl shadow-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-[18px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Email</p>
              <p className="text-xl font-black text-brand-dark tracking-tighter">anh.ng2202.work@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:+84366540096" className="flex items-center gap-8 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-xl shadow-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-[18px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Direct</p>
              <p className="text-xl font-black text-brand-dark tracking-tighter">(+84) 366 540 096</p>
            </div>
          </a>

          <div className="flex items-center gap-8 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-xl shadow-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
              <MapPin size={28} />
            </div>
            <div>
              <p className="text-[17px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Based In</p>
              <p className="text-xl font-black text-brand-dark tracking-tighter">Ho Chi Minh City, VN</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-12 md:p-16 rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
        <h3 className="text-3xl font-black mb-10 tracking-tighter">Quick Inquiry</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[18px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Identity</label>
            <input type="text" placeholder="Your Name" className="w-full p-6 rounded-[1.5rem] bg-brand-bg border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold text-brand-dark" />
          </div>
          <div className="space-y-2">
            <label className="text-[18px] font-black uppercase tracking-widest text-gray-400 ml-4">Contact Gateway</label>
            <input type="email" placeholder="email@company.com" className="w-full p-6 rounded-[1.5rem] bg-brand-bg border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold text-brand-dark" />
          </div>
          <div className="space-y-2">
            <label className="text-[18px] font-black uppercase tracking-widest text-gray-400 ml-4">Collaborative Idea</label>
            <textarea placeholder="Tell me about your project or role..." rows={4} className="w-full p-6 rounded-[1.5rem] bg-brand-bg border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold text-brand-dark resize-none" />
          </div>
          <button type="submit" className="w-full btn-primary py-6 text-lg font-black uppercase tracking-widest shadow-xl shadow-brand-primary/20">Send Initiation</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-gray-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div>
        <h2 className="text-2xl font-black tracking-tighter text-brand-dark mb-4">
          HOANG ANH<span className="text-brand-primary">.</span>
        </h2>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-text/40">
          © 2026 Crafted with Precision and Strategic Insight
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 uppercase text-[11px] font-black tracking-[0.3em]">
        <a href="#home" className="hover:text-brand-primary transition-colors">Home</a>
        <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-brand-primary transition-colors">Skills</a>
        <a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a>
        <a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-2">LinkedIn <ExternalLink size={12} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-brand-primary selection:text-white scroll-smooth p-3">
      <div className="main-frame">
        <Navbar />
        <main>
          <Hero />
          <div className="grid lg:grid-cols-12 min-h-screen">
            <div className="lg:col-span-4 border-r border-brand-line">
              <About />
            </div>
            <div className="lg:col-span-8">
              <Skills />
            </div>
          </div>
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
