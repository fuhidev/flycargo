'use client';

import { useState, useEffect } from 'react';

export default function GlobalMap() {
  const [currentPath, setCurrentPath] = useState(0);
  
  const destinations = [
    { name: 'Hoa Kỳ', position: { top: '35%', left: '20%' }, flag: '🇺🇸' },
    { name: 'Canada', position: { top: '25%', left: '18%' }, flag: '🇨🇦' },
    { name: 'Úc', position: { top: '70%', left: '85%' }, flag: '🇦🇺' },
    { name: 'Nhật Bản', position: { top: '40%', left: '85%' }, flag: '🇯🇵' },
    { name: 'Hàn Quốc', position: { top: '38%', left: '83%' }, flag: '🇰🇷' },
    { name: 'Đức', position: { top: '30%', left: '55%' }, flag: '🇩🇪' },
    { name: 'Pháp', position: { top: '32%', left: '52%' }, flag: '🇫🇷' },
    { name: 'Anh', position: { top: '28%', left: '50%' }, flag: '🇬🇧' },
    { name: 'Singapore', position: { top: '58%', left: '75%' }, flag: '🇸🇬' },
    { name: 'Thái Lan', position: { top: '52%', left: '72%' }, flag: '🇹🇭' }
  ];

  const vietnamPosition = { top: '50%', left: '70%' };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % destinations.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vận Chuyển Toàn Cầu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Từ Việt Nam đến khắp nơi trên thế giới - Chúng tôi kết nối bạn với thế giới
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div 
            className="relative w-full h-96 bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=world%20map%20with%20clean%20modern%20design%2C%20light%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20style%2C%20continents%20clearly%20visible%2C%20suitable%20for%20logistics%20and%20shipping%20visualization&width=1200&height=600&seq=worldmap1&orientation=landscape')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40"></div>
            
            {/* Vietnam marker */}
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={vietnamPosition}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-[#ce1c40] rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#ce1c40] text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  🇻🇳 Việt Nam
                </div>
              </div>
            </div>

            {/* Destination markers */}
            {destinations.map((dest, index) => (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${
                  index === currentPath ? 'scale-125' : 'scale-100'
                }`}
                style={dest.position}
              >
                <div className="relative">
                  <div className={`w-5 h-5 rounded-full border-3 border-white shadow-lg transition-colors duration-500 ${
                    index === currentPath ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                    {dest.flag} {dest.name}
                  </div>
                </div>
              </div>
            ))}

            {/* Animated flight path */}
            <svg className="absolute inset-0 w-full h-full z-5">
              <defs>
                <path
                  id={`flight-path-${currentPath}`}
                  d={`M ${vietnamPosition.left} ${vietnamPosition.top} Q ${
                    (parseFloat(vietnamPosition.left) + parseFloat(destinations[currentPath].position.left.replace('%', ''))) / 2
                  }% ${
                    Math.min(parseFloat(vietnamPosition.top.replace('%', '')), parseFloat(destinations[currentPath].position.top.replace('%', ''))) - 10
                  }% ${destinations[currentPath].position.left} ${destinations[currentPath].position.top}`}
                />
              </defs>
              <path
                stroke="#ce1c40"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                d={`M ${vietnamPosition.left} ${vietnamPosition.top} Q ${
                  (parseFloat(vietnamPosition.left.replace('%', '')) + parseFloat(destinations[currentPath].position.left.replace('%', ''))) / 2
                }% ${
                  Math.min(parseFloat(vietnamPosition.top.replace('%', '')), parseFloat(destinations[currentPath].position.top.replace('%', ''))) - 10
                }% ${destinations[currentPath].position.left} ${destinations[currentPath].position.top}`}
                className="animate-pulse"
              />
            </svg>

            {/* Flying airplane */}
            <div className="absolute z-30">
              <div 
                className="w-8 h-8 flex items-center justify-center text-2xl transition-all duration-2000 ease-in-out"
                style={{
                  top: `${(parseFloat(vietnamPosition.top.replace('%', '')) + parseFloat(destinations[currentPath].position.top.replace('%', ''))) / 2 - 5}%`,
                  left: `${(parseFloat(vietnamPosition.left.replace('%', '')) + parseFloat(destinations[currentPath].position.left.replace('%', ''))) / 2}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                ✈️
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-white px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#ce1c40] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Việt Nam</span>
              </div>
              <i className="ri-arrow-right-line text-gray-400"></i>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  {destinations[currentPath].flag} {destinations[currentPath].name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}