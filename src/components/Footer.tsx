
import { useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              Wanderlust<span className="text-travel-coral">Hub</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Crafting extraordinary travel experiences that inspire, transform, and connect. Join us on a journey of discovery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-travel-coral">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-travel-coral">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-travel-coral">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-travel-coral">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Home</a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 transition-colors hover:text-travel-coral">Destinations</a>
              </li>
              <li>
                <a href="#itineraries" className="text-gray-400 transition-colors hover:text-travel-coral">Itineraries</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 transition-colors hover:text-travel-coral">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Travel Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Santorini, Greece</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Kyoto, Japan</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Machu Picchu, Peru</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Bali, Indonesia</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Amalfi Coast, Italy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-travel-coral">Iceland</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-travel-coral mr-3 mt-1" />
                <span className="text-gray-400">123 Adventure Street, Wonderland City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-travel-coral mr-3" />
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-travel-coral mr-3" />
                <span className="text-gray-400">info@wanderlust-hub.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Subscribe to our newsletter</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow bg-gray-800 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-travel-coral"
                />
                <button className="bg-travel-coral text-white px-4 py-2 rounded-r-md hover:bg-travel-terracotta transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WanderlustHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-travel-coral">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-travel-coral">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-travel-coral">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
