
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[#0E3A5B]" style={{ fontFamily: '"Pacifico", serif' }}>
              La Conciergerie Fiducia
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('advantages')}
              className="text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33783188762"
              className="flex items-center px-4 py-2 text-[#0E3A5B] border border-[#0E3A5B] rounded-full hover:bg-[#0E3A5B] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Call us
            </a>
            <a
              href="https://wa.me/33783188762"
              className="flex items-center px-4 py-2 bg-[#F6C453] text-[#0E3A5B] rounded-full hover:bg-[#f5bf3d] transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-[#0E3A5B]`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('advantages')}
                className="text-left text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#0E3A5B] transition-colors cursor-pointer"
              >
                Contact
              </button>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <a
                  href="tel:+33783188762"
                  className="flex items-center justify-center px-4 py-2 text-[#0E3A5B] border border-[#0E3A5B] rounded-full hover:bg-[#0E3A5B] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call us
                </a>
                <a
                  href="https://wa.me/33783188762"
                  className="flex items-center justify-center px-4 py-2 bg-[#F6C453] text-[#0E3A5B] rounded-full hover:bg-[#f5bf3d] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
