import { useEffect, useState, useRef } from 'react';
interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
}
const destinations: Destination[] = [{
  id: 1,
  name: "Santorini",
  location: "Greece",
  description: "Iconic blue-domed churches and breathtaking sunset views over the Aegean Sea.",
  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 2,
  name: "Kyoto",
  location: "Japan",
  description: "Ancient temples, traditional tea houses, and beautiful cherry blossoms in spring.",
  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 3,
  name: "Machu Picchu",
  location: "Peru",
  description: "Mystical Inca citadel nestled high in the Andes mountains.",
  image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 4,
  name: "Bali",
  location: "Indonesia",
  description: "Tropical paradise with lush rice terraces, sacred temples, and vibrant culture.",
  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}];
const DestinationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Lazy loading image function
  const LazyImage = ({
    src,
    alt,
    className
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    }, [src]);
    return <img src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='} alt={alt} className={`${className} blur-up ${imageLoaded ? 'loaded' : ''}`} />;
  };
  return <section id="destinations" ref={sectionRef} className="py-20 px-6 md:py-32">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className={`inline-block px-3 py-1 mb-2 text-sm font-medium text-travel-coral bg-travel-coral/10 rounded-full ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Top Destinations
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in delay-100' : 'opacity-0'}`}>
            Places That Inspire
          </h2>
          <p className={`section-subtitle max-w-3xl mx-auto ${isVisible ? 'opacity-100 animate-fade-in delay-200' : 'opacity-0'}`}>
            Discover our carefully selected destinations that offer extraordinary experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => <div key={destination.id} className={`destination-card group h-80 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: `${300 + index * 100}ms`
        }}>
              <LazyImage src={destination.image} alt={destination.name} className="destination-card-image" />
              <div className="destination-card-content">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium bg-travel-coral/90 px-2 py-1 rounded-sm">
                    {destination.location}
                  </span>
                  <span className="text-xs opacity-75">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <p className="text-sm text-white/80 mb-4">{destination.description}</p>
                
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default DestinationsSection;