
import { useEffect, useState, useRef } from 'react';

const CtaSection = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-travel-blue text-white md:py-32"
    >
      <div className="container mx-auto text-center">
        <h2 className={`section-title max-w-3xl mx-auto ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
          Ready to Embark on Your Next Adventure?
        </h2>
        <p className={`section-subtitle text-white/80 max-w-2xl mx-auto mb-12 ${isVisible ? 'opacity-100 animate-fade-in delay-100' : 'opacity-0'}`}>
          Join our community of explorers and receive personalized travel recommendations, exclusive offers, and inspiration for your next journey.
        </p>
        
        <div className={`max-w-xl mx-auto mb-12 ${isVisible ? 'opacity-100 animate-fade-in delay-200' : 'opacity-0'}`}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow rounded-md px-4 py-3 text-travel-blue focus:outline-none focus:ring-2 focus:ring-travel-coral"
            />
            <button className="bg-travel-coral text-white rounded-md px-6 py-3 font-medium whitespace-nowrap hover:bg-travel-terracotta transition-colors">
              Get Inspired
            </button>
          </div>
          <p className="text-xs text-white/60 mt-2 text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
        
        <div className={`grid gap-8 grid-cols-1 md:grid-cols-3 ${isVisible ? 'opacity-100 animate-fade-in delay-300' : 'opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="flex items-center justify-center w-12 h-12 bg-travel-coral/20 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Planning</h3>
            <p className="text-white/80">Access to our team of travel specialists who craft personalized journeys based on your preferences.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="flex items-center justify-center w-12 h-12 bg-travel-coral/20 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
            <p className="text-white/80">Unique experiences and special access to attractions not available to the general public.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <div className="flex items-center justify-center w-12 h-12 bg-travel-coral/20 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-travel-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Peace of Mind</h3>
            <p className="text-white/80">24/7 support during your journey and carefully vetted accommodations and experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
