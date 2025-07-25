'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Vận Chuyển Hàng Hóa Quốc Tế",
      subtitle: "Từ Việt Nam đến khắp nơi trên thế giới",
      description: "Dịch vụ vận chuyển hàng hóa uy tín với hơn 10 năm kinh nghiệm. Chúng tôi đảm bảo hàng hóa của bạn được giao đến đúng người, đúng nơi, đúng thời gian.",
      bgImage: "https://readdy.ai/api/search-image?query=modern%20international%20logistics%20airplane%20flying%20over%20world%20map%20with%20cargo%20containers%2C%20professional%20business%20background%2C%20clean%20minimalist%20design%20with%20red%20accents%2C%20high%20quality%20commercial%20photography%2C%20global%20shipping%20concept&width=1920&height=800&seq=hero1&orientation=landscape"
    },
    {
      title: "Gửi Hàng Cho Người Thân",
      subtitle: "Kết nối yêu thương qua khoảng cách",
      description: "Chuyên gửi hàng cho người thân ở nước ngoài. Từ quà tặng đến nhu yếu phẩm, chúng tôi sẽ giúp bạn gửi gắm tình yêu thương một cách an toàn nhất.",
      bgImage: "https://readdy.ai/api/search-image?query=heartwarming%20family%20package%20delivery%20scene%20with%20airplane%20in%20background%2C%20emotional%20connection%20across%20distance%2C%20warm%20lighting%2C%20professional%20logistics%20service%2C%20gift%20boxes%20and%20care%20packages&width=1920&height=800&seq=hero2&orientation=landscape"
    },
    {
      title: "Dịch Vụ Mua Hàng & Đóng Gói",
      subtitle: "Tiện lợi từ A đến Z",
      description: "Không chỉ vận chuyển, chúng tôi còn hỗ trợ mua hàng giúp bạn và đóng gói chuyên nghiệp. Bạn chỉ cần yêu cầu, chúng tôi lo tất cả.",
      bgImage: "https://readdy.ai/api/search-image?query=professional%20packaging%20service%20with%20careful%20handling%20of%20goods%2C%20modern%20warehouse%20with%20international%20shipping%20boxes%2C%20quality%20control%20and%20secure%20packing%20process%2C%20clean%20industrial%20environment&width=1920&height=800&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="#contact" className="bg-[#ce1c40] hover:bg-[#b01635] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
                    Liên Hệ Ngay
                  </Link>
                  <Link href="#pricing" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm cursor-pointer whitespace-nowrap">
                    Xem Bảng Giá
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-[#ce1c40]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}