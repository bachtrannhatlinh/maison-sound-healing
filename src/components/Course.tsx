'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const Course = () => {
  const t = useTranslations('course');

  const courses = [
    {
      id: 1,
      key: 'basic',
      image: '/images/course-basic.jpg',
      level: 'beginner',
      slug: 'khoa-co-ban',
    },
    {
      id: 2,
      key: 'advanced',
      image: '/images/course-advanced.jpg',
      level: 'intermediate',
      slug: 'khoa-hoc-nang-cao-chuyen-sau',
    },
    {
      id: 3,
      key: 'extended',
      image: '/images/course-extended.jpg',
      level: 'advanced',
      slug: 'khoa-hoc-nang-cao-mo-rong',
    },
    {
      id: 4,
      key: 'intro',
      image: '/images/course-intro.jpg',
      level: 'all',
      slug: 'khoa-hoc-gieo-duyen',
    },
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-[1px] bg-[#8b7355] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={course.image}
                  alt={t(`items.${course.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#8b7355] px-3 py-1 text-xs tracking-widest uppercase">
                    {t(`levels.${course.level}`)}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-2xl font-light text-white mb-1">
                    {t(`items.${course.key}.title`)}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t(`items.${course.key}.subtitle`)}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t(`items.${course.key}.description`)}
                </p>
                
                <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-500">{t(`items.${course.key}.duration`)}</span>
                  </div>
                  <span className="text-[#8b7355] font-medium text-lg">{t(`items.${course.key}.price`)}</span>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/course/${course.slug}`}
                    className="flex-1 text-center border border-[#8b7355] text-[#8b7355] py-3 text-sm tracking-widest uppercase hover:bg-[#8b7355] hover:text-white transition-colors"
                  >
                    {t('detail')}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center bg-[#8b7355] text-white py-3 text-sm tracking-widest uppercase hover:bg-[#6d5a43] transition-colors"
                  >
                    {t('register')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Section */}
        <div className="mt-16 bg-white p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-[#2c3e50] mb-6">
              {t('discounts.title')}
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3 text-left">
                <svg className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>{t('discounts.early')}</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <svg className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>{t('discounts.special')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/course"
            className="inline-flex items-center text-[#8b7355] tracking-widest text-sm uppercase hover:text-[#6d5a43] transition-colors group"
          >
            {t('viewAll')}
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

export default Course;
