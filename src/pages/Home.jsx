import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import homePageImage from '../assets/home page.png';
import leafPerfectHd from '../assets/leaf_perfect_hd.png';
import bsfLarva from '../assets/bsf_larva.png';

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    // Exact distribution based on reference image
    const floatingItems = [
        // Leaves - Left Cluster
        { src: leafPerfectHd, top: '10%', left: '8%', size: 65, delay: 0.1, rotateInit: -15 },
        { src: leafPerfectHd, top: '22%', left: '5%', size: 70, delay: 0.4, rotateInit: 25 },
        { src: leafPerfectHd, top: '38%', left: '12%', size: 55, delay: 0.7, rotateInit: -10 },
        { src: leafPerfectHd, top: '75%', left: '8%', size: 85, delay: 0.2, rotateInit: 15 },
        { src: leafPerfectHd, top: '88%', left: '12%', size: 60, delay: 1.1, rotateInit: -20 },
        
        // Leaves - Right Cluster
        { src: leafPerfectHd, top: '8%', left: '88%', size: 55, delay: 0.3, rotateInit: 35 },
        { src: leafPerfectHd, top: '35%', left: '92%', size: 50, delay: 1.3, rotateInit: -45 },
        { src: leafPerfectHd, top: '55%', left: '95%', size: 45, delay: 0.6, rotateInit: 20 },
        { src: leafPerfectHd, top: '82%', left: '92%', size: 75, delay: 0.9, rotateInit: -15 },
        
        // Leaves - Inner/Central
        { src: leafPerfectHd, top: '18%', left: '25%', size: 40, delay: 0.5, rotateInit: 10 },
        { src: leafPerfectHd, top: '22%', left: '72%', size: 42, delay: 1.2, rotateInit: 45 },
        { src: leafPerfectHd, top: '45%', left: '32%', size: 35, delay: 0.8, rotateInit: -5 },
        { src: leafPerfectHd, top: '68%', left: '28%', size: 50, delay: 1.4, rotateInit: 20 },
        { src: leafPerfectHd, top: '72%', left: '75%', size: 38, delay: 0.1, rotateInit: 15 },

        // Worms (BSF Larva) - Scattered
        { src: bsfLarva, top: '15%', left: '18%', size: 28, delay: 0.2, rotateInit: 15 },
        { src: bsfLarva, top: '8%', left: '48%', size: 24, delay: 1.0, rotateInit: 40 },
        { src: bsfLarva, top: '12%', left: '78%', size: 32, delay: 0.3, rotateInit: -20 },
        { src: bsfLarva, top: '30%', left: '82%', size: 35, delay: 0.6, rotateInit: 10 },
        { src: bsfLarva, top: '52%', left: '15%', size: 22, delay: 1.5, rotateInit: -30 },
        { src: bsfLarva, top: '58%', left: '85%', size: 38, delay: 0.4, rotateInit: 25 },
        { src: bsfLarva, top: '85%', left: '35%', size: 26, delay: 0.9, rotateInit: 50 },
        { src: bsfLarva, top: '92%', left: '62%', size: 25, delay: 1.2, rotateInit: -15 },
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
                    padding: '60px 20px 0' // Added 60px top padding to push content down
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
                        marginBottom: isMobile ? '0.5rem' : '1.5rem' // Increased margin
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

                {/* ── Buttons (Middle) ── */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    style={{
                        position: 'relative',
                        zIndex: 20,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '1rem' : '1.5rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: isMobile ? '100%' : 'auto',
                        marginBottom: isMobile ? '1.5rem' : '2.5rem', 
                        marginTop: isMobile ? '1rem' : '1.5rem'
                    }}
                >
                    <button
                        onClick={() => document.querySelector('a[href="#technology"]')?.click()}
                        style={{
                            background: '#006b3c',
                            color: 'white',
                            border: 'none',
                            padding: isMobile ? '0.8rem 2rem' : '0.9rem 2.22rem',
                            borderRadius: '9999px',
                            fontWeight: '700',
                            fontSize: isMobile ? '0.9rem' : '1.05rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.6rem',
                            minWidth: isMobile ? '220px' : 'auto',
                            boxShadow: '0 8px 30px rgba(0,107,60,0.3)',
                            transition: 'transform 0.2s ease'
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
                            padding: isMobile ? '0.8rem 2rem' : '0.9rem 2.2rem',
                            borderRadius: '9999px',
                            fontWeight: '700',
                            fontSize: isMobile ? '0.9rem' : '1.05rem',
                            cursor: 'pointer',
                            minWidth: isMobile ? '220px' : 'auto',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#f0fdf4'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; }}
                    >
                        View Gallery
                    </button>
                </motion.div>

                {/* ── Center Image (Bottom) ── */}
                <div style={{
                    position: 'relative',
                    width: isMobile ? '280px' : '460px',
                    height: isMobile ? '280px' : '460px',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: isMobile ? '1rem' : '2rem'
                }}>
                    <motion.img
                        src={homePageImage}
                        alt="Biorak Hero"
                        initial={{ scale: 0, rotate: -720, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ 
                            duration: 3.5, 
                            ease: [0.34, 1.56, 0.64, 1], // Bouncy back-to-front feel
                            delay: 0.5
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>

                {/* ── Hovering Leaves & Worms (Falling Entrance) ── */}
                {floatingItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -800, opacity: 0, rotate: item.rotateInit }}
                        animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: { 
                                duration: 1.5, 
                                delay: item.delay * 0.5,
                                ease: "easeOut"
                            }
                        }}
                        style={{
                            position: 'absolute',
                            top: item.top,
                            left: item.left,
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}
                    >
                        <motion.img
                            src={item.src}
                            alt="floating element"
                            animate={{ 
                                y: [0, 15, 0],
                                rotate: [item.rotateInit, item.rotateInit + 10, item.rotateInit - 10, item.rotateInit]
                            }}
                            transition={{ 
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5 + (item.delay * 0.5) // Start after falling
                            }}
                            style={{
                                width: isMobile ? item.size * 0.75 : item.size,
                                border: 'none',
                                outline: 'none',
                                opacity: item.src === leafPerfectHd ? 0.9 : 0.85,
                                filter: item.src === leafPerfectHd 
                                    ? 'brightness(1.4) saturate(1.2) hue-rotate(-5deg)' 
                                    : 'blur(0.4px)'
                            }}
                        />
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default Home;
