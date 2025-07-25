'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              logo
            </h3>
            <p className="text-gray-400 mb-4">
              Dịch vụ vận chuyển hàng hóa quốc tế uy tín với hơn 10 năm kinh nghiệm.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Vận chuyển quốc tế</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mua hàng giúp</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Đóng gói chuyên nghiệp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hỗ trợ 24/7</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn gửi hàng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Theo dõi đơn hàng</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hiểm</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                0901 234 567
              </p>
              <p className="flex items-center">
                <i className="ri-message-line mr-2"></i>
                Zalo: 0901 234 567
              </p>
              <p className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                Hỗ trợ 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dịch vụ vận chuyển hàng hóa quốc tế. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}

