import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Menu, X, Calendar, MapPin } from 'lucide-react';
import { EVENTS } from '../constants';
import MagneticButton from './MagneticButton';

const UniversityLogo = ({ 
  src, 
  fallbackSrc, 
  alt, 
  href, 
  label 
}: { 
  src: string, 
  fallbackSrc: string, 
  alt: string, 
  href: string, 
  label: string 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (imgSrc === src) {
      setImgSrc(fallbackSrc);
    } else {
      setError(true);
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white rounded-md px-2 py-1 h-10 min-w-[3rem] flex items-center justify-center transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden"
    >
      {!error ? (
        <img 
          src={imgSrc} 
          alt={alt} 
          title={alt}
          className="h-full w-auto object-contain"
          onError={handleError}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="text-black font-bold text-xs tracking-tighter">{label}</span>
      )}
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const upcomingCount = EVENTS.filter(e => e.isUpcoming).length;
  const upcomingEvents = EVENTS.filter(e => e.isUpcoming);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}
      `}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Group */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="flex items-center gap-3 group">
               {/* Microsoft Logo Approximation */}
               <div className="grid grid-cols-2 gap-[2px] w-6 h-6 shrink-0">
                 <div className="bg-[#F25022]"></div>
                 <div className="bg-[#7FBA00]"></div>
                 <div className="bg-[#00A4EF]"></div>
                 <div className="bg-[#FFB900]"></div>
               </div>
               <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-primary transition-colors whitespace-nowrap">
                 MSA UEMK
               </span>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-white/10"></div>

            {/* University Logos */}
            <div className="hidden sm:flex items-center gap-3">
              <UniversityLogo 
                src="https://uem.edu.in/wp-content/uploads/2018/06/uem-logo.png"
                fallbackSrc="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://uem.edu.in&size=128"
                href="https://uem.edu.in"
                alt="UEM Kolkata"
                label="UEM"
              />
              <UniversityLogo 
                src="https://iem.edu.in/wp-content/uploads/2017/09/IEM-Logo-1.png"
                fallbackSrc="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://iem.edu.in&size=128"
                href="https://iem.edu.in"
                alt="IEM Kolkata"
                label="IEM"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-110 inline-block ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Alert System */}
            <div className="relative">
              <button 
                onClick={() => setShowEvents(!showEvents)}
                className="relative p-2 rounded-full hover:bg-white/5 transition-colors group"
              >
                <Bell className="w-5 h-5 text-gray-300 group-hover:text-white" />
                {upcomingCount > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                )}
              </button>

              {/* Event Popup */}
              {showEvents && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-[float_0.3s_ease-out_forwards]">
                   <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5 backdrop-blur-xl">
                    <h3 className="font-display font-semibold text-white">Upcoming Events</h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">{upcomingCount} New</span>
                   </div>
                   <div className="max-h-64 overflow-y-auto">
                     {upcomingEvents.map(event => (
                       <div key={event.id} className="p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                         <h4 className="font-medium text-white text-sm mb-1">{event.title}</h4>
                         <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                           <Calendar className="w-3 h-3" />
                           {event.date}
                         </div>
                         <div className="flex items-center gap-2 text-xs text-gray-400">
                           <MapPin className="w-3 h-3" />
                           {event.location}
                         </div>
                       </div>
                     ))}
                     {upcomingEvents.length === 0 && (
                       <div className="p-4 text-center text-gray-500 text-sm">No upcoming events.</div>
                     )}
                   </div>
                   <div className="p-3 bg-white/5 text-center">
                     <Link to="/events" onClick={() => setShowEvents(false)} className="text-xs text-primary hover:text-white transition-colors">View All Events &rarr;</Link>
                   </div>
                </div>
              )}
            </div>

            <MagneticButton variant="primary" className="!py-2 !px-5 text-sm">
              Join Us
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`
        fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8
        transition-all duration-500 transform
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      {/* Background Overlay for Event Popup */}
      {showEvents && (
        <div className="fixed inset-0 z-30 bg-transparent" onClick={() => setShowEvents(false)} />
      )}
    </>
  );
};

export default Navbar;