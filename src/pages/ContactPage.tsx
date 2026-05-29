import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export function ContactPage() {
  return (
    <div className="w-full bg-white">
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our specialized medical supply team is ready to assist your institution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl font-display font-light text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Corporate Headquarters</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    123 Healthcare Blvd,<br />
                    Medical District,<br />
                    Tech City, TC 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sales & Support</h3>
                  <p className="text-gray-600 text-sm mb-1">Toll-Free: +1 (800) MED-EQUIP</p>
                  <p className="text-gray-600 text-sm">Direct: +1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email us</h3>
                  <p className="text-gray-600 text-sm mb-1">General: info@medequippro.com</p>
                  <p className="text-primary-600 text-sm font-medium">Procurement: quotes@medequippro.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-sm flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Business</h3>
                  <p className="text-gray-600 text-sm mb-1">Available for quick institutional inquiries.</p>
                  <a href="#" className="text-green-600 text-sm font-medium hover:underline">+1 (555) 987-6543</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
             <h2 className="text-xl font-display font-light text-gray-900 mb-6">Send a Message</h2>
             <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm text-sm focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-sm text-sm focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-sm text-sm focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-sm text-sm focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-900 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}
