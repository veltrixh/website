import React, { useState } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { TEAM } from '../constants';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const faculty = TEAM.filter(m => m.type === 'faculty');
  const core = TEAM.filter(m => m.type === 'core');
  const leads = TEAM.filter(m => m.type === 'lead');
  const alumni = TEAM.filter(m => m.type === 'alumni');

  const MemberCard = ({ member, delay = 0 }: { member: TeamMember, delay?: number }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <Reveal key={member.id} delay={delay} direction="up">
        <GlassCard className="h-full group hover:-translate-y-2">
          <div className="aspect-square rounded-xl overflow-hidden mb-6 relative bg-gray-900">
            <img 
              src={imgError ? `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a1a1a&color=fff&size=400` : member.image}
              alt={member.name} 
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 gap-3">
              <a 
                href="#" 
                className="p-2.5 bg-white/10 rounded-full text-white hover:bg-primary hover:shadow-[0_0_20px_rgba(0,120,212,0.6)] backdrop-blur-md transform translate-y-4 opacity-0 scale-50 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-100 hover:!scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-white/10 rounded-full text-white hover:bg-primary hover:shadow-[0_0_20px_rgba(0,120,212,0.6)] backdrop-blur-md transform translate-y-4 opacity-0 scale-50 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-200 hover:!scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2.5 bg-white/10 rounded-full text-white hover:bg-primary hover:shadow-[0_0_20px_rgba(0,120,212,0.6)] backdrop-blur-md transform translate-y-4 opacity-0 scale-50 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-300 hover:!scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-gray-500 text-sm">{member.role}</p>
        </GlassCard>
      </Reveal>
    );
  };

  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">The Minds Behind <span className="text-primary">MSA UEMK</span></h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Driven by passion, united by code. Meet the architects of our community.
            </p>
          </div>
        </Reveal>

        {/* Faculty Coordinators - 2 Columns */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-accent pl-4">Faculty Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((member) => (
              <Reveal key={member.id} direction="up">
                <GlassCard className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full p-1 border-2 border-accent/30 mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-pulse-slow" />
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Core Members - 2 Columns */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-primary pl-4">Core Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {core.map((member, idx) => (
              <MemberCard key={member.id} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </section>

        {/* Leads - 3 Columns (9 items) */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-accent pl-4">Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((member, idx) => (
              <MemberCard key={member.id} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </section>

        {/* Honourable Alumnies */}
        <section className="mb-24">
          <h2 className="text-2xl font-display font-bold mb-12 border-l-4 border-secondary pl-4">Honourable Alumnies</h2>
          <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide">
            {alumni.map((member) => (
              <GlassCard key={member.id} className="min-w-[280px] flex items-center gap-4 border-secondary/20">
                 <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover border border-secondary" />
                 <div>
                   <h3 className="font-bold text-white">{member.name}</h3>
                   <p className="text-xs text-gray-400">{member.role}</p>
                 </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
