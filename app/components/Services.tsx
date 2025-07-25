'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-plane-line',
      title: 'Vận Chuyển Quốc Tế',
      description: 'Dịch vụ vận chuyển hàng hóa đến khắp nơi trên thế giới với tốc độ nhanh chóng và an toàn.',
      features: ['Giao hàng toàn cầu', 'Theo dõi realtime', 'Bảo hiểm hàng hóa']
    },
    {
      icon: 'ri-shopping-cart-2-line',
      title: 'Mua Hàng Giúp',
      description: 'Chúng tôi hỗ trợ mua hàng giúp bạn từ các website, cửa hàng trong nước và quốc tế.',
      features: ['Mua hàng online', 'Kiểm tra chất lượng', 'Tư vấn sản phẩm']
    },
    {
      icon: 'ri-box-3-line',
      title: 'Đóng Gói Chuyên Nghiệp',
      description: 'Dịch vụ đóng gói hàng hóa chuyên nghiệp đảm bảo an toàn trong quá trình vận chuyển.',
      features: ['Đóng gói an toàn', 'Chống va đập', 'Chống ẩm mốc']
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ hỗ trợ khách hàng tận tình, sẵn sàng giải đáp mọi thắc mắc của bạn.',
      features: ['Hỗ trợ liên tục', 'Tư vấn miễn phí', 'Theo dõi đơn hàng']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải pháp vận chuyển toàn diện từ A đến Z, đáp ứng mọi nhu cầu gửi hàng của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#ce1c40]/10 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-[#ce1c40]`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <i className="ri-check-line text-[#ce1c40] mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}