import React, { useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Move dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive
      const isLink = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');
      
      setHovered(!!isLink);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    // Animation Loop for smooth trailing ring
    let rafId: number;
    const animate = () => {
      // Linear interpolation (Lerp) for smooth delay. 0.15 is the speed factor.
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        // Only move the wrapper div
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precision Dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(0,240,255,0.8)] hidden md:block will-change-transform mix-blend-difference"
      />
      
      {/* Trailing Ring */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block will-change-transform mix-blend-difference"
      >
        <div 
          className={`
            w-10 h-10 border border-white/50 rounded-full transition-all duration-300 ease-out
            ${hovered ? 'scale-[2] bg-white/20 border-transparent backdrop-blur-[2px]' : 'scale-100'}
          `}
        />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background min-h-screen text-white font-sans selection:bg-primary/30">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;