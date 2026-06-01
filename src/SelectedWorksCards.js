import React, { useEffect, useRef } from 'react';
import ShapeBlur from './ShapeBlur';

const SelectedWorksCards = ({ projects, setTargetProject, setCurrentPage, openGallery }) => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let animFrameId;

    const computeTarget = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;

      const start = viewH * 0.6;
      const end = viewH * 0.15;

      if (rect.top <= start && rect.top >= end) {
        targetProgress = 1 - (rect.top - end) / (start - end);
      } else if (rect.top < end) {
        targetProgress = 1;
      } else {
        targetProgress = 0;
      }
    };

    const applyTransforms = (p) => {
      const colWidth = 100 / 3;
      const cardHeightEstimate = 220;
      const gap = 12;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const translateX = -(idx * colWidth * p);
        const translateY = idx * (cardHeightEstimate + gap) * p;
        const scale = 1 - (p * 0.05);
        el.style.transform = `translate(${translateX}%, ${translateY}px) scale(${scale})`;
      });
    };

    const loop = () => {
      currentProgress += (targetProgress - currentProgress) * 0.08;

      if (Math.abs(currentProgress - targetProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      applyTransforms(currentProgress);
      animFrameId = requestAnimationFrame(loop);
    };

    const handleScroll = () => {
      computeTarget();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    computeTarget();
    loop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const featured = projects.slice(0, 3);

  return (
    <div ref={sectionRef} className="mt-2 md:mt-0">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 relative">
        {featured.map((project, idx) => (
          <div
            key={project.id}
            ref={el => cardRefs.current[idx] = el}
            className="will-change-transform"
            style={{ zIndex: idx + 1 }}
          >
            <div
              className="group relative z-0 p-5 rounded-2xl bg-black/90 backdrop-blur-xl hover:bg-white/5 cursor-pointer"
              onClick={() => {
                setTargetProject(project.id);
                setCurrentPage('projects');
              }}
            >
              <ShapeBlur className="rounded-2xl" />
              {/* Top Right Corner GitHub Link */}
              {project.github && (
                <div className="absolute top-4 right-4 z-20">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/link block" onClick={e => e.stopPropagation()}>
                    {/* ExternalLink icon from lucide-react */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-zinc-400 group-hover/link:text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3m0 0v3m0-3L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              <div className="relative z-10">
                <div className="mb-3 flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 inline-flex text-white shrink-0">
                    <project.icon size={18} />
                  </div>
                  <h3 className="text-base font-bold mb-0 group-hover:text-zinc-200 transition-colors text-center w-full md:w-auto">{project.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-center">
                  {project.tech.filter(t => t !== 'Redis').map(t => (
                    <span key={t} className="inline-block text-center text-[9px] md:text-xs px-2 md:px-3 py-0.5 rounded-full border border-white/10 bg-white/5 text-zinc-400">
                      {t}
                    </span>
                  ))}
                  {project.title === 'OpenSec' && (
                    <span className="hidden md:inline-block text-center text-[9px] md:text-xs px-2 md:px-3 py-0.5 rounded-full border border-white/10 bg-white/5 text-zinc-400">AI</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorksCards;
