import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowRight, Code2, Brain, Zap, Linkedin, Copy, Check, Terminal, Shield, ChevronRight, ExternalLink, Server, Lock, Database, Bot, Images } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

import Vera1 from './assest/VERA1.jpeg';
import Vera2 from './assest/VERA2.jpeg';
import OpenSec1 from './assest/OpenSec1.jpeg';
import OpenSec2 from './assest/OpenSec2.jpeg';
import LLMShield1 from './assest/LLMShield1.png';
import LLMShield2 from './assest/LLMShield2.png';
import Atlass1 from './assest/ATLASS1.png';
import Atlass2 from './assest/ATLASS2.png';
import Atlass3 from './assest/ATLASS3.png';
import Riadjadis1 from './assest/Riadjadis1.png';
import Riadjadis2 from './assest/Riadjadis2.png';
import Artillo1 from './assest/Artillo1.png';
import Artillo2 from './assest/Artillo2.png';
import FtTrancendence1 from './assest/ft_trancendence1.png';
import FtTrancendence2 from './assest/ft_trancendence2.png';
import Born2beroot1 from './assest/born2beroot1.png';
import Born2beroot2 from './assest/born2beroot2.png';
import Minishell1 from './assest/minishell1.gif';
import Inception1 from './assest/inception1.jpg';
import Inception2 from './assest/inception2.jpg';
import PortraitAnimation from './PortraitAnimation';
import SelectedWorksCards from './SelectedWorksCards';
const projects = [
  {
    id: 1,
    title: "Vera",
    github: "https://github.com/us3ph/Vera",
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
    github: "https://github.com/us3ph/OpenSec",
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
    github: "https://github.com/us3ph/LLMShield",
    subtitle: "Enterprise Grade AI Gateway",
    category: "AI Infrastructure",
    description: "A production grade AI Gateway acting as a secure middleware between apps and LLM providers. Features Zero Trust security, semantic caching for low latency, and intelligent routing that reduces costs by 60-80%.",
    features: ["Zero Trust Security & PII Redaction", "Semantic Caching & Cost Routing", "Real time Observability", "Multi Tenant Architecture"],
    tech: ["Python", "FastAPI", "React 18", "PostgreSQL", "Redis"],
    icon: Shield,
    images: [LLMShield1, LLMShield2]
  },
  {
    id: 4,
    title: "Inception",
    github: "https://github.com/us3ph/Inception",
    subtitle: "Docker Infrastructure",
    category: "DevOps & Virtualization",
    description: "System administration project focusing on Docker containerization. Sets up a secure web infrastructure with NGINX (TLSv1.2+), WordPress, and MariaDB via Docker Compose.",
    features: ["Secure Container Orchestration", "TLSv1.3 & Network Isolation", "Persistent Data Management", "Microservices Architecture"],
    tech: ["Docker", "NGINX", "MariaDB", "WordPress"],
    icon: Server,
    images: [Inception1, Inception2]
  },
  {
    id: 5,
    title: "Minishell",
    github: "https://github.com/us3ph/Minishell",
    subtitle: "Bash-like Shell",
    category: "Systems Programming",
    description: "Custom command line interpreter exploring process creation, file descriptors, and signal handling.",
    features: ["Custom Process Management", "Advanced Signal Handling", "Pipeline & I/O Redirection", "Built-in Command System"],
    tech: ["C", "Unix", "System Calls"],
    icon: Terminal,
    images: [Minishell1]
  },
  {
    id: 6,
    title: "born2beroot",
    github: "https://github.com/us3ph/born2beroot",
    subtitle: "Server Administration",
    category: "DevOps",
    description: "Comprehensive Linux administration project configuring a Debian VM with strict security policies.",
    features: ["Strict Security Hardening", "Logical Volume Management", "Automated System Monitoring", "Access Control & Firewalling"],
    tech: ["Linux", "Bash", "SysAdmin"],
    icon: Zap,
    images: [Born2beroot1, Born2beroot2]
  },
  {
    id: 7,
    title: "Transcendence",
    github: "https://github.com/us3ph/Transcendence",
    subtitle: "Log Management Infrastructure",
    category: "DevOps",
    description: "Collaborative project (team of 5) focusing on full stack development where I acted as the DevOps lead. Engineered a robust log management infrastructure using the ELK stack (Elasticsearch, Logstash, Kibana) with secure component access and data retention policies.",
    features: ["ELK Stack Log Management", "Secure Component Access", "Log Retention & Archiving", "Collaborative DevOps Management"],
    tech: ["Elasticsearch", "Logstash", "Kibana", "Docker"],
    icon: Database,
    images: [FtTrancendence1, FtTrancendence2]
  },
  {
    id: 8,
    title: "ATLASS",
    github: "https://github.com/us3ph/ATLASS",
    subtitle: "AI-Powered Job Matching Platform",
    category: "AI Integrations",
    description: "An AI-powered platform utilizing OpenRouter/OpenAI APIs to match developer profiles against job requirements. Features a 0-100 match score with detailed AI explanations, a one-click application system, and comprehensive dashboards for recruiters and applicants.",
    features: ["AI Match Scoring System", "Detailed AI Fit Explanations", "One-Click Application Processing", "Recruiter & Applicant Dashboards"],
    tech: ["OpenRouter API", "OpenAI", "Full-Stack"],
    icon: Bot,
    images: [Atlass1, Atlass2, Atlass3]
  },
  {
    id: 9,
    title: "Riadjadis",
    github: "https://github.com/us3ph/Riadjadis",
    subtitle: "Booking Web Application",
    category: "Web Development",
    description: "A web application for booking stays and experiences with a clean reservation flow, availability checks, and a modern user dashboard for guests and administrators.",
    features: ["Online Reservation Workflow", "Availability and Calendar Management", "Admin and User Dashboards", "Responsive Booking Experience"],
    tech: ["React", "Node.js", "PostgreSQL", "NestJS"],
    icon: Server,
    images: [Riadjadis1, Riadjadis2]
  },
  {
    id: 10,
    title: "Artillo",
    github: "https://github.com/us3ph/Artillo",
    subtitle: "Artisan Store Web App",
    category: "E-Commerce",
    description: "An online store focused on poufs, rugs, and artisan handmade products with curated collections, product pages, and a smooth shopping experience.",
    features: ["Catalog for Poufs and Rugs", "Artisan Product Collections", "Product Detail and Shopping Flow", "Mobile Friendly Storefront"],
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    icon: Code2,
    images: [Artillo1, Artillo2]
  }
];

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [targetProject, setTargetProject] = useState(null);
  const [activeGalleryId, setActiveGalleryId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [calendarBlockSize, setCalendarBlockSize] = useState(13);
  const [calendarBlockMargin, setCalendarBlockMargin] = useState(4);
  const [calendarFontSize, setCalendarFontSize] = useState(14);

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
    const updateCalendarSize = () => {
      setIsMobileView(window.innerWidth < 768);

      if (window.innerWidth < 640) {
        setCalendarBlockSize(4);
        setCalendarBlockMargin(2);
        setCalendarFontSize(10);
      } else if (window.innerWidth < 1024) {
        setCalendarBlockSize(10);
        setCalendarBlockMargin(3);
        setCalendarFontSize(12);
      } else {
        setCalendarBlockSize(13);
        setCalendarBlockMargin(4);
        setCalendarFontSize(14);
      }
    };

    updateCalendarSize();
    window.addEventListener('resize', updateCalendarSize);
    return () => window.removeEventListener('resize', updateCalendarSize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

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
      <div className="w-full max-w-7xl flex flex-row justify-end relative">
        <nav
          style={{
            width: isScrolled ? (isMobileView ? '170px' : '195px') : '100%',
            transition: 'width 2.5s ease-in-out, background-color 2.5s, backdrop-filter 2.5s',
          }}
          className="pointer-events-auto overflow-hidden h-16 bg-transparent border-transparent"
        >
          <div className="w-full h-full relative flex items-center">
            <div
              style={{
                left: isScrolled ? '50%' : '1.5rem',
                transform: isScrolled ? 'translate3d(-50%, 0, 0)' : 'translate3d(0, 0, 0)',
                transition: 'left 2.5s ease-in-out, transform 2.5s ease-in-out',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                willChange: 'transform, left'
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
                  className={`text-sm font-medium uppercase tracking-widest transition-colors ${currentPage === item ? 'text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                opacity: isScrolled ? 0 : 1,
                pointerEvents: isScrolled ? 'none' : 'auto',
                transition: 'opacity 1.5s ease-in-out',
              }}
              className="md:hidden absolute right-3 p-3 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="relative block w-5 h-4">
                <span className={`absolute left-0 top-0 h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden pointer-events-auto absolute top-20 right-0 w-52 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="p-2">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-widest transition-colors ${currentPage === item ? 'bg-white/10 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`bg-background text-primary selection:bg-white selection:text-black font-sans relative flex flex-col items-center ${currentPage === 'about' || currentPage === 'contact' ? 'h-screen overflow-hidden' : 'min-h-screen overflow-hidden'
      }`}>
      <PortraitAnimation />
      {Nav()}

      {/* Gallery Modal */}
      {activeGalleryId && (() => {
        const proj = projects.find(p => p.id === activeGalleryId);
        if (!proj || !proj.images || proj.images.length === 0) return null;
        return (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fade-in" onClick={() => setActiveGalleryId(null)}>
            <button className="absolute top-6 right-6 md:top-8 md:right-8 p-2 md:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-all duration-300 hover:scale-110 hover:rotate-90 animate-slide-up">
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
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

      <main className={`px-6 max-w-7xl mx-auto relative z-10 w-full ${currentPage === 'about' || currentPage === 'contact'
        ? 'pt-24 md:pt-32 h-[calc(100vh)] overflow-hidden'
        : 'pt-32 pb-20 min-h-[calc(100vh-80px)]'
        }`}>
        <div key={currentPage}>
          {currentPage === 'home' && (
            <div className="space-y-32">
              {/* Hero Section */}
              <section className="relative pt-4 mt-[15vh] md:mt-0">
                <div className="w-full flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8 opacity-0 animate-slide-up">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for hire
                  </div>
                </div>
                <style jsx>{`
                  @media (max-width: 767px) {
                    .available-hire-mobile {
                      display: flex;
                      justify-content: center;
                      width: 100%;
                    }
                  }
                `}</style>
                <div className="available-hire-mobile" />

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-600 bg-[length:200%_auto] animate-text-gradient text-center md:text-left">
                    BUILDING
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-600 bg-[length:200%_auto] animate-text-gradient text-center md:text-left">
                    INTELLIGENCE
                  </span>
                </h1>

                <p className="max-w-[38ch] mx-auto md:mx-0 text-base md:text-xl text-zinc-400 leading-7 md:leading-relaxed text-center md:text-left mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Software Engineer specializing in AI agents, systems programming, and scalable architecture.
                  Crafting intelligent solutions at <span className="text-white font-medium">1337 (42 Network)</span>.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
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

              {/* Featured Projects Preview — Scroll-Driven Morph */}
              <section className="max-w-6xl mx-auto w-full translate-x-[2px] md:translate-x-0">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center w-full md:w-auto mb-4 md:mb-0">Selected Works</h2>
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className="relative -top-1 md:top-0 text-zinc-400 hover:text-white flex items-center justify-center md:justify-start transition-colors animate-bounce-right mt-10 md:mt-0"
                    aria-label="View Projects"
                  >
                    <ChevronRight size={28} className="animate-bounce-x" />
                  </button>
                </div>

                <SelectedWorksCards projects={projects} setTargetProject={setTargetProject} setCurrentPage={setCurrentPage} openGallery={openGallery} />
              </section>
            </div>
          )}

          {currentPage === 'projects' && (
            <div className="w-full relative z-10 pt-12 md:pt-16">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center md:text-left">Projects</h1>
              <p className="text-sm text-zinc-400 mb-12 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                A curated collection of my technical endeavors, ranging from low-level systems to high-level system intelligence.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                  <div
                    key={project.id}
                    id={`project-${project.id}`}
                    className="group relative p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-white/5 transition-all duration-300 opacity-0 animate-slide-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Top Left Floating Picture Badge */}
                    <div
                      className={`absolute -top-5 -left-5 z-30 transition-all duration-300 ${project.images && project.images.length > 0 ? 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto cursor-pointer flex scale-95 group-hover:scale-100' : 'hidden'}`}
                      onClick={(e) => {
                        if (project.images && project.images.length > 0) {
                          e.stopPropagation();
                          openGallery(project.id);
                        }
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl rounded-br-sm border border-white/20 bg-black/80 backdrop-blur-md flex items-center justify-center shadow-2xl hover:bg-white/10 transition-colors group/badge">
                        <Images size={16} className="text-zinc-300 group-hover/badge:text-white transition-colors" />
                        {project.images && project.images.length > 0 && (
                          <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">{project.images.length}</span>
                        )}
                      </div>
                    </div>

                    {/* Top Right Corner Link */}
                    <div className="absolute top-4 right-4 z-20">
                      <a href="https://github.com/us3ph/ATLASS" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/link block">
                        <ExternalLink size={14} className="text-zinc-400 group-hover/link:text-white" />
                      </a>
                    </div>

                    <div className="mb-3 relative z-10 flex items-center gap-3 md:block">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 w-full mb-3">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 inline-flex shrink-0 mb-1 md:mb-0">
                          <project.icon size={18} className="text-white" />
                        </div>
                        <h3 className="text-base font-bold mb-0 group-hover:text-zinc-200 transition-colors text-center w-full md:text-left md:self-center">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className="text-zinc-500 font-mono text-xs border-l border-zinc-700 pl-2">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <div className="w-1 h-1 rounded-full bg-white" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-flow-col auto-cols-fr gap-1 md:gap-1.5 md:flex md:flex-wrap md:justify-center pt-4 border-t border-white/10">
                      {project.tech.map(t => (
                        <span key={t} className="min-w-0 text-center text-[9px] md:text-xs px-1 md:px-3 py-0.5 md:py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">
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
            <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl relative z-10 text-left pt-12 md:pt-16">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 opacity-0 animate-slide-up">
                {currentPage === 'about' ? 'About Me' : 'Get in Touch'}
              </h1>

              {currentPage === 'about' ? (
                <div className="grid gap-2.5 text-[11px] md:text-xs text-zinc-400 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-sm md:text-base text-white font-light mb-2">
                      I'm <span className="font-semibold">Youssef Tabia</span>, a software engineer from Morocco based in <span className="text-white">1337</span> (42 Network).
                    </p>
                    <div className="grid gap-1.5 border-l border-white/10 pl-4">
                      <p>
                        My journey is defined by a deep curiosity for how things work under the hood.
                        From implementing my own shell and IRC server in C/C++ to building cognitive architectures for AI agents,
                        I thrive at the intersection of systems programming and artificial intelligence.
                      </p>
                      <p>
                        I don't just write code, I architect solutions. Whether it's optimizing a ray-casting engine
                        or designing a secure, autonomous security scanner, I aim for excellence in performance, security, and scalability.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-2 mt-1">
                    <div className="p-3 rounded-xl bg-black border border-white/10 flex flex-col items-center text-center">
                      <Code2 className="mb-1.5 text-white mx-auto" size={18} />
                      <h3 className="text-xs font-bold text-white mb-0.5">Systems Mastery</h3>
                      <p className="text-[10px]">Low-level control with C/C++, Linux, and kernel logic.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black border border-white/10 flex flex-col items-center text-center">
                      <Brain className="mb-1.5 text-white mx-auto" size={18} />
                      <h3 className="text-xs font-bold text-white mb-0.5">AI Engineering</h3>
                      <p className="text-[10px]">LLM integration, RAG pipelines, and agentic workflows.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black border border-white/10 flex flex-col items-center text-center">
                      <Shield className="mb-1.5 text-white mx-auto" size={18} />
                      <h3 className="text-xs font-bold text-white mb-0.5">Security First</h3>
                      <p className="text-[10px]">Vulnerability assessment, network safety, and secure coding.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-400 max-w-md">
                      Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-1.5 max-w-sm">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10">
                        <Mail className="text-white" size={14} />
                        <span className="flex-1 text-[11px] text-white font-mono leading-none mt-[1px]">contact@us3ph.me</span>
                        <button onClick={handleCopyEmail} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-zinc-400" />}
                        </button>
                      </div>

                      <a href="https://github.com/us3ph/ATLASS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-colors group">
                        <Github className="text-white" size={14} />
                        <span className="flex-1 text-[11px] text-white font-mono leading-none mt-[1px]">github.com/us3ph/ATLASS</span>
                        <ExternalLink size={14} className="ml-auto text-zinc-500 group-hover:text-white transition-colors" />
                      </a>

                      <a href="https://www.linkedin.com/in/youssef-tabia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-colors group">
                        <Linkedin className="text-white" size={14} />
                        <span className="flex-1 text-[11px] text-white font-mono leading-none mt-[1px]">in/youssef-tabia</span>
                        <ExternalLink size={14} className="ml-auto text-zinc-500 group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {currentPage === 'home' && (
        <section className="max-w-7xl mx-auto px-6 w-full mb-8">
          <div className="w-fit mx-auto rounded-3xl border border-white/10 bg-black p-5 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_60px_-40px_rgba(2,132,90,0.35)]">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6 pl-2">
              <Github size={20} className="text-zinc-300" />
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-zinc-100">GitHub Contribution Activity</h3>
            </div>

            <div className="pb-2">
              <div className="w-max mx-auto">
                <GitHubCalendar
                  username="us3ph"
                  colorScheme="dark"
                  blockSize={calendarBlockSize}
                  blockMargin={calendarBlockMargin}
                  fontSize={calendarFontSize}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                  theme={{
                    dark: ['#0b1220', '#083218', '#0b6a2d', '#1faa4b', '#6de383'],
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage !== 'contact' && currentPage !== 'about' && (
        <footer className="relative z-10 w-full border-t border-white/5 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-zinc-500 text-sm">
              © 2026 Youssef Tabia All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/us3ph/ATLASS" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/youssef-tabia/" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:contact@me" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}