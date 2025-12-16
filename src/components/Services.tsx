import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Âm Thanh Trị Liệu',
    description: 'Sử dụng chuông xoay Tây Tạng, gong và các nhạc cụ thiêng liêng để tạo ra tần số chữa lành, giúp cân bằng năng lượng cơ thể.',
    duration: '60 phút',
    price: '1,500,000đ',
    image: '/images/service-sound.jpg',
  },
  {
    id: 2,
    title: 'Thiền Định',
    description: 'Các buổi thiền định hướng dẫn giúp bạn kết nối với nội tâm, giải phóng căng thẳng và tìm lại sự bình yên.',
    duration: '60 phút',
    price: '800,000đ',
    image: '/images/service-meditation.jpg',
  },
  {
    id: 3,
    title: 'Yoga Yin',
    description: 'Thực hành giữ các tư thế trong thời gian dài để mở các đường kinh mạch, cải thiện sự cân bằng cảm xúc.',
    duration: '75 phút',
    price: '600,000đ',
    image: '/images/service-yoga.jpg',
  },
  {
    id: 4,
    title: 'Breathwork',
    description: 'Kỹ thuật thở Pranayama và Holotropic giúp kiểm soát tâm trí, nâng cao năng lượng nội tại.',
    duration: '120 phút',
    price: '1,200,000đ',
    image: '/images/service-breathwork.jpg',
  },
  {
    id: 5,
    title: 'Chanting Circle',
    description: 'Thực hành tụng "Om" trong nhóm, kích thích dây thần kinh phế vị, mang lại sự thư giãn và bình an nội tại.',
    duration: '60 phút',
    price: '500,000đ',
    image: '/images/service-chanting.jpg',
  },
  {
    id: 6,
    title: 'Retreat & Workshop',
    description: 'Các khóa retreat từ 2-3 ngày tại thiên nhiên, kết hợp nhiều phương pháp chữa lành.',
    duration: '2-3 ngày',
    price: 'Liên hệ',
    image: '/images/service-retreat.jpg',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
            Dịch Vụ Của Chúng Tôi
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-6">
            Hành Trình Chữa Lành
          </h2>
          <div className="w-24 h-[1px] bg-[#8b7355] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-[#faf8f5] overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-[#2c3e50] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
                  <span className="text-gray-500">{service.duration}</span>
                  <span className="text-[#8b7355] font-medium">{service.price}</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex-1 text-center border border-[#8b7355] text-[#8b7355] py-2 text-sm tracking-widest uppercase hover:bg-[#8b7355] hover:text-white transition-colors"
                  >
                    Chi Tiết
                  </Link>
                  <Link
                    href="/booking"
                    className="flex-1 text-center bg-[#8b7355] text-white py-2 text-sm tracking-widest uppercase hover:bg-[#6d5a43] transition-colors"
                  >
                    Đặt Lịch
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center text-[#8b7355] tracking-widest text-sm uppercase hover:text-[#6d5a43] transition-colors group"
          >
            Xem Tất Cả Dịch Vụ
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
