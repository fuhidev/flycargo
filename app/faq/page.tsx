
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      question: "Thời gian vận chuyển mất bao lâu?",
      answer: "Thời gian vận chuyển tùy thuộc vào địa điểm và loại dịch vụ. Thông thường: Châu Á 5-7 ngày, Châu Âu 7-10 ngày, Bắc Mỹ 10-15 ngày. Chúng tôi có dịch vụ nhanh với thời gian rút ngắn 2-3 ngày."
    },
    {
      question: 'Chi phí vận chuyển được tính như thế nào?',
      answer: 'Chi phí được tính theo trọng lượng hoặc kích thước, tùy theo cái nào lớn hơn. Chúng tôi có 3 gói giá: Cơ bản 25.000đ/kg, Phổ biến 20.000đ/kg, Cao cấp 15.000đ/kg. Giá có thể thay đổi tùy theo quốc gia đích.'
    },
    {
      question: 'Những loại hàng nào không được phép gửi?',
      answer: 'Hàng cấm gửi bao gồm: chất lỏng, pin lithium, thực phẩm tươi sống, thuốc men, vũ khí, chất độc hại. Vui lòng liên hệ để biết danh sách chi tiết các mặt hàng cấm gửi theo từng quốc gia.'
    },
    {
      question: 'Có thể theo dõi đơn hàng như thế nào?',
      answer: 'Bạn sẽ nhận được mã tracking ngay sau khi hàng được gửi đi. Có thể theo dõi qua website, app hoặc liên hệ hotline. Chúng tôi cập nhật trạng thái đơn hàng theo thời gian thực.'
    },
    {
      question: 'Có bảo hiểm hàng hóa không?',
      answer: 'Có, chúng tôi cung cấp bảo hiểm hàng hóa với mức phí 1-2% giá trị hàng. Bảo hiểm bao gồm mất mát, hỏng hóc trong quá trình vận chuyển. Gói cao cấp đã bao gồm bảo hiểm miễn phí.'
    },
    {
      question: 'Dịch vụ mua hàng giúp hoạt động như thế nào?',
      answer: 'Bạn chỉ cần gửi link sản phẩm, chúng tôi sẽ mua hàng và gửi về cho bạn. Phí dịch vụ 5-10% giá trị đơn hàng. Chúng tôi kiểm tra chất lượng trước khi gửi và hỗ trợ đổi trả nếu cần.'
    },
    {
      question: 'Làm sao để đóng gói hàng đúng cách?',
      answer: 'Sử dụng hộp cứng, bọc bubble wrap, không để trống trong hộp. Chúng tôi cung cấp dịch vụ đóng gói chuyên nghiệp với phí 20.000-50.000đ tùy kích thước. Hướng dẫn chi tiết có trên website.'
    },
    {
      question: 'Thủ tục hải quan được xử lý như thế nào?',
      answer: 'Chúng tôi hỗ trợ làm tất cả thủ tục hải quan. Bạn cần cung cấp: hóa đơn, danh sách hàng, giấy tờ người nhận. Phí dịch vụ 100.000-200.000đ tùy độ phức tạp của đơn hàng.'
    },
    {
      question: 'Có thể gửi hàng đến tận nhà không?',
      answer: 'Có, chúng tôi có dịch vụ giao hàng tận nhà tại hầu hết các quốc gia. Phí giao hàng từ 5-20 USD tùy khu vực. Một số nơi chỉ giao đến bưu điện, bạn cần đến lấy hàng.'
    },
    {
      question: 'Chính sách hoàn tiền như thế nào?',
      answer: 'Hoàn tiền 100% nếu hàng không thể gửi do lỗi của chúng tôi. Hoàn 50% nếu khách hàng hủy đơn trước khi gửi. Không hoàn tiền nếu đã gửi đi hoặc do lỗi thông tin khách hàng cung cấp.'
    },
    {
      question: 'Có chi nhánh tại các tỉnh thành không?',
      answer: 'Chúng tôi có văn phòng tại Hà Nội, TP.HCM, Đà Nẵng. Các tỉnh khác có đại lý và điểm thu gom hàng. Có thể gửi hàng qua bưu điện hoặc chuyển phát nhanh đến kho của chúng tôi.'
    },
    {
      question: 'Làm sao để liên hệ khi có vấn đề?',
      answer: 'Hotline: 0901 234 567 (24/7), Zalo: 0901 234 567, Email: support@company.com. Chúng tôi cam kết phản hồi trong 30 phút và giải quyết vấn đề trong 24 giờ.'
    }
  ];

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#ce1c40]" style={{ fontFamily: 'var(--font-pacifico)' }}>
              logo
            </Link>
            <Link href="/" className="text-gray-600 hover:text-[#ce1c40] transition-colors">
              <i className="ri-arrow-left-line mr-2"></i>
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#ce1c40] to-[#8b1538] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Câu Hỏi Thường Gặp
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ vận chuyển
          </p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
            />
            <i className="ri-search-line absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"></i>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <i className={`ri-arrow-${openItem === index ? 'up' : 'down'}-s-line text-xl text-gray-500 flex-shrink-0`}></i>
                </button>

                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-search-line text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-500 text-lg">
                  Không tìm thấy câu hỏi phù hợp. Vui lòng thử từ khóa khác.
                </p>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Không Tìm Thấy Câu Trả Lời?
              </h2>
              <p className="text-gray-600 mb-6">
                Liên hệ với chúng tôi để được hỗ trợ trực tiếp từ đội ngũ chuyên viên
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0901234567"
                  className="bg-[#ce1c40] hover:bg-[#b01635] text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Gọi Hotline
                </a>
                <a
                  href="https://zalo.me/0901234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-message-line mr-2"></i>
                  Chat Zalo
                </a>
                <Link
                  href="/#contact"
                  className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Gửi Liên Hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Trang chủ</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Dịch vụ</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Bảng giá</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Hướng dẫn gửi hàng</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Theo dõi đơn hàng</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
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
    </div>
  );
}
