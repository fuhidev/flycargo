'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    weight: '',
    description: '',
    service: 'shipping'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      destination: '',
      weight: '',
      description: '',
      service: 'shipping'
    });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Liên Hệ Ngay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Để lại thông tin, chúng tôi sẽ tư vấn và báo giá chi tiết cho bạn
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Gửi Yêu Cầu
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm"
                    placeholder="Nhập email (không bắt buộc)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dịch vụ cần dùng *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm pr-8"
                    >
                      <option value="shipping">Vận chuyển hàng hóa</option>
                      <option value="buying">Mua hàng giúp</option>
                      <option value="packing">Đóng gói chuyên nghiệp</option>
                      <option value="all">Combo đầy đủ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quốc gia đến *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm"
                      placeholder="Ví dụ: Hoa Kỳ, Nhật Bản..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Khối lượng ước tính
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm"
                    placeholder="Ví dụ: 2kg, 1 thùng hàng..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả hàng hóa
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ce1c40] focus:border-transparent text-sm resize-none"
                    placeholder="Mô tả chi tiết hàng hóa cần gửi, yêu cầu đặc biệt..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.description.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ce1c40] hover:bg-[#b01635] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
                </button>
              </form>

              {showSuccess && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mr-3"></i>
                    <div>
                      <p className="text-green-800 font-medium">
                        Gửi yêu cầu thành công!
                      </p>
                      <p className="text-green-600 text-sm">
                        Chúng tôi sẽ liên hệ với bạn trong vòng 30 phút.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#ce1c40] to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Thông Tin Liên Hệ
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-fill text-xl"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Hotline</p>
                      <p className="text-lg font-semibold">0901 234 567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-message-fill text-xl"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Zalo</p>
                      <p className="text-lg font-semibold">0901 234 567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-time-fill text-xl"></i>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Giờ làm việc</p>
                      <p className="text-lg font-semibold">24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Lợi Ích Khi Chọn Chúng Tôi
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-500 text-lg"></i>
                    <span className="text-gray-700">Tư vấn miễn phí 24/7</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-500 text-lg"></i>
                    <span className="text-gray-700">Báo giá chi tiết trong 30 phút</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-500 text-lg"></i>
                    <span className="text-gray-700">Hỗ trợ đến khi hàng đến tay</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-500 text-lg"></i>
                    <span className="text-gray-700">Cam kết giá tốt nhất</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Quy Trình Đơn Giản
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#ce1c40] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <span className="text-gray-700">Liên hệ và tư vấn</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#ce1c40] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <span className="text-gray-700">Nhận hàng và đóng gói</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#ce1c40] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <span className="text-gray-700">Vận chuyển và theo dõi</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#ce1c40] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <span className="text-gray-700">Giao hàng thành công</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}