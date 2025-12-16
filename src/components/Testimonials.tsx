'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const t = useTranslations('testimonials');

  const testimonials = [
    { id: 1, key: 'item1', image: '/images/testimonial-1.jpg' },
    { id: 2, key: 'item2', image: '/images/testimonial-2.jpg' },
    { id: 3, key: 'item3', image: '/images/testimonial-3.jpg' },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const currentItem = testimonials[current];

  return (
    <section className="py-24 bg-[#2c3e50] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#d4af37] uppercase mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-[1px] bg-white/40 mx-auto"></div>
        </div>

        {/* Testimonial */}
        <div className="relative">
          <div className="text-center">
            {/* Quote Icon */}
            <svg className="w-16 h-16 text-[#d4af37]/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            {/* Content */}
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10 max-w-3xl mx-auto">
              &ldquo;{t(`items.${currentItem.key}.content`)}&rdquo;
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-[#d4af37]">
                <Image
                  src={currentItem.image}
                  alt={t(`items.${currentItem.key}.author`)}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-medium">{t(`items.${currentItem.key}.author`)}</h4>
              <p className="text-sm text-gray-400">{t(`items.${currentItem.key}.role`)}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2c3e50] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-[#d4af37]' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2c3e50] transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
