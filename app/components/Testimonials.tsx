'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Thị Hương',
      location: 'Hà Nội → Hoa Kỳ',
      message: 'Tôi đã gửi quà cho con gái ở Mỹ qua dịch vụ này. Rất hài lòng với chất lượng đóng gói và tốc độ giao hàng. Hàng đến tay con đúng thời gian và nguyên vẹn.',
      rating: 5,
      date: '2 tuần trước'
    },
    {
      id: 2,
      name: 'Trần Văn Minh',
      location: 'TP.HCM → Canada',
      message: 'Dịch vụ tuyệt vời! Tôi cần gửi gấp một số giấy tờ quan trọng cho anh trai ở Canada. Nhân viên hỗ trợ rất nhiệt tình, giải đáp mọi thắc mắc và cập nhật tình hình thường xuyên.',
      rating: 5,
      date: '1 tuần trước'
    },
    {
      id: 3,
      name: 'Phạm Thị Lan',
      location: 'Đà Nẵng → Úc',
      message: 'Lần đầu sử dụng dịch vụ, tôi khá lo lắng. Nhưng ekip đã hỗ trợ tôi từ A-Z, từ mua hàng đến đóng gói và vận chuyển. Chồng tôi ở Úc nhận được hàng rất vui.',
      rating: 5,
      date: '3 tuần trước'
    },
    {
      id: 4,
      name: 'Lê Hoàng Nam',
      location: 'Hải Phòng → Nhật Bản',
      message: 'Cảm ơn team đã giúp tôi gửi thuốc men cho mẹ ở Nhật. Dịch vụ chuyên nghiệp, giá cả hợp lý và quan trọng nhất là tin cậy được. Sẽ tiếp tục sử dụng dịch vụ.',
      rating: 5,
      date: '1 tháng trước'
    },
    {
      id: 5,
      name: 'Võ Thị Mai',
      location: 'Cần Thơ → Đức',
      message: 'Gửi đặc sản Việt Nam cho bạn bè ở Đức thông qua dịch vụ này. Hàng đến nơi vẫn tươi ngon, đóng gói rất cẩn thận. Bạn bè rất thích và khen ngợi.',
      rating: 5,
      date: '2 tháng trước'
    },
    {
      id: 6,
      name: 'Đỗ Văn Tùng',
      location: 'Hà Nội → Singapore',
      message: 'Dịch vụ đáng tin cậy! Tôi thường xuyên gửi hàng cho đối tác ở Singapore. Mỗi lần đều được hỗ trợ tận tình, giao hàng đúng hẹn, chất lượng ổn định.',
      rating: 5,
      date: '3 tháng trước'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ của chúng tôi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-xl text-gray-600"></i>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      index === currentTestimonial ? 'bg-[#ce1c40]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-xl text-gray-600"></i>
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].message}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-[#ce1c40] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonials[currentTestimonial].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#ce1c40]">500+</div>
              <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#ce1c40]">4.9/5</div>
              <div className="text-sm text-gray-600">Đánh giá trung bình</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#ce1c40]">100%</div>
              <div className="text-sm text-gray-600">Giao hàng thành công</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}