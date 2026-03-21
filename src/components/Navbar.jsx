import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Technology', id: 'technology' },
    { name: 'Black Soldier Fly', id: 'bsf' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavScroll = (id) => {
    if (props.onNavigate) {
      props.onNavigate(id);
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed outer shell — always full width, never moves */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '12px 24px' : '0',
        transition: 'padding 0.4s ease',
        pointerEvents: 'none'
      }}>
        {/* Inner pill — this is what morphs */}
        <div style={{
          pointerEvents: 'all',
          maxWidth: scrolled ? '1200px' : '100%',
          margin: '0 auto',
          background: scrolled ? 'rgba(255,255,255,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderRadius: scrolled ? '9999px' : '0',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)' : 'none',
          border: scrolled ? '1px solid rgba(255,255,255,0.55)' : 'none',
          padding: scrolled ? '0.55rem 2rem' : '1rem 0',
          transition: 'background 0.4s ease, border-radius 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease, border 0.4s ease, max-width 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Only show container padding when not scrolled */}
          <div className="container" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: scrolled ? '0' : undefined
          }}>
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavScroll('home'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.4rem',
                fontWeight: '800',
                color: scrolled ? '#006b3c' : '#ffffff',
                textDecoration: 'none',
                transition: 'color 0.4s ease'
              }}
            >
              <Leaf size={28} />
              <span>BIORAK</span>
            </a>

            {/* Desktop Links */}
            <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavScroll(link.id); }}
                  style={{
                    fontWeight: '600',
                    color: scrolled ? '#1a1a1a' : '#ffffff',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease, color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.opacity = 1}
                  onMouseOut={(e) => e.target.style.opacity = scrolled ? 0.8 : 1}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavScroll('contact'); }}
                style={{
                  background: '#006b3c',
                  color: 'white',
                  padding: '0.6rem 1.6rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: scrolled ? '0 4px 15px rgba(0,107,60,0.25)' : '0 10px 25px rgba(0,107,60,0.4)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,107,60,0.3)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,107,60,0.25)'; }}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ display: 'none', background: 'none', border: 'none', color: scrolled ? '#1a1a1a' : '#ffffff', cursor: 'pointer', transition: 'color 0.4s ease' }}
              className="mobile-toggle"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: scrolled ? '76px' : '70px',
          left: '1rem',
          right: '1rem',
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(20px)',
          borderRadius: '1.5rem',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
          border: '1px solid rgba(0,0,0,0.06)',
          zIndex: 999,
          transition: 'top 0.3s ease'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavScroll(link.id); }}
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1a1a1a',
                textDecoration: 'none',
                padding: '0.4rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </>
  );
};

export default Navbar;
