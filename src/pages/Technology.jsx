import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Recycle, Zap, ArrowRight, Settings, BarChart3, Globe, Layers, Droplets, Thermometer, Gauge, CheckCircle2, X } from 'lucide-react'; const TechDetailsOverlay = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 66, 37, 0.98)',
                        backdropFilter: 'blur(20px)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'start',
                        overflowY: 'auto',
                        padding: '6rem 2rem'
                    }}
                >
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: '2rem',
                            right: '2rem',
                            background: 'white',
                            border: 'none',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#004225',
                            cursor: 'pointer',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            zIndex: 10000
                        }}
                    >
                        <X size={32} />
                    </motion.button>

                    <div className="container" style={{ maxWidth: '900px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span style={{ color: '#10b981', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Deep Dive</span>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontWeight: 800, margin: '1rem 0 3rem', lineHeight: 1.1 }}>
                                Advanced BIORAK <br /> <span style={{ color: '#10b981' }}>Technology</span>
                            </h2>

                            <div style={{ color: 'white', fontSize: '1.25rem', lineHeight: 2, textAlign: 'justify' }}>
                                <p style={{ marginBottom: '2rem' }}>
                                    This advanced vertical rack system represents a major step forward in industrial Black Soldier Fly (BSF) cultivation. Unlike traditional plastic tray systems that often struggle with poor thermal regulation and high labor demands, this modular aluminum-based architecture is designed for long-term durability and efficient operation in demanding biological environments.
                                </p>
                                
                                <p style={{ marginBottom: '2rem' }}>
                                    Each rack is engineered with a precision mesh base that enhances passive airflow throughout the system. This design helps prevent the formation of “hotspots” — areas of anaerobic activity commonly found in conventional tray systems — ensuring consistent oxygen circulation and optimal conditions for larval growth. The system can also be integrated with environmental monitoring tools that track parameters such as temperature, humidity, and CO₂ levels, enabling better process control and improved production outcomes.
                                </p>

                                <p style={{ marginBottom: '2rem' }}>
                                    Scalability is a core feature of the design. The vertical rack structure allows facilities to maximize space utilization and significantly increase production capacity within a smaller footprint compared to ground-based setups. This vertical configuration also supports automation technologies, allowing mechanized feeding, mixing, and harvesting processes that reduce manual labor while improving operational consistency.
                                </p>

                                <p style={{ marginBottom: '2rem' }}>
                                    Beyond productivity, the system supports sustainable waste management practices. Built with durable and recyclable materials, the infrastructure aligns with circular economy principles by converting organic waste into valuable outputs such as high-quality proteins, lipids, and organic fertilizers. By enabling efficient waste-to-resource transformation, the system offers an effective solution for municipalities and industries seeking sustainable waste management while maintaining high standards of hygiene and biosecurity.
                                </p>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                style={{ marginTop: '4rem', padding: '3rem', borderRadius: '2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                    <div>
                                        <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>100%</div>
                                        <div style={{ color: 'white', opacity: 0.6, fontSize: '0.9rem' }}>Recyclable Aluminum</div>
                                    </div>
                                    <div>
                                        <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>4.0+</div>
                                        <div style={{ color: 'white', opacity: 0.6, fontSize: '0.9rem' }}>Industry Automation</div>
                                    </div>
                                    <div>
                                        <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Real-time</div>
                                        <div style={{ color: 'white', opacity: 0.6, fontSize: '0.9rem' }}>Climate Monitoring</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Assets
import rackHero from '../assets/bsf_new/tray_farm.png';
import techDesignImg from '../assets/bsf_rack_system.png';
import wasteImg from '../assets/bsf_new/feature_waste.png';
import fillerImg from '../assets/bsf_processing_tech.png';
import mixerImg from '../assets/tech.png';
import wateringImg from '../assets/bsf_step_3.png';
import harvestingImg from '../assets/step_harvest.png';
import monitoringImg from '../assets/bsf_step_4.png';

/* ── Animation Helpers ───────────────────────────────────────── */
const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardHover = {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3, ease: "easeOut" }
};

const ZOEM_INTRO = "This system features an advanced vertical rack-based design that enables efficient and scalable Black Soldier Fly farming, transforming organic waste into high-value protein and nutrient-rich organic fertilizer.";

const sectionBgStyle = {
    position: 'relative',
    background: 'linear-gradient(135deg, #ffffff 0%, #f7fee7 50%, #f0fdf4 100%)',
    overflow: 'hidden'
};

const glassStyle = {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '1.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
};

const PERFORMANCE_METRICS = [
    { label: 'Waste Processing', value: 70, unit: 'Tons/Year', icon: <Recycle />, prefix: "1 - ", suffix: "k+" },
    { label: 'Labor Reduction', value: 70, unit: '% Fewer Staff', icon: <Zap /> },
    { label: 'Energy Savings', value: 40, unit: '% Via Airflow', icon: <Gauge /> },
    { label: 'Typical ROI', value: 24, unit: 'Months', icon: <BarChart3 />, prefix: "18 - " }
];

const AUTOMATION_SUITE = [
    {
        title: 'Waste Pre-processing',
        desc: 'Advanced shredding and decontamination systems prepare diverse organic waste streams for optimal larval digestion.',
        icon: <Recycle className="w-8 h-8" />,
        image: wasteImg
    },
    {
        title: 'ZOEM Filler',
        desc: 'Robotic system deposits uniform substrate layers (5-10 cm deep) across multiple racks, handling viscous wastes like food scraps or manure.',
        icon: <Settings className="w-8 h-8" />,
        image: fillerImg
    },
    {
        title: 'Dynamic Mixer',
        desc: 'Agitates substrate in-place to break crusts, ensuring oxygen penetration and consistent larval growth with up to 40% higher yields.',
        icon: <Recycle className="w-8 h-8" />,
        image: mixerImg
    },
    {
        title: 'Precision Watering',
        desc: 'Drip or mist applicators deliver 1-2 L/m² daily, with cooling cycles reducing room temps by 5°C in under 10 minutes.',
        icon: <Droplets className="w-8 h-8" />,
        image: wateringImg
    },
    {
        title: 'Harvesting Tools',
        desc: 'Automated sieves and vibratory conveyors extract mature larvae (L5 stage) without damage, achieving 95% recovery rates.',
        icon: <Zap className="w-8 h-8" />,
        image: harvestingImg
    },
    {
        title: 'AI Monitoring',
        desc: 'Complete software packages for climate monitoring, yield data, and recipe assignment. Expandable with real-time analysis.',
        icon: <Gauge className="w-8 h-8" />,
        image: monitoringImg
    }
];

const Counter = ({ value }) => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    React.useEffect(() => {
        if (inView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [inView, value]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const FlipCard = ({ item, index }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <motion.div
            variants={fadeInUp}
            className="automation-card"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="automation-card-inner"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Front Side */}
                <div className="automation-card-front">
                    <div className="automation-card-image">
                        <img src={item.image} alt={item.title} />
                        
                        {/* Digital Tech Overlay */}
                        <div className="automation-card-overlay"></div>
                        
                        {/* Scanning Line Animation */}
                        <motion.div 
                            animate={{ y: [0, 150, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="automation-scanning-line"
                        />
                    </div>
                    <div className="automation-card-content">
                        <div className="automation-card-icon">
                            {item.icon}
                        </div>
                        <h4 className="automation-card-title">{item.title}</h4>
                        <div className="automation-card-label">
                            <div className="label-line"></div>
                            <span>Smart System</span>
                            <div className="label-line"></div>
                        </div>
                    </div>
                </div>
 
                {/* Back Side */}
                <div className="automation-card-back">
                    <div className="back-icon">{item.icon}</div>
                    <p>{item.desc}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Technology = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return (
        <div className="technology-page" style={{ paddingTop: '100px', background: '#ffffff', color: '#1e293b' }}>
            <TechDetailsOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
            
            {/* ── Section 1: Hero & Intro ── */}
            <section style={{ padding: '80px 0', background: 'linear-gradient(to bottom, #f8fafc, #ffffff)', overflow: 'hidden' }}>
                <div className="container">
                    <div className="tech-hero-grid" style={{ marginBottom: '6rem' }}>
                        <motion.div initial="initial" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}>
                            <motion.div variants={fadeInUp} className="tech-tag" style={{ background: 'rgba(0, 107, 60, 0.1)', color: '#006b3c' }}>
                                PATENTED TECHNOLOGY
                            </motion.div>
                            <motion.h1 
                                variants={fadeInUp}
                                className="tech-hero-title"
                                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#004225', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}
                            >
                                The BIORAK <span style={{ color: '#006b3c' }}>Rack System</span>
                            </motion.h1>
                            <motion.p 
                                variants={fadeInUp}
                                className="tech-hero-desc"
                                style={{ fontSize: '1.25rem', color: '#000000', lineHeight: 1.6, marginBottom: '2.5rem' }}
                            >
                                {ZOEM_INTRO}
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <button 
                                    onClick={() => setIsOverlayOpen(true)}
                                    className="btn btn-primary" 
                                    style={{ border: 'none', cursor: 'pointer', background: '#006b3c', color: 'white', padding: '1rem 2rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    Learn More <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="tech-image-container"
                        >
                            <div className="tech-image-border"></div>
                            <img 
                                src={rackHero} 
                                alt="ZOEM Technology" 
                                style={{ width: '100%', borderRadius: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', position: 'relative', zIndex: 1, objectFit: 'cover' }} 
                            />
                        </motion.div>
                    </div>

                    {/* Quick Stats Grid */}
                    <motion.div 
                        initial="initial" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
                        className="tech-stats-grid"
                    >
                        {PERFORMANCE_METRICS.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={cardHover}
                                className="tech-stat-card"
                            >
                                <div style={{ color: '#006b3c', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                                <div className="tech-stat-value">
                                    {stat.prefix}<Counter value={stat.value} />{stat.suffix}
                                </div>
                                <div className="tech-stat-label">{stat.label}</div>
                                <div className="tech-stat-unit">{stat.unit}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* ── Section 3: Technical Design & Deployment Specs ── */}
             <section className="tech-section-compact" style={{ ...sectionBgStyle }}>
                {/* Subtle Background Pattern */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none', zIndex: 0 }}>
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M50 0 C70 20 80 40 80 60 C80 80 70 100 50 100 C30 100 20 80 20 60 C20 40 30 20 50 0" fill="#006b3c" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
                    </svg>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="tech-design-main-grid">
                        
                        {/* Left Column: Technical Description */}
                        <motion.div 
                            initial="initial" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
                        >
                            <div>
                                <motion.div variants={fadeInUp} style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: '#dcfce7', color: '#006b3c', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px' }}>
                                    CORE ENGINEERING
                                </motion.div>
                                <motion.h2 
                                    variants={fadeInUp}
                                    className="tech-design-title"
                                    style={{ fontSize: 'clamp(2.8rem, 4vw, 3.8rem)', color: '#004225', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-1.5px' }}
                                >
                                    Technical <span style={{ color: '#006b3c' }}>Design</span>
                                </motion.h2>
                                <motion.p 
                                    variants={fadeInUp}
                                    className="tech-design-desc"
                                    style={{ color: '#000000', fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '3rem', maxWidth: '600px' }}
                                >
                                    Aluminum racks form a modular, stackable framework that replaces single-use plastic trays. The patented tray design includes escape-proof barriers, optimized mesh for airflow, and accessibility for in-rack operations like seeding, feeding, harvesting, and cleaning.
                                </motion.p>
                            </div>
 
                            {/* Glassmorphism Condition Cards */}
                            <div className="tech-design-grid">
                                <motion.div 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        y: -10, 
                                        boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                                        borderColor: 'rgba(16, 185, 129, 0.5)'
                                    }}
                                    className="tech-condition-card"
                                >
                                    <div style={{ background: 'white', width: '50px', height: '50px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                                        <Thermometer style={{ color: '#006b3c' }} size={24} />
                                    </div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.8rem', color: '#004225', fontSize: '1.3rem' }}>Ideal Temp</h4>
                                    <p style={{ fontSize: '1rem', color: '#000000', fontWeight: 500 }}>Precision Zoning <span style={{ color: '#006b3c', fontWeight: 700 }}>27–30°C</span></p>
                                </motion.div>
 
                                <motion.div 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        y: -10, 
                                        boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                                        borderColor: 'rgba(16, 185, 129, 0.5)'
                                    }}
                                    className="tech-condition-card"
                                >
                                    <div style={{ background: 'white', width: '50px', height: '50px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                                        <Droplets style={{ color: '#006b3c' }} size={24} />
                                    </div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.8rem', color: '#004225', fontSize: '1.3rem' }}>Humidity</h4>
                                    <p style={{ fontSize: '1rem', color: '#000000', fontWeight: 500 }}>Controlled <span style={{ color: '#006b3c', fontWeight: 700 }}>60–70%</span></p>
                                </motion.div>
 
                                <motion.div 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        y: -10, 
                                        boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                                        borderColor: 'rgba(16, 185, 129, 0.5)'
                                    }}
                                    className="tech-condition-card"
                                >
                                    <div style={{ background: 'white', width: '50px', height: '50px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                                        <Gauge style={{ color: '#006b3c' }} size={24} />
                                    </div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.8rem', color: '#004225', fontSize: '1.3rem' }}>CO2 Control</h4>
                                    <p style={{ fontSize: '1rem', color: '#000000', fontWeight: 500 }}>Smart Extraction <span style={{ color: '#006b3c', fontWeight: 700 }}>&lt; 5000ppm</span></p>
                                </motion.div>
 
                                <motion.div 
                                    variants={fadeInUp}
                                    whileHover={{ 
                                        y: -10, 
                                        boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                                        borderColor: 'rgba(16, 185, 129, 0.5)'
                                    }}
                                    className="tech-condition-card"
                                >
                                    <div style={{ background: 'white', width: '50px', height: '50px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                                        <Zap style={{ color: '#006b3c' }} size={24} />
                                    </div>
                                    <h4 style={{ fontWeight: 800, marginBottom: '0.8rem', color: '#004225', fontSize: '1.3rem' }}>Oxygenation</h4>
                                    <p style={{ fontSize: '1rem', color: '#000000', fontWeight: 500 }}>Active Flow <span style={{ color: '#006b3c', fontWeight: 700 }}>24/7 Cycle</span></p>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        {/* Right Column: Visual & Deployment Specs Dashboard */}
                        <div style={{ position: 'relative' }}>
                            {/* Visual Illustration Part */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{ marginBottom: '3rem', position: 'relative' }}
                            >
                                <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '120%', height: '80%', background: 'radial-gradient(circle, rgba(0, 107, 60, 0.08) 0%, transparent 70%)', zIndex: -1 }}></div>
                                <img 
                                    src={techDesignImg} 
                                    alt="BSF Rack Illustration" 
                                    style={{ width: '100%', borderRadius: '3rem', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)', border: '8px solid white' }} 
                                />
                                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.9)', padding: '1rem 1.5rem', borderRadius: '1rem', backdropFilter: 'blur(8px)', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <ShieldCheck size={20} color="#006b3c" />
                                    <span style={{ fontWeight: 700, color: '#004225', fontSize: '0.9rem' }}>Patented Design System</span>
                                </div>
                            </motion.div>

                            {/* Deployment Specs Dashboard */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="tech-specs-card"
                            >
                                {/* Layered effect decoration */}
                                <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'linear-gradient(135deg, transparent 70%, #f0fdf4 100%)', zIndex: 0 }}></div>
 
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <h3 style={{ fontSize: '1.8rem', color: '#004225', marginBottom: '2.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ background: '#004225', color: 'white', padding: '0.6rem', borderRadius: '0.8rem' }}>
                                            <Layers size={22} />
                                        </div>
                                        Deployment Specs
                                    </h3>
 
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                        {/* Spec 1 */}
                                        <div className="tech-spec-item">
                                            <div style={{ padding: '0.8rem', background: '#f8fafc', borderRadius: '1rem', color: '#006b3c' }}><Globe size={20} /></div>
                                            <div style={{ flex: 1 }}>
                                                <div className="tech-spec-title">SYSTEM DIMENSIONS</div>
                                                <div className="tech-spec-value">Base Module: 2m × 1m × 0.15m</div>
                                                <div className="tech-spec-subtext">Rack Configuration: Scalable up to 12m long and 4m high</div>
                                                <div style={{ width: '100%', height: '1px', background: '#f1f5f9', marginTop: '1.5rem' }}></div>
                                            </div>
                                        </div>
 
                                        {/* Spec 2 */}
                                        <div className="tech-spec-item">
                                            <div style={{ padding: '0.8rem', background: '#f8fafc', borderRadius: '1rem', color: '#006b3c' }}><Zap size={20} /></div>
                                            <div style={{ flex: 1 }}>
                                                <div className="tech-spec-title">CAPACITY</div>
                                                <div className="tech-spec-value">50 - 100 kg Waste / Rack</div>
                                                <div className="tech-spec-subtext">10 - 14 Day Production Cycle</div>
                                                <div style={{ width: '100%', height: '1px', background: '#f1f5f9', marginTop: '1.5rem' }}></div>
                                            </div>
                                        </div>
 
                                        {/* Spec 3 */}
                                        <div className="tech-spec-item">
                                            <div style={{ padding: '0.8rem', background: '#f8fafc', borderRadius: '1rem', color: '#006b3c' }}><CheckCircle2 size={20} /></div>
                                            <div style={{ flex: 1 }}>
                                                <div className="tech-spec-title">GLOBAL PRESENCE</div>
                                                <div className="tech-spec-value">20+ Turnkey Installations</div>
                                                <div className="tech-spec-subtext" style={{ color: '#006b3c', fontWeight: 700 }}>India, UAE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 4: Integrated Automation Suite ── */}
            <section className="tech-section-compact" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: '#004225', letterSpacing: '-2px', marginBottom: '0.5rem' }}>
                            Automation <span style={{ color: '#006b3c', position: 'relative' }}>Suite
                                <div style={{ position: 'absolute', bottom: '15px', left: 0, width: '100%', height: '8px', background: 'rgba(0, 107, 60, 0.1)', zIndex: -1 }}></div>
                            </span>
                        </h2>
                        <p style={{ color: '#000000', fontSize: '1.25rem', maxWidth: '700px', margin: '1rem auto 0', lineHeight: 1.6 }}>Robotic precision handling every critical stage of the bioconversion cycle.</p>
                    </motion.div>

                    <motion.div 
                        initial="initial" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
                        className="automation-suite-grid"
                    >
                        {AUTOMATION_SUITE.map((item, i) => (
                            <FlipCard key={i} item={item} index={i} />
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Technology;
