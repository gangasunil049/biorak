import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import footerBg from '../assets/bsf_rack_system.png';

const Footer = () => {
    return (
        <footer className="footer-main" style={{ position: 'relative', color: '#ffffff', overflow: 'hidden' }}>

            {/* Background image with green overlay */}
            <div className="footer-bg-img" style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${footerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
            }} />
            {/* Dark green overlay for readability */}
            <div className="footer-bg-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(4, 70, 43, 0.68)',
                zIndex: 1,
            }} />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem' }}>
                            <Leaf size={32} />
                            <span>BIORAK</span>
                        </Link>
                        <p className="footer-brand-text">
                            Turning Waste into Value. Converting food waste into sustainable protein and organic fertilizer using Black Soldier Fly technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" className="footer-social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="footer-social-icon"><Twitter size={20} /></a>
                            <a href="#" className="footer-social-icon"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>About Us</Link></li>
                            <li><Link to="/technology" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Technology</Link></li>
                            <li><Link to="/bsf" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Black Soldier Fly</Link></li>
                            <li><Link to="/gallery" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s ease' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', alignItems: 'flex-start' }}>
                                <MapPin size={20} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }} />
                                <span>123 Bio Valley, Tech City, Eco District</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', alignItems: 'flex-start' }}>
                                <Phone size={20} style={{ color: '#ffffff', flexShrink: 0 }} />
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', alignItems: 'flex-start' }}>
                                <Mail size={20} style={{ color: '#ffffff', flexShrink: 0 }} />
                                <span>info@biorak.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright-text">
                        © {new Date().getFullYear()} BIORAK. All rights reserved.
                    </p>
                    <div className="footer-legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .footer-social-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    transition: all 0.3s ease;
                }
                .footer-social-icon:hover {
                    background: #ffffff;
                    color: #059669;
                    transform: translateY(-3px);
                }
            `}} />
        </footer>
    );
};

export default Footer;
