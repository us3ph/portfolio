import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowRight, Code2, Brain, Zap, Linkedin, Copy, Check, Terminal, Shield, Cpu, ChevronRight, ExternalLink, Server, Lock } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Vera",
      subtitle: "Intelligent AI Agent",
      category: "AI & Automation",
      description: "A cognitive AI agent featuring Claude/ChatGPT-level natural language understanding with self-discovering capabilities.",
      features: ["Self-discovering capabilities", "Natural language understanding", "Context maintenance"],
      tech: ["Python", "LLM", "NLP"],
      icon: Brain
    },
    {
      id: 2,
      title: "CompSec",
      subtitle: "Autonomous Security Agent",
      category: "AI & Security",
      description: "Advanced security agent that scans, analyzes, and reports on system vulnerabilities using AI-driven insights.",
      features: ["Automated CVE scanning", "SSH enumeration", "remediation planning"],
      tech: ["Python", "OpenAI API", "Security"],
      icon: Lock
    },
    {
      id: 3,
      title: "LLMShield",
      subtitle: "Production-Grade Reliability Platform",
      category: "AI Infrastructure",
      description: "LLMShield makes AI applications safer, cheaper, and more trustworthy by detecting hallucinations, optimizing costs by 60-80%, and providing real-time observability.",
      features: ["Hallucination detection", "60-80% cost optimization", "Real-time observability"],
      tech: ["Python", "LLM", "Analytics"],
      icon: Shield
    },
    {
      id: 4,
      title: "Inception",
      subtitle: "Docker Infrastructure",
      category: "DevOps & Virtualization",
      description: "System administration project focusing on Docker containerization. Sets up a secure web infrastructure with NGINX (TLSv1.2+), WordPress, and MariaDB via Docker Compose.",
      features: ["Docker Compose", "TLSv1.2/1.3 Security", "Service Containerization"],
      tech: ["Docker", "NGINX", "MariaDB", "WordPress"],
      icon: Server
    },
    {
      id: 5,
      title: "Minishell",
      subtitle: "Bash-like Shell",
      category: "Systems Programming",
      description: "Custom command-line interpreter exploring process creation, file descriptors, and signal handling.",
      features: ["Process management", "Signal handling", "Pipe & redirection"],
      tech: ["C", "Unix", "System Calls"],
      icon: Terminal
    },
    {
      id: 6,
      title: "born2beroot",
      subtitle: "Server Administration",
      category: "DevOps",
      description: "Comprehensive Linux administration project configuring a Debian VM with strict security policies.",
      features: ["VM configuration", "Security hardening", "Bash automation"],
      tech: ["Linux", "Bash", "SysAdmin"],
      icon: Zap
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@us3ph.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div
          className="text-2xl font-bold tracking-tighter text-white cursor-pointer hover:opacity-80 transition"
          onClick={() => setCurrentPage('home')}
        >
          Youssef Tabia
        </div>
        <div className="hidden md:flex gap-8">
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
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black font-sans relative overflow-hidden">
      {/* Premium Static Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Top Center Spotlight */}
        <div
          className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />

        {/* Subtle Grain/Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      <Nav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 min-h-[calc(100vh-80px)]">
        <div key={currentPage} className="animate-fade-in">
          {currentPage === 'home' && (
            <div className="space-y-32">
              {/* Hero Section */}
              <section className="relative pt-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8 animate-fade-in">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for hire
                </div>

                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  BUILDING <br />
                  <span className="text-zinc-600">INTELLIGENCE</span>
                </h1>

                <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Software Engineer specializing in AI agents, systems programming, and scalable architecture.
                  Crafting intelligent solutions at <span className="text-white font-medium">1337 (42 Network)</span>.
                </p>

                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all"
                  >
                    View Projects
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
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
                      className="group relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
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
                    className="group p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-white/5 transition-all duration-300"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <project.icon size={40} className="text-white" />
                      </div>
                      <a href="https://github.com/us3ph" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/10 transition-colors">
                        <ExternalLink size={24} className="text-zinc-400 group-hover:text-white" />
                      </a>
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">
                {currentPage === 'about' ? 'About Me' : 'Get in Touch'}
              </h1>

              {currentPage === 'about' ? (
                <div className="grid gap-12 text-lg text-zinc-400 leading-relaxed">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-2xl text-white font-light mb-8">
                      I'm <span className="font-semibold">Youssef Tabia</span>, a software engineer from Morocco based in the <span className="text-white">1337 (42 Network)</span> ecosystem.
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
                <div className="grid md:grid-cols-2 gap-12">
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