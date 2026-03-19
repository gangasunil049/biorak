import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Leaf } from 'lucide-react';
import farmerImg from '../assets/contact_sustainability.png';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const Contact = () => {
    const contacts = [
        {
            icon: <MessageCircle size={26} />,
            label: 'WhatsApp',
            value: '+91 98765 43210',
            sub: 'Chat with us instantly',
            color: '#25D366',
            link: 'https://wa.me/919876543210'
        },
        {
            icon: <Phone size={26} />,
            label: 'Call Us',
            value: '+91 98765 43210',
            sub: 'Mon – Fri, 9am – 6pm IST',
            color: '#006b3c',
            link: 'tel:+919876543210'
        },
        {
            icon: <Mail size={26} />,
            label: 'Email Us',
            value: 'info@biorak.com',
            sub: 'partnerships@biorak.com',
            color: '#0ea5e9',
            link: 'mailto:info@biorak.com'
        }
    ];

    return (
        <div id="contact" className="contact-section" style={{ padding: '8rem 0', background: '#004225' }}>
            <div className="container">
                <motion.div {...fadeInUp} className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.1 }}>Get in Touch</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Let's work together to build a circular future. Reach out to our team of experts today.
                    </p>
                </motion.div>

                {/* Responsive Layout */}
                <div className="contact-grid">
                    {/* Left: Contact Card */}
                    <motion.div
                        {...fadeInUp}
                        className="contact-card"
                    >
                        {/* Card Header */}
                        <div className="contact-card-header">
                            <div className="header-icon-box">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Contact Us</h3>
                                <p>We're always happy to hear from you</p>
                            </div>
                        </div>

                        {/* Contact Rows */}
                        {contacts.map((c, i) => (
                            <a
                                key={i}
                                href={c.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-info-row"
                                style={{
                                    borderBottom: i < contacts.length - 1 ? '1px solid #f0f0f0' : 'none',
                                    '--accent-color': c.color,
                                    '--hover-bg': `${c.color}08`
                                }}
                            >
                                <div className="contact-info-icon" style={{ background: `${c.color}22`, color: c.color }}>
                                    {c.icon}
                                </div>
                                <div className="contact-info-text">
                                    <div className="label">{c.label}</div>
                                    <div className="value">{c.value}</div>
                                    <div className="sub-text">{c.sub}</div>
                                </div>
                                <div className="contact-info-arrow" style={{ color: c.color }}>→</div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Right: Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="contact-image-wrapper"
                    >
                        {/* Leaf badge */}
                        <div className="contact-leaf-badge bsf-leaf-badge">
                            <Leaf size={24} />
                        </div>

                        {/* Floating tag */}
                        <div className="contact-status-tag">
                            <div style={{ fontWeight: 900, fontSize: '1.3rem', color: '#006b3c' }}>100%</div>
                            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>Sustainable</div>
                        </div>

                        <img
                            src={farmerImg}
                            alt="Biorak farmer"
                            className="contact-main-img"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
