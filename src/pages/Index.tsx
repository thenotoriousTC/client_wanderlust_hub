
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DestinationsSection from '../components/DestinationsSection';
import ItinerariesSection from '../components/ItinerariesSection';
import AboutSection from '../components/AboutSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize any global effects (like smooth scrolling) here
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop,
          behavior: 'smooth'
        });
      });
    });

    // Parallax effect initialization or cleanup can be added here if needed
    return () => {
      // Cleanup event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ItinerariesSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
