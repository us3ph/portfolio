import React, { useEffect, useRef, useState } from 'react';

const ShapeBlur = ({ className = '', style = {} }) => {
  const mountRef = useRef(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const card = mount.parentElement;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const onMouseEnter = () => setOpacity(1);
    const onMouseLeave = () => setOpacity(0);

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{
        ...style,
        padding: '1px', // 1px perfectly crisp thin border
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.5), transparent 40%), rgba(255,255,255,0.08)`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        opacity: opacity === 1 ? 1 : 0.5,
        transition: 'opacity 0.5s ease',
      }}
    />
  );
};

export default ShapeBlur;
