import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Cpu, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { STATS, EVENTS } from '../constants';

const Home: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Parallax effect: Move background elements slower than foreground
        // Using translate3d for GPU acceleration
        if (blob1Ref.current) {
          blob1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0) rotate(${scrollY * 0.02}deg)`;
        }
        if (blob2Ref.current) {
          blob2Ref.current.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0) rotate(-${scrollY * 0.02}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div 
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow will-change-transform opacity-60" 
        />
        <div 
          ref={blob2Ref}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-slow delay-1000 will-change-transform opacity-60" 
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal delay={0.2}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-primary/50 transition-colors duration-300">
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">Student Chapter</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter mb-2 leading-none">
                <span className="text-white">MSA</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">UEMK</span>
              </h1>
              <h2 className="text-sm md:text-2xl font-display font-medium text-gray-300 tracking-[0.2em] md:tracking-[0.5em] uppercase mb-8 text-center w-full opacity-80">
                University of Management and Engineering Kolkata
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={0.6}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              The premier community for student innovators, developers, and visionaries. We build, we launch, we lead.
            </p>
          </Reveal>
          
          <Reveal delay={0.8}>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <MagneticButton>
                Join the Club <ArrowRight size={18} />
              </MagneticButton>
              <Link to="/events">
                 <MagneticButton variant="secondary">
                   Explore Events
                 </MagneticButton>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 opacity-50">
           <div className="w-1 h-12 rounded-full border border-gray-700 p-1">
             <div className="w-full h-2 bg-primary rounded-full animate-float" />
           </div>
        </div>
      </section>

      {/* About / Vision */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal direction="right">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  Igniting Curiosity & <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation.</span>
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                <Reveal direction="right" delay={0.2}>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Powered by Microsoft Student Ambassadors, the Microsoft Student Ambassadors UEMK chapter is driven by a clear mission—to ignite curiosity, innovation, and leadership among passionate learners. Since its inception, the chapter has been dedicated to building a strong technical community that learns, grows, and creates together.
                  </p>
                </Reveal>
                
                <Reveal direction="right" delay={0.3}>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Through impactful events, hands-on workshops, expert-led technical talks, webinars, and community-driven projects, we strive to empower young minds with real-world skills and forward-thinking perspectives. Under the globally respected Microsoft Student Ambassadors program, we continue to nurture potential, inspire excellence, and carry forward a legacy of innovation and collaboration.
                  </p>
                </Reveal>
              </div>

              <Reveal direction="right" delay={0.4}>
                <ul className="space-y-4 mt-8">
                  {[
                    "Expert-led Technical Talks",
                    "Community-driven Projects",
                    "Global Innovation Legacy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white group">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                      </div>
                      <span className="group-hover:text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Reveal direction="left" delay={0.2}>
                <GlassCard className="translate-y-8 hover:-translate-y-2 transition-transform duration-500">
                   <Code className="text-accent mb-4 w-8 h-8" />
                   <h3 className="text-xl font-bold mb-2">Build</h3>
                   <p className="text-gray-400 text-sm">Real projects that solve real problems.</p>
                </GlassCard>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <GlassCard className="hover:-translate-y-2 transition-transform duration-500">
                   <Rocket className="text-secondary mb-4 w-8 h-8" />
                   <h3 className="text-xl font-bold mb-2">Ship</h3>
                   <p className="text-gray-400 text-sm">Deploy to production and scale globally.</p>
                </GlassCard>
              </Reveal>
              <Reveal direction="left" delay={0.4}>
                <GlassCard className="translate-y-8 hover:-translate-y-2 transition-transform duration-500">
                   <Cpu className="text-primary mb-4 w-8 h-8" />
                   <h3 className="text-xl font-bold mb-2">Learn</h3>
                   <p className="text-gray-400 text-sm">Master the latest tech stacks.</p>
                </GlassCard>
              </Reveal>
              <Reveal direction="left" delay={0.5}>
                <GlassCard className="hover:-translate-y-2 transition-transform duration-500">
                   <Globe className="text-green-400 mb-4 w-8 h-8" />
                   <h3 className="text-xl font-bold mb-2">Connect</h3>
                   <p className="text-gray-400 text-sm">Meet like-minded innovators.</p>
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-surface/30 relative">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="text-center group cursor-default">
                  <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-accent transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                    <stat.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">{stat.value}</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-xs font-bold group-hover:text-primary transition-colors">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Horizontal Scroll */}
      <section className="py-32 relative overflow-hidden">
        {/* Background glow for events section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 mb-12 flex justify-between items-end relative z-10">
          <Reveal direction="up">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Events</span></h2>
              <p className="text-gray-400 text-lg max-w-md">Join us for workshops, hackathons, and networking sessions.</p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <Link to="/events" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x relative z-10">
          {EVENTS.slice(0, 3).map((event, idx) => (
            <div key={event.id} className="min-w-[350px] md:min-w-[450px] snap-center">
              <Reveal delay={idx * 0.1} direction="left">
                <GlassCard className="h-full group hover:bg-white/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs font-bold uppercase border border-white/10 tracking-wider">
                      {event.category}
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-accent text-xs font-mono mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        {event.date}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed">{event.description}</p>
                  <MagneticButton variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    Register Now
                  </MagneticButton>
                </GlassCard>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;