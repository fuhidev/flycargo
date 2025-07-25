'use client';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=happy%20vietnamese%20woman%20holding%20package%20delivery%20box%20with%20smile%2C%20professional%20photo%20review%20style%2C%20natural%20lighting%2C%20authentic%20customer%20satisfaction%20moment%2C%20Asian%20woman%20with%20delivered%20package&width=300&height=300&seq=review1&orientation=squarish',
      name: 'Chị Nguyễn Hồng',
      location: 'Hà Nội',
      review: 'Dịch vụ tuyệt vời! Gửi quà cho con ở Mỹ rất nhanh và an toàn.',
      rating: 5
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=satisfied%20vietnamese%20businessman%20showing%20thumbs%20up%20with%20international%20shipping%20package%2C%20professional%20customer%20review%20photo%2C%20office%20background%2C%20happy%20expression%20with%20delivered%20goods&width=300&height=300&seq=review2&orientation=squarish',
      name: 'Anh Trần Minh',
      location: 'TP.HCM',
      review: 'Nhân viên hỗ trợ rất tận tình, giải đáp mọi thắc mắc.',
      rating: 5
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=happy%20vietnamese%20mother%20receiving%20package%20delivery%20from%20international%20shipping%2C%20warm%20family%20moment%2C%20home%20setting%2C%20grateful%20expression%20with%20carefully%20packaged%20items&width=300&height=300&seq=review3&orientation=squarish',
      name: 'Cô Phạm Lan',
      location: 'Đà Nẵng',
      review: 'Lần đầu sử dụng nhưng rất hài lòng. Sẽ tiếp tục ủng hộ.',
      rating: 5
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=professional%20vietnamese%20man%20in%20business%20attire%20holding%20international%20shipping%20documents%2C%20satisfied%20customer%20review%20photo%2C%20modern%20office%20background%2C%20confident%20expression&width=300&height=300&seq=review4&orientation=squarish',
      name: 'Anh Lê Nam',
      location: 'Hải Phòng',
      review: 'Chuyên nghiệp, giá cả hợp lý và đáng tin cậy.',
      rating: 5
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=smiling%20vietnamese%20woman%20with%20traditional%20gifts%20package%20for%20overseas%20delivery%2C%20cultural%20items%20shipping%2C%20happy%20customer%20review%20moment%2C%20warm%20domestic%20setting&width=300&height=300&seq=review5&orientation=squarish',
      name: 'Chị Võ Mai',
      location: 'Cần Thơ',
      review: 'Gửi đặc sản Việt Nam cho bạn bè ở nước ngoài rất tiện.',
      rating: 5
    },
    {
      id: 6,
      image: 'https://readdy.ai/api/search-image?query=young%20vietnamese%20entrepreneur%20showing%20successful%20package%20delivery%2C%20modern%20business%20setting%2C%20international%20shipping%20success%20story%2C%20professional%20customer%20testimonial%20photo&width=300&height=300&seq=review6&orientation=squarish',
      name: 'Anh Đỗ Tùng',
      location: 'Hà Nội',
      review: 'Thường xuyên sử dụng dịch vụ, chất lượng ổn định.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hình Ảnh Review Từ Khách Hàng
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những khoảnh khắc hài lòng của khách hàng khi sử dụng dịch vụ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={review.image}
                  alt={`Review từ ${review.name}`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.review}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#ce1c40] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.name.split(' ')[1]?.charAt(0) || review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
            <i className="ri-checkbox-circle-fill text-green-500 text-lg"></i>
            <span className="text-green-700 font-medium">
              Tất cả hình ảnh đều được khách hàng đồng ý chia sẻ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}