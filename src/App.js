import React, { useState } from 'react';
import { ExternalLink, Github, Mail, ArrowRight, Code2, Brain, Zap } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AutoMate Pro",
      subtitle: "Intelligent AI Agent with Natural Language Understanding",
      category: "AI & Automation",
      description: "A cognitive AI agent featuring Claude/ChatGPT-level natural language understanding with self-discovering capabilities, context awareness, and adaptive learning.",
      features: [
        "Self-discovering capabilities - introspects skills at runtime",
        "Natural language understanding - communicate like you would with Claude",
        "Context maintenance - remembers conversation history and resolves references",
        "Learning from usage - adapts to your patterns over time",
        "Complex task planning - breaks down multi-step requests intelligently"
      ],
      tech: ["Python", "LLM", "AI Agent Architecture", "NLP"],
      highlights: "Pure intelligence without hardcoding - cognitive brain with self-aware capabilities"
    },
    {
      id: 2,
      title: "AutoCompSec",
      subtitle: "Autonomous Security Agent",
      category: "AI & Security",
      description: "An advanced, modular security agent that scans, analyzes, and reports on system vulnerabilities using AI-driven insights.",
      features: [
        "Automated CVE vulnerability scanning with NVD data",
        "SSH & remote system enumeration",
        "AI-powered remediation planning using LLMs",
        "Learning & memory systems for continuous improvement",
        "Comprehensive compliance reporting"
      ],
      tech: ["Python", "AI/LLM", "Security", "OpenAI API"],
      highlights: "Self-learning security agent with natural language understanding"
    },
    {
      id: 3,
      title: "ft_irc",
      subtitle: "Internet Relay Chat Server",
      category: "Network Programming",
      description: "A fully functional IRC server implementation following RFC 1459 standard, handling multiple clients and channels.",
      features: [
        "RFC 1459 compliant IRC protocol",
        "Multi-client connection handling",
        "Channel management & user modes",
        "Asynchronous socket communication",
        "Essential IRC commands implementation"
      ],
      tech: ["C++", "Networking", "Sockets", "System Programming"],
      highlights: "Deep dive into network programming and asynchronous communication"
    },
    {
      id: 4,
      title: "Cub3D",
      subtitle: "3D Ray-Casting Game Engine",
      category: "Graphics & Game Dev",
      description: "A 3D game engine using ray-casting, allowing exploration of 2D maps in first-person perspective with real-time rendering.",
      features: [
        "Ray-casting algorithm for 3D rendering",
        "Texture-mapped walls with realistic visuals",
        "Collision detection system",
        "Real-time keyboard input handling",
        "First-person camera mechanics"
      ],
      tech: ["C", "Graphics", "Ray-Casting", "Game Development"],
      highlights: "Complete 3D rendering pipeline from scratch"
    },
    {
      id: 5,
      title: "Minishell",
      subtitle: "Custom Shell Implementation",
      category: "Systems Programming",
      description: "A custom command-line interpreter similar to bash, focusing on process creation, file descriptors, and signal handling.",
      features: [
        "Process creation & management",
        "File descriptor handling",
        "Signal handling (SIGINT, SIGQUIT)",
        "Command parsing & execution",
        "Pipe & redirection support"
      ],
      tech: ["C", "Unix/Linux", "System Calls", "Process Management"],
      highlights: "Deep understanding of Unix fundamentals and shell mechanics"
    },
    {
      id: 6,
      title: "born2beroot",
      subtitle: "Linux System Administration",
      category: "DevOps & Administration",
      description: "A comprehensive Linux administration project configuring a Debian VM from scratch with security and automation.",
      features: [
        "Debian VM configuration from scratch",
        "System security hardening",
        "Networking configuration",
        "Service installation & management",
        "Bash automation & monitoring"
      ],
      tech: ["Linux", "Bash", "System Admin", "Security"],
      highlights: "Production-grade system configuration and security practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              dev.portfolio
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium">
                Software Engineer @ 1337 (42 Network)
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Intelligent
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"> Systems & Experiences</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              From AI-powered security agents to game engines and system administration. Crafting solutions at the intersection of systems programming and artificial intelligence.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2">
                View My Work <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border border-slate-600 hover:border-blue-400 rounded-lg font-semibold transition">
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-400">A selection of my work spanning AI, systems programming, and game development</p>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition">{project.title}</h3>
                        <p className="text-slate-400">{project.subtitle}</p>
                      </div>
                      <div className="text-slate-500 group-hover:text-blue-400 transition">
                        {expandedProject === project.id ? '−' : '+'}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{project.description}</p>

                    {expandedProject === project.id && (
                      <div className="space-y-4 pt-4 border-t border-slate-700/50 animate-fade-in">
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex gap-2 text-slate-300">
                                <span className="text-blue-400 mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-400 mb-2">Highlights</h4>
                          <p className="text-slate-300 italic">{project.highlights}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded bg-slate-700/50 text-slate-300 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <Code2 className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Systems Programming</h3>
              <p className="text-slate-400">C, C++, Unix/Linux, networking, socket programming, and low-level system design</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <Brain className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">AI & Automation</h3>
              <p className="text-slate-400">LLM integration, AI agents, natural language processing, and intelligent automation</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Security & DevOps</h3>
              <p className="text-slate-400">Vulnerability scanning, system administration, security hardening, and compliance</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-slate-800/50 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-slate-400 mb-6">I'm always interested in new projects and opportunities. Feel free to reach out!</p>
                <div className="flex gap-4">
                  <button className="p-3 bg-slate-800 hover:bg-blue-500 rounded-lg transition">
                    <Mail size={20} />
                  </button>
                  <button className="p-3 bg-slate-800 hover:bg-blue-500 rounded-lg transition">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              <div className="text-right text-slate-400">
                <p>Based in Morocco 🇲🇦</p>
                <p className="mt-4">Open for collaborations and exciting projects</p>
              </div>
            </div>
            <div className="border-t border-slate-800/50 pt-8 text-center text-slate-500 text-sm">
              <p>© 2024 Portfolio. Crafted with passion and code.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}