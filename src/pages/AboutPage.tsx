import { Target, Flag, Shield } from "lucide-react";

export function AboutPage() {
  return (
    <div className="w-full bg-white font-sans">
      {/* High-End Hero */}
      <div className="relative overflow-hidden bg-gray-900 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
              src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Medical Team / Lab" 
              className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-16">
          <div className="text-primary-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Corporate Overview</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white tracking-tight mb-6 leading-tight max-w-3xl">
            Advancing global health through <span className="font-semibold text-white">reliable supply chains.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="text-sm font-bold text-primary-700 uppercase tracking-widest mb-4 flex items-center gap-3">
                <Target className="w-4 h-4" /> The Mission
              </h2>
              <h3 className="text-3xl font-display font-light text-gray-900 mb-6 tracking-tight">Equipping the frontlines of medicine and research.</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                To support healthcare professionals, medical institutions, laboratories, and educational organizations by delivering dependable medical supplies, protective equipment, and laboratory solutions that meet the highest international quality and safety benchmarks consistently.
              </p>
            </section>
            
            <section>
              <h2 className="text-sm font-bold text-primary-700 uppercase tracking-widest mb-4 flex items-center gap-3">
                <Flag className="w-4 h-4" /> The Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                To become the unequivocal global leader and most trusted provider of medical supplies and laboratory asset procurement. We operate entirely on the principle that improving healthcare delivery and laboratory operations stems from accessible, hyper-reliable, and strictly vetted healthcare products.
              </p>
            </section>
          </div>

          <div className="lg:col-span-5 bg-gray-50 p-10 md:p-12 border border-gray-200 rounded-sm">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-3">
              <Shield className="w-4 h-4 text-primary-600" />
              Rigorous Quality Commitments
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Supplier Vetting", desc: "Rigorous manufacturer auditing and multi-stage ISO certification verification." },
                { title: "Regulatory Compliance", desc: "Absolute adherence to FDA, CE, and international healthcare compliance standards." },
                { title: "Inventory Reliability", desc: "Predictive, robust inventory management ensuring critical stock contingencies." },
                { title: "Technical Support", desc: "Dedicated, post-sales technical diagnostics and equipment maintenance." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 shrink-0" />
                  <div>
                     <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
