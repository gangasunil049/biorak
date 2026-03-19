import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularGallery from '../components/CircularGallery';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleryItems = useMemo(() => [
        { image: '/gallery/img1.png', text: 'Alpha Facility', category: 'Infrastructure' },
        { image: '/gallery/img2.png', text: 'Vertical Trays', category: 'Biotech' },
        { image: '/gallery/img3.png', text: 'Protein Product', category: 'Biotech' },
        { image: '/gallery/img4.png', text: 'R&D Laboratory', category: 'Biotech' },
        { image: '/gallery/img5.png', text: 'Frass Output', category: 'Agriculture' },
        { image: '/gallery/img6.png', text: 'Bioreactors', category: 'Infrastructure' },
        { image: '/gallery/img7.png', text: 'Farm Poultry', category: 'Agriculture' },
        { image: '/gallery/img8.png', text: 'Egg Collection', category: 'Infrastructure' }
    ], []);

    const categories = useMemo(() => ['All', 'Infrastructure', 'Biotech', 'Agriculture'], []);

    const filteredItems = useMemo(() =>
        filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter)
        , [filter, galleryItems]);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ── MOBILE COMPONENT: Stacked Deck (Swipe-Away) ──
    const MobileStackedDeck = ({ items, currentIndex, setCurrentIndex }) => {
        const handleSwipe = (direction) => {
            if (currentIndex < items.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Reset to start if finished
                setCurrentIndex(0);
            }
        };

        return (
            <div style={{ 
                height: '480px', 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)'
            }}>
                <div style={{ position: 'relative', width: '280px', height: '380px' }}>
                    <AnimatePresence>
                        {items.map((item, i) => {
                            if (i < currentIndex || i > currentIndex + 2) return null;
                            
                            const isTop = i === currentIndex;
                            const depth = i - currentIndex;
                            
                            return (
                                <motion.div
                                    key={item.text + i}
                                    drag={isTop ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(e, info) => {
                                        if (Math.abs(info.offset.x) > 100) {
                                            handleSwipe(info.offset.x > 0 ? 'right' : 'left');
                                        }
                                    }}
                                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                    animate={{ 
                                        scale: 1 - depth * 0.05, 
                                        opacity: 1 - depth * 0.3,
                                        y: depth * 15,
                                        zIndex: items.length - i
                                    }}
                                    exit={{ 
                                        x: 500, 
                                        opacity: 0, 
                                        rotate: 20,
                                        transition: { duration: 0.4 } 
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '2.5rem',
                                        background: 'white',
                                        boxShadow: isTop ? '0 30px 60px rgba(0,0,0,0.12)' : '0 10px 20px rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
                                        cursor: isTop ? 'grab' : 'default',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <img src={item.image} alt={item.text} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '2rem 1.5rem',
                                        background: 'linear-gradient(to top, rgba(6, 95, 70, 0.95), transparent)',
                                        color: 'white'
                                    }}>
                                        <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>{item.text}</h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.4rem' }}>
                                            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>{item.category}</span>
                                            <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '50%' }} />
                                            <span style={{ fontSize: '0.7rem' }}>{i + 1} / {items.length}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }).reverse()}
                    </AnimatePresence>
                </div>
                
                <div style={{ marginTop: '30px', color: '#64748b', fontSize: '0.85rem', fontWeight: 600 }}>
                    Swipe to explore
                </div>
            </div>
        );
    };

    return (
        <div className="gallery-section">
            <div className="container" style={{ width: '100%', padding: '0 2rem' }}>
                <motion.div {...fadeInUp} className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div className="tech-tag" style={{ margin: '0 auto 0.75rem', background: 'rgba(6,95,70,0.08)', color: '#065f46', border: '1px solid rgba(6,95,70,0.2)' }}>Portfolio</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#065f46', lineHeight: '0.9' }}>
                        Transforming Waste into <br />
                        <span style={{ color: '#059669' }}>Sustainable Value</span>
                    </h2>
                </motion.div>

                {/* Filter Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 10
                }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setFilter(cat); setCurrentIndex(0); }}
                            style={{
                                padding: '0.6rem 2rem',
                                fontSize: '0.9rem',
                                borderRadius: '100px',
                                fontWeight: 600,
                                fontFamily: 'var(--font-heading)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                background: filter === cat ? '#065f46' : 'transparent',
                                color: filter === cat ? '#ffffff' : '#065f46',
                                border: filter === cat ? 'none' : '1.5px solid rgba(6,95,70,0.4)',
                                boxShadow: filter === cat ? '0 4px 12px rgba(6,95,70,0.25)' : 'none'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section: Choice between 3D and Mobile Stacked Deck */}
            {isMobile ? (
                <MobileStackedDeck items={filteredItems} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            ) : (
                <div style={{
                    height: '650px',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    cursor: 'grab',
                    overflow: 'hidden'
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <CircularGallery
                                items={filteredItems}
                                bend={3}
                                textColor="#ffffff"
                                borderRadius={0.05}
                                font="bold 24px Figtree"
                                scrollEase={0.03}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default Gallery;
