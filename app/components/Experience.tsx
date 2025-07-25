'use client';

export default function Experience() {
  const stats = [
    {
      number: '10+',
      label: 'Năm Kinh Nghiệm',
      description: 'Hoạt động trong lĩnh vực vận chuyển'
    },
    {
      number: '500+',
      label: 'Lượt Vận Chuyển',
      description: 'Thành công đến khắp thế giới'
    },
    {
      number: '100%',
      label: 'Uy Tín',
      description: 'Đảm bảo hàng đến đúng người'
    },
    {
      number: '24/7',
      label: 'Hỗ Trợ',
      description: 'Đến khi hàng đến tay người nhận'
    }
  ];

  const advantages = [
    {
      icon: 'ri-shield-check-line',
      title: 'Uy Tín & Tin Cậy',
      description: 'Với hơn 10 năm kinh nghiệm, chúng tôi cam kết đảm bảo hàng hóa của bạn được giao đến đúng người, đúng nơi.'
    },
    {
      icon: 'ri-time-line',
      title: 'Xử Lý Nhanh Chóng',
      description: 'Đội ngũ chuyên nghiệp xử lý đơn hàng nhanh chóng, giúp bạn tiết kiệm thời gian và chi phí.'
    },
    {
      icon: 'ri-global-line',
      title: 'Phạm Vi Toàn Cầu',
      description: 'Vận chuyển đến khắp nơi trên thế giới với mạng lưới đối tác rộng khắp và đáng tin cậy.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Hỗ Trợ Tận Tâm',
      description: 'Hỗ trợ khách hàng từ lúc nhận hàng đến khi hàng đến tay người nhận, không bỏ sót bất kỳ chi tiết nào.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kinh Nghiệm & Uy Tín
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hơn 10 năm hoạt động với 500+ lượt vận chuyển thành công
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#ce1c40] mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20logistics%20team%20working%20in%20modern%20warehouse%20with%20international%20shipping%20containers%2C%20experienced%20staff%20handling%20packages%20carefully%2C%20high-tech%20logistics%20center%20with%20global%20shipping%20operations&width=600&height=500&seq=experience1&orientation=landscape"
              alt="Kinh nghiệm vận chuyển"
              className="rounded-xl shadow-lg object-cover w-full h-96"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Tại Sao Chọn Chúng Tôi?
            </h3>
            
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ce1c40]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${advantage.icon} text-xl text-[#ce1c40]`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}