
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Thị Mai',
      location: 'Hà Nội',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20woman%20smiling%20warmly%2C%20business%20portrait%2C%20clean%20background%2C%20friendly%20expression%2C%20modern%20professional%20headshot&width=80&height=80&seq=avatar1&orientation=squarish',
      message: 'Tôi đã sử dụng dịch vụ gửi hàng cho con gái đang học ở Úc. Hàng đến nơi nhanh chóng và an toàn. Nhân viên tư vấn rất nhiệt tình và chuyên nghiệp.',
      rating: 5,
      date: '2 tuần trước'
    },
    {
      id: 2,
      name: 'Trần Văn Hùng',
      location: 'TP.HCM',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20man%20smiling%20confidently%2C%20business%20portrait%2C%20clean%20background%2C%20friendly%20expression%2C%20modern%20professional%20headshot&width=80&height=80&seq=avatar2&orientation=squarish',
      message: 'Dịch vụ mua hàng giúp rất tiện lợi. Tôi đã mua được nhiều sản phẩm từ Nhật Bản mà không cần phải tự đi. Giá cả hợp lý và chất lượng tốt.',
      rating: 5,
      date: '1 tuần trước'
    },
    {
      id: 3,
      name: 'Phạm Thị Lan',
      location: 'Đà Nẵng',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20woman%20smiling%20warmly%2C%20business%20portrait%2C%20clean%20background%2C%20friendly%20expression%2C%20modern%20professional%20headshot&width=80&height=80&seq=avatar3&orientation=squarish',
      message: 'Tôi rất hài lòng với dịch vụ đóng gói. Hàng được đóng gói cẩn thận, không bị hỏng hóc gì trong quá trình vận chuyển. Sẽ tiếp tục sử dụng dịch vụ.',
      rating: 5,
      date: '3 tuần trước'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
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
