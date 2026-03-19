import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/home_page_new-Photoroom.png';
import leafBg from '../assets/leaf_bg.png';
import larvaBg from '../assets/bsf_larva.png';


/*
  Background elements use ONLY CSS animations:
    1. "_leaf-drop"  — drops from -100vh to resting position (runs once)
    2. "_leaf-float" — gentle float loop, starts after drop lands
  This keeps the JS thread free so the hero spiral runs at a perfect 60fps.
*/
const BG_ELEMENTS = [
    // Foreground Leaves
    { top: '5%', right: '15%', width: 120, blur: 0, opacity: 1, rotate: 45, delay: 0.0, dur: 6 },
    { bottom: '10%', right: '5%', width: 110, blur: 0, opacity: 1, rotate: -70, delay: 0.5, dur: 7 },
    { top: '15%', left: '5%', width: 130, blur: 0, opacity: 0.95, rotate: 160, delay: 0.1, dur: 6.5 },
    { bottom: '25%', left: '8%', width: 95, blur: 0, opacity: 1, rotate: 35, delay: 0.35, dur: 8 },
    { top: '22%', left: '65%', width: 85, blur: 0, opacity: 0.95, rotate: -15, delay: 0.15, dur: 7 },
    // Midground Leaves
    { top: '35%', left: '20%', width: 75, blur: 1, opacity: 0.85, rotate: -60, delay: 0.55, dur: 7.5 },
    { bottom: '15%', left: '25%', width: 65, blur: 2, opacity: 0.8, rotate: 120, delay: 0.45, dur: 6 },
    { top: '45%', right: '25%', width: 70, blur: 1, opacity: 0.9, rotate: -45, delay: 0.6, dur: 8 },
    { top: '10%', right: '35%', width: 60, blur: 2, opacity: 0.85, rotate: -20, delay: 0.2, dur: 7 },
    { bottom: '30%', right: '20%', width: 80, blur: 1, opacity: 0.9, rotate: 110, delay: 0.3, dur: 6.5 },
    { top: '8%', left: '35%', width: 70, blur: 1, opacity: 0.85, rotate: 15, delay: 0.4, dur: 7.5 },
    // Background Leaves
    { top: '28%', right: '8%', width: 45, blur: 3, opacity: 0.7, rotate: 80, delay: 0.4, dur: 8 },
    { top: '65%', right: '8%', width: 55, blur: 4, opacity: 0.6, rotate: 15, delay: 0.1, dur: 6 },
    { bottom: '5%', left: '15%', width: 50, blur: 3, opacity: 0.75, rotate: -25, delay: 0.65, dur: 7 },
    { top: '55%', left: '8%', width: 40, blur: 4, opacity: 0.65, rotate: 85, delay: 0.15, dur: 7.5 },
    { top: '30%', left: '80%', width: 50, blur: 3, opacity: 0.7, rotate: 105, delay: 0.35, dur: 6.5 },
    // Larvae
    { isLarva: true, top: '40%', right: '5%', width: 55, blur: 1, opacity: 0.9, rotate: 45, delay: 0.25, dur: 7 },
    { isLarva: true, bottom: '5%', right: '35%', width: 60, blur: 1, opacity: 0.85, rotate: -30, delay: 0.5, dur: 6.5 },
    { isLarva: true, top: '5%', right: '28%', width: 65, blur: 0, opacity: 0.95, rotate: 15, delay: 0.3, dur: 8 },
    { isLarva: true, top: '45%', left: '12%', width: 70, blur: 0, opacity: 0.95, rotate: -110, delay: 0.6, dur: 7 },
    { isLarva: true, bottom: '15%', left: '35%', width: 50, blur: 2, opacity: 0.8, rotate: 75, delay: 0.45, dur: 6 },
    { isLarva: true, top: '10%', left: '25%', width: 45, blur: 2, opacity: 0.75, rotate: -25, delay: 0.15, dur: 7.5 },
    { isLarva: true, top: '2%', left: '50%', width: 55, blur: 1, opacity: 0.85, rotate: 80, delay: 0.55, dur: 8 },
    { isLarva: true, top: '65%', left: '2%', width: 65, blur: 0, opacity: 0.9, rotate: -15, delay: 0.35, dur: 6.5 },
];

const DROP_DUR = 1.5; // seconds for the drop-in

const Home = () => (
    <div className="home-page">
        {/* Keyframes injected once — runs on GPU compositor, zero JS cost */}
        <style>{`
            @keyframes _leaf-drop {
                from { transform: translateY(-100vh); opacity: 0; }
                to   { transform: translateY(0px);   opacity: 1; }
            }
            @keyframes _leaf-float {
                0%   { transform: translateY(0px); }
                33%  { transform: translateY(-11px) rotate(2deg); }
                66%  { transform: translateY(-4px)  rotate(-2deg); }
                100% { transform: translateY(0px); }
            }

        `}</style>

        {/* ── Hero Section ─────────────────────────────────── */}
        <section style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '60px 0 20px',
            background: 'radial-gradient(circle at top right, rgba(16,185,129,0.05), transparent), radial-gradient(circle at bottom left, rgba(241,245,249,0.8), transparent)',
            overflow: 'hidden'
        }}>

            {/* ── Leaves & Larvae: drop from top then float — pure CSS ── */}
            {BG_ELEMENTS.map((el, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: el.top, bottom: el.bottom,
                        left: el.left, right: el.right,
                        width: el.width,
                        zIndex: 0,
                        opacity: 0,
                        mixBlendMode: 'multiply',
                        /*
                          Phase 1: drop in from -100vh  (cubic-bezier ≈ spring with slight bounce)
                          Phase 2: gentle float loop     (starts exactly when drop finishes)
                        */
                        animation: [
                            `_leaf-drop ${DROP_DUR}s cubic-bezier(0.34, 1.3, 0.64, 1) both ${el.delay}s`,
                            `_leaf-float ${el.dur}s ease-in-out infinite ${el.delay + DROP_DUR}s`,
                        ].join(', '),
                    }}
                >
                    <img
                        src={el.isLarva ? larvaBg : leafBg}
                        alt=""
                        loading="eager"
                        decoding="async"
                        width={el.width}
                        style={{
                            width: '100%',
                            display: 'block',
                            opacity: el.opacity,
                            transform: `rotate(${el.rotate}deg)`,
                            filter: `blur(${el.blur}px) brightness(1.15) contrast(1.2)`,
                            willChange: 'transform',
                        }}
                    />
                </div>
            ))}

            <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                <div className="hero-content-wrapper">

                    {/* ── Headline ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="hero-headline-container"
                    >
                        <h1 style={{ 
                            fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', 
                            lineHeight: '1.1', 
                            marginBottom: '1.5rem', 
                            color: 'var(--text-main)' 
                        }}>
                            Waste Is Not the End.<br /><span style={{ color: 'var(--primary)' }}>It's the Beginning.</span>
                        </h1>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="#technology" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                                Our Technology <ArrowRight size={16} />
                            </a>
                            <a href="#gallery" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                                View Gallery
                            </a>
                        </div>
                    </motion.div>

                    {/* ── Hero image spiral ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3, rotate: -200 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 2.4,
                            ease: 'easeInOut',
                            delay: 0.1,
                        }}
                        className="hero-image-container"
                    >
                        <div className="hero-image-inner">
                            <img
                                src={heroImg}
                                alt="Eco Technology"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    </div>
);

export default Home;
