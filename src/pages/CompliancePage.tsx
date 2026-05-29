import { Award, ShieldCheck, CheckCircle2, Factory, FileCheck, Globe } from "lucide-react";

export function CompliancePage() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="relative overflow-hidden bg-gray-900 border-b border-gray-800 py-24 min-h-[40vh] flex flex-col justify-center">
         <div className="absolute inset-0 z-0 opacity-30">
            <img 
               src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80" 
               alt="Compliance and Quality Assurance" 
               className="w-full h-full object-cover mix-blend-overlay"
            />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <div className="text-primary-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Quality & Compliance</div>
            <h1 className="text-4xl md:text-5xl font-display font-light text-white tracking-tight mb-6 max-w-3xl mx-auto">
               Uncompromising Standards
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
               We adhere strictly to international ISO standards and FDA regulations, ensuring absolute safety for every product in our catalog.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 p-10 rounded-sm">
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-primary-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">ISO 13485:2016</h3>
               <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Strictly certified quality management systems tailored explicitly for the design and manufacture of medical devices.
               </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-10 rounded-sm">
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                 <Globe className="w-6 h-6 text-primary-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">CE Mark Compliance</h3>
               <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Products within our catalog meet the health, safety, and environmental protection standards for the EEA.
               </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-10 rounded-sm">
               <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                 <FileCheck className="w-6 h-6 text-primary-600" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3">FDA Registered</h3>
               <p className="text-gray-600 text-sm leading-relaxed font-light">
                  All distribution hubs and partnered manufacturing facilities maintain active FDA registration and reporting.
               </p>
            </div>
         </div>

         <div className="mt-20 border-t border-gray-200 pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-display font-light text-gray-900 tracking-tight mb-6">Audited Supply Operations.</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">
                     Quality assurance is embedded at every node of our supply chain. We maintain a zero-tolerance policy for counterfeit or sub-standard medical supplies.
                  </p>
                  
                  <ul className="space-y-4">
                     {[
                        "Continuous supplier spot-audits and facility stress tests.",
                        "Strict batch tracking and serial serialization.",
                        "Temperature-controlled storage and distribution logs.",
                        "Full transparent documentation provided with every PO."
                     ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                           <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                           <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               
               <div className="bg-gray-100 p-4 border border-gray-200 relative h-96 overflow-hidden">
                  <img 
                     src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80" 
                     className="w-full h-full object-cover mix-blend-multiply opacity-80"
                     alt="Laboratory Testing"
                  />
                  <div className="absolute inset-0 bg-primary-900/10" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
