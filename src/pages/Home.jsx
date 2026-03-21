import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home-page">
            <style>{`
                @media (max-width: 768px) {
                    .hero-section {
                        height: 100vh !important;
                        background: #ffffff;
                    }
                    .hero-video {
                        object-fit: contain !important;
                        height: 100% !important;
                    }
                }
            `}</style>
            {/* ── Hero Section ─────────────────────────────────── */}
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
                    color: 'white'
                }}
            >
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
                    objectFit: 'cover',
                    zIndex: 0,
                    filter: 'brightness(1.22) contrast(1.15) saturate(1.15)' // Further boost visual pop
                }}
            >
                <source src="/bg2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* ── More subtle overlay: subtle vignette instead of solid graying ── */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)',
                zIndex: 1
            }} />

            <div className="container" style={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                position: 'relative', 
                zIndex: 2,
                justifyContent: 'center'
            }}>
                <div className="hero-content-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: '2rem'
                }}>

                    {/* ── All hero content removed as the text/visuals are baked into the video ── */}

                </div>
            </div>
        </section>
    </div>
    );
};

export default Home;
