import { ArrowRight, ShieldCheck, Truck, Microscope, Stethoscope, Factory, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import n95RespiratorsImg from "../assets/images/n95_respirators_1780016823123.png";

export function HomePage() {
  return (
    <div className="w-full font-sans">
      {/* High-End Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-700 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-px bg-primary-700"></span>
                Institutional Procurement Partner
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-light text-gray-900 tracking-tight leading-[1.05] mb-8"
              >
                Bridging the gap in <br/>
                <span className="font-semibold text-primary-900">Healthcare Precision.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light"
              >
                Reliable distribution of clinical consumables, laboratory equipment, and specialized safety gear for hospitals, research labs, and medical universities globally.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 md:gap-5"
              >
                <Link to="/products" className="bg-primary-700 text-white px-9 py-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary-800 transition-all w-full sm:w-auto flex justify-center items-center gap-3 shadow-md hover:shadow-lg">
                  Explore Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/quote" className="bg-white text-gray-900 border border-gray-300 px-9 py-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center text-center hover:border-gray-400">
                  Institutional Tenders
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-1/2 relative"
            >
               <div className="relative rounded-sm overflow-hidden border border-gray-200 shadow-2xl h-[400px] md:h-[500px] lg:h-[600px] w-full">
                 <img 
                    src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1600&q=80" 
                    alt="Precision Laboratory Healthcare and Surgical Gloves" 
                    className="w-full h-full object-cover object-center"
                 />
                 <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply pointer-events-none" />
               </div>
               
               {/* Floating structured badged */}
               <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-6 shadow-xl border border-gray-200 rounded-sm hidden sm:block">
                  <div className="flex items-center gap-5">
                     <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-gray-900 uppercase tracking-widest">ISO 13485</div>
                        <div className="text-xs text-gray-500 font-medium">Certified Procurement</div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Partner Strip */}
      <section className="border-b border-gray-200 bg-white py-10 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 whitespace-nowrap">Trusted By Leading Institutions</span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 grayscale opacity-50">
                <div className="flex items-center gap-2"><Activity className="w-5 h-5"/> <span className="font-bold text-lg md:text-xl tracking-tighter">MedCorp</span></div>
                <div className="flex items-center gap-2"><Microscope className="w-5 h-5"/> <span className="font-bold text-lg md:text-xl italic tracking-tight">BioTech Labs</span></div>
                <div className="flex items-center gap-2"><Stethoscope className="w-5 h-5"/> <span className="font-bold text-lg md:text-xl uppercase tracking-widest text-sm">Clinica</span></div>
                <div className="flex items-center gap-2 hidden lg:flex"><ShieldCheck className="w-5 h-5"/> <span className="font-medium text-lg md:text-xl tracking-wide">NexusHealth</span></div>
            </div>
         </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-primary-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-5"
                >
                  Uncompromising Standards
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-gray-900 tracking-tight leading-[1.15] mb-6">
                   Engineered for <span className="font-medium">efficiency</span>, <br className="hidden lg:block"/>
                   built on <span className="font-medium">reliability</span>.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-12 max-w-xl">
                   We focus heavily on B2B institutional supply, offering unparalleled reliability, transparent tracking, and competitive terms. Our supply chain is strictly audited to ensure ISO 13485 compliance across all product categories.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                   <div className="border-l-[3px] border-primary-600 pl-6">
                      <div className="text-4xl font-light text-gray-900 mb-1">48<span className="text-primary-600 text-xl font-bold ml-1">hrs</span></div>
                      <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">Fulfillment Lead Time</div>
                   </div>
                   <div className="border-l-[3px] border-gray-300 pl-6">
                      <div className="text-4xl font-light text-gray-900 mb-1">12<span className="text-gray-400 text-xl font-bold ml-1">k+</span></div>
                      <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">Stocked SKU Categories</div>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Certified Quality",
                    description: "Reputable manufacturers adhering strictly to global safety standards."
                  },
                  {
                    icon: Truck,
                    title: "Reliable Logistics",
                    description: "Flexible supply capacity handling bulk institutional drops flawlessly."
                  },
                  {
                    icon: Stethoscope,
                    title: "Medical Grade",
                    description: "Diagnostics and tools calibrated precisely for clinical environments."
                  },
                  {
                    icon: Factory,
                    title: "Direct Sourcing",
                    description: "Optimized procurement channels avoiding intermediary markup."
                  }
                ].map((prop, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300 flex flex-col items-start group rounded-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-50/0 to-primary-50/0 group-hover:to-primary-50/50 transition-colors pointer-events-none" />
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border border-gray-100 mb-6 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors rounded-sm relative z-10">
                      <prop.icon className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10">{prop.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">{prop.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="text-primary-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Enterprise Supply</div>
              <h2 className="text-3xl md:text-5xl font-display font-light text-gray-900 tracking-tight">Featured Inventory</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-700 hover:text-primary-900 transition-colors border-b border-primary-200 hover:border-primary-700 pb-1">
              View Master Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "5", name: "Trinocular Compound Microscope", category: "Lab Equipment",
                description: "Professional lab microscope with 1000x magnification, LED illumination, and camera port.",
                sku: "LAB-4050", brand: "OptiView", inStock: true,
                image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&fit=crop"
              },
              {
                id: "8", name: "Digital Automated BP Monitor", category: "Diagnostics",
                description: "Clinical grade automated blood pressure monitor with large LCD and extended memory.",
                sku: "DIAG-110", brand: "VitalTech", inStock: true,
                image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80&fit=crop"
              },
              {
                id: "2", name: "N95 Particulate Respirators", category: "Safety & PPE",
                description: "NIOSH approved N95 respirators for clinical isolation environments. Secure fit.",
                sku: "PPE-1095", brand: "AirPro", inStock: true,
                image: n95RespiratorsImg
              }
            ].map(product => (
              <div key={product.id} className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full">
                <div className="h-64 bg-gray-100 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 flex gap-2">
                     <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm border border-gray-200/50">
                       {product.brand}
                     </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3 gap-2">
                     <div className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.15em]">
                       {product.category}
                     </div>
                     <span className="text-[10px] text-gray-400 font-mono tracking-wider">{product.sku}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 leading-tight text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-1 font-light">{product.description}</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 pl-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> 
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-green-600">In Stock</span>
                    </div>
                    <Link to="/quote" className="text-[11px] font-bold uppercase tracking-widest text-gray-900 hover:text-primary-600 transition-colors border-b border-transparent hover:border-primary-600 pb-0.5">
                      Add to RFQ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-End CTA Section */}
      <section className="bg-gray-900 relative overflow-hidden py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-900 to-gray-900" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white mb-6">Streamline your <span className="font-semibold">procurement protocol</span>.</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
            Partner with us for reliable long-term supply agreements, meticulous quality assurance, and competitive wholesale pricing tailored rapidly to your institution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quote" className="bg-white text-gray-900 px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Request a Quotation
            </Link>
            <Link to="/contact" className="bg-gray-800 text-white border border-gray-700 px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-700 transition-colors">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
