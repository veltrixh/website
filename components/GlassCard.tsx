import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-surface/40 backdrop-blur-xl
      border border-white/5
      rounded-2xl p-6
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
      transition-all duration-500
      ${hoverEffect ? 'hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(0,120,212,0.3)] hover:-translate-y-1' : ''}
      group
      ${className}
    `}>
      {/* Gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;