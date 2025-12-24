import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/microsoft-student-society-uemk-628361399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/msa.uemk?igsh=Z2gyOHI0anFpc2Rr", label: "Instagram" }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20" />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="grid grid-cols-2 gap-[2px] w-6 h-6">
                 <div className="bg-[#F25022]"></div>
                 <div className="bg-[#7FBA00]"></div>
                 <div className="bg-[#00A4EF]"></div>
                 <div className="bg-[#FFB900]"></div>
               </div>
               <h2 className="text-3xl font-display font-bold text-white">
                MSA UEMK
               </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Empowering the next generation of tech innovators through collaboration, excellence, and future-forward thinking.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-white mb-6">Explore</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#/team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#/events" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-white mb-6">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MSA UEMK. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
