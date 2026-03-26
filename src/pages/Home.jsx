import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png';
import leafPerfectHd from '../assets/leaf_perfect_hd.png';
import bsfLarva from '../assets/bsf_larva.png';

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    // Denser floating items list for filling blank spaces
    const floatingItems = [
        // Left Side
        { src: leafPerfectHd, top: '5%', left: '8%', size: 70, delay: 0.2, rotateInit: -20 },
        { src: bsfLarva, top: '15%', left: '16%', size: 35, delay: 0.8, rotateInit: 45 },
        { src: leafPerfectHd, top: '25%', left: '4%', size: 60, delay: 1.1, rotateInit: 10 },
        { src: leafPerfectHd, top: '55%', left: '5%', size: 100, delay: 0.5, rotateInit: 15 },
        { src: bsfLarva, top: '65%', left: '12%', size: 30, delay: 1.3, rotateInit: -10 },
        { src: bsfLarva, top: '75%', left: '18%', size: 40, delay: 1.2, rotateInit: -30 },
        { src: leafPerfectHd, top: '88%', left: '12%', size: 85, delay: 1.5, rotateInit: -5 },
        
        // Right Side
        { src: leafPerfectHd, top: '8%', left: '88%', size: 80, delay: 0.6, rotateInit: 35 },
        { src: leafPerfectHd, top: '22%', left: '92%', size: 55, delay: 0.9, rotateInit: -25 },
        { src: bsfLarva, top: '35%', left: '82%', size: 50, delay: 1.0, rotateInit: -15 },
        { src: bsfLarva, top: '48%', left: '88%', size: 35, delay: 1.6, rotateInit: 20 },
        { src: leafPerfectHd, top: '60%', left: '92%', size: 110, delay: 0.4, rotateInit: -45 },
        { src: bsfLarva, top: '80%', left: '85%', size: 45, delay: 1.8, rotateInit: 60 },
        { src: leafPerfectHd, top: '92%', left: '78%', size: 85, delay: 1.4, rotateInit: 25 },
        { src: bsfLarva, top: '12%', left: '50%', size: 30, delay: 2.1, rotateInit: 0 }
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
                        height: 100vh !important;
                        background: #ffffff;
                    }
                    .hero-video {
                        object-fit: contain !important;
                        height: 100% !important;
                        width: 100% !important;
                        background: #ffffff !important;
                        background-color: #ffffff !important;
                        clip-path: inset(3.5% 5%);
                    }
                }
            `}</style>
            
            <section
                className="hero-section"
                style={{
                    position: 'relative',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    background: '#ffffff',
                    color: '#1a1a1a'
                }}
            >
                {/* ── Horizontal Mask for black line ── */}
                <div style={{
                    position: 'absolute',
                    top: isMobile ? '23%' : '20%',
                    width: '100%',
                    height: '10px',
                    background: '#ffffff',
                    zIndex: 1
                }} />

                {/* ── Background Video ── */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: 0,
                        background: '#ffffff',
                        backgroundColor: '#ffffff',
                        border: 'none',
                        outline: 'none',
                        clipPath: isMobile ? 'inset(3.5% 5%)' : 'none',
                        filter: 'contrast(1.15) saturate(1.2) brightness(1.05)',
                        transform: isMobile ? 'scale(1.0)' : 'scale(0.8)'
                    }}
                >
                    <source src="/hero_page.mp4" type="video/mp4" />
                </video>

                {/* ── Hovering Leaves & Worms ── */}
                {floatingItems.map((item, index) => (
                    <motion.img
                        key={index}
                        src={item.src}
                        alt="floating element"
                        initial={{ opacity: 0, rotate: item.rotateInit }}
                        animate={{ 
                            opacity: 0.9,
                            y: [0, 25, 0],
                            rotate: [item.rotateInit, item.rotateInit + 12, item.rotateInit - 8, item.rotateInit]
                        }}
                        transition={{ 
                            opacity: { duration: 1.5 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                        }}
                        style={{
                            position: 'absolute',
                            top: item.top,
                            left: item.left,
                            zIndex: 5,
                            pointerEvents: 'none',
                            width: isMobile ? item.size * 0.45 : item.size,
                            mixBlendMode: 'multiply',
                            filter: item.src === leafPerfectHd ? 'contrast(1.35) saturate(1.4)' : 'contrast(1.15) saturate(1.15)'
                        }}
                    />
                ))}

                {/* ── Mobile Branding and Menu ── */}
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
                        zIndex: 20
                    }}>
                        <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#006b3c', fontFamily: '"Outfit", sans-serif' }}>BIORAK</div>
                        <div onClick={() => document.querySelector('.mobile-toggle')?.click()} style={{ display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer' }}>
                            <div style={{ width: '22px', height: '2px', background: '#1a1a1a' }}></div>
                            <div style={{ width: '22px', height: '2px', background: '#1a1a1a' }}></div>
                            <div style={{ width: '15px', height: '2px', background: '#1a1a1a', alignSelf: 'flex-end' }}></div>
                        </div>
                    </div>
                )}

                {/* ── Overlay Heading ── */}
                <div style={{
                    position: 'absolute',
                    top: isMobile ? '20%' : '5%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    textAlign: 'center',
                    width: '100%',
                    padding: '0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: isMobile ? '1rem' : '1.5rem'
                }}>
                    <div style={{
                        fontSize: isMobile ? '2.5rem' : '5.5rem',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                        margin: 0,
                        fontFamily: '"Outfit", sans-serif',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>
                        <span style={{ color: '#1a1a1a', background: '#ffffff', display: 'inline-block', padding: '0 50px', borderRadius: '4px' }}>Waste Is Not the End.</span>
                        <br />
                        <span style={{ color: '#008447', background: '#ffffff', display: 'inline-block', padding: '0 50px', borderRadius: '4px' }}>It's the Beginning.</span>
                    </div>

                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            gap: '1.2rem',
                            marginTop: '1rem',
                            justifyContent: 'center'
                        }}>
                            <button
                                onClick={() => document.querySelector('a[href="#technology"]')?.click()}
                                className="hero-btn-primary"
                                style={{
                                    background: '#006b3c',
                                    color: 'white',
                                    border: 'none',
                                    padding: '1rem 2rem',
                                    borderRadius: '9999px',
                                    fontWeight: '700',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    boxShadow: '0 10px 25px rgba(0,107,60,0.3)'
                                }}
                            >
                                Our Technology <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => document.querySelector('a[href="#gallery"]')?.click()}
                                style={{
                                    background: 'white',
                                    color: '#006b3c',
                                    border: '2px solid #006b3c',
                                    padding: '1rem 2rem',
                                    borderRadius: '9999px',
                                    fontWeight: '700',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                View Gallery
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Bottom Buttons (Mobile) ── */}
                {isMobile && (
                    <div style={{
                        position: 'absolute',
                        bottom: '16%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 15,
                        width: '100%',
                        display: 'flex',
                        gap: '0.6rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 20px'
                    }}>
                        <button
                            onClick={() => document.querySelector('a[href="#technology"]')?.click()}
                            style={{
                                background: '#006b3c',
                                color: 'white',
                                border: 'none',
                                padding: '0.7rem 1.2rem',
                                borderRadius: '9999px',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                boxShadow: '0 10px 25px rgba(0,107,60,0.3)'
                            }}
                        >
                            Our Technology
                        </button>
                        <button
                            onClick={() => document.querySelector('a[href="#gallery"]')?.click()}
                            style={{
                                background: 'white',
                                color: '#006b3c',
                                border: '2px solid #006b3c',
                                padding: '0.7rem 1.2rem',
                                borderRadius: '9999px',
                                fontWeight: '700',
                                fontSize: '0.85rem'
                            }}
                        >
                            View Gallery
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
