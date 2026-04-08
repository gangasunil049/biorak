import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView, useMotionValue } from 'framer-motion';
import {
    Leaf, Activity, ArrowRight, ArrowDown, Recycle, Zap, BarChart3, Globe,
    Droplets, Thermometer, ShieldCheck, CheckCircle2, ChevronRight,
    Search, Info, Wind, Trash2, Sprout, Heart, Layers, Play, X
} from 'lucide-react';

// Assets
import heroFly from '../assets/bsf_new/hero_fly_clear.png';
import macroFly from '../assets/bsf_new/hero_macro.png';
import adultFlyImg from '../assets/bsf_adult_fly.png';
import larvaImg from '../assets/bsf_larva.png';
import leafBg from '../assets/leaf_bg.png';
import wasteImg from '../assets/step_waste.png';
import frassImg from '../assets/bsf_frass_compost.png';
import proteinImg from '../assets/bsf_new/end_product.png';
import trayImg from '../assets/bsf_larvae_tray.png';
import farmImg from '../assets/bsf_new/tray_farm.png';

/* ── Animation Helpers ───────────────────────────────────────── */
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const glassStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '2rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
};

/* ── Components ─────────────────────────────────────────────── */

const SectionTitle = ({ subtitle, title, description, light = false }) => (
    <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <motion.span
            initial={{ opacity: 0, letterSpacing: '0px' }}
            whileInView={{ opacity: 1, letterSpacing: '4px' }}
            viewport={{ once: true }}
            style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: light ? '#dcfce7' : '#006b3c',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
            }}
        >
            {subtitle}
        </motion.span>
        <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: light ? '#ffffff' : '#004225',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                letterSpacing: '-1.5px'
            }}
        >
            {title}
        </motion.h2>
        {description && (
            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    fontSize: '1.2rem',
                    color: light ? '#e2e8f0' : '#64748b',
                    lineHeight: 1.6
                }}
            >
                {description}
            </motion.p>
        )}
    </div>
);

