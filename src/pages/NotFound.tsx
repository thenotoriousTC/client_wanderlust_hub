
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')` 
      }}
    >
      <div className="text-center max-w-2xl animate-fade-in">
        <h1 className="text-9xl font-bold mb-4 text-white font-serif">404</h1>
        <p className="text-2xl text-white/90 mb-6 font-serif">This destination is not on our map</p>
        <p className="text-white/70 mb-8">The page you're looking for doesn't exist or has been moved to another location.</p>
        <a 
          href="/" 
          className="inline-flex items-center bg-travel-coral text-white px-6 py-3 rounded-md hover:bg-travel-terracotta transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
