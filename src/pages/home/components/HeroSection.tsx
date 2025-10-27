
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 58, 91, 0.4), rgba(246, 196, 83, 0.3)), url('https://readdy.ai/api/search-image?query=Luxurious%20Mediterranean%20villa%20terrace%20with%20pristine%20white%20linens%20hanging%20on%20a%20line%2C%20golden%20sunlight%20streaming%20through%2C%20turquoise%20sea%20view%20in%20background%2C%20professional%20hospitality%20setting%2C%20warm%20golden%20hour%20lighting%2C%20clean%20minimalist%20aesthetic%2C%20peaceful%20serene%20atmosphere%2C%20high-end%20vacation%20rental%20property&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              La Conciergerie Fiducia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              Trust, transparency, and peace of mind.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              We handle everything — guests, cleaning, and management — so you can relax and enjoy your rental income.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                size="lg"
                href="https://wa.me/33783188762"
                icon={<i className="ri-whatsapp-line"></i>}
              >
                Contact us on WhatsApp
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="mailto:contact@laconciergeriefiducia.fr"
                icon={<i className="ri-mail-line"></i>}
              >
                Send us an email
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-white/80">
              <div className="flex items-center">
                <i className="ri-star-fill text-[#F6C453] mr-1"></i>
                <span className="text-sm">Professional service</span>
              </div>
              <div className="flex items-center">
                <i className="ri-shield-check-line text-[#8BBF9F] mr-1"></i>
                <span className="text-sm">Only 10% commission</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line text-[#F6C453] mr-1"></i>
                <span className="text-sm">24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  );
}
