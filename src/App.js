import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowRight, Code2, Brain, Zap, Linkedin, Copy, Check, Terminal, Shield, ChevronRight, ExternalLink, Server, Lock, Database, Bot, MessageCircle } from 'lucide-react';

import Vera1 from './assest/VERA1.jpeg';
import Vera2 from './assest/VERA2.jpeg';
import OpenSec1 from './assest/OpenSec1.jpeg';
import OpenSec2 from './assest/OpenSec2.jpeg';
import LLMShield1 from './assest/LLMShield1.png';
import LLMShield2 from './assest/LLMShield2.png';
import Atlass1 from './assest/ATLASS1.png';
import Atlass2 from './assest/ATLASS2.png';
import Atlass3 from './assest/ATLASS3.png';

const projects = [
  {
    id: 1,
    title: "Vera",
    subtitle: "Intelligent Hybrid Agent",
    category: "AI & Automation",
    description: "A local-first AI assistant featuring a Hybrid NLU Engine that intelligently routes tasks between on-device processing (0ms latency) and cloud-based LLMs. Built with hardware-bound security and recursive agentic capabilities.",
    features: ["Hybrid NLU Engine (Local/Cloud)", "Recursive Agentic Loop", "Hardware-Bound Security", "Multi-Channel Control"],
    tech: ["Python", "PySide6", "LangChain", "SQLite"],
    icon: Brain,
    images: [Vera1, Vera2]
  },
  {
    id: 2,
    title: "OpenSec",
    subtitle: "Autonomous Security Agent",
    category: "AI & Security",
    description: "An advanced autonomous security agent that proactively scans, identifies, and remediates system vulnerabilities. Leveraging AI driven insights, it executes automated CVE analysis, SSH enumeration, and critical patch management for hardened infrastructure.",
    features: ["Automated CVE Scanning", "Intelligent Threat Analysis", "Secure SSH Enumeration", "AI Driven Remediation Plans"],
    tech: ["Python", "OpenAI API", "Security"],
    icon: Lock,
    images: [OpenSec1, OpenSec2]
  },
  {
    id: 3,
    title: "LLMShield",
    subtitle: "Enterprise Grade AI Gateway",
    category: "AI Infrastructure",
    description: "A production grade AI Gateway acting as a secure middleware between apps and LLM providers. Features Zero Trust security, semantic caching for low latency, and intelligent routing that reduces costs by 60-80%.",
    features: ["Zero Trust Security & PII Redaction", "Semantic Caching & Cost Routing", "Real time Observability", "Multi Tenant Architecture"],
    tech: ["Python 3.11+", "FastAPI", "React 18", "PostgreSQL", "Redis"],
    icon: Shield,
    images: [LLMShield1, LLMShield2]
  },
  {
    id: 4,
    title: "Inception",
    subtitle: "Docker Infrastructure",
    category: "DevOps & Virtualization",
    description: "System administration project focusing on Docker containerization. Sets up a secure web infrastructure with NGINX (TLSv1.2+), WordPress, and MariaDB via Docker Compose.",
    features: ["Secure Container Orchestration", "TLSv1.3 & Network Isolation", "Persistent Data Management", "Microservices Architecture"],
    tech: ["Docker", "NGINX", "MariaDB", "WordPress"],
    icon: Server
  },
  {
    id: 5,
    title: "Minishell",
    subtitle: "Bash-like Shell",
    category: "Systems Programming",
    description: "Custom command line interpreter exploring process creation, file descriptors, and signal handling.",
    features: ["Custom Process Management", "Advanced Signal Handling", "Pipeline & I/O Redirection", "Built-in Command System"],
    tech: ["C", "Unix", "System Calls"],
    icon: Terminal
  },
  {
    id: 6,
    title: "born2beroot",
    subtitle: "Server Administration",
    category: "DevOps",
    description: "Comprehensive Linux administration project configuring a Debian VM with strict security policies.",
    features: ["Strict Security Hardening", "Logical Volume Management", "Automated System Monitoring", "Access Control & Firewalling"],
    tech: ["Linux", "Bash", "SysAdmin"],
    icon: Zap
  },
  {
    id: 7,
    title: "Transcendence",
    subtitle: "Log Management Infrastructure",
    category: "DevOps",
    description: "Collaborative project (team of 5) focusing on full stack development where I acted as the DevOps lead. Engineered a robust log management infrastructure using the ELK stack (Elasticsearch, Logstash, Kibana) with secure component access and data retention policies.",
    features: ["ELK Stack Log Management", "Secure Component Access", "Log Retention & Archiving", "Collaborative DevOps Management"],
    tech: ["Elasticsearch", "Logstash", "Kibana", "Docker"],
    icon: Database
  },
  {
    id: 8,
    title: "ATLASS",
    subtitle: "AI-Powered Job Matching Platform",
    category: "AI Integrations",
    description: "An AI-powered platform utilizing OpenRouter/OpenAI APIs to match developer profiles against job requirements. Features a 0-100 match score with detailed AI explanations, a one-click application system, and comprehensive dashboards for recruiters and applicants.",
    features: ["AI Match Scoring System", "Detailed AI Fit Explanations", "One-Click Application Processing", "Recruiter & Applicant Dashboards"],
    tech: ["OpenRouter API", "OpenAI", "Full-Stack"],
    icon: Bot,
    images: [Atlass1, Atlass2, Atlass3]
  }
];

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [targetProject, setTargetProject] = useState(null);
  const [activeGalleryId, setActiveGalleryId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (projectId) => {
    setActiveGalleryId(projectId);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage === 'projects' && targetProject) {
      setTimeout(() => {
        const element = document.getElementById(`project-${targetProject}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight effect
          element.classList.add('ring-2', 'ring-white/50');
          setTimeout(() => element.classList.remove('ring-2', 'ring-white/50'), 2000);
        }
        setTargetProject(null);
      }, 100); // Small delay to ensure rendering
    }
  }, [currentPage, targetProject]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@us3ph.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Nav = () => (
    <div className="fixed top-6 left-0 w-full z-50 pointer-events-none flex justify-center px-6 md:px-8">
      <div className="w-full max-w-7xl flex flex-row justify-end">
        <nav
          style={{
            width: isScrolled ? '195px' : '100%',
            transition: 'width 2.5s ease-in-out, background-color 2.5s, backdrop-filter 2.5s',
          }}
          className={`pointer-events-auto rounded-full overflow-hidden h-16 ${isScrolled
            ? 'backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg shadow-black/20'
            : 'backdrop-blur-0 bg-transparent border-transparent'
            }`}
        >
          <div className="w-full h-full relative flex items-center">
            <div
              style={{
                left: '1.5rem',
              }}
              className="absolute text-lg md:text-xl font-bold tracking-tighter text-white cursor-pointer hover:opacity-80 whitespace-nowrap"
              onClick={() => setCurrentPage('home')}
            >
              Youssef Tabia
            </div>

            <div
              style={{
                opacity: isScrolled ? 0 : 1,
                pointerEvents: isScrolled ? 'none' : 'auto',
                transition: 'opacity 1.5s ease-in-out',
              }}
              className="hidden md:flex gap-8 absolute right-0 pr-6 md:pr-8"
            >
              {['home', 'projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`font-medium uppercase tracking-widest transition-colors ${currentPage === item ? 'text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black font-sans relative overflow-hidden flex flex-col">
      {Nav()}

      {/* Gallery Modal */}
      {activeGalleryId && (() => {
        const proj = projects.find(p => p.id === activeGalleryId);
        if (!proj || !proj.images || proj.images.length === 0) return null;
        return (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fade-in" onClick={() => setActiveGalleryId(null)}>
            <button className="absolute top-6 right-6 md:top-8 md:right-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors animate-slide-up">
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center animate-slide-up" onClick={e => e.stopPropagation()}>
              {proj.images.length > 1 && (
                <button
                  onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : proj.images.length - 1)}
                  className="absolute left-2 md:left-8 p-3 md:p-4 rounded-full bg-black/60 hover:bg-white/10 text-white transition-colors z-50 backdrop-blur-md"
                ><ChevronRight size={32} className="rotate-180" /></button>
              )}
              <img src={proj.images[currentImageIndex]} alt={proj.title} className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-all duration-500" />
              {proj.images.length > 1 && (
                <button
                  onClick={() => setCurrentImageIndex(prev => prev < proj.images.length - 1 ? prev + 1 : 0)}
                  className="absolute right-2 md:right-8 p-3 md:p-4 rounded-full bg-black/60 hover:bg-white/10 text-white transition-colors z-50 backdrop-blur-md"
                ><ChevronRight size={32} /></button>
              )}
              {proj.images.length > 1 && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
                  {proj.images.map((_, i) => (
                    <button key={i} onClick={() => setCurrentImageIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`} />
                  ))}
                </div>
              )}
            </div>
            <div className="mt-16 md:mt-20 text-white text-xl md:text-2xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {proj.title} {proj.images.length > 1 && <span className="text-zinc-500 font-medium text-base ml-3">{currentImageIndex + 1} / {proj.images.length}</span>}
            </div>
          </div>
        );
      })()}

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 min-h-[calc(100vh-80px)]">
        <div key={currentPage}>
          {currentPage === 'home' && (
            <div className="space-y-32">
              {/* Hero Section */}
              <section className="relative pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8 opacity-0 animate-slide-up">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for hire
                </div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-600 bg-[length:200%_auto] animate-text-gradient">
                    BUILDING <br />
                    INTELLIGENCE
                  </span>
                </h1>

                <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Software Engineer specializing in AI agents, systems programming, and scalable architecture.
                  Crafting intelligent solutions at <span className="text-white font-medium">1337 (42 Network)</span>.
                </p>

                <div className="flex gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className="group flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all"
                  >
                    View Projects
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="px-6 py-3 text-sm border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                  >
                    Contact Me
                  </button>
                </div>
              </section>

              {/* Featured Projects Preview */}
              <section>
                <div className="flex justify-between items-end mb-12">
                  <h2 className="text-4xl font-bold tracking-tight">Selected Works</h2>
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    View All <ChevronRight size={20} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.slice(0, 3).map((project, idx) => (
                    <div
                      key={project.id}
                      onClick={() => {
                        setTargetProject(project.id);
                        setCurrentPage('projects');
                      }}
                      className="group relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-500">
                        <project.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-200 transition-colors">{project.title}</h3>
                      <p className="text-zinc-400 mb-6 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {currentPage === 'projects' && (
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Projects</h1>
              <p className="text-xl text-zinc-400 mb-16 max-w-2xl">
                A curated collection of my technical endeavors, ranging from low-level systems to high-level system intelligence.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                  <div
                    key={project.id}
                    id={`project-${project.id}`}
                    className="group relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-white/5 transition-all duration-300 opacity-0 animate-slide-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Top Left Floating Picture Badge (Message Bubble Style) */}
                    <div
                      className={`absolute -top-10 -left-10 z-30 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${project.images && project.images.length > 0 ? 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto cursor-pointer flex' : 'hidden'}`}
                      onClick={(e) => {
                        if (project.images && project.images.length > 0) {
                          e.stopPropagation();
                          openGallery(project.id);
                        }
                      }}
                    >
                      <div className="w-16 h-16 rounded-3xl rounded-br-sm border border-white/20 bg-black/80 backdrop-blur-md flex items-center justify-center shadow-2xl hover:bg-white/10 hover:scale-110 transition-all group/badge">
                        <MessageCircle size={24} className="text-zinc-300 group-hover/badge:text-white transition-colors" />
                        {project.images && project.images.length > 1 && (
                          <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">{project.images.length}</span>
                        )}
                      </div>
                    </div>

                    {/* Top Right Corner Link */}
                    <div className="absolute top-6 right-6 z-20">
                      <a href="https://github.com/us3ph" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/link block">
                        <ExternalLink size={20} className="text-zinc-400 group-hover/link:text-white" />
                      </a>
                    </div>

                    <div className="mb-6 relative z-10 w-fit">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 inline-block">
                        <project.icon size={40} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <div className="flex gap-3 mb-6">
                      <span className="text-zinc-500 font-mono text-sm border-l border-zinc-700 pl-3">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-zinc-400 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-zinc-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                      {project.tech.map(t => (
                        <span key={t} className="text-sm px-4 py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(currentPage === 'about' || currentPage === 'contact') && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 opacity-0 animate-slide-up">
                {currentPage === 'about' ? 'About Me' : 'Get in Touch'}
              </h1>

              {currentPage === 'about' ? (
                <div className="grid gap-12 text-lg text-zinc-400 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-2xl text-white font-light mb-8">
                      I'm <span className="font-semibold">Youssef Tabia</span>, a software engineer from Morocco based in<span className="text-white">1337</span> (42 Network).
                    </p>
                    <div className="grid gap-8 border-l-2 border-white/10 pl-8">
                      <p>
                        My journey is defined by a deep curiosity for how things work under the hood.
                        From implementing my own shell and IRC server in C/C++ to building cognitive architectures for AI agents,
                        I thrive at the intersection of systems programming and artificial intelligence.
                      </p>
                      <p>
                        I don't just write code; I architect solutions. Whether it's optimizing a ray-casting engine
                        or designing a secure, autonomous security scanner, I aim for excellence in performance, security, and scalability.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <Code2 className="mb-4 text-white" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">Systems Mastery</h3>
                      <p className="text-sm">Low-level control with C/C++, Linux, and kernel logic.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <Brain className="mb-4 text-white" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">AI Engineering</h3>
                      <p className="text-sm">LLM integration, RAG pipelines, and agentic workflows.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <Shield className="mb-4 text-white" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                      <p className="text-sm">Vulnerability assessment, network safety, and secure coding.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-12 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
                  <div className="space-y-8">
                    <p className="text-xl text-zinc-400">
                      Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                        <Mail className="text-white" size={24} />
                        <div className="flex-1">
                          <p className="text-sm text-zinc-500">Email</p>
                          <p className="text-white font-mono">contact@us3ph.me</p>
                        </div>
                        <button
                          onClick={handleCopyEmail}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} className="text-zinc-400" />}
                        </button>
                      </div>

                      <a href="https://github.com/us3ph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <Github className="text-white" size={24} />
                        <div>
                          <p className="text-sm text-zinc-500">GitHub</p>
                          <p className="text-white font-mono">github.com/us3ph</p>
                        </div>
                        <ExternalLink size={20} className="ml-auto text-zinc-500 group-hover:text-white transition-colors" />
                      </a>

                      <a href="https://www.linkedin.com/in/youssef-tabia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <Linkedin className="text-white" size={24} />
                        <div>
                          <p className="text-sm text-zinc-500">LinkedIn</p>
                          <p className="text-white font-mono">in/youssef-tabia</p>
                        </div>
                        <ExternalLink size={20} className="ml-auto text-zinc-500 group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col justify-center items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                      <Mail size={32} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Shoot me an email</h3>
                    <p className="text-zinc-400 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
                    <a
                      href="mailto:contact@me"
                      className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                      Start a conversation
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-sm">
            © 2026 Youssef Tabia All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/us3ph" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/youssef-tabia/" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:contact@me" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}