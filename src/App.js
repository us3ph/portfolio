import React, { useState } from 'react';
import { Github, Mail, ArrowRight, Code2, Brain, Zap, Linkedin, Copy, Check } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedProject, setExpandedProject] = useState(null);
  const [copied, setCopied] = useState(false);

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

  const handleViewWork = () => {
    window.open('https://github.com/us3ph', '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@us3ph.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // HOME PAGE
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden" style={{ fontFamily: "'Segoe UI', 'Inter', sans-serif" }}>
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
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
                us3ph
              </div>
              <nav className="hidden md:flex gap-8">
                <button onClick={() => setCurrentPage('about')} className="text-sm font-medium hover:text-blue-400 transition">About</button>
                <a href="#projects" className="text-sm font-medium hover:text-blue-400 transition">Projects</a>
                <button onClick={() => setCurrentPage('contact')} className="text-sm font-medium hover:text-blue-400 transition">Contact</button>
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
              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                Building Intelligent
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"> Systems & Experiences</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                From AI-powered security agents to game engines and system administration. Crafting solutions at the intersection of systems programming and artificial intelligence.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleViewWork}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg hover:shadow-blue-500/20">
                  View My Work <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-3 border border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition">
                  Get In Touch
                </button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-bold mb-2 tracking-tight">Featured Projects</h2>
                <p className="text-slate-300 font-light">A selection of my work spanning AI, systems programming, and game development</p>
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
                          <p className="text-slate-400 font-light">{project.subtitle}</p>
                        </div>
                        <div className="text-slate-500 group-hover:text-blue-400 transition text-2xl">
                          {expandedProject === project.id ? '−' : '+'}
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4 font-light leading-relaxed">{project.description}</p>

                      {expandedProject === project.id && (
                        <div className="space-y-4 pt-4 border-t border-slate-700/50 animate-fade-in">
                          <div>
                            <h4 className="font-semibold text-blue-400 mb-2">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-2 text-slate-300 font-light">
                                  <span className="text-blue-400 mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-400 mb-2">Highlights</h4>
                            <p className="text-slate-300 italic font-light">{project.highlights}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded bg-slate-700/50 text-slate-300 text-sm font-medium">
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
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-5xl font-bold mb-12 tracking-tight">Core Competencies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition">
                <Code2 className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Systems Programming</h3>
                <p className="text-slate-400 font-light">C, C++, Unix/Linux, networking, socket programming, and low-level system design</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition">
                <Brain className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">AI & Automation</h3>
                <p className="text-slate-400 font-light">LLM integration, AI agents, natural language processing, and intelligent automation</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-yellow-500/50 transition">
                <Zap className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Security & DevOps</h3>
                <p className="text-slate-400 font-light">Vulnerability scanning, system administration, security hardening, and compliance</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-800/50 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                  <p className="text-slate-400 mb-6 font-light">I'm always interested in new projects and opportunities. Feel free to reach out!</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/us3ph" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-blue-500 rounded-lg transition" title="GitHub">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/youssef-tabia/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-blue-500 rounded-lg transition" title="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <button onClick={() => setCurrentPage('contact')} className="p-3 bg-slate-800 hover:bg-blue-500 rounded-lg transition" title="Email">
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
                <div className="text-right text-slate-400 font-light">
                </div>
              </div>
              <div className="border-t border-slate-800/50 pt-8 text-center text-slate-500 text-sm font-light">
                <p>© 2025 us3ph. Crafted with passion and code.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  // ABOUT PAGE
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden" style={{ fontFamily: "'Segoe UI', 'Inter', sans-serif" }}>
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
                us3ph
              </div>
              <nav className="hidden md:flex gap-8">
                <button onClick={() => setCurrentPage('about')} className="text-sm font-medium hover:text-blue-400 transition">About</button>
                <button onClick={() => setCurrentPage('home')} className="text-sm font-medium hover:text-blue-400 transition">Projects</button>
                <button onClick={() => setCurrentPage('contact')} className="text-sm font-medium hover:text-blue-400 transition">Contact</button>
              </nav>
            </div>
          </header>

          {/* About Content */}
          <section className="max-w-4xl mx-auto px-6 py-20 md:py-40">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
                  About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
                </h1>
              </div>

              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                <p>
                  I'm <span className="text-blue-400 font-semibold text-xl">Youssef Tabia</span>, a passionate software engineering student from <span className="text-blue-400 font-semibold">Morocco 🇲🇦</span>, currently studying at <span className="text-purple-400 font-semibold text-xl">1337 (42 Network)</span>.
                </p>

                <p>
                  I'm deeply passionate about coding, artificial intelligence, cybersecurity, and emerging technologies. My goal is to build intelligent systems that solve real-world problems and push the boundaries of what's possible.
                </p>

                <p>
                  Whether it's developing AI-powered agents, building secure systems, or creating innovative applications, I'm committed to continuous learning and creating impactful solutions.
                </p>

                <div className="pt-8">
                  <h2 className="text-3xl font-bold mb-4">What I Do</h2>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-blue-400">▸</span>
                      <span>Build intelligent AI systems and autonomous agents</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400">▸</span>
                      <span>Develop secure systems with cybersecurity best practices</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400">▸</span>
                      <span>Create innovative applications using modern technologies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400">▸</span>
                      <span>Master low-level systems programming and architecture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-12">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg hover:shadow-blue-500/20">
                  Get In Touch <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // CONTACT PAGE
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden" style={{ fontFamily: "'Segoe UI', 'Inter', sans-serif" }}>
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
                us3ph
              </div>
              <nav className="hidden md:flex gap-8">
                <button onClick={() => setCurrentPage('about')} className="text-sm font-medium hover:text-blue-400 transition">About</button>
                <button onClick={() => setCurrentPage('home')} className="text-sm font-medium hover:text-blue-400 transition">Projects</button>
                <button onClick={() => setCurrentPage('contact')} className="text-sm font-medium text-blue-400">Contact</button>
              </nav>
            </div>
          </header>

          {/* Contact Content */}
          <section className="max-w-4xl mx-auto px-6 py-20 md:py-40">
            <div className="space-y-12">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
                  Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-2xl text-slate-300 font-light">I'd love to hear from you. Let's work together!</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Email */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
                  <Mail className="text-blue-400 mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-4">Email</h3>
                  <p className="text-slate-300 mb-6 font-light">Feel free to reach out via email for any inquiries or collaboration opportunities.</p>
                  <div className="space-y-3">
                    <p className="text-xl text-blue-400 font-semibold">contact@us3ph.me</p>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCopyEmail}
                        className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition flex items-center justify-center gap-2 font-semibold text-sm"
                      >
                        {copied ? (
                          <>
                            <Check size={16} /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} /> Copy
                          </>
                        )}
                      </button>
                      <a
                        href="mailto:contact@us3ph.me"
                        className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition font-semibold text-sm flex items-center justify-center gap-2"
                      >
                        <Mail size={16} /> Send Mail
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8">
                  <Linkedin className="text-blue-400 mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-4">Connect</h3>
                  <p className="text-slate-300 mb-6 font-light">Connect with me on social media and check out my GitHub for more projects.</p>
                  <div className="space-y-3">
                    <a href="https://github.com/us3ph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-slate-700 hover:bg-blue-500 rounded-lg transition font-semibold">
                      <Github size={20} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/youssef-tabia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-slate-700 hover:bg-blue-500 rounded-lg transition font-semibold">
                      <Linkedin size={20} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition flex items-center gap-2">
                  ← Back Home
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}