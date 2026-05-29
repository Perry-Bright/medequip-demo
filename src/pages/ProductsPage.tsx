import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ShieldCheck, Microscope, Stethoscope, Factory, CheckCircle2, AlertCircle } from "lucide-react";
import { Product } from "../types";

import surgicalMasksImg from "../assets/images/surgical_masks_1780016789134.png";
import n95RespiratorsImg from "../assets/images/n95_respirators_1780016823123.png";
import nitrileGlovesImg from "../assets/images/nitrile_gloves_1780016853168.png";
import reagentVialsImg from "../assets/images/reagent_vials_1780016879866.png";
import infraredThermometerImg from "../assets/images/infrared_thermometer_1780016896760.png";
import centrifugeImg from "../assets/images/centrifuge_1780016917451.png";
import isolationGownsImg from "../assets/images/isolation_gowns_1780016945174.png";

const PRODUCTS: Product[] = [
  { id: "1", name: "Surgical Masks (Box of 50)", category: "ppe", description: "3-ply disposable surgical masks with high PFE and fluid resistance. Hypoallergenic.", price: "Request Quote", sku: "PPE-1001", brand: "SafeGuard", inStock: true, image: surgicalMasksImg },
  { id: "2", name: "N95 Particulate Respirators", category: "ppe", description: "NIOSH approved N95 respirators for clinical isolation environments. Secure fit.", price: "Request Quote", sku: "PPE-1095", brand: "AirPro", inStock: true, image: n95RespiratorsImg },
  { id: "3", name: "Nitrile Examination Gloves", category: "ppe", description: "Powder-free, medical grade nitrile gloves. Maximum tactile sensitivity and tear resistance.", price: "Request Quote", sku: "PPE-2005", brand: "ClinGlove", inStock: false, image: nitrileGlovesImg },
  
  { id: "5", name: "Trinocular Compound Microscope", category: "lab", description: "Professional lab microscope with 1000x magnification, LED illumination, and camera port.", price: "Request Quote", sku: "LAB-4050", brand: "OptiView", inStock: true, image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&fit=crop" },
  { id: "7", name: "Precision CO2 Incubator", category: "lab", description: "Advanced thermal jacketed incubator. Precise temperature and CO2 control for cell cultures.", price: "Request Quote", sku: "LAB-8800", brand: "BioTherm", inStock: true, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80&fit=crop" },
  
  { id: "8", name: "Digital Automated BP Monitor", category: "diagnostics", description: "Clinical grade automated blood pressure monitor with large LCD and extended memory.", price: "Request Quote", sku: "DIAG-110", brand: "VitalTech", inStock: true, image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80&fit=crop" },
  { id: "9", name: "Clinical Cardiology Stethoscope", category: "diagnostics", description: "Dual-head stethoscope providing exceptional high acoustic sensitivity and comfortable fit.", price: "Request Quote", sku: "DIAG-225", brand: "Acoustica", inStock: true, image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80&fit=crop" },
  
  { id: "11", name: "Sterile Luer Lock Syringes", category: "consumables", description: "Disposable sterile syringes, individually blister packed. 5ml capacity, ultra-sharp.", price: "Request Quote", sku: "CON-9005", brand: "Mediject", inStock: true, image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80&fit=crop" },
  { id: "14", name: "Borosilicate Reagent Vials", category: "consumables", description: "Standard laboratory glassware, highly chemically resistant with sterile caps.", price: "Request Quote", sku: "CON-3320", brand: "GlassLine", inStock: true, image: reagentVialsImg },
  { id: "15", name: "Surgical Nitrile Gloves (Sterile)", category: "ppe", description: "Advanced tactile performance nitrile gloves for complex surgical environments.", price: "Request Quote", sku: "PPE-2099", brand: "ClinGlove", inStock: true, image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=800&q=80&fit=crop" },
  { id: "16", name: "Infrared Thermometer Pro", category: "diagnostics", description: "Non-contact clinical grade thermometer with sub-second read times.", price: "Request Quote", sku: "DIAG-500", brand: "VitalTech", inStock: true, image: infraredThermometerImg },
  { id: "17", name: "Automated Centrifuge", category: "lab", description: "High-speed digital centrifuge for blood and serum separation.", price: "Request Quote", sku: "LAB-1120", brand: "OptiView", inStock: false, image: centrifugeImg },
  { id: "18", name: "Medical Grade Isolation Gowns", category: "ppe", description: "AAMI Level 3 isolation gowns. Fluid resistant and breathable.", price: "Request Quote", sku: "PPE-8001", brand: "SafeGuard", inStock: true, image: isolationGownsImg },
];

const CATEGORIES = [
  { id: "ppe", label: "Safety & PPE", icon: ShieldCheck },
  { id: "lab", label: "Lab Equipment", icon: Microscope },
  { id: "diagnostics", label: "Diagnostic", icon: Stethoscope },
  { id: "consumables", label: "Consumables", icon: Factory },
];

export function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const brands = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.brand))).sort(), []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      const matchStock = !inStockOnly || p.inStock;
      return matchSearch && matchCat && matchBrand && matchStock;
    });
  }, [search, selectedCategories, selectedBrands, inStockOnly]);

  const toggleCategory = (catId: string) => {
    setSelectedCategories(prev => 
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="w-full bg-white flex flex-col h-full min-h-screen font-sans">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-primary-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Enterprise Supply</div>
          <h1 className="text-4xl md:text-5xl font-display font-light text-gray-900 tracking-tight mb-4">Master Catalog</h1>
          <p className="text-lg text-gray-600 max-w-3xl font-light">
            Comprehensive range of high-quality healthcare consumables, laboratory equipment, and rigorously tested safety gear.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col md:flex-row gap-12">
        
        {/* Strict Filtering Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-10">
          <div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search SKU or Name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" /> Categories
            </h3>
            <div className="space-y-2">
              {CATEGORIES.map(cat => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                    className="w-4 h-4 rounded-sm border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer" 
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors flex items-center gap-2">
                    {cat.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-4">Manufacturers</h3>
            <div className="space-y-2">
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 rounded-sm border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer" 
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-4">Availability</h3>
             <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded-sm border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer" 
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">In Stock Only</span>
              </label>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <div className="mb-6 flex justify-between items-end border-b border-gray-200 pb-4">
            <h2 className="text-xl font-light text-gray-800">
              Showing {filteredProducts.length} Results
            </h2>
            {/* Sort placeholder for enterprise look */}
            <select className="text-sm border-none bg-transparent text-gray-500 focus:outline-none cursor-pointer font-medium">
               <option>Sort by: Recommended</option>
               <option>Sort by: Category</option>
               <option>Sort by: Brand</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-32 bg-gray-50 rounded-sm border border-gray-200">
              <p className="text-gray-500 text-lg font-light">No products match your strict criteria.</p>
              <button 
                onClick={() => { setSearch(""); setSelectedCategories([]); setSelectedBrands([]); setInStockOnly(false); }}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-primary-600 hover:text-primary-800 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full">
                  <div className="h-56 bg-gray-100 overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 flex gap-2">
                       <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm border border-gray-200/50">
                         {product.brand}
                       </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-2">
                       <div className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.15em]">
                         {CATEGORIES.find(c => c.id === product.category)?.label}
                       </div>
                       <span className="text-[10px] text-gray-400 font-mono tracking-wider">{product.sku}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{product.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-1 font-light">{product.description}</p>
                    
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5">
                         {product.inStock ? (
                           <><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> <span className="text-[11px] font-semibold uppercase tracking-wider text-green-600">In Stock</span></>
                         ) : (
                           <><AlertCircle className="w-3.5 h-3.5 text-amber-500" /> <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">Lead Time Applied</span></>
                         )}
                      </div>
                      <Link to="/quote" className="text-[11px] font-bold uppercase tracking-widest text-gray-900 hover:text-primary-600 transition-colors border-b border-transparent hover:border-primary-600 pb-0.5">
                        Add to RFQ
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
