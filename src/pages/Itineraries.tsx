import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Clock, Calendar, MapPin, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Itinerary {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  season: string;
  location: string;
  groupSize: string;
  image: string;
  rating: number;
  highlights: string[];
  price: string;
  difficulty: string;
}

const itineraries: Itinerary[] = [
  {
    id: 1,
    title: "Ancient Wonders of Egypt",
    description: "Explore the pyramids, cruise down the Nile, and discover the treasures of ancient Egypt.",
    longDescription: "Journey through 5,000 years of history as you explore the magnificent pyramids of Giza, sail down the legendary Nile River, and uncover the secrets of ancient pharaohs. This comprehensive tour includes visits to the Great Sphinx, the Valley of the Kings, and the stunning temples of Luxor and Karnak.",
    duration: "12 Days",
    season: "Oct - Apr",
    location: "Cairo, Luxor, Aswan",
    groupSize: "Max 12",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    highlights: ["Pyramid of Giza", "Nile River Cruise", "Valley of Kings", "Egyptian Museum"],
    price: "From $2,800",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Tropical Paradise: Costa Rica",
    description: "Experience rainforests, volcanoes, beaches, and incredible wildlife in this eco-paradise.",
    longDescription: "Discover the incredible biodiversity of Costa Rica through lush rainforests, active volcanoes, and pristine beaches. This eco-adventure includes wildlife spotting, zip-lining through cloud forests, and relaxing on both Pacific and Caribbean coasts.",
    duration: "10 Days",
    season: "Dec - Apr",
    location: "San José, Arenal, Manuel Antonio",
    groupSize: "Max 10",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    highlights: ["Arenal Volcano", "Wildlife Safari", "Zip-lining", "Beach Relaxation"],
    price: "From $2,200",
    difficulty: "Moderate"
  },
  {
    id: 3,
    title: "Cultural Journey: Japan",
    description: "Discover the perfect balance of ancient traditions and modern innovations across Japan.",
    longDescription: "Experience the harmony of traditional and contemporary Japan. From the bustling streets of Tokyo to the serene temples of Kyoto, this journey showcases the country's rich cultural heritage, cutting-edge technology, and exquisite cuisine.",
    duration: "14 Days",
    season: "Mar - May, Sep - Nov",
    location: "Tokyo, Kyoto, Osaka, Hakone",
    groupSize: "Max 14",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    highlights: ["Tokyo Skyline", "Kyoto Temples", "Mount Fuji", "Traditional Cuisine"],
    price: "From $3,500",
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Safari Adventure: Kenya & Tanzania",
    description: "Witness the Great Migration and explore the iconic savannas of East Africa.",
    longDescription: "Experience the ultimate African safari across Kenya and Tanzania. Witness the Great Migration, spot the Big Five, and immerse yourself in Maasai culture while staying in luxury tented camps under the African stars.",
    duration: "11 Days",
    season: "Jun - Oct",
    location: "Masai Mara, Serengeti, Ngorongoro",
    groupSize: "Max 8",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    highlights: ["Great Migration", "Big Five Safari", "Maasai Culture", "Luxury Camps"],
    price: "From $4,200",
    difficulty: "Easy"
  },
  {
    id: 5,
    title: "Patagonia Expedition",
    description: "Trek through the dramatic landscapes of Argentina and Chile's Patagonia region.",
    longDescription: "Adventure through the pristine wilderness of Patagonia, featuring towering peaks, massive glaciers, and turquoise lakes. This expedition includes trekking in Torres del Paine, glacier viewing, and encounters with unique wildlife.",
    duration: "15 Days",
    season: "Nov - Mar",
    location: "Torres del Paine, El Calafate, Bariloche",
    groupSize: "Max 12",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    highlights: ["Torres del Paine Trek", "Perito Moreno Glacier", "Condor Spotting", "Gaucho Culture"],
    price: "From $3,800",
    difficulty: "Challenging"
  },
  {
    id: 6,
    title: "Northern Lights: Iceland & Norway",
    description: "Chase the Aurora Borealis while exploring the dramatic Nordic landscapes.",
    longDescription: "Experience the magic of the Northern Lights across Iceland and Norway. This winter adventure includes glacier walks, hot spring soaks, husky sledding, and the best chances to witness the spectacular Aurora Borealis.",
    duration: "9 Days",
    season: "Oct - Mar",
    location: "Reykjavik, Tromsø, Lofoten Islands",
    groupSize: "Max 10",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    highlights: ["Northern Lights", "Glacier Hiking", "Husky Sledding", "Hot Springs"],
    price: "From $3,200",
    difficulty: "Moderate"
  }
];

const Itineraries = () => {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'challenging':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-travel-teal to-travel-blue">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <Link to="/" className="inline-flex items-center mb-6 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Curated Travel Itineraries
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert-crafted journeys that blend must-see highlights with off-the-beaten-path experiences 
              for truly immersive adventures around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section ref={sectionRef} className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {itineraries.map((itinerary, index) => (
              <div
                key={itinerary.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                      {itinerary.rating}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-travel-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                    {itinerary.price}
                  </div>
                  <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(itinerary.difficulty)}`}>
                    {itinerary.difficulty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-travel-blue mb-3">
                    {itinerary.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {itinerary.longDescription}
                  </p>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-travel-teal" />
                      {itinerary.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-travel-teal" />
                      {itinerary.season}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-travel-teal" />
                      {itinerary.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-travel-teal" />
                      {itinerary.groupSize}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-medium text-travel-blue mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {itinerary.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-travel-mint/20 text-travel-blue text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {itinerary.highlights.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{itinerary.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Itineraries;
