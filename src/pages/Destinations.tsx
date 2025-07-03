import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Destination {
  id: number;
  name: string;
  location: string;
  country: string;
  description: string;
  longDescription: string;
  image: string;
  rating: number;
  duration: string;
  groupSize: string;
  bestTime: string;
  highlights: string[];
  price: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    location: "Cyclades",
    country: "Greece",
    description: "Iconic blue-domed churches and breathtaking sunset views over the Aegean Sea.",
    longDescription: "Santorini is a volcanic island in the Cyclades group of the Greek islands. Famous for its dramatic views, stunning sunsets, and distinctive architecture, this crescent-shaped island offers an unforgettable Mediterranean experience. White-washed buildings cascade down cliffsides, creating a picture-perfect backdrop against the deep blue Aegean Sea.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    duration: "5-7 days",
    groupSize: "2-12 people",
    bestTime: "April - October",
    highlights: ["Sunset in Oia", "Wine tasting tours", "Volcanic hot springs", "Traditional villages"],
    price: "From $1,200"
  },
  {
    id: 2,
    name: "Kyoto",
    location: "Kansai Region",
    country: "Japan",
    description: "Ancient temples, traditional tea houses, and beautiful cherry blossoms in spring.",
    longDescription: "Kyoto, once Japan's capital, is a city steeped in history and tradition. With over 2,000 temples and shrines, traditional wooden houses, and carefully maintained gardens, Kyoto offers visitors a glimpse into Japan's cultural heart. The city is particularly famous for its cherry blossoms in spring and vibrant autumn colors.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    duration: "4-6 days",
    groupSize: "1-8 people",
    bestTime: "March - May, September - November",
    highlights: ["Fushimi Inari Shrine", "Bamboo Grove", "Traditional tea ceremony", "Geisha districts"],
    price: "From $900"
  },
  {
    id: 3,
    name: "Machu Picchu",
    location: "Cusco Region",
    country: "Peru",
    description: "Mystical Inca citadel nestled high in the Andes mountains.",
    longDescription: "Machu Picchu, the 'Lost City of the Incas,' is one of the world's most spectacular archaeological sites. Perched high in the Andes Mountains, this 15th-century citadel showcases remarkable Inca architecture and engineering. The journey to reach this UNESCO World Heritage site is as memorable as the destination itself.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    duration: "3-5 days",
    groupSize: "4-16 people",
    bestTime: "May - September",
    highlights: ["Sunrise at Machu Picchu", "Inca Trail hiking", "Sacred Valley", "Llama encounters"],
    price: "From $800"
  },
  {
    id: 4,
    name: "Bali",
    location: "Indonesian Archipelago",
    country: "Indonesia",
    description: "Tropical paradise with lush rice terraces, sacred temples, and vibrant culture.",
    longDescription: "Bali is Indonesia's jewel, offering a perfect blend of natural beauty, spiritual culture, and tropical luxury. From the emerald rice terraces of Ubud to the pristine beaches of Seminyak, Bali provides diverse experiences. The island's Hindu culture creates a unique atmosphere with colorful ceremonies, ornate temples, and warm hospitality.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    duration: "7-10 days",
    groupSize: "2-10 people",
    bestTime: "April - October",
    highlights: ["Tegallalang Rice Terraces", "Temple visits", "Traditional markets", "Beach relaxation"],
    price: "From $600"
  },
  {
    id: 5,
    name: "Iceland",
    location: "Nordic Region",
    country: "Iceland",
    description: "Land of fire and ice with dramatic landscapes, geysers, and northern lights.",
    longDescription: "Iceland is a Nordic island country known for its dramatic and diverse landscapes. From powerful waterfalls and active geysers to glacial lagoons and volcanic fields, Iceland offers otherworldly scenery. The country is also one of the best places to witness the magical Northern Lights during winter months.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    duration: "6-8 days",
    groupSize: "2-12 people",
    bestTime: "June - August, September - March (Northern Lights)",
    highlights: ["Northern Lights", "Blue Lagoon", "Ring Road", "Glacier hiking"],
    price: "From $1,500"
  },
  {
    id: 6,
    name: "Morocco",
    location: "North Africa",
    country: "Morocco",
    description: "Exotic blend of Arab, Berber, and European cultures with vibrant markets and architecture.",
    longDescription: "Morocco offers an intoxicating blend of cultures, where ancient traditions meet modern life. From the bustling souks of Marrakech to the blue streets of Chefchaouen and the golden dunes of the Sahara Desert, Morocco provides a sensory adventure unlike anywhere else in the world.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae436d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    duration: "8-12 days",
    groupSize: "4-16 people",
    bestTime: "October - April",
    highlights: ["Marrakech souks", "Sahara Desert", "Atlas Mountains", "Coastal cities"],
    price: "From $700"
  }
];

const Destinations = () => {
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
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-travel-blue to-travel-teal">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <Link to="/" className="inline-flex items-center mb-6 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Discover Amazing Destinations
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our carefully curated collection of extraordinary places around the world, 
              each offering unique experiences and unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section ref={sectionRef} className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                      {destination.rating}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-travel-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-travel-teal mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}, {destination.country}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-travel-blue mb-3">
                    {destination.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {destination.longDescription}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-travel-teal" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-travel-teal" />
                      {destination.groupSize}
                    </div>
                  </div>

                  {/* Best Time */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-travel-blue">Best Time: </span>
                    <span className="text-sm text-gray-600">{destination.bestTime}</span>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-medium text-travel-blue mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-travel-mint/20 text-travel-blue text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{destination.highlights.length - 3} more
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

export default Destinations;
