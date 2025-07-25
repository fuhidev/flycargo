'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`} style={{ fontFamily: 'var(--font-pacifico)' }}>
            logo
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`hover:text-[#ce1c40] transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Dịch Vụ
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`hover:text-[#ce1c40] transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Kinh Nghiệm
            </button>
            <button
              onClick={() => scrollToSection('global-map')}
              className={`hover:text-[#ce1c40] transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Bản Đồ
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-[#ce1c40] transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Đánh Giá
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`hover:text-[#ce1c40] transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Bảng Giá
            </button>
            <Link href="/faq" className={`hover:text-[#ce1c40] transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              FAQ
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#ce1c40] hover:bg-[#b01635] text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Liên Hệ
            </button>
          </nav>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 cursor-pointer ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-[#ce1c40] transition-colors py-2 cursor-pointer"
            >
              Dịch Vụ
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-700 hover:text-[#ce1c40] transition-colors py-2 cursor-pointer"
            >
              Kinh Nghiệm
            </button>
            <button
              onClick={() => scrollToSection('global-map')}
              className="block w-full text-left text-gray-700 hover:text-[#ce1c40] transition-colors py-2 cursor-pointer"
            >
              Bản Đồ
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-[#ce1c40] transition-colors py-2 cursor-pointer"
            >
              Đánh Giá
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-[#ce1c40] transition-colors py-2 cursor-pointer"
            >
              Bảng Giá
            </button>
            <Link href="/faq" className="block w-full text-left text-gray-700 hover:text-[#ce1c40] transition-colors py-2">
              FAQ
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-[#ce1c40] hover:bg-[#b01635] text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              Liên Hệ
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}