import { Link, useLocation } from "react-router-dom";
import { Stethoscope, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Logistics", path: "/logistics" },
    { name: "Compliance", path: "/compliance" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 p-2 rounded-sm text-white group-hover:bg-primary-700 transition-colors">
              <Stethoscope className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight italic">MedEquip <span className="font-light text-gray-500">Pro</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-tighter transition-colors hover:text-primary-600 ${
                  location.pathname === link.path ? "text-primary-600" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-sm text-sm uppercase tracking-tighter font-medium ${
                    location.pathname === link.path ? "text-primary-600 bg-primary-50" : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-primary-600 text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
