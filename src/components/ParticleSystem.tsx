import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const colors = [
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#3b82f6', // blue
    '#10b981', // emerald
    '#f59e0b', // amber
  ];

  const createParticle = (): Particle => {
    return {
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 10,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 3 - 1,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 200 + 100,
    };
  };

  const updateParticle = (particle: Particle): void => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life++;
    
    // Fade out as particle ages
    particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
    
    // Add some drift
    particle.vx += (Math.random() - 0.5) * 0.1;
    particle.vy += Math.random() * 0.05;
  };

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle): void => {
    ctx.save();
    ctx.globalAlpha = particle.opacity;
    ctx.fillStyle = particle.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = particle.color;
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Add a subtle glow effect
    ctx.globalAlpha = particle.opacity * 0.3;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  };

  const animate = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new particles occasionally
    if (Math.random() < 0.1) {
      particlesRef.current.push(createParticle());
    }

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      updateParticle(particle);
      drawParticle(ctx, particle);
      
      // Remove dead particles
      return particle.life < particle.maxLife && 
             particle.y > -50 && 
             particle.x > -50 && 
             particle.x < canvas.width + 50;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize with some particles
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(createParticle());
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
