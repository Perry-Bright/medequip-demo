import { useState } from "react";
import { CheckCircle2, FileText, Building } from "lucide-react";

export function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-light text-gray-900 tracking-tight mb-4 flex items-center justify-center gap-3">
            <FileText className="w-8 h-8 text-primary-600" />
            Request a Quotation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Submit your procurement requirements below. Our institutional sales team will respond with a tailored proposal within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-sm border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-display font-light text-gray-900 mb-4">Request Received</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Thank you for considering MedEquip Pro. A dedicated procurement specialist will contact you shortly with your customized quote.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-primary-600 text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-sm border border-gray-200 overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
              
              {/* Institution Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Building className="w-5 h-5 text-primary-600" /> Institution Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm" placeholder="e.g. City General Hospital" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institution Type *</label>
                    <select required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm bg-white">
                      <option value="">Select Type</option>
                      <option value="hospital">Hospital / Clinic</option>
                      <option value="university">Educational Institution</option>
                      <option value="laboratory">Laboratory</option>
                      <option value="ngo">NGO / Government</option>
                      <option value="pharmacy">Pharmacy / Retail</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title / Role</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm" placeholder="e.g. Procurement Manager" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm" placeholder="work@organization.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  Procurement Requirements
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Items Needed & Estimated Quantities *</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm" 
                      placeholder="Please list the products, specifications, and estimated quantities required..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Supply Model</label>
                    <div className="flex gap-4 items-center">
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="radio" name="supply_type" value="one-time" className="text-primary-600 focus:ring-primary-500" defaultChecked />
                        One-Time Bulk Order
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input type="radio" name="supply_type" value="recurring" className="text-primary-600 focus:ring-primary-500" />
                        Recurring Supply Contract
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button type="submit" className="w-full md:w-auto bg-primary-600 text-white px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors">
                  Submit Quote Request
                </button>
                <p className="mt-4 text-xs text-gray-500 text-center md:text-left">
                  By submitting this form, you agree to our privacy policy regarding the storage and processing of your data.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
