import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === 'vi' ? 'Khoá Học | Maison Healing' : 'Courses | Maison Healing',
    description: locale === 'vi'
      ? 'Khám phá các khóa học về chuông xoay và phương pháp trị liệu bằng âm thanh Himalaya.'
      : 'Discover courses on singing bowls and Himalayan sound healing methods.',
  };
}

const courses = [
  {
    id: 'basic',
    slug: 'khoa-co-ban',
    level: 'beginner',
    image: '/images/course-basic.jpg',
    curriculum: [
      'Giới thiệu về chuông xoay Himalaya',
      'Lịch sử và nguồn gốc của chuông xoay',
      'Cách chọn chuông xoay phù hợp',
      'Kỹ thuật cơ bản: đánh chuông và quay chuông',
      'Các bài chuông cơ bản cho bản thân',
      'Cách chữa lành cho người thân',
      'Hỗ trợ các vấn đề thường gặp',
    ],
  },
  {
    id: 'advanced',
    slug: 'khoa-hoc-nang-cao-chuyen-sau',
    level: 'intermediate',
    image: '/images/course-advanced.jpg',
    curriculum: [
      'Ôn tập và nâng cao kỹ thuật cơ bản',
      'Hơn 10 bài chuông chuyên sâu',
      'Kỹ thuật Sound Bath cho nhóm',
      'Cách sắp xếp buổi trị liệu',
      'Điều phối các hoạt động cộng đồng',
      'Kiến thức nâng cao về tần số và năng lượng',
      'Thực hành với khách hàng thực tế',
    ],
  },
  {
    id: 'extended',
    slug: 'khoa-hoc-nang-cao-mo-rong',
    level: 'advanced',
    image: '/images/course-extended.jpg',
    curriculum: [
      'Các kỹ thuật nâng cao',
      'Sử dụng Gong, Tingsha, và các nhạc cụ khác',
      'Kết hợp chuông xoay với thiền định',
      'Kỹ năng điều phối Sound Healing workshop',
      'Xây dựng thương hiệu cá nhân',
      'Tư duy làm nghề và đạo đức nghề nghiệp',
      'Thực hành tổ chức sự kiện',
    ],
  },
  {
    id: 'intro',
    slug: 'khoa-hoc-gieo-duyen',
    level: 'all',
    image: '/images/course-intro.jpg',
    curriculum: [
      'Kỹ thuật dùng chuông cơ bản',
      'Tìm hiểu về 3 phương pháp chuông xoay',
      'Tác dụng của chuông xoay đối với sức khỏe',
      'Trải nghiệm Sound Bath thư giãn',
      'Q&A và chia sẻ kinh nghiệm',
    ],
  },
];

export default async function CoursePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('course');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/course-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">{t('subtitle')}</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              id={course.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={course.image}
                  alt={t(`items.${course.id}.title`)}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#8b7355] px-4 py-2 text-xs tracking-widest uppercase">
                    {t(`levels.${course.level}`)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-2">
                  {t(`items.${course.id}.subtitle`)}
                </p>
                <h2 className="text-4xl font-light text-[#2c3e50] mb-6">
                  {t(`items.${course.id}.title`)}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t(`items.${course.id}.description`)}
                </p>

                {/* Curriculum */}
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-[#2c3e50] mb-4">
                    {t('curriculum')}
                  </h4>
                  <ul className="space-y-2">
                    {course.curriculum.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-[#8b7355] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Duration */}
                <div className="flex items-center gap-6 mb-8 text-sm border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">
                      <span className="font-medium text-[#2c3e50]">{t('duration')}:</span> {t(`items.${course.id}.duration`)}
                    </span>
                  </div>
                  <span className="text-[#8b7355] font-medium text-lg">
                    {t(`items.${course.id}.price`)}
                  </span>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Link 
                    href={`/course/${course.slug}`}
                    className="btn-secondary"
                  >
                    {t('detail')}
                  </Link>
                  <Link href="/contact" className="btn-primary">
                    {t('register')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-[#2c3e50] mb-8">
            {t('discounts.title')}
          </h2>
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-4 bg-[#faf8f5] p-6">
              <div className="w-12 h-12 bg-[#8b7355] text-white flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-light">10%</span>
              </div>
              <p className="text-gray-600">{t('discounts.early')}</p>
            </div>
            <div className="flex items-start gap-4 bg-[#faf8f5] p-6">
              <div className="w-12 h-12 bg-[#8b7355] text-white flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-light">20%</span>
              </div>
              <p className="text-gray-600">{t('discounts.special')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2c3e50] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-light mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[#2c3e50] px-10 py-4 tracking-widest text-sm uppercase hover:bg-gray-100 transition-colors"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
