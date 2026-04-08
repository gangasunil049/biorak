import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import cartoonTruck from '../assets/cartoon_truck.png';
import vehiclePhoto from '../assets/trucks.png';
import ecoGlobe from '../assets/eco_globe.png';

const WasteCollection = () => {
    const containerRef = useRef(null);
    const [selectedNode, setSelectedNode] = useState(null);

    // TOTAL SCROLL: 350vh for the sticky part
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smoother scroll progress for animation specifically
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    // --- TRANSFORMATIONS ---

    // 1. Heading Layer (0.0 - 0.15)
    const headerOpacity = useTransform(smoothProgress, [0, 0.08, 0.12], [1, 1, 0]);
    const headerScale = useTransform(smoothProgress, [0, 0.12], [1, 0.9]);
    const headerY = useTransform(smoothProgress, [0, 0.12], [0, -50]);

    // 3. Truck Movement
    // Truck enters earlier (0.05) and stays longer
    const truckX = useTransform(smoothProgress, [0.05, 0.25, 0.8, 0.95], ["-40%", "15%", "65%", "130%"]);
    const truckScale = useTransform(smoothProgress, [0.1, 0.85], [0.8, 1.1]);

    // Road visibility
    const roadOpacity = useTransform(smoothProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]);

    // Final Content Section (Sticky fade-in)
    const fleetContentOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
    const fleetContentY = useTransform(smoothProgress, [0.85, 0.95], [30, 0]);

    return (
        <div style={{ background: '#fff' }}>
            <div
                id="waste-collection-journey"
                ref={containerRef}
                style={{
                    height: '350vh',
                    position: 'relative'
                }}
            >
                {/* STICKY STAGE */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    width: '100%',
                    overflowX: 'clip',
                    overflowY: 'visible',
                    zIndex: 10
                }}>

                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

                        {/* Layer 1: INTRO HEADER */}
                        <motion.div
                            style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                zIndex: 50,
                                opacity: headerOpacity,
                                scale: headerScale,
                                y: headerY,
                                pointerEvents: 'none'
                            }}
                        >
                            <span style={{ color: '#008447', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Waste Collection Phase</span>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: '900', color: '#1a1a1a', textAlign: 'center', lineHeight: 1.1, margin: 0, maxWidth: '1400px' }}>
                                Waste Collection <br />System
                            </h1>
                            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                                <p style={{ color: '#888', fontSize: '1.2rem', margin: 0 }}>Scroll to explore our logistics</p>
                                <motion.div
                                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ margin: '1.5rem auto', width: '2px', height: '50px', background: 'linear-gradient(to bottom, #008447, transparent)' }}
                                />
                            </div>
                        </motion.div>

                        {/* Layer 2: ANIMATION ELEMENTS */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 30 }}>
                            <motion.div style={{
                                position: 'absolute', bottom: '26%', left: '0%', right: '0%',
                                height: '2px', background: 'rgba(0,132,71,0.15)',
                                opacity: roadOpacity
                            }} />

                            <motion.div style={{
                                position: 'absolute', bottom: '22%', left: truckX, scale: truckScale,
                                width: 'clamp(280px, 18vw, 420px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                zIndex: 100,
                                mixBlendMode: 'multiply'
                            }}>
                                <motion.img src={cartoonTruck} style={{ width: '100%' }} alt="Waste Collection Truck" />
                            </motion.div>
                        </div>

                        {/* Layer 3: STICKY TRANSITION CONTENT */}
                        <motion.div
                            style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 8%',
                                zIndex: 60,
                                opacity: fleetContentOpacity,
                                y: fleetContentY,
                                pointerEvents: 'none'
                            }}
                        >
                            <div style={{ textAlign: 'center', maxWidth: '900px' }}>
                                <span style={{ color: '#008447', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '4px', display: 'block', marginBottom: '1.5rem' }}>LOGISTICS REACH</span>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1a1a1a', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
                                    Bridging the Gap Between <br />Waste and Value
                                </h2>
                                <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: 1.8 }}>
                                    Scroll down to see our specialized collection infrastructure.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* RADIAL ROADMAP SECTION - HYBRID (Biorak Content + Reference Layout) */}
            <div style={{
                padding: '4rem 5% 8rem',
                background: '#f8f9f6', // Cream/paper textured background
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
            }}>
                {/* Repurposed Header matching Biorak Branding */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
                    <span style={{ color: '#008447', fontWeight: '800', fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}>
                        Logistics Journey
                    </span>
                    <h2 style={{ 
                        fontSize: 'clamp(2rem, 5vw, 3rem)', 
                        fontWeight: '800', 
                        color: '#004225', 
                        margin: 0, 
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        lineHeight: 1.1
                    }}>
                        THE WASTE COLLECTION ROADMAP
                    </h2>
                </div>

                {/* MODAL / OVERLAY FOR DETAILS */}
                {selectedNode && (
                    <div style={{
                        position: 'fixed',
                        top: 0, left: 0, width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '20px'
                    }} onClick={() => setSelectedNode(null)}>
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{
                                background: 'white',
                                padding: '3rem',
                                borderRadius: '2rem',
                                maxWidth: '600px',
                                textAlign: 'center',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                                position: 'relative'
                            }} onClick={e => e.stopPropagation()}>
                            <button 
                                onClick={() => setSelectedNode(null)}
                                style={{
                                    position: 'absolute', top: '20px', right: '20px',
                                    background: 'none', border: 'none', fontSize: '1.5rem',
                                    cursor: 'pointer', color: '#666'
                                }}>&times;</button>
                            <div style={{ 
                                width: '100px', height: '100px', 
                                border: '1px dashed #008447', 
                                borderRadius: '50%', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '2.5rem', margin: '0 auto 1.5rem'
                            }}>
                                {selectedNode.icon}
                            </div>
                            <h3 style={{ color: '#004225', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '800' }}>{selectedNode.title}</h3>
                            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>{selectedNode.longDesc}</p>
                            <button 
                                onClick={() => setSelectedNode(null)}
                                style={{
                                    marginTop: '2rem',
                                    background: '#008447',
                                    color: 'white',
                                    padding: '1rem 2rem',
                                    borderRadius: '1rem',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}>Got it!</button>
                        </motion.div>
                    </div>
                )}

                {/* Desktop Radial/Arc Grid */}
                <div className="radial-desktop-only" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', height: '850px' }}>
                    <style>{`
                        .radial-desktop-only { display: block; }
                        .radial-mobile-only { display: none; }
                        
                        .radial-icon-box {
                            width: 75px;
                            height: 75px;
                            border: 1px dashed #444;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: #f8f9f6;
                            margin: 0 auto 0.8rem;
                            position: relative;
                            z-index: 2;
                        }
                        .radial-node {
                            position: absolute;
                            transform: translate(-50%, -50%);
                            width: 200px;
                            text-align: center;
                            z-index: 10;
                        }

                        @media(max-width: 1000px) {
                            .radial-desktop-only { display: none; }
                            .radial-mobile-only { display: block; }
                        }
                    `}</style>
                    
                    {/* Perfect geometric umbrella arc, explicitly NOT a full circle */}
                    <svg viewBox="0 0 1200 850" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                        {/* 
                            Center = 600, 480. Radius = 400.
                            Starts Left-Bottom (-145 deg/215 arc): x=272, y=709
                            Sweeps over top to Right-Bottom (+35 deg): x=927, y=709
                        */}
                        <path d="M 272 709 A 400 400 0 1 1 927 709" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>

                    {/* Center Globe/Image */}
                    <div style={{ position: 'absolute', top: '56.4%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 5, width: '500px', height: '500px' }}>
                        {/* Optional glow behind globe */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: '90%', background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 60%)', filter: 'blur(30px)', top: '60%' }}></div>
                        <img src={ecoGlobe} alt="Sustainability Globe" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                    </div>

                    {/* The 6 Nodes mimicking exact reference layout but with Biorak Text */}
                    {[
                        { 
                            title: 'Source Identification', 
                            desc: 'Secure onboarding & certified bins.', 
                            longDesc: 'Our process begins with identifying high-quality organic waste sources. We provide specialized bins and onboarding training for partners to ensure proper segregation at the source, preventing contamination early on.',
                            left: '28.5%', top: '20.3%', 
                            icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4 12V8"/><path d="M4 16v-2"/><path d="M4 20v-2"/><path d="M8 12v4"/><path d="M8 20v-2"/><path d="M12 12v6"/><path d="M16 12v8"/></svg> 
                        },
                        { 
                            title: 'Smart Scheduling', 
                            desc: 'IoT sensors trigger dynamic pickups.', 
                            longDesc: 'Using IoT-enabled bin sensors and smart data analytics, we optimize collection routes. Dynamic scheduling ensures that bins are picked up exactly when full, reducing unnecessary fuel consumption and carbon footprint.',
                            left: '16.6%', top: '56.4%', 
                            icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 
                        },
                        { 
                            title: 'Hygienic Transport', 
                            desc: 'GPS-tracked, leak-proof vehicles.', 
                            longDesc: 'Our fleet of modern, leak-proof vehicles ensures that waste is transported without odors or spills. Every vehicle is GPS-tracked, providing real-time visibility and ensuring timely deliveries to our processing hubs.',
                            left: '22.6%', top: '83.4%', 
                            icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M5 13l4 4L19 7"/></svg> 
                        },
                        { 
                            title: 'Quality Validation', 
                            desc: 'Moisture & contamination checks.', 
                            longDesc: 'Upon arrival at our Biorak hubs, every batch of waste undergoes strict quality checks. We validate moisture content, purity, and organic composition to ensure it meets our high standards for BSF cultivation.',
                            left: '71.3%', top: '20.3%', 
                            icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> 
                        },
                        { 
                            title: 'Decontamination', 
                            desc: 'Odor control & safe handling.', 
                            longDesc: 'Safety is paramount. We employ advanced decontamination protocols including odor neutralizing and safe handling techniques to maintain a clean environment, ensuring the waste is ready for the next phase of value creation.',
                            left: '83.3%', top: '56.4%', 
                            icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M7 20h10"/><path d="M10 20v-5L6 7V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3l-4 8v5"/><path d="M8 12h8"/><path d="M12 9v1"/></svg> 
                        },
                        { 
                            title: 'Zero Waste Value', 
                            desc: 'Converted to premium BSF protein.', 
                            longDesc: 'The final stage involves converting waste into premium Black Soldier Fly (BSF) protein and frass compost. This circular economy model ensures that 100% of the organic waste is repurposed back into the food chain.',
                            left: '77.2%', top: '83.4%', 
                            icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> 
                        },
                    ].map((node, i) => (
                        <motion.div 
                            key={i} 
                            className="radial-node" 
                            style={{ top: node.top, left: node.left, cursor: 'pointer' }}
                            onClick={() => setSelectedNode(node)}
                        >
                            <div className="radial-icon-box" style={{ 
                                transition: 'all 0.3s ease',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                            }}>{node.icon}</div>
                            <div style={{ fontWeight: '800', color: '#004225', marginBottom: '0.4rem', fontSize: '1rem', lineHeight: 1.2 }}>{node.title}</div>
                            <div style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.4 }}>{node.desc}</div>
                            <div style={{ marginTop: '0.5rem', color: '#008447', fontSize: '0.75rem', fontWeight: 'bold' }}>Click to learn more →</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile version */}
                <div className="radial-mobile-only" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <img src={ecoGlobe} style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover' }} alt="Sustainability Globe" />
                    </div>
                    {[
                        { title: 'Source Identification', desc: 'Secure onboarding & certified bins.', longDesc: 'Our process begins with identifying high-quality organic waste sources. We provide specialized bins and onboarding training for partners to ensure proper segregation at the source, preventing contamination early on.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4 12V8"/><path d="M4 16v-2"/><path d="M4 20v-2"/><path d="M8 12v4"/><path d="M8 20v-2"/><path d="M12 12v6"/><path d="M16 12v8"/></svg> },
                        { title: 'Smart Scheduling', desc: 'IoT sensors trigger dynamic pickups.', longDesc: 'Using IoT-enabled bin sensors and smart data analytics, we optimize collection routes. Dynamic scheduling ensures that bins are picked up exactly when full, reducing unnecessary fuel consumption and carbon footprint.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
                        { title: 'Hygienic Transport', desc: 'GPS-tracked, leak-proof vehicles.', longDesc: 'Our fleet of modern, leak-proof vehicles ensures that waste is transported without odors or spills. Every vehicle is GPS-tracked, providing real-time visibility and ensuring timely deliveries to our processing hubs.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M5 13l4 4L19 7"/></svg> },
                        { title: 'Quality Validation', desc: 'Moisture & contamination checks.', longDesc: 'Upon arrival at our Biorak hubs, every batch of waste undergoes strict quality checks. We validate moisture content, purity, and organic composition to ensure it meets our high standards for BSF cultivation.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> },
                        { title: 'Decontamination', desc: 'Odor control & safe handling.', longDesc: 'Safety is paramount. We employ advanced decontamination protocols including odor neutralizing and safe handling techniques to maintain a clean environment, ensuring the waste is ready for the next phase of value creation.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M7 20h10"/><path d="M10 20v-5L6 7V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3l-4 8v5"/><path d="M8 12h8"/><path d="M12 9v1"/></svg> },
                        { title: 'Zero Waste Value', desc: 'Converted to premium BSF protein.', longDesc: 'The final stage involves converting waste into premium Black Soldier Fly (BSF) protein and frass compost. This circular economy model ensures that 100% of the organic waste is repurposed back into the food chain.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008447" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> }
                    ].map((node, i) => (
                        <div key={i} style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1.5rem', cursor: 'pointer' }} onClick={() => setSelectedNode(node)}>
                            <div style={{ width: '60px', height: '60px', border: '1px dashed #666', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                {node.icon}
                            </div>
                            <div>
                                <h4 style={{ color: '#004225', fontWeight: '800', margin: '0 0 0.3rem 0' }}>{node.title}</h4>
                                <p style={{ color: '#666', fontSize: '0.85rem', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>{node.desc}</p>
                                <span style={{ color: '#008447', fontSize: '0.75rem', fontWeight: 'bold' }}>Tap to learn more →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Banner */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem auto 0', position: 'relative', zIndex: 10, maxWidth: '800px' }}>
                    <div style={{ 
                        border: '1px solid #008447', 
                        borderRadius: '0.5rem', 
                        padding: '1.5rem 3rem', 
                        textAlign: 'center',
                        background: 'transparent'
                    }}>
                        <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#f8f9f6', padding: '0 1rem', color: '#555', fontSize: '0.85rem', fontWeight: 'bold' }}>
                            One stop solution for all
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0, color: '#008447' }}>
                            BIORAK Logistics Network
                        </h3>
                    </div>
                </div>
            </div>

            {/* FLEET DETAILS SECTION */}
            <div className="fleet-section" style={{
                padding: '8rem 0',
                background: '#ffffff',
                position: 'relative',
                zIndex: 20,
                borderTop: '1px solid #f0f0f0',
                overflow: 'hidden'
            }}>
                <style>{`
                    .fleet-grid {
                        display: grid;
                        grid-template-columns: 1.2fr 1fr;
                        gap: 6rem;
                        align-items: center;
                    }
                    @media (max-width: 960px) {
                        .fleet-grid {
                            grid-template-columns: 1fr;
                            gap: 4rem;
                        }
                        .fleet-img-wrapper {
                            order: -1;
                        }
                    }
                `}</style>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 2 }}>
                         <span style={{ color: '#008447', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Our Fleet</span>
                         <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a', fontWeight: '900', lineHeight: 1.2, margin: 0 }}>
                            Biorak Smart Collection Truck
                         </h2>
                    </div>

                    <div className="fleet-grid">
                        
                        {/* Truck Image on the left */}
                        <motion.div
                            className="fleet-img-wrapper"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: '50%', background: 'radial-gradient(circle, rgba(0,132,71,0.08) 0%, transparent 60%)', zIndex: 0, filter: 'blur(40px)' }}></div>
                            <img
                                src={vehiclePhoto}
                                style={{ width: '100%', position: 'relative', zIndex: 1, objectFit: 'cover', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                                alt="BIORAK Smart Waste Collection Truck"
                            />
                        </motion.div>

                        {/* Features on the right */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                            }}
                        >
                            <motion.p 
                                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                                style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, marginBottom: '3rem', paddingLeft: '1.2rem', borderLeft: '4px solid #008447' }}
                            >
                                A modern, eco-friendly vehicle designed for efficient, hygienic, and intelligent organic waste management. Built perfectly for the smart city waste loop.
                            </motion.p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                
                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{ padding: '0.5rem', borderRadius: '1rem', cursor: 'pointer' }}
                                >
                                    <h4 style={{ fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#008447', fontSize: '1.2rem' }}>🔄</span> Compaction
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.85rem', margin: 0 }}>High-capacity rear-loading compactor maximizes storage & saves fuel.</p>
                                </motion.div>

                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{ padding: '0.5rem', borderRadius: '1rem', cursor: 'pointer' }}
                                >
                                    <h4 style={{ fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#008447', fontSize: '1.2rem' }}>🗑️</span> Auto-Lift
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.85rem', margin: 0 }}>Hydraulic arms easily handle standard bins, minimizing manual labor.</p>
                                </motion.div>

                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{ padding: '0.5rem', borderRadius: '1rem', cursor: 'pointer' }}
                                >
                                    <h4 style={{ fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#008447', fontSize: '1.2rem' }}>📡</span> Smart GPS
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.85rem', margin: 0 }}>Real-time vehicle tracking and dynamic route optimization dashboard.</p>
                                </motion.div>

                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{ padding: '0.5rem', borderRadius: '1rem', cursor: 'pointer' }}
                                >
                                    <h4 style={{ fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#008447', fontSize: '1.2rem' }}>⚠️</span> Sensors
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.85rem', margin: 0 }}>Bin full detection system prevents overflow and boosts data loops.</p>
                                </motion.div>

                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{ padding: '0.5rem', borderRadius: '1rem', cursor: 'pointer' }}
                                >
                                    <h4 style={{ fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#008447', fontSize: '1.2rem' }}>🔒</span> Safety
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.85rem', margin: 0 }}>Dual controls, 360° visibility mirrors, emergency stops & safe steps.</p>
                                </motion.div>

                                <motion.div 
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    style={{ padding: '0.5rem', borderRadius: '1rem', cursor: 'pointer' }}
                                >
                                    <h4 style={{ fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#008447', fontSize: '1.2rem' }}>💡</span> Eco-Design
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.85rem', margin: 0 }}>Reduced emissions output and noise-controlled compaction operation.</p>
                                </motion.div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WasteCollection;
