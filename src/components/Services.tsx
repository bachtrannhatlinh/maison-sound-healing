'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const Services = () => {
  const t = useTranslations('services');

  const services = [
    {
      id: 1,
      key: 'soundHealing',
      image: '/images/service-sound.jpg',
    },
    {
      id: 2,
      key: 'meditation',
      image: '/images/service-meditation.jpg',
    },
    {
      id: 3,
      key: 'yoga',
      image: '/images/service-yoga.jpg',
    },
    {
      id: 4,
      key: 'breathwork',
      image: '/images/service-breathwork.jpg',
    },
    {
      id: 5,
      key: 'chanting',
      image: '/images/service-chanting.jpg',
    },
    {
      id: 6,
      key: 'retreat',
      image: '/images/service-retreat.jpg',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-6">
            {t('title')}
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
                  alt={t(`items.${service.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-[#2c3e50] mb-3">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t(`items.${service.key}.description`)}
                </p>
                
                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4">
                  <span className="text-gray-500">{t(`items.${service.key}.duration`)}</span>
                  <span className="text-[#8b7355] font-medium">{t(`items.${service.key}.price`)}</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/services#${service.key}`}
                    className="flex-1 text-center border border-[#8b7355] text-[#8b7355] py-2 text-sm tracking-widest uppercase hover:bg-[#8b7355] hover:text-white transition-colors"
                  >
                    {t('detail')}
                  </Link>
                  <Link
                    href="/booking"
                    className="flex-1 text-center bg-[#8b7355] text-white py-2 text-sm tracking-widest uppercase hover:bg-[#6d5a43] transition-colors"
                  >
                    {t('book')}
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

export default Services;
