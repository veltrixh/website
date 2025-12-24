import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Let's <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Collaborate</span></h1>
              <p className="text-gray-400 text-lg mb-12">
                Have a question, a project idea, or just want to say hi? We're always open to discussing new opportunities and partnerships.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <a href="mailto:microsoftstudentsocietyuemk@gmail.com" className="block group">
                  <GlassCard className="flex items-center gap-4 p-4 group-hover:border-accent/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <Mail />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Email Us</h3>
                      <p className="text-gray-400 text-sm group-hover:text-accent transition-colors">microsoftstudentsocietyuemk@gmail.com</p>
                    </div>
                  </GlassCard>
                </a>
                
                <GlassCard className="flex items-center gap-4 p-4 hover:border-secondary/50 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <MessageSquare />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Join Discord</h3>
                    <p className="text-gray-400 text-sm">discord.gg/nexus</p>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left" delay={0.4}>
            <GlassCard className="p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <MagneticButton className="w-full flex justify-center items-center gap-2">
                  Send Message <Send size={18} />
                </MagneticButton>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;