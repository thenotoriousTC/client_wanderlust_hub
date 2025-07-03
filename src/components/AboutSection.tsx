
import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle parallax effect
  useEffect(() => {
    const handleParallax = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      
      parallaxElements.forEach((element) => {
        const speed = (element as HTMLElement).dataset.speed || '0.05';
        const x = (window.innerWidth - e.pageX * parseFloat(speed)) / 100;
        const y = (window.innerHeight - e.pageY * parseFloat(speed)) / 100;
        
        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleParallax);
    
    return () => {
      document.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 px-6 text-white overflow-hidden md:py-32"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat parallax-bg"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')` 
        }}
      />

      <div className="container relative mx-auto z-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className={`inline-block px-3 py-1 mb-2 text-sm font-medium bg-white/20 rounded-full backdrop-blur-sm ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
              Our Story
            </span>
            <h2 className={`section-title text-shadow ${isVisible ? 'opacity-100 animate-fade-in delay-100' : 'opacity-0'}`}>
              Crafting Unforgettable Travel Experiences
            </h2>
            <p className={`mb-6 text-white/80 ${isVisible ? 'opacity-100 animate-fade-in delay-200' : 'opacity-0'}`}>
              Founded by passionate travelers with a vision to create more than just vacations, 
              WanderlustHub curates journeys that transform and inspire. We believe travel should 
              be meaningful, authentic, and responsible.
            </p>
            <p className={`mb-8 text-white/80 ${isVisible ? 'opacity-100 animate-fade-in delay-300' : 'opacity-0'}`}>
              Our team of expert travel designers has explored the far corners of the globe to bring 
              you meticulously crafted itineraries that balance iconic landmarks with hidden gems 
              and local experiences that go beyond the typical tourist path.
            </p>
            <div className={`${isVisible ? 'opacity-100 animate-fade-in delay-400' : 'opacity-0'}`}>
              <button className="btn-outline">
                Meet Our Team
              </button>
            </div>
          </div>
          
          <div className="parallax">
            <div className={`glass rounded-lg p-8 ${isVisible ? 'opacity-100 animate-fade-in delay-500' : 'opacity-0'}`}>
              <div className="grid gap-6">
                <div className="parallax-layer" data-speed="0.03">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Our Philosophy</h3>
                    <p className="text-white/80">We believe in travel that respects local cultures and environments while creating meaningful connections and memories that last a lifetime.</p>
                  </div>
                </div>
                
                <div className="parallax-layer" data-speed="0.06">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                    <p className="text-white/80">Our travel specialists have deep destination knowledge and create personalized journeys tailored to your interests and travel style.</p>
                  </div>
                </div>
                
                <div className="parallax-layer" data-speed="0.09">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Sustainable Travel</h3>
                    <p className="text-white/80">We're committed to sustainable tourism practices that support local communities and preserve the natural and cultural heritage of the places we visit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
