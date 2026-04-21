import React, { useEffect, useRef, useState } from 'react';

const totalFrames = 240;

const PortraitAnimation = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `${process.env.PUBLIC_URL}/ezgif-frame-${frameNumber}.jpg`;

      // eslint-disable-next-line no-loop-func
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoaded(true);
        }
      };

      // eslint-disable-next-line no-loop-func
      img.onerror = () => {
        // Fallback or ignore broken frame
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoaded(true);
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = (val) => {
      const img = images[val];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Set physical pixel dimensions mapping
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Set logical CSS dimensions styling
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      context.scale(dpr, dpr);

      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const isMobile = width < 768;

      // Separate scales for mobile and desktop
      const scaleFactor = isMobile ? 0.85 : 0.85;
      const ratio = Math.min(hRatio, vRatio) * scaleFactor;

      const drawWidth = img.width * ratio;
      const drawHeight = img.height * ratio;

      // Keep it completely centered on mobile, but push right by 20% on desktop
      const xOffset = isMobile ? 0 : (width * 0.2);
      // Push it to the top on mobile so the text can sit comfortably under it
      const yOffset = isMobile ? -(height * 0.25) : 0;

      const cx = ((width - drawWidth) / 2) + xOffset;
      const cy = ((height - drawHeight) / 2) + yOffset;

      context.clearRect(0, 0, width, height);
      context.drawImage(img, cx, cy, drawWidth, drawHeight);
    };

    // First render at 0
    render(0);

    let lastRenderedFrame = -1;

    const maxScrollRef = { current: 1 };

    // Smooth lerp variables
    let currentFrame = 0;
    let targetFrame = 0;
    let animationFrameId;

    const renderLoop = () => {
      // Linear interpolation for buttery smooth camera lag
      currentFrame += (targetFrame - currentFrame) * 0.04;

      const frameToDraw = Math.round(currentFrame);
      if (frameToDraw !== lastRenderedFrame) {
        render(frameToDraw);
        lastRenderedFrame = frameToDraw;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const handleScroll = () => {
      maxScrollRef.current = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      let scrollProgress = window.scrollY / maxScrollRef.current;

      if (scrollProgress < 0) scrollProgress = 0;
      if (scrollProgress > 1) scrollProgress = 1;

      targetFrame = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(scrollProgress * (totalFrames - 1)))
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial triggers
    setTimeout(handleScroll, 100);
    renderLoop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded, images]);

  return (
    <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center select-none pointer-events-none">
      <canvas
        ref={canvasRef}
        className={`w-full h-full mix-blend-screen transition-opacity duration-[2000ms] ease-in pointer-events-none object-cover ${loaded ? 'opacity-50 md:opacity-75' : 'opacity-0'
          }`}
      />
    </div>
  );
};

export default PortraitAnimation;
