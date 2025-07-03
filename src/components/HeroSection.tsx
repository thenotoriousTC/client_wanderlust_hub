
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.5;
      
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function for the down arrow
  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={heroRef}
        className="absolute inset-0 h-[120%] w-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')` 
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <div className="container mx-auto max-w-5xl">
          <span className="mb-2 inline-block rounded-full bg-travel-coral/80 px-4 py-1 text-sm font-medium opacity-0 animate-fade-in">
            Discover Your Next Adventure
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-shadow opacity-0 animate-fade-in delay-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Explore the World's Hidden Wonders
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-0 animate-fade-in delay-200 md:text-xl">
            Unforgettable journeys curated by travel experts. Experience the extraordinary destinations that will awaken your sense of wonder.
          </p>
          <div className="opacity-0 animate-fade-in delay-300">
            <Link to="/destinations" className="btn-outline">
              View Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="scroll-indicator opacity-0 animate-fade-in delay-400"
        onClick={scrollToDestinations}
      >
        <ChevronDown className="h-10 w-10 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