const GalleryStyleFeatures = () => {
    const features = [
        {
            image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=800&auto=format&fit=crop",
            title: "Landfill Mitigation",
            desc: "Every ton of waste converted by the Black Soldier Fly is a ton prevented from emitting methane in a stagnant landfill environment. Over its lifetime, a single BIORAK facility can divert tens of thousands of tons of organic waste from municipal landfills, directly addressing the urban waste crisis at its source."
        },
        {
            image: "https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=800&auto=format&fit=crop",
            title: "Circular Economy",
            desc: "We transform linear waste streams into closed-loop resource cycles, mimicking nature’s own nutrient recycling. By extracting the inherent value locked in discarded food, we create a continuous loop where waste products become high-grade inputs for agriculture and aquaculture, eliminating the concept of 'trash'."
        },
        {
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
            title: "Eco-Fertilizer",
            desc: "The byproduct of BSF bioconversion is 'frass'—a premium, organic fertilizer. Frass reduces reliance on synthetic chemical fertilizers, restoring natural soil health, promoting beneficial microbial activity, and actively sequestering carbon back into the earth to fight soil depletion."
        },
        {
            image: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=800&auto=format&fit=crop",
            title: "Greenhouse Reduction",
            desc: "Our bioconversion process is remarkably clean. It emits 47 times less CO2 equivalent than traditional composting and 100 times less than if the waste were left to rot in landfills. This immediate reduction in greenhouse gases is a major step toward creating carbon-negative waste management solutions."
        },
        {
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
            title: "Resource Density",
            desc: "BSF farming produces incredibly high-density protein in a fraction of the geographical footprint required for soy or traditional animal feed crops. This extreme spatial efficiency protects pristine forests and habitats from being cleared for agricultural expansion."
        },
        {
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
            title: "Biosecurity",
            desc: "BSF larvae are voracious competitors. In waste environments, they naturally outcompete common houseflies and other pest species. Additionally, their gut enzymes break down harmful bacteria like Salmonella and E. coli, effectively sanitizing the waste and significantly reducing the risk of disease spread."
        }
    ];

    const row1 = features.slice(0, 3);
    const row2 = features.slice(3, 6);

    const Row = ({ items, title1, title2 }) => (
        <div className="bsf-benefits-row">
            {/* Top Left Leaf Badge from reference */}
            <div className="bsf-leaf-badge">
                <Leaf size={24} />
            </div>

            {/* Title matching reference */}
            <div className="bsf-row-title">
                <h2>
                    {title1} <span style={{ color: '#000000' }}>{title2}</span>
                </h2>
            </div>

            {/* The Green Background Stripe */}
            <div className="bsf-green-stripe" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bsf-benefits-grid"
            >
                {items.map((f, i) => (
                    <motion.div key={i} variants={fadeInUp} className="bsf-benefit-card">
                        <div className="bsf-benefit-image-box">
                            <img
                                src={f.image}
                                alt={f.title}
                                className="bsf-benefit-image"
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <h3 className="bsf-benefit-title">
                            {f.title}
                        </h3>
                        <p className="bsf-benefit-desc">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
            <Row items={row1} title1="Environmental" title2="Impact" />
            <Row items={row2} title1="Sustainable" title2="Future" />
        </div>
    );
};


const OrganicFloat = ({ count = 6, seed = 1 }) => {
    return (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {[...Array(count)].map((_, i) => {
                const isLarva = (i + seed) % 3 === 0;
                return (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 20 + Math.random() * 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ position: 'absolute', width: isLarva ? '100px' : '120px', mixBlendMode: 'multiply', filter: 'blur(2px)' }}
                    >
                        <img
                            src={isLarva ? larvaImg : leafBg}
                            alt=""
                            style={{ width: '100%', opacity: 0.2 }}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};



const BSFModal = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(240, 240, 240, 0.98)',
                        backdropFilter: 'blur(30px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem'
                    }}
                >
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        onClick={onClose}
                        className="modal-close-btn"
                        style={{
                            position: 'fixed',
                            top: '1.5rem',
                            right: '1.5rem',
                            background: '#006b3c',
                            border: 'none',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            zIndex: 10001
                        }}
                    >
                        <X size={20} />
                    </motion.button>

                        <style>{`
                            @media (max-width: 768px) {
                                .bsf-modal-content {
                                    grid-template-columns: 1fr !important;
                                    min-height: auto !important;
                                    width: 100% !important;
                                    overflow-x: hidden !important;
                                }
                                .bsf-modal-left {
                                    padding: 2.5rem 1.25rem !important;
                                    order: 2;
                                    width: 100% !important;
                                    box-sizing: border-box !important;
                                }
                                .bsf-modal-left p {
                                    font-size: 1rem !important;
                                    line-height: 1.6 !important;
                                    word-break: break-word !important;
                                }
                                .bsf-modal-right {
                                    padding: 1.5rem !important;
                                    order: 1;
                                    min-height: 250px !important;
                                    width: 100% !important;
                                }
                                .bsf-modal-badge {
                                    left: 15px !important;
                                    padding: 0.6rem !important;
                                }
                                .stats-overlay {
                                    padding: 1rem !important;
                                    bottom: 5% !important;
                                    right: 5% !important;
                                }
                                .stats-grid-inner {
                                    grid-template-columns: 1fr !important;
                                    gap: 1rem !important;
                                    padding: 1.5rem !important;
                                }
                                .modal-container {
                                    border-radius: 1.5rem !important;
                                    width: 96% !important;
                                    max-height: 90vh !important;
                                    margin: 0 auto !important;
                                }
                                .bsf-modal-left h2 {
                                    font-size: 2rem !important;
                                    margin-bottom: 1.5rem !important;
                                }
                            }
                        `}</style>

                        <div className="container modal-container" style={{
                            maxWidth: '1200px',
                            width: '95%',
                            background: 'white',
                            borderRadius: '3.5rem',
                            overflowY: 'auto',
                            boxShadow: '0 60px 120px rgba(0,0,0,0.12)',
                            position: 'relative',
                            maxHeight: '92vh',
                            display: 'flex'
                        }}>

                            {/* Reference Badge */}
                            <div className="bsf-modal-badge" style={{
                                position: 'absolute',
                                top: '0',
                                left: '60px',
                                background: '#006b3c',
                                padding: '1.2rem',
                                borderBottomLeftRadius: '1.5rem',
                                borderBottomRightRadius: '1.5rem',
                                color: 'white',
                                zIndex: 10
                            }}>
                                <Leaf size={28} />
                            </div>

                            <div className="bsf-modal-content" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(450px, 1.2fr) 1fr', width: '100%', minHeight: '650px' }}>
                                {/* Left Side: Content */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bsf-modal-left"
                                    style={{ padding: '4rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                >
                                    <div style={{ color: '#006b3c', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '2rem' }}>
                                        Species Profile
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: '#1a1a1a', fontWeight: 900, lineHeight: 1, marginBottom: '2.5rem', letterSpacing: '-2px' }}>
                                        The Genius of the <br />
                                        <span style={{ color: '#006b3c' }}>Black Soldier Fly</span>
                                    </h2>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                                        <p style={{ fontSize: '1.1rem', color: '#000000', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                                            Unlike common houseflies, Black Soldier Flies (Hermetia illucens) are clean, non-pest insects. They do not sting, bite, or transmit diseases. Their entire life purpose is built around a powerful larval stage designed to decompose organic matter at an industrial scale.
                                        </p>
                                        <p style={{ fontSize: '1.1rem', color: '#000000', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                                            At BIORAK, we harness their natural biological drive to create a truly circular waste economy—turning "trash" into life-sustaining resources. These insects are nature's ultimate recyclers, capable of consuming twice their body weight daily.
                                        </p>

                                        {/* Restored Stats Grid */}
                                        <div 
                                            className="stats-grid-inner"
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(3, 1fr)',
                                                gap: '1.5rem',
                                                marginTop: '1.5rem',
                                                padding: '2rem',
                                                background: '#f8fafc',
                                                borderRadius: '2rem',
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#006b3c' }}>2,000x</div>
                                                <div style={{ fontSize: '0.7rem', color: '#1a1a1a', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.3rem' }}>Weight Inc.</div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#006b3c' }}>24 hrs</div>
                                                <div style={{ fontSize: '0.7rem', color: '#1a1a1a', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.3rem' }}>Breakdown</div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#006b3c' }}>0%</div>
                                                <div style={{ fontSize: '0.7rem', color: '#1a1a1a', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.3rem' }}>Health Risk</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <button
                                            onClick={onClose}
                                            style={{
                                                background: '#006b3c',
                                                color: 'white',
                                                border: 'none',
                                                padding: '1.2rem 4rem',
                                                borderRadius: '100px',
                                                fontWeight: 800,
                                                fontSize: '1.1rem',
                                                cursor: 'pointer',
                                                boxShadow: '0 20px 40px rgba(0,107,60,0.25)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            LEARN MORE
                                        </button>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '12px', height: '12px', background: '#006b3c', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,107,60,0.3)' }}></div>
                                            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#94a3b8', letterSpacing: '2px' }}>V2.0 BIORAK</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Side: Large Leaf Graphic */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="bsf-modal-right"
                                    style={{
                                        position: 'relative',
                                        background: 'linear-gradient(to right, #f8fafc, #ffffff)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '3rem'
                                    }}
                                >
                                    {/* Decorative Glow behind the leaf */}
                                    <div style={{
                                        position: 'absolute',
                                        width: '80%',
                                        height: '80%',
                                        background: 'radial-gradient(circle, rgba(0, 107, 60, 0.08) 0%, transparent 70%)',
                                        zIndex: 0
                                    }}></div>

                                    {/* Refined Leaf Mask Container - More visible and detailed */}
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        maxWidth: '600px',
                                        maxHeight: '600px',
                                        position: 'relative',
                                        zIndex: 1,
                                        /* Refined Palmate Leaf Mask with distinct lobes */
                                        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 100 C50 100 50 85 50 75 C65 90 85 95 100 85 C85 70 75 60 60 60 C80 60 95 55 100 35 C80 35 70 45 60 55 C60 35 70 15 50 0 C30 15 40 35 40 55 C30 45 20 35 0 35 C5 55 20 60 40 60 C25 60 15 70 0 85 C15 95 35 90 50 75 Z'/%3E%3C/svg%3E")`,
                                        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 100 C50 100 50 85 50 75 C65 90 85 95 100 85 C85 70 75 60 60 60 C80 60 95 55 100 35 C80 35 70 45 60 55 C60 35 70 15 50 0 C30 15 40 35 40 55 C30 45 20 35 0 35 C5 55 20 60 40 60 C25 60 15 70 0 85 C15 95 35 90 50 75 Z'/%3E%3C/svg%3E")`,
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center',
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain'
                                    }}>
                                        <img
                                            src={adultFlyImg}
                                            alt="BSF Fly inside leaf"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                transform: 'scale(1)',
                                                transition: 'transform 0.5s ease'
                                            }}
                                        />
                                    </div>

                                    {/* Floating Stats Overlay */}
                                    {!isMobile && (
                                        <motion.div
                                            animate={{ y: [0, -15, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                            className="stats-overlay"
                                            style={{
                                                position: 'absolute',
                                                bottom: '8%',
                                                right: '5%',
                                                background: 'white',
                                                padding: '1.5rem 2.5rem',
                                                borderRadius: '2rem',
                                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.2rem',
                                                zIndex: 2,
                                                border: '1px solid rgba(0,0,0,0.05)'
                                            }}
                                        >
                                            <div style={{ color: '#006b3c', fontWeight: 900, fontSize: '2.2rem' }}>2,000x</div>
                                            <div style={{ color: '#1a1a1a', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '1px' }}>Efficiency<br />Scale</div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const BSF = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#1e293b', overflow: 'hidden' }}>
            <BSFModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* ═══════════════════════════════════════════════════════
                SECTION 1: HERO & INTRODUCTION
            ═══════════════════════════════════════════════════════ */}
            <section ref={heroRef} className="bsf-hero-section" style={{ position: 'relative', background: '#f5f7f5', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '4rem',
                    overflow: 'hidden',
                    boxShadow: '0 60px 120px rgba(0,0,0,0.07)',
                    padding: '0'
                }}>

                    {/* Top Leaf Badge */}
                    <div className="bsf-hero-badge" style={{
                        position: 'absolute',
                        top: '0',
                        left: '60px',
                        background: '#006b3c',
                        padding: '1.2rem',
                        borderBottomLeftRadius: '1.5rem',
                        borderBottomRightRadius: '1.5rem',
                        color: 'white',
                        zIndex: 10
                    }}>
                        <Leaf size={28} />
                    </div>

                    <div className="bsf-hero-grid">

                        {/* Column 1: Heading + Description */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Heading Banner - Stripe Style */}
                            <motion.div
                                initial={{ x: -80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="heading-stripe"
                                style={{
                                    background: '#006b3c',
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '6.5rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                <h1 style={{
                                    fontSize: 'clamp(2.2rem, 3.8vw, 3.8rem)',
                                    color: 'white',
                                    fontWeight: 900,
                                    lineHeight: 1.15,
                                    margin: 0,
                                    letterSpacing: '-1.5px'
                                }}>
                                    Nature's Recyclers <br />
                                    Return to Purity
                                </h1>
                            </motion.div>

                            {/* Description Box */}
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="desc-box"
                                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
                            >
                                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', lineHeight: 1.8, margin: 0, fontWeight: 500, opacity: 0.85 }}>
                                    Hermetia illucens is nature's ultimate bio-refinery. At BIORAK, we harness this extraordinary species to convert organic waste into high-value resources with minimal environmental footprint. Through rapid larval bioconversion, they transform food waste into sustainable protein and premium organic fertilizer — fueling a true circular economy where nothing is wasted and everything has value.
                                </p>
                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        style={{
                                            background: '#006b3c',
                                            color: 'white',
                                            border: 'none',
                                            padding: '1.2rem 3.5rem',
                                            borderRadius: '1.5rem',
                                            fontWeight: 800,
                                            fontSize: '1.1rem',
                                            cursor: 'pointer',
                                            boxShadow: '0 20px 40px rgba(0,107,60,0.2)'
                                        }}
                                    >
                                        EXPLORE SPECIES
                                    </button>
                                    <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#94a3b8', letterSpacing: '4px' }}>VERSION 2.0</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Column 2: Image + Stats */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Hero Image */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="hero-img-box"
                            >
                                <img
                                    src={heroFly}
                                    alt="Black Soldier Fly"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', top: '2.5rem', right: '3rem', color: 'white', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '2px' }}>
                                    #SustainableFarming
                                </div>
                            </motion.div>

                            {/* Stat Card */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="stat-card-box"
                            >
                                <div
                                    className="stat-card"
                                    style={{
                                        background: '#84cc16',
                                        borderRadius: '2.2rem',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2.5rem',
                                        boxShadow: '0 35px 70px rgba(132, 204, 22, 0.2)'
                                    }}
                                >
                                    <div style={{ fontSize: '3.2rem', fontWeight: 900 }}>+889</div>
                                    <div style={{ fontSize: '1.05rem', lineHeight: 1.45, opacity: 0.95, fontWeight: 500 }}>
                                        Waste processing efficiency <br />
                                        Optimization in larval growth stages
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── SECTION 4: ENVIRONMENTAL BENEFITS ── */}
            <section 
                className="bsf-bottom-section"
                style={{
                    background: '#f8fafc',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingBottom: '8rem'
                }}
            >
                <OrganicFloat count={8} seed={1} />

                {/* Soft Dynamic Accents */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        left: '-5%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
                        zIndex: 0
                    }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Removed SectionTitle because the gallery now includes its own integrated titles matching the reference */}

                    <motion.div>
                        <GalleryStyleFeatures />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BSF;

