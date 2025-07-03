import { useEffect, useState, useRef } from 'react';
import { Clock, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Itinerary {
  id: number;
  title: string;
  description: string;
  duration: string;
  season: string;
  location: string;
  groupSize: string;
  image: string;
}
const itineraries: Itinerary[] = [{
  id: 1,
  title: "Ancient Wonders of Egypt",
  description: "Explore the pyramids, cruise down the Nile, and discover the treasures of ancient Egypt.",
  duration: "12 Days",
  season: "Oct - Apr",
  location: "Cairo, Luxor, Aswan",
  groupSize: "Max 12",
  image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 2,
  title: "Tropical Paradise: Costa Rica",
  description: "Experience rainforests, volcanoes, beaches, and incredible wildlife in this eco-paradise.",
  duration: "10 Days",
  season: "Dec - Apr",
  location: "San José, Arenal, Manuel Antonio",
  groupSize: "Max 10",
  image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}, {
  id: 3,
  title: "Cultural Journey: Japan",
  description: "Discover the perfect balance of ancient traditions and modern innovations across Japan.",
  duration: "14 Days",
  season: "Mar - May, Sep - Nov",
  location: "Tokyo, Kyoto, Osaka, Hakone",
  groupSize: "Max 14",
  image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}];
const ItinerariesSection = () => {
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
  return (
    <section id="itineraries" ref={sectionRef} className="py-20 px-6 bg-gray-50 md:py-32">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className={`inline-block px-3 py-1 mb-2 text-sm font-medium text-travel-teal bg-travel-teal/10 rounded-full ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Curated Experiences
          </span>
          <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in delay-100' : 'opacity-0'}`}>
            Remarkable Journeys
          </h2>
          <p className={`section-subtitle max-w-3xl mx-auto ${isVisible ? 'opacity-100 animate-fade-in delay-200' : 'opacity-0'}`}>
            Our expert-crafted itineraries blend must-see highlights with off-the-beaten-path experiences for truly immersive adventures.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {itineraries.map((itinerary, index) => <div key={itinerary.id} className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: `${300 + index * 100}ms`
        }}>
              <div className="h-48 overflow-hidden">
                <img src={itinerary.image} alt={itinerary.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{itinerary.title}</h3>
                <p className="text-gray-600 mb-4">{itinerary.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-travel-teal" />
                    <span>{itinerary.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-travel-teal" />
                    <span>{itinerary.season}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-travel-teal" />
                    <span>{itinerary.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2 text-travel-teal" />
                    <span>{itinerary.groupSize}</span>
                  </div>
                </div>
                
                
              </div>
            </div>)}
        </div>
        
        <div className={`text-center mt-12 ${isVisible ? 'opacity-100 animate-fade-in delay-600' : 'opacity-0'}`}>
          <Link 
            to="/itineraries"
            className="inline-flex items-center px-6 py-3 bg-white border border-travel-teal text-travel-teal rounded-md font-medium transition-all hover:bg-travel-teal hover:text-white"
          >
            View All Itineraries
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ItinerariesSection;
