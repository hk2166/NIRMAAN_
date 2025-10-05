import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Gift, Star, Award, Snowflake, Sparkles, Crown } from 'lucide-react';

export default function WinterGifts() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const gifts = [
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Limited Edition Swag",
      description: "Exclusive NIRMAAN branded hoodies, t-shirts, and stickers",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-500/10 to-pink-500/10",
      value: "Worth ₹5,000"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Premium Subscriptions",
      description: "1-year free access to premium development tools and platforms",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      value: "Worth ₹15,000"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Special Recognition",
      description: "Digital badges and certificates for all participants",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
      value: "Priceless"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Winter-themed Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 animate-float animation-delay-2000">
          <Snowflake className="w-8 h-8 text-blue-400/20 animate-spin" style={{ animationDuration: '10s' }} />
        </div>
        <div className="absolute top-32 right-16 animate-float animation-delay-4000">
          <Sparkles className="w-6 h-6 text-purple-400/20" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float animation-delay-6000">
          <Crown className="w-10 h-10 text-yellow-400/20" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float">
          <Snowflake className="w-12 h-12 text-cyan-400/20 animate-spin" style={{ animationDuration: '15s' }} />
        </div>
        
        {/* Floating Snowflakes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Snowflake className="w-4 h-4 text-white/10 animate-spin" style={{ animationDuration: `${5 + Math.random() * 5}s` }} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text-enhanced mb-4 animate-text-glow">
            Winter Special Gifts
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Snowflake className="w-8 h-8 text-cyan-400 animate-spin" />
            <span className="text-2xl">❄️</span>
            <Snowflake className="w-8 h-8 text-blue-400 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-16 leading-relaxed">
            Participate in NIRMAAN and receive these amazing winter special gifts!
            <br />
            <span className="text-cyan-300 font-semibold">All participants get gifts worth over ₹20,000!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                inView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <div className={`neuro-card animate-card-hover rounded-2xl p-8 h-full relative overflow-hidden group ${gift.bgColor}`}>
                {/* Card Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${gift.color} opacity-10 rounded-2xl`}></div>
                </div>
                
                {/* Value Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${gift.color} text-white`}>
                    {gift.value}
                  </div>
                </div>
                
                {/* Enhanced Icon */}
                <div className="mb-6 relative z-10">
                  <div className="relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${gift.color} opacity-30 blur-xl rounded-full scale-150 animate-pulse`}></div>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${gift.color} transform hover:scale-110 transition-transform duration-300 relative`}>
                      {React.cloneElement(gift.icon, {
                        className: `w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r ${gift.color}`
                      })}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                  {gift.title}
                </h3>
                <p className="text-purple-200 leading-relaxed group-hover:text-purple-100 transition-colors duration-300">
                  {gift.description}
                </p>

                {/* Interactive Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>

                {/* Winter Sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-pulse"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-white/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="relative inline-block">
            <button
              onClick={() => navigate('/register')}
              className="btn-enhanced interactive-glow text-xl font-bold px-12 py-6 touch-active group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Register Now to Claim Your Gifts
                <Snowflake className="w-6 h-6 group-hover:rotate-180 transition-transform" />
              </span>
            </button>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full filter blur-xl opacity-30 animate-pulse-glow"></div>
          </div>
          
          {/* Additional Info */}
        
        </div>
      </div>
    </section>
  );
}