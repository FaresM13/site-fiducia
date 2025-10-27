
export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-home-heart-line',
      title: 'Guest Check-in / Check-out',
      description: 'Professional welcome and departure management for every guest, ensuring smooth transitions.',
      color: '#F6C453'
    },
    {
      icon: 'ri-shirt-line',
      title: 'Cleaning & Linen Service',
      description: 'Complete cleaning service with fresh towels, sheets, and professional linen management.',
      color: '#8BBF9F'
    },
    {
      icon: 'ri-key-2-line',
      title: 'Key Management & Security',
      description: 'Secure key handling and regular property inspections to ensure everything is perfect.',
      color: '#F6C453'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Communication & Support',
      description: 'Round-the-clock guest communication and emergency support for complete peace of mind.',
      color: '#8BBF9F'
    },
    {
      icon: 'ri-edit-2-line',
      title: 'Attractive & Optimized Listings',
      description: 'Creation of compelling, optimized listings for all your rental platforms to maximize visibility.',
      color: '#E9DEC9'
    },
    {
      icon: 'ri-camera-3-line',
      title: 'Professional Photography',
      description: 'High-quality professional photos that showcase your property\'s best features and attract more guests.',
      color: '#8BBF9F'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Smart Pricing Optimization',
      description: 'Intelligent price adjustments based on season, demand, and market trends to maximize your revenue.',
      color: '#F6C453'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Transparent 10% Fee',
      description: 'Simple, honest pricing with no hidden costs. You know exactly what you pay.',
      color: '#E9DEC9'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Full Organization',
      description: 'Complete management from start to finish. You don\'t manage anything — we handle it all.',
      color: '#F6C453'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E3A5B] mb-4 md:mb-6 px-2">
            Complete management for your peace of mind
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            At La Conciergerie Fiducia, we manage everything for your rental — from guest communication 
            to cleaning — so you can earn income without the stress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <i 
                  className={`${service.icon} text-xl md:text-2xl`}
                  style={{ color: service.color === '#E9DEC9' ? '#0E3A5B' : service.color }}
                ></i>
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-[#0E3A5B] mb-3 md:mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#0E3A5B] to-[#1a4a6b] rounded-3xl p-6 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 px-2">
            We charge only 10% of the rent, with no hidden fees
          </h3>
          <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Simple, transparent pricing. You know exactly what you pay, and you get complete peace of mind in return.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <a 
              href="https://wa.me/33783188762"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#F6C453] text-[#0E3A5B] font-semibold rounded-full hover:bg-[#f5bf3d] transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Get your free property review
            </a>
            <a 
              href="mailto:contact@laconciergeriefiducia.fr"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap cursor-pointer text-sm md:text-base"
            >
              <i className="ri-mail-line mr-2"></i>
              Send us an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
