
'use client';

import Link from 'next/link';

export default function PricingTable() {
  const pricingData = [
    {
      weight: 'Dưới 0.5kg',
      dimensions: '20x15x10cm',
      america: '180,000₫',
      europe: '220,000₫',
      asia: '120,000₫',
      oceania: '250,000₫',
      popular: false
    },
    {
      weight: '0.5kg - 1kg',
      dimensions: '25x20x15cm',
      america: '280,000₫',
      europe: '320,000₫',
      asia: '200,000₫',
      oceania: '350,000₫',
      popular: true
    },
    {
      weight: '1kg - 2kg',
      dimensions: '30x25x20cm',
      america: '450,000₫',
      europe: '490,000₫',
      asia: '320,000₫',
      oceania: '520,000₫',
      popular: false
    },
    {
      weight: '2kg - 3kg',
      dimensions: '35x30x25cm',
      america: '680,000₫',
      europe: '720,000₫',
      asia: '480,000₫',
      oceania: '750,000₫',
      popular: false
    },
    {
      weight: '3kg - 5kg',
      dimensions: '40x35x30cm',
      america: '950,000₫',
      europe: '1,050,000₫',
      asia: '680,000₫',
      oceania: '1,150,000₫',
      popular: false
    },
    {
      weight: 'Trên 5kg',
      dimensions: 'Tùy chỉnh',
      america: 'Liên hệ',
      europe: 'Liên hệ',
      asia: 'Liên hệ',
      oceania: 'Liên hệ',
      popular: false
    }
  ];

  const additionalServices = [
    {
      service: 'Mua hàng giúp',
      price: '50,000₫ - 100,000₫',
      description: 'Tùy theo độ phức tạp của đơn hàng'
    },
    {
      service: 'Đóng gói đặc biệt',
      price: '30,000₫ - 80,000₫',
      description: 'Cho hàng dễ vỡ, thực phẩm'
    },
    {
      service: 'Bảo hiểm hàng hóa',
      price: '2% - 5% giá trị',
      description: 'Bảo hiểm toàn diện'
    },
    {
      service: 'Giao hàng nhanh',
      price: '+30% phí cơ bản',
      description: 'Giảm 2-3 ngày giao hàng'
    }
  ];

  const pricingPlans = [
    {
      name: 'Gói Cơ Bản',
      price: '25.000đ',
      unit: '/kg',
      description: 'Dành cho khách hàng gửi ít hàng',
      features: [
        'Vận chuyển tiêu chuẩn',
        'Theo dõi đơn hàng',
        'Hỗ trợ email',
        'Thời gian giao hàng 7-10 ngày'
      ],
      popular: false
    },
    {
      name: 'Gói Phổ Biến',
      price: '20.000đ',
      unit: '/kg',
      description: 'Phù hợp cho khách hàng thường xuyên',
      features: [
        'Vận chuyển nhanh',
        'Theo dõi đơn hàng',
        'Hỗ trợ 24/7',
        'Thời gian giao hàng 5-7 ngày',
        'Đóng gói miễn phí'
      ],
      popular: true
    },
    {
      name: 'Gói Cao Cấp',
      price: '15.000đ',
      unit: '/kg',
      description: 'Dành cho khách hàng VIP',
      features: [
        'Vận chuyển siêu nhanh',
        'Theo dõi đơn hàng',
        'Hỗ trợ 24/7',
        'Thời gian giao hàng 3-5 ngày',
        'Đóng gói miễn phí',
        'Bảo hiểm hàng hóa'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bảng Giá Dịch Vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giá cả minh bạch, không phát sinh chi phí ẩn
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Pricing Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#ce1c40] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Khối Lượng</th>
                    <th className="px-6 py-4 text-left font-semibold">Kích Thước</th>
                    <th className="px-6 py-4 text-center font-semibold">🇺🇸 Bắc Mỹ</th>
                    <th className="px-6 py-4 text-center font-semibold">🇪🇺 Châu Âu</th>
                    <th className="px-6 py-4 text-center font-semibold">🇯🇵 Châu Á</th>
                    <th className="px-6 py-4 text-center font-semibold">🇦🇺 Châu Úc</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${
                        row.popular ? 'bg-red-50' : 'hover:bg-gray-50'
                      } transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="font-semibold text-gray-900">{row.weight}</span>
                          {row.popular && (
                            <span className="ml-2 px-2 py-1 bg-[#ce1c40] text-white text-xs rounded-full">
                              Phổ biến
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.dimensions}</td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.america}</td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.europe}</td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.asia}</td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.oceania}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Dịch Vụ Thêm
              </h3>
              <div className="space-y-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{service.service}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="ml-4 font-semibold text-[#ce1c40]">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Lưu Ý Quan Trọng
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-[#ce1c40] text-xl mt-1"></i>
                  <div>
                    <p className="text-gray-700">
                      <strong>Thời gian giao hàng:</strong> 7-14 ngày tùy theo địa điểm
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#ce1c40] text-xl mt-1"></i>
                  <div>
                    <p className="text-gray-700">
                      <strong>Bảo hiểm:</strong> Miễn phí bảo hiểm cơ bản đến 1 triệu VNĐ
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-eye-line text-[#ce1c40] text-xl mt-1"></i>
                  <div>
                    <p className="text-gray-700">
                      <strong>Theo dõi:</strong> Cập nhật tình trạng đơn hàng 24/7
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-customer-service-line text-[#ce1c40] text-xl mt-1"></i>
                  <div>
                    <p className="text-gray-700">
                      <strong>Hỗ trợ:</strong> Đội ngũ hỗ trợ tiếng Việt 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#ce1c40] to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ưu Đãi Đặc Biệt
              </h3>
              <p className="text-lg mb-6">
                Giảm 10% cho đơn hàng đầu tiên • Miễn phí đóng gói cho đơn hàng trên 2kg
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#contact" className="bg-white text-[#ce1c40] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                  Nhận Ưu Đãi Ngay
                </Link>
                <Link href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#ce1c40] transition-colors cursor-pointer whitespace-nowrap">
                  Tư Vấn Miễn Phí
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
