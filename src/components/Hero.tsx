import React, { useEffect, useState } from 'react';
import { Code2, Calendar, Clock, Sparkles, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center mobile-safe-top mobile-safe-bottom overflow-hidden" ref={ref}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/3 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-6000" />
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float animation-delay-2000">
          <Zap className="w-8 h-8 text-purple-400/30" />
        </div>
        <div className="absolute top-32 right-20 animate-float animation-delay-4000">
          <Star className="w-6 h-6 text-pink-400/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float animation-delay-6000">
          <Code2 className="w-10 h-10 text-blue-400/30" />
        </div>
        <div className="absolute bottom-20 right-32 animate-float">
          <Sparkles className="w-7 h-7 text-emerald-400/30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
        <div className={`text-center transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Enhanced Logo */}
          <div className="animate-float mb-8 relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
            <Code2 className="w-24 h-24 md:w-32 md:h-32 text-purple-400 mx-auto relative z-10 animate-text-glow" />
          </div>

          {/* Enhanced Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold gradient-text-enhanced mb-8 tracking-tight animate-text-glow">
            NIRMAAN
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 mb-12 font-light animate-gradient-shift">
            Code the Future, Shape the Web
          </p>

          {/* Enhanced Event Details */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-white">
            <div className="glass-card glass-card-hover rounded-full px-6 py-3 touch-active group">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-lg md:text-2xl font-medium">Nov 26, 2024</span>
              </div>
            </div>
            <div className="glass-card glass-card-hover rounded-full px-6 py-3 touch-active group">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-lg md:text-2xl font-medium">10 AM - 12 PM</span>
              </div>
            </div>
            <div className="glass-card glass-card-hover rounded-full px-6 py-3 touch-active group">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-lg md:text-2xl font-medium">Free Entry</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="relative inline-block">
            <button
              onClick={() => navigate('/register')}
              className="btn-enhanced interactive-glow text-xl md:text-2xl font-bold px-8 py-4 md:px-12 md:py-6 touch-active group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Register Now
                <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full filter blur-xl opacity-30 animate-pulse-glow"></div>
          </div>

          {/* Additional Info */}
          <div className={`mt-8 transform transition-all duration-1000 delay-500 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <p className="text-purple-300/80 text-lg md:text-xl">
              Join 500+ developers in the ultimate web development challenge
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}