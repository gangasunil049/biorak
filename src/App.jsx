import React, { Suspense, lazy } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

// Lazy-load heavy pages so initial load is fast
const About = lazy(() => import('./pages/About'))
const Technology = lazy(() => import('./pages/Technology'))
const BSF = lazy(() => import('./pages/BSF'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

// Using standard React Suspense for lazy loading instead of IntersectionObserver 
// to ensure sections are always available for scrolling and navigation.

function App() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
    const [activeSection, setActiveSection] = React.useState(null);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigate = (id) => {
        if (isMobile) {
            const hiddenSections = ['technology', 'bsf', 'gallery', 'contact'];
            if (hiddenSections.includes(id)) {
                setActiveSection(id);
            } else {
                setActiveSection(null);
            }
            // Instant jump to top when switching view
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };

    // Auto-scroll logic for mobile is now replaced by "view swapping"
    // but we still want to ensure we're at the top
    React.useEffect(() => {
        if (isMobile && activeSection) {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [activeSection, isMobile]);

    return (
        <LazyMotion features={domAnimation} strict={false}>
            <div className="app">
                <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
                <main>
                    <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006b3c', background: '#fff'}}>Loading modules...</div>}>
                        {/* On mobile, only show Home/About if NO other section is active */}
                        {(!isMobile || !activeSection) && (
                            <>
                                <div id="home"><Home /></div>
                                <div id="about"><About /></div>
                            </>
                        )}
                        
                        {/* Selected Mobile Section / All Desktop Sections */}
                        {(!isMobile || activeSection === 'technology') && (
                            <div id="technology"><Technology /></div>
                        )}
                        {(!isMobile || activeSection === 'bsf') && (
                            <div id="bsf"><BSF /></div>
                        )}
                        {(!isMobile || activeSection === 'gallery') && (
                            <div id="gallery"><Gallery /></div>
                        )}
                        {(!isMobile || activeSection === 'contact') && (
                            <div id="contact"><Contact /></div>
                        )}
                    </Suspense>
                </main>
                <Footer />
            </div>
        </LazyMotion>
    );
}

export default App;
