
export default function AdvantagesSection() {
  const benefits = [
    {
      icon: 'ri-emotion-happy-line',
      title: 'No stress, no surprises',
      description: 'Complete peace of mind with professional management of every aspect of your rental.',
      image: 'https://readdy.ai/api/search-image?query=Relaxed%20property%20owner%20sitting%20peacefully%20on%20a%20Mediterranean%20terrace%20with%20laptop%2C%20golden%20sunset%20light%2C%20serene%20expression%2C%20luxury%20villa%20background%2C%20stress-free%20lifestyle%2C%20warm%20peaceful%20atmosphere%2C%20professional%20success&width=400&height=300&seq=no-stress&orientation=landscape'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Trusted partner',
      description: 'Your property is treated with the same care and attention as if it were our own.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20handshake%20between%20property%20owner%20and%20concierge%20service%20representative%20in%20elegant%20Mediterranean%20villa%20setting%2C%20trust%20and%20partnership%2C%20warm%20golden%20lighting%2C%20luxury%20hospitality%20atmosphere%2C%20professional%20relationship&width=400&height=300&seq=trusted-partner&orientation=landscape'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Earn more, worry less',
      description: 'Maximize your rental income while we handle all the work and management.',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Mediterranean%20rental%20property%20with%20happy%20guests%20enjoying%20the%20terrace%2C%20property%20generating%20income%2C%20sunny%20day%2C%20luxury%20vacation%20rental%2C%20successful%20hospitality%20business%2C%20warm%20welcoming%20atmosphere&width=400&height=300&seq=earn-more&orientation=landscape'
    }
  ];

  return (
    <section id="advantages" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E3A5B] mb-4 md:mb-6 px-2">
            Owner benefits with Fiducia
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Experience the freedom of rental income without the hassle. We take care of everything 
            so you can enjoy the rewards.
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-4 md:space-y-6 px-2 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F6C453] rounded-full flex items-center justify-center">
                    <i className={`${benefit.icon} text-[#0E3A5B] text-xl md:text-2xl`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E3A5B]">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a 
                    href="https://wa.me/33783188762"
                    className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-[#F6C453] text-[#0E3A5B] font-semibold rounded-full hover:bg-[#f5bf3d] transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
                  >
                    <i className="ri-whatsapp-line mr-2"></i>
                    Message us on WhatsApp
                  </a>
                  <a 
                    href="tel:+33783188762"
                    className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-[#0E3A5B] text-white font-semibold rounded-full hover:bg-[#0d3251] transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Call now
                  </a>
                </div>
              </div>
              
              <div className={`px-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img 
                  src={benefit.image}
                  alt={benefit.title}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] object-top"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-16 md:mt-20 bg-gradient-to-br from-[#E9DEC9]/30 to-[#8BBF9F]/20 rounded-3xl p-6 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F6C453] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="ri-double-quotes-l text-[#0E3A5B] text-xl md:text-2xl"></i>
            </div>
            
            <blockquote className="text-lg sm:text-xl md:text-2xl text-[#0E3A5B] font-medium mb-4 md:mb-6 italic px-2">
              "With Fiducia, everything is smooth and professional — I never worry anymore. 
              My property is in excellent hands, and I can finally enjoy my rental income without any stress."
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Mediterranean%20property%20owner%20portrait%2C%20middle-aged%20person%20with%20confident%20smile%2C%20elegant%20casual%20attire%2C%20warm%20golden%20lighting%2C%20trustworthy%20appearance%2C%20successful%20real%20estate%20investor&width=80&height=80&seq=testimonial-owner&orientation=squarish"
                alt="Property owner testimonial"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover object-top"
              />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-[#0E3A5B] text-sm md:text-base">Marie Dubois</div>
                <div className="text-gray-600 text-xs md:text-sm">Villa owner, Nice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
