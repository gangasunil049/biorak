import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Technology', id: 'technology' },
    { name: 'Waste Collection', id: 'waste-collection' },
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
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div 
          onClick={() => handleNavScroll('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer',
            color: '#008447',
            fontSize: '1.5rem',
            fontWeight: '800',
            fontFamily: '"Outfit", sans-serif'
          }}
        >
          <Leaf size={32} fill="#008447" />
          <span>BIORAK</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2.5rem' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavScroll(link.id); }}
              style={{
                textDecoration: 'none',
                color: '#1a1a1a',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#008447'}
              onMouseOut={(e) => e.target.style.color = '#1a1a1a'}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => handleNavScroll('contact')}
            style={{
              background: '#008447',
              color: 'white',
              border: 'none',
              padding: '0.7rem 1.8rem',
              borderRadius: '9999px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', cursor: 'pointer', color: '#1a1a1a' }} 
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'white',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          borderTop: '1px solid #eee'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavScroll(link.id); }}
              style={{
                textDecoration: 'none',
                color: '#1a1a1a',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => handleNavScroll('contact')}
            style={{
              background: '#008447',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '12px',
              fontWeight: '700'
            }}
          >
            Get Started
          </button>
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
    </nav>
  );
};

export default Navbar;
