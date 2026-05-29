import { Truck, Map, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function LogisticsPage() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="relative overflow-hidden bg-white border-b border-gray-200 py-24 min-h-[40vh] flex flex-col justify-center">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <div className="text-primary-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Global Network</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gray-900 tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
               Precision Logistics & <br/><span className="text-primary-900 font-semibold">Distribution</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
               We operate a robust, climate-controlled supply chain architected to deliver critical medical supplies swiftly and securely.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="h-[500px] w-full bg-gray-100 relative overflow-hidden">
               <img 
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80" 
                  className="w-full h-full object-cover grayscale mix-blend-multiply contrast-125 opacity-80"
                  alt="Warehouse Logistics"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            <div>
               <div className="text-primary-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><Map className="w-3.5 h-3.5" /> 48-Hour Network</div>
               <h2 className="text-3xl font-display font-light text-gray-900 tracking-tight mb-6">Frictionless supply for high-stakes environments.</h2>
               <p className="text-gray-600 font-light leading-relaxed mb-8">
                  Downtime in healthcare costs lives. Our distribution network is decentralized across strategic hubs globally. State-of-the-art predictive algorithms guarantee inventory buffering for mission-critical PPE and diagnostic assets.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border border-gray-200 p-6">
                     <div className="text-3xl font-light text-gray-900 mb-1">99.8%</div>
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">On-Time Delivery Rate</div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-6">
                     <div className="text-3xl font-light text-gray-900 mb-1">&lt; 48h</div>
                     <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">AOG / Emergency Fulfillment</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-32 pt-24 border-t border-gray-200 text-center">
            <h2 className="text-3xl font-display font-light text-gray-900 mb-8">Secure your institutional pipeline today.</h2>
            <Link to="/quote" className="inline-flex items-center gap-3 bg-primary-700 text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary-800 transition-colors shadow-md">
               Establish Distribution Contract <ArrowRight className="w-4 h-4" />
            </Link>
         </div>
      </div>
    </div>
  );
}
