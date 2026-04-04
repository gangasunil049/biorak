import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import homePageImage from '../assets/home page.png';
import leafPerfectHd from '../assets/leaf_perfect_hd.png';
import bsfLarva from '../assets/bsf_larva.png';

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    // Significantly expanded list for denser, scattered look
    const floatingItems = [
        // Left Side
        { src: leafPerfectHd, top: '5%', left: '8%', size: 70, delay: 0.2, rotateInit: -20 },
        { src: bsfLarva, top: '15%', left: '16%', size: 35, delay: 0.8, rotateInit: 45 },
        { src: leafPerfectHd, top: '25%', left: '4%', size: 60, delay: 1.1, rotateInit: 10 },
        { src: leafPerfectHd, top: '55%', left: '5%', size: 100, delay: 0.5, rotateInit: 15 },
        { src: bsfLarva, top: '65%', left: '12%', size: 30, delay: 1.3, rotateInit: -10 },
        { src: bsfLarva, top: '75%', left: '18%', size: 40, delay: 1.2, rotateInit: -30 },
        { src: leafPerfectHd, top: '88%', left: '12%', size: 85, delay: 1.5, rotateInit: -5 },
        { src: leafPerfectHd, top: '40%', left: '10%', size: 45, delay: 0.3, rotateInit: 20 },
        { src: bsfLarva, top: '30%', left: '25%', size: 25, delay: 0.9, rotateInit: -15 },
        { src: leafPerfectHd, top: '10%', left: '2%', size: 55, delay: 0.7, rotateInit: -40 },
        { src: bsfLarva, top: '50%', left: '3%', size: 20, delay: 1.4, rotateInit: 10 },
        { src: leafPerfectHd, top: '70%', left: '7%', size: 40, delay: 0.2, rotateInit: 5 },
        
        // Right Side
        { src: leafPerfectHd, top: '8%', left: '88%', size: 80, delay: 0.6, rotateInit: 35 },
        { src: leafPerfectHd, top: '22%', left: '92%', size: 55, delay: 0.9, rotateInit: -25 },
        { src: bsfLarva, top: '35%', left: '82%', size: 50, delay: 1.0, rotateInit: -15 },
        { src: bsfLarva, top: '48%', left: '88%', size: 35, delay: 1.6, rotateInit: 20 },
        { src: leafPerfectHd, top: '60%', left: '92%', size: 110, delay: 0.4, rotateInit: -45 },
        { src: bsfLarva, top: '80%', left: '85%', size: 45, delay: 1.8, rotateInit: 60 },
        { src: leafPerfectHd, top: '92%', left: '78%', size: 85, delay: 1.4, rotateInit: 25 },
        { src: bsfLarva, top: '12%', left: '50%', size: 30, delay: 2.1, rotateInit: 0 },
        { src: leafPerfectHd, top: '45%', left: '85%', size: 65, delay: 0.7, rotateInit: 10 },
        { src: bsfLarva, top: '70%', left: '94%', size: 28, delay: 1.1, rotateInit: -20 },
        { src: leafPerfectHd, top: '2%', left: '75%', size: 50, delay: 0.8, rotateInit: -5 },
        { src: bsfLarva, top: '15%', left: '95%', size: 22, delay: 1.5, rotateInit: 30 },
        { src: leafPerfectHd, top: '30%', left: '98%', size: 35, delay: 1.9, rotateInit: -15 },

        // Middle/Scattered Blank Spaces
        { src: leafPerfectHd, top: '15%', left: '65%', size: 40, delay: 0.5, rotateInit: -10 },
        { src: bsfLarva, top: '85%', left: '45%', size: 32, delay: 2.4, rotateInit: 50 },
        { src: leafPerfectHd, top: '10%', left: '30%', size: 50, delay: 1.7, rotateInit: 15 },
        { src: bsfLarva, top: '2%', left: '42%', size: 22, delay: 0.4, rotateInit: -40 },
        { src: leafPerfectHd, top: '18%', left: '55%', size: 30, delay: 2.6, rotateInit: 5 },
        { src: bsfLarva, top: '90%', left: '60%', size: 25, delay: 1.3, rotateInit: -25 },
        { src: leafPerfectHd, top: '75%', left: '35%', size: 45, delay: 0.9, rotateInit: 12 },
        { src: bsfLarva, top: '82%', left: '20%', size: 20, delay: 1.1, rotateInit: 35 },
        { src: leafPerfectHd, top: '5%', left: '20%', size: 38, delay: 0.6, rotateInit: -8 },
        { src: bsfLarva, top: '95%', left: '30%', size: 30, delay: 1.8, rotateInit: -15 },
        { src: leafPerfectHd, top: '95%', left: '10%', size: 60, delay: 2.2, rotateInit: 40 },
        { src: bsfLarva, top: '45%', left: '15%', size: 26, delay: 0.7, rotateInit: -5 },
        { src: leafPerfectHd, top: '35%', left: '5%', size: 52, delay: 1.2, rotateInit: 25 },
    ];

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800&family=Montserrat:wght@800&display=swap');
                
                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 100vh !important;
                        height: auto !important;
                        padding-top: 80px !important;
                        padding-bottom: 40px !important;
                    }
                }
            `}</style>
            
            <section
                className="hero-section"
                style={{
                    position: 'relative',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    background: '#ffffff',
                    color: '#1a1a1a',
                    padding: '0 20px'
                }}
            >
                {/* ── Heading (Top) ── */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        textAlign: 'center',
                        marginBottom: isMobile ? '0.5rem' : '1rem'
                    }}
                >
                    <div style={{
                        fontSize: isMobile ? '2.5rem' : '5rem',
                        fontWeight: '800',
                        lineHeight: '1.05',
                        letterSpacing: '-0.03em',
                        fontFamily: '"Outfit", sans-serif',
                        textAlign: 'center'
                    }}>
                        <span style={{ color: '#1a1a1a' }}>Waste Is Not the End.</span>
                        <br />
                        <span style={{ color: '#008447' }}>It's the Beginning.</span>
                    </div>
                </motion.div>

                {/* ── Back-to-Front Entrance Center Image ── */}
                <div style={{
                    position: 'relative',
                    width: isMobile ? '260px' : '440px',
                    height: isMobile ? '260px' : '440px',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isMobile ? '1rem' : '1.5rem'
                }}>
                    <motion.img
                        src={homePageImage}
                        alt="Biorak Hero"
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            duration: 1.8, 
                            ease: "easeOut"
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>

                {/* ── Buttons (Bottom) ── */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        display: 'flex',
                        gap: isMobile ? '0.8rem' : '1.5rem',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <button
                        onClick={() => document.querySelector('a[href="#technology"]')?.click()}
                        style={{
                            background: '#006b3c',
                            color: 'white',
                            border: 'none',
                            padding: isMobile ? '0.6rem 1.2rem' : '0.9rem 2.22rem',
                            borderRadius: '9999px',
                            fontWeight: '700',
                            fontSize: isMobile ? '0.85rem' : '1.05rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            boxShadow: '0 8px 30px rgba(0,107,60,0.25)',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                        Our Technology <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => document.querySelector('a[href="#gallery"]')?.click()}
                        style={{
                            background: 'white',
                            color: '#006b3c',
                            border: '2px solid #006b3c',
                            padding: isMobile ? '0.6rem 1.2rem' : '0.9rem 2.2rem',
                            borderRadius: '9999px',
                            fontWeight: '700',
                            fontSize: isMobile ? '0.85rem' : '1.05rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#f0fdf4'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; }}
                    >
                        View Gallery
                    </button>
                </motion.div>

                {/* ── Hovering Leaves & Worms (Full Screen) ── */}
                {floatingItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -800, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2.5, delay: item.delay, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: item.top,
                            left: item.left,
                            zIndex: 5,
                            pointerEvents: 'none'
                        }}
                    >
                        <motion.img
                            src={item.src}
                            alt="floating element"
                            initial={{ rotate: item.rotateInit }}
                            animate={{ 
                                y: [0, 25, 0],
                                rotate: [item.rotateInit, item.rotateInit + 12, item.rotateInit - 8, item.rotateInit]
                            }}
                            transition={{ 
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 },
                                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }
                            }}
                            style={{
                                width: isMobile ? item.size * 0.45 : item.size,
                                mixBlendMode: 'multiply',
                                filter: item.src === leafPerfectHd ? 'contrast(1.35) saturate(1.4)' : 'contrast(1.15) saturate(1.15)',
                                opacity: 0.9
                            }}
                        />
                    </motion.div>
                ))}

                {/* ── Mobile Branding and Menu Overlay (Fixed Top) ── */}
                {isMobile && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        padding: '1.2rem 1.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 100
                    }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#006b3c', fontFamily: '"Outfit", sans-serif' }}>BIORAK</div>
                        <div onClick={() => document.querySelector('.mobile-toggle')?.click()} style={{ display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer' }}>
                            <div style={{ width: '22px', height: '2px', background: '#1a1a1a' }}></div>
                            <div style={{ width: '22px', height: '2px', background: '#1a1a1a' }}></div>
                            <div style={{ width: '15px', height: '2px', background: '#1a1a1a', alignSelf: 'flex-end' }}></div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
