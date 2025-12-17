import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === 'vi' ? 'Đội Ngũ | Maison Healing' : 'Our Team | Maison Healing',
    description: locale === 'vi'
      ? 'Gặp gỡ đội ngũ chuyên gia tận tâm của Maison Healing.'
      : 'Meet the dedicated team of experts at Maison Healing.',
  };
}

const team = [
  {
    id: 1,
    name: 'Nguyễn Minh Tâm',
    role: 'Giám đốc Y khoa, Người sáng lập',
    bio: 'Bác sĩ có kinh nghiệm trong lĩnh vực y học tổng hợp. Được đào tạo về y học cổ truyền tại Ấn Độ và Tây Tạng. Chuyên gia về âm thanh trị liệu và thiền định.',
    education: [
      'Tiến sĩ Y khoa - Đại học Y Hà Nội',
      'Chứng chỉ Ayurveda - Kerala, Ấn Độ',
      'Đào tạo với các nhà sư Tây Tạng - Dharamsala',
    ],
    image: '/images/team-1.jpg',
  },
  {
    id: 2,
    name: 'Trần Thanh Hà',
    role: 'Chuyên gia Yoga & Thiền định',
    bio: 'Giáo viên Yoga RYT-500 với hơn 10 năm kinh nghiệm. Chuyên về Yin Yoga, thiền định mindfulness và sound healing. Người hướng dẫn các khóa retreat định kỳ.',
    education: [
      'RYT-500 Yoga Alliance',
      'Chứng chỉ Yin Yoga - Paul Grilley',
      'Chứng chỉ Mindfulness - UCLA',
    ],
    image: '/images/team-2.jpg',
  },
  {
    id: 3,
    name: 'Lê Hoàng Nam',
    role: 'Chuyên gia Âm thanh Trị liệu',
    bio: 'Nghệ sĩ âm thanh trị liệu được chứng nhận với 10 năm nghiên cứu về tần số chữa lành. Sáng lập viên của nhiều sự kiện sound bath tại Việt Nam.',
    education: [
      'Chứng chỉ Sound Healing - Sound Healing Academy, UK',
      'Nghiên cứu về Nada Yoga - Rishikesh, Ấn Độ',
      'Chứng chỉ Gong Master - Don Conreaux',
    ],
    image: '/images/team-3.jpg',
  },
  {
    id: 4,
    name: 'Phạm Thị Mai Anh',
    role: 'Chuyên gia Breathwork',
    bio: 'Người hướng dẫn breathwork với chuyên môn về Holotropic Breathing và Pranayama. Đã dẫn dắt hàng trăm buổi thở cho hàng nghìn người tham gia.',
    education: [
      'Chứng chỉ Holotropic Breathwork - GTT',
      'Pranayama Teacher Training - Bihar School of Yoga',
      'Chứng chỉ Trauma-Informed Breathwork',
    ],
    image: '/images/team-4.jpg',
  },
];

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/team-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">Đội Ngũ</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Những Người Đồng Hành
          </h1>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đội ngũ chuyên gia tận tâm của chúng tôi sẵn sàng đồng hành cùng bạn 
              trong hành trình chữa lành và khám phá bản thân.
            </p>
          </div>

          <div className="space-y-24">
            {team.map((member, index) => (
              <div 
                key={member.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-square max-w-md mx-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 border border-[#8b7355] translate-x-4 translate-y-4 -z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-2">
                    {member.role}
                  </p>
                  <h2 className="text-4xl font-light text-[#2c3e50] mb-6">
                    {member.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Education */}
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-[#2c3e50] mb-4">
                      Đào Tạo & Chứng Chỉ
                    </h4>
                    <ul className="space-y-2">
                      {member.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-[#8b7355] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-8">
                    <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[#8b7355] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-[#2c3e50] mb-6">
            Gia Nhập Đội Ngũ
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Chúng tôi luôn tìm kiếm những người đồng hành có cùng đam mê với sứ mệnh 
            mang lại sự chữa lành cho cộng đồng.
          </p>
          <Link href="/contact" className="btn-primary">
            Liên Hệ Ứng Tuyển
          </Link>
        </div>
      </section>
    </>
  );
}
