import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === 'vi' ? 'Dịch Vụ | Maison Sound Healing' : 'Services | Maison Sound Healing',
    description: locale === 'vi'
      ? 'Khám phá các dịch vụ chữa lành của chúng tôi: Âm thanh trị liệu, Thiền định, Yoga Yin, Breathwork và nhiều hơn nữa.'
      : 'Discover our healing services: Sound Healing, Meditation, Yin Yoga, Breathwork and more.',
  };
}

const services = [
  {
    id: 'sound-healing',
    title: 'Âm Thanh Trị Liệu',
    subtitle: 'Sound Healing',
    description: 'Sử dụng chuông xoay Tây Tạng, gông, trống biển, cây gậy mưa, Chuông pha lê sóng dọc và các nhạc cụ thiêng liêng để tạo ra tần số chữa lành. Âm thanh tác động trực tiếp đến hệ thần kinh, giúp cân bằng năng lượng cơ thể và mang lại sự thư giãn sâu.',
    benefits: [
      'Giảm căng thẳng và lo âu',
      'Cải thiện giấc ngủ',
      'Cân bằng các chakra',
      'Tăng cường khả năng tập trung',
      'Giải phóng cảm xúc tiêu cực',
    ],
    duration: '60 phút',
    price: '999,000đ',
    image: '/images/service-sound.jpg',
  },
  {
    id: 'meditation',
    title: 'Thiền Định',
    subtitle: 'Meditation',
    description: 'Các buổi thiền định hướng dẫn giúp bạn kết nối với nội tâm, giải phóng căng thẳng và tìm lại sự bình yên. Phù hợp cho cả người mới bắt đầu và người đã có kinh nghiệm.',
    benefits: [
      'Giảm stress và lo âu',
      'Tăng cường sự tập trung',
      'Cải thiện sức khỏe tinh thần',
      'Kết nối với bản thân',
      'Phát triển mindfulness',
    ],
    duration: '60 phút',
    price: '999,000đ',
    image: '/images/service-meditation.jpg',
  },
  {
    id: 'yin-yoga',
    title: 'Yoga Yin',
    subtitle: 'Yin Yoga',
    description: 'Thực hành giữ các tư thế trong thời gian dài (3-5 phút) để mở các đường kinh mạch trong cơ thể, cải thiện sự linh hoạt và cân bằng cảm xúc.',
    benefits: [
      'Tăng sự linh hoạt',
      'Mở các đường kinh mạch',
      'Giải phóng căng thẳng cơ bắp',
      'Cân bằng cảm xúc',
      'Kết nối thân-tâm',
    ],
    duration: '60 phút',
    price: '400,000 đ',
    image: '/images/service-yoga.jpg',
  },
  {
    id: 'breathwork',
    title: 'Breathwork',
    subtitle: 'Kỹ Thuật Thở',
    description: 'Kỹ thuật thở Pranayama và Holotropic giúp kiểm soát tâm trí, nâng cao năng lượng nội tại và mở ra những trải nghiệm tâm linh sâu sắc.',
    benefits: [
      'Kiểm soát tâm trí',
      'Tăng năng lượng',
      'Giải phóng cảm xúc',
      'Trải nghiệm tâm linh',
      'Cải thiện hệ hô hấp',
    ],
    duration: '120 phút',
    price: '1,999,000đ',
    image: '/images/service-breathwork.jpg',
  },
  {
    id: 'retreat',
    title: 'Retreat & Workshop',
    subtitle: 'Khóa Tu Tập',
    description: 'Các khóa retreat từ 2-3 ngày tại thiên nhiên, kết hợp nhiều phương pháp chữa lành để mang đến trải nghiệm chuyển hóa toàn diện.',
    benefits: [
      'Trải nghiệm chuyển hóa sâu',
      'Kết nối với thiên nhiên',
      'Cộng đồng hỗ trợ',
      'Thực hành liên tục',
      'Khám phá bản thân',
    ],
    duration: '2-3 ngày',
    price: 'Liên hệ',
    image: '/images/service-retreat.jpg',
  },
];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/services-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">Dịch Vụ</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Hành Trình Chữa Lành
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-2">
                  {service.subtitle}
                </p>
                <h2 className="text-4xl font-light text-[#2c3e50] mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-[#2c3e50] mb-4">
                    Lợi Ích
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-[#8b7355] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Duration */}
                <div className="flex items-center gap-6 mb-8 text-sm">
                  <span className="text-gray-500">
                    <span className="font-medium text-[#2c3e50]">Thời gian:</span> {service.duration}
                  </span>
                  <span className="text-gray-500">
                    <span className="font-medium text-[#2c3e50]">Giá:</span> {service.price}
                  </span>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Link href="/booking" className="btn-primary">
                    Đặt Lịch
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Tư Vấn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2c3e50] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-6">
            Không Biết Nên Bắt Đầu Từ Đâu?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn miễn phí. 
            Chúng tôi sẽ giúp bạn tìm ra phương pháp phù hợp nhất.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[#2c3e50] px-10 py-4 tracking-widest text-sm uppercase hover:bg-gray-100 transition-colors"
          >
            Tư Vấn Miễn Phí
          </Link>
        </div>
      </section>
    </>
  );
}
