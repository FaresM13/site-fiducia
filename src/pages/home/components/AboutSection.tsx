
export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E3A5B] mb-4 md:mb-6 px-2">
            Your property, our promise of trust
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Founded on trust and professionalism, La Conciergerie Fiducia offers full property management 
            for owners who value peace of mind. Our goal: simplify your rental while guaranteeing quality and transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="px-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#0E3A5B] mb-3 md:mb-4">
                Why choose Fiducia?
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                We understand that your property is more than just an investment — it's your peace of mind. 
                That's why we've built our service around trust, transparency, and professional excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-2">
              <div className="bg-[#F6C453]/10 rounded-2xl p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F6C453] rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-shield-check-line text-[#0E3A5B] text-lg md:text-xl"></i>
                </div>
                <h4 className="font-semibold text-[#0E3A5B] mb-2 text-sm md:text-base">Trust & Security</h4>
                <p className="text-gray-600 text-xs md:text-sm">Your property is handled with the utmost care and professionalism.</p>
              </div>
              
              <div className="bg-[#8BBF9F]/10 rounded-2xl p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8BBF9F] rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-eye-line text-[#0E3A5B] text-lg md:text-xl"></i>
                </div>
                <h4 className="font-semibold text-[#0E3A5B] mb-2 text-sm md:text-base">Full Transparency</h4>
                <p className="text-gray-600 text-xs md:text-sm">Clear pricing, regular updates, and honest communication always.</p>
              </div>
              
              <div className="bg-[#E9DEC9]/30 rounded-2xl p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E9DEC9] rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-user-heart-line text-[#0E3A5B] text-lg md:text-xl"></i>
                </div>
                <h4 className="font-semibold text-[#0E3A5B] mb-2 text-sm md:text-base">Personal Touch</h4>
                <p className="text-gray-600 text-xs md:text-sm">Human-sized service with attention to every detail.</p>
              </div>
              
              <div className="bg-[#F6C453]/10 rounded-2xl p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F6C453] rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-map-pin-line text-[#0E3A5B] text-lg md:text-xl"></i>
                </div>
                <h4 className="font-semibold text-[#0E3A5B] mb-2 text-sm md:text-base">Local Expertise</h4>
                <p className="text-gray-600 text-xs md:text-sm">Deep knowledge of the South of France rental market.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 px-2">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20Mediterranean%20property%20management%20team%20in%20elegant%20white%20uniforms%20arranging%20fresh%20white%20linens%20and%20towels%20in%20a%20bright%20sunny%20villa%20interior%2C%20golden%20sunlight%20streaming%20through%20windows%2C%20clean%20minimalist%20luxury%20aesthetic%2C%20trustworthy%20hospitality%20service%2C%20warm%20welcoming%20atmosphere&width=600&height=700&seq=about-team&orientation=portrait"
              alt="Professional property management team"
              className="rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] object-top"
            />
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-gray-100 max-w-[200px] sm:max-w-none">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F6C453] rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-[#0E3A5B] text-xl md:text-2xl"></i>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-[#0E3A5B]">10%</div>
                  <div className="text-xs md:text-sm text-gray-600">Commission only</div>
                  <div className="text-xs text-gray-500">No hidden fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
