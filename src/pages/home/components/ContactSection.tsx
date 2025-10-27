
export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-[#0E3A5B] to-[#1a4a6b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-2">
            Let's talk about your property today
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
            Ready to experience stress-free rental management? Contact us for a free property review 
            and discover how we can maximize your income while giving you complete peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get in touch</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F6C453] rounded-full flex items-center justify-center">
                    <i className="ri-whatsapp-line text-[#0E3A5B] text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">WhatsApp / Phone</div>
                    <a 
                      href="https://wa.me/33783188762" 
                      className="text-[#F6C453] hover:text-[#f5bf3d] transition-colors cursor-pointer text-sm md:text-base"
                    >
                      +33 7 83 18 87 62
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8BBF9F] rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-[#0E3A5B] text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">Email</div>
                    <a 
                      href="mailto:contact@laconciergeriefiducia.fr" 
                      className="text-[#8BBF9F] hover:text-[#7db091] transition-colors cursor-pointer text-sm md:text-base break-all"
                    >
                      contact@laconciergeriefiducia.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E9DEC9] rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-[#0E3A5B] text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm md:text-base">Service Area</div>
                    <div className="text-white/80 text-sm md:text-base">South of France</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://wa.me/33783188762"
                    className="flex-1 bg-[#F6C453] text-[#0E3A5B] font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-full text-center hover:bg-[#f5bf3d] transition-colors cursor-pointer whitespace-nowrap text-sm md:text-base"
                  >
                    <i className="ri-whatsapp-line mr-2"></i>
                    Message us
                  </a>
                  <a 
                    href="tel:+33783188762"
                    className="flex-1 bg-white/10 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-full text-center hover:bg-white/20 transition-colors border border-white/20 cursor-pointer whitespace-nowrap text-sm md:text-base"
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Call now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F6C453]/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#F6C453]/20">
              <div className="flex items-center space-x-3 mb-2 md:mb-3">
                <i className="ri-time-line text-[#F6C453] text-lg md:text-xl"></i>
                <h4 className="text-white font-semibold text-sm md:text-base">Response Time</h4>
              </div>
              <p className="text-white/80 text-xs md:text-sm">
                We typically respond within 2 hours during business hours and offer 24/7 emergency support for urgent matters.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-[#0E3A5B] mb-4 md:mb-6">Get your free property review</h3>
            
            <form 
              id="contact-fiducia"
              data-readdy-form
              action="https://readdy.ai/api/form/d3vjjl6g28apfrolkjdg"
              method="POST"
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm"
                  placeholder="+33 X XX XX XX XX"
                />
              </div>
              
              <div>
                <label htmlFor="propertyLocation" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Property Location *
                </label>
                <input
                  type="text"
                  id="propertyLocation"
                  name="propertyLocation"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm"
                  placeholder="City, Region"
                />
              </div>
              
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Select property type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Tell us about your property
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={500}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F6C453] focus:border-transparent text-sm resize-none"
                  placeholder="Number of bedrooms, current rental status, any specific requirements..."
                ></textarea>
                <div className="text-xs text-gray-500 mt-1">Maximum 500 characters</div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#0E3A5B] text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg hover:bg-[#0d3251] transition-colors whitespace-nowrap text-sm md:text-base"
              >
                <i className="ri-send-plane-line mr-2"></i>
                Send my property details
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
