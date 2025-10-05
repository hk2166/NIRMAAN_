import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, Code, Cpu, Users, Rocket, Award, Zap } from 'lucide-react';

export default function EventDetails() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Prizes Worth ₹50,000",
      description: "Win amazing prizes and recognition for your web development skills",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competition Focus",
      description: "Create innovative and responsive web applications that solve real-world problems",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-500/10 to-pink-500/10"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech Stack",
      description: "Use any modern web framework - React, Vue, Angular, or vanilla JavaScript",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Judging Criteria",
      description: "Projects will be judged on innovation, design, code quality, and functionality",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Size",
      description: "Participate individually or in teams of up to 3 members",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Timeline",
      description: "24-hour hackathon with mentorship sessions and technical support",
      color: "from-pink-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-500/10"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float animation-delay-2000">
          <Award className="w-12 h-12 text-purple-400/20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-4000">
          <Zap className="w-10 h-10 text-pink-400/20" />
        </div>
        <div className="absolute top-1/2 left-5 animate-float animation-delay-6000">
          <Code className="w-8 h-8 text-blue-400/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text-enhanced mb-8 animate-text-glow">
            Event Details
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-16 leading-relaxed">
            Join us for an exciting web development competition where creativity meets code.
            Shape the future of the web with your innovative ideas and technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className={`glass-card glass-card-hover animate-card-hover rounded-2xl p-8 border border-white/10 h-full relative overflow-hidden group ${feature.bgColor}`}>
                {/* Card Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 rounded-2xl`}></div>
                </div>
                
                {/* Icon with Enhanced Styling */}
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color} mb-6 relative z-10`}>
                  <div className="relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 blur-lg rounded-full scale-150`}></div>
                    <div className="relative">
                      {React.cloneElement(feature.icon, {
                        className: `w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`
                      })}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-purple-200 leading-relaxed group-hover:text-purple-100 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Interactive Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="gradient-border inline-block">
            <div className="px-8 py-4 bg-black/90 rounded-2xl">
              <p className="text-purple-200 text-lg mb-2">
                Ready to showcase your skills?
              </p>
              <p className="text-white font-semibold text-xl">
                Registration closes in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
                  5 days
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}