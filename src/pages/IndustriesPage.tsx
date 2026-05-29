import { Building2, School, TestTube2, HeartPulse, Cross, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import reagentVialsImg from "../assets/images/reagent_vials_1780016879866.png";
import n95RespiratorsImg from "../assets/images/n95_respirators_1780016823123.png";

export function IndustriesPage() {
  const industries = [
    {
      title: "Hospitals & Clinics",
      desc: "Comprehensive supply of surgical consumables, PPE, and everyday hospital needs.",
      tags: ["Public Hospitals", "Private Clinics", "Care Centers"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Educational Institutions",
      desc: "Supporting medical universities and nursing schools with precise training setups.",
      tags: ["Medical Schools", "Nursing Schools", "Academia"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Research Laboratories",
      desc: "Precision equipment, reagents, and protective apparel for advanced diagnostics.",
      tags: ["Diagnostic Labs", "Research Core", "Pharma Labs"],
      image: reagentVialsImg
    },
    {
      title: "NGOs & Government",
      desc: "Mass logistics and procurement support for humanitarian programs and stockpiles.",
      tags: ["Ministries of Health", "NGOs", "Public Campaigns"],
      image: n95RespiratorsImg
    },
    {
      title: "Pharmacies & Retailers",
      desc: "Wholesale medical supply distribution for retail and community pharmacy chains.",
      tags: ["Retail Chains", "Wholesale", "Medical Stores"],
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-primary-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Sectors</div>
          <h1 className="text-4xl md:text-5xl font-display font-light text-gray-900 tracking-tight mb-6">Industries We Serve</h1>
          <p className="text-lg text-gray-600 max-w-3xl font-light leading-relaxed">
            We provide specialized, high-volume procurement solutions engineered explicitly for the stringent demands of various healthcare divisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white border border-gray-200 group overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300 rounded-sm">
              <div className="sm:w-2/5 h-48 sm:h-auto shrink-0 relative overflow-hidden bg-gray-100">
                 <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                 <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col justify-center flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{ind.title}</h3>
                <p className="text-gray-500 mb-6 font-light leading-relaxed text-sm">
                  {ind.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {ind.tags.map(tag => (
                    <span key={tag} className="bg-gray-50 text-gray-600 border border-gray-200 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 relative bg-gray-900 rounded-sm overflow-hidden text-center text-white p-16 md:p-24 shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-primary-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Enterprise Accounts</div>
            <h2 className="text-3xl md:text-5xl font-display font-light mb-6 tracking-tight">Need a specialized supply plan?</h2>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl">
              We offer bespoke procurement agreements, continuous replenishment models, and volume-tiered pricing.
            </p>
            <Link to="/quote" className="bg-white text-gray-900 px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center gap-2">
              Contact Institutional Sales <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
