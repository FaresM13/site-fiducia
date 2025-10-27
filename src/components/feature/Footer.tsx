
export default function Footer() {
  return (
    <footer className="bg-[#0E3A5B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F6C453]" style={{ fontFamily: '"Pacifico", serif' }}>
              La Conciergerie Fiducia
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your property, our promise of trust. Professional rental management 
              in the South of France with complete transparency and peace of mind.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/33783188762"
                className="w-10 h-10 bg-[#F6C453] rounded-full flex items-center justify-center hover:bg-[#f5bf3d] transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-[#0E3A5B]"></i>
              </a>
              <a 
                href="mailto:contact@laconciergeriefiducia.fr"
                className="w-10 h-10 bg-[#8BBF9F] rounded-full flex items-center justify-center hover:bg-[#7db091] transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-[#0E3A5B]"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F6C453]">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#8BBF9F]"></i>
                <a href="tel:+33783188762" className="hover:text-[#F6C453] transition-colors cursor-pointer">
                  +33 7 83 18 87 62
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#8BBF9F]"></i>
                <a href="mailto:contact@laconciergeriefiducia.fr" className="hover:text-[#F6C453] transition-colors cursor-pointer">
                  contact@laconciergeriefiducia.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#8BBF9F]"></i>
                <span>South of France</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F6C453]">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Guest check-in / check-out</li>
              <li>• Professional cleaning & linen</li>
              <li>• Key management & security</li>
              <li>• 24/7 communication support</li>
              <li>• Transparent 10% commission</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/60">
            © 2024 La Conciergerie Fiducia. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">
              Legal Notice
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="text-white/60 hover:text-[#F6C453] transition-colors cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
