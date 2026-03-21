import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Zap, Smartphone, Play, Globe } from 'lucide-react';

import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpeg';
import about4 from '../assets/about4.jpeg';
import aboutImg from '../assets/good_bsf_about.png';
import aboutPage from '../assets/about_page.jpeg';
import quoteBg from '../assets/quote_bg.png';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const GREEN = '#006b3c';

const About = () => {
    return (
        <div className="about-page" style={{ background: '#ffffff' }}>
            {/* Top Green Hero Section */}
            <section className="about-hero-section">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Decorative SVGs */}
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-40px', left: '20%', willChange: 'transform' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="rgba(255,255,255,0.4)" /></motion.svg>
                    <motion.svg animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20px', right: '15%', willChange: 'transform' }} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" /></motion.svg>
                    <motion.svg animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '100px', left: '10%', willChange: 'transform' }} width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="rgba(255,255,255,0.35)" /></motion.svg>
                    <motion.svg animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-10px', right: '25%', willChange: 'transform' }} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="rgba(255,255,255,0.25)" /></motion.svg>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="about-hero-title"
                        style={{
                            fontSize: 'clamp(3.5rem, 5vw, 5rem)',
                            color: '#ffffff',
                            marginBottom: '1.5rem',
                            fontWeight: '800'
                        }}
                    >
                        About us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: 500 }}
                    >
                        Biorak is a sustainable waste management startup transforming food waste into valuable resources using Black Soldier Fly Larvae (BSFL) technology. We help food businesses and governments reduce organic waste while producing sustainable protein and organic fertilizer.<br /><br />
                        Our mission is to support a circular economy by turning waste into opportunity, reducing landfill impact, and creating environmentally responsible solutions for the future.
                    </motion.p>
                </div>

                {/* SVG wave curve */}
                <div style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px' }}>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,152.47,114,222.7,111.41,257.6,110.12,289.47,94.25,321.39,56.44Z" fill="#ffffff"></path>
                    </svg>
                </div>

                {/* Overlapping Images Grid */}
                <div className="container about-images-container">
                    <div className="about-images-grid">
                        <motion.img initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }} src={about1} alt="Biorak team 1" className="about-hero-img" style={{ marginTop: '20px' }} decoding="async" />
                        <motion.img initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.25 }} src={about2} alt="Biorak team 2" className="about-hero-img" style={{ marginTop: '0px' }} decoding="async" />
                        <motion.img initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.4 }} src={about3} alt="Biorak team 3" className="about-hero-img" style={{ marginTop: '10px' }} decoding="async" />
                        <motion.img initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.55 }} src={about4} alt="Biorak team 4" className="about-hero-img" style={{ marginTop: '30px' }} decoding="async" />
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <div className="about-spacer" style={{ height: '170px', background: '#ffffff' }}></div>

            {/* Refined Dashboard Section (matching reference layout) */}
            <div style={{
                position: 'relative',
                background: '#f8fafc',
                paddingTop: '1rem',
                paddingBottom: '8rem',
                borderTopLeftRadius: '3.5rem',
                borderTopRightRadius: '3.5rem'
            }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {/* Top Heading - Full Width */}
                    <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" style={{ marginBottom: '2rem' }}>
                        <span style={{ color: '#006b3c', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}>
                            OUR MISSION
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                            color: '#1a1a1a',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: '0',
                            letterSpacing: '-1.5px'
                        }}>
                            Turning Waste Into <span style={{ color: '#006b3c' }}>Sustainable Value</span>
                        </h2>
                    </motion.div>

                    <div className="mission-dashboard-wrapper" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '5rem', alignItems: 'start' }}>
                        {/* Left Column: Fixed Aspect Ratio for non-stretched look */}
                        <motion.div
                            initial={{ x: -60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', width: '100%' }}
                        >
                            <div style={{
                                width: '100%',
                                aspectRatio: '0.85',
                                borderRadius: '3.5rem',
                                overflow: 'hidden',
                                boxShadow: '0 60px 120px rgba(0,0,0,0.12)',
                                background: '#f1f5f9'
                            }}>
                                <img
                                    src={aboutPage}
                                    alt="Our Team and Mission"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </motion.div>

                        {/* Right Column: Cards + Quote (Heading moved up) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                            {/* Cards Grid (3 in a row like reference) */}
                            <div className="mission-cards-grid">
                                {/* Card 1: Heavy Accent (Green) */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="initial"
                                    whileInView="whileInView"
                                    className="mission-card"
                                    style={{
                                        background: '#006b3c',
                                        color: 'white',
                                        boxShadow: '0 20px 40px rgba(0,107,60,0.15)'
                                    }}
                                >
                                    <Zap size={28} />
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Waste Reduction</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                                        We help food businesses and governments reduce organic waste while producing sustainable protein and organic fertilizer.
                                    </p>
                                </motion.div>

                                {/* Card 2: Light (Precision Farming style) */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="initial"
                                    whileInView="whileInView"
                                    transition={{ delay: 0.1 }}
                                    className="mission-card"
                                    style={{
                                        background: 'white',
                                        color: '#1a1a1a',
                                        borderTop: '6px solid #006b3c'
                                    }}
                                >
                                    <Globe size={28} style={{ color: '#006b3c' }} />
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Circular Mission</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, color: '#000000', fontWeight: 500 }}>
                                        Turning waste into opportunity, reducing landfill impact, and creating environmentally responsible solutions for the future.
                                    </p>
                                </motion.div>

                                {/* Card 3: Light (Farming Plant style) */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="initial"
                                    whileInView="whileInView"
                                    transition={{ delay: 0.2 }}
                                    className="mission-card"
                                    style={{
                                        background: 'white',
                                        color: '#1a1a1a',
                                        borderTop: '6px solid #fbbf24'
                                    }}
                                >
                                    <ShieldCheck size={28} style={{ color: '#fbbf24' }} />
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Local Impact</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, color: '#000000', fontWeight: 500 }}>
                                        Empowering local farmers and organizations with tools needed for sustainable operations and economic benefits.
                                    </p>
                                </motion.div>

                                {/* Card 4: Sustainable Protein */}
                                <motion.div
                                    variants={fadeInUp}
                                    initial="initial"
                                    whileInView="whileInView"
                                    transition={{ delay: 0.3 }}
                                    className="mission-card"
                                    style={{
                                        background: '#004225',
                                        color: 'white',
                                        boxShadow: '0 20px 40px rgba(0,66,37,0.15)'
                                    }}
                                >
                                    <Leaf size={28} />
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Sustainable Protein</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
                                        BSFL-derived protein is a high-quality, eco-friendly alternative to traditional animal feed, supporting a more resilient food supply.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Refined Dashboard Section */}

            {/* ── Quote Separator ── */}
            <section className="quote-section-refine" style={{
                background: `url(${quoteBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTop: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Lighter Glassy overlay for better image visibility */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(2px)',
                    zIndex: 0
                }}></div>

                {/* Decorative horizontal line through the middle */}
                <div style={{
                    position: 'absolute',
                    top: '55%',
                    left: '5%',
                    right: '5%',
                    height: '1px',
                    background: 'rgba(0, 107, 60, 0.08)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        style={{
                            textAlign: 'center',
                            maxWidth: '900px',
                            margin: '0 auto',
                            padding: '2.5rem 3.5rem'
                        }}
                    >
                        <div style={{ width: '40px', height: '3px', background: '#006b3c', margin: '0 auto 1.8rem', borderRadius: '2px' }} />
                        <p style={{
                            color: '#000000',
                            fontSize: 'clamp(1.2rem, 2.2vw, 2rem)',
                            fontWeight: 800,
                            fontStyle: 'italic',
                            lineHeight: 1.3,
                            letterSpacing: '-1px',
                            margin: 0
                        }}>
                            "By harnessing the incredible potential of Black Soldier Flies, we are not just disposing of waste; we are upcycling it into premium agricultural inputs."
                        </p>
                        <div style={{ width: '40px', height: '3px', background: '#fbbf24', margin: '1.8rem auto 0', borderRadius: '2px' }} />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
