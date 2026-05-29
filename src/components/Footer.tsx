import { Link } from "react-router-dom";
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-white/10 p-2 rounded-lg text-white">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">MedEquip Pro</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A trusted healthcare procurement and laboratory supply partner delivering quality medical products and reliable institutional supply solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors text-sm">Industries Served</Link></li>
              <li><Link to="/logistics" className="text-gray-400 hover:text-white transition-colors text-sm">Logistics & Supply</Link></li>
              <li><Link to="/compliance" className="text-gray-400 hover:text-white transition-colors text-sm">Certifications</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Support</Link></li>
              <li><Link to="/quote" className="text-primary-400 font-medium hover:text-primary-300 transition-colors text-sm">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-300">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/products?category=ppe" className="text-gray-400 hover:text-white transition-colors text-sm">Safety & PPE</Link></li>
              <li><Link to="/products?category=diagnostics" className="text-gray-400 hover:text-white transition-colors text-sm">Diagnostic Tools</Link></li>
              <li><Link to="/products?category=lab" className="text-gray-400 hover:text-white transition-colors text-sm">Lab Equipment</Link></li>
              <li><Link to="/products?category=consumables" className="text-gray-400 hover:text-white transition-colors text-sm">Consumables</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-300">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                <span>123 Healthcare Blvd, Medical District, Tech City 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                <span>+1 (800) MED-EQUIP</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <span>procurement@medequippro.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} MedEquip Pro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
