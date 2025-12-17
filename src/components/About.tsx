'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const About = () => {
  const t = useTranslations('about');

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="Maison Healing"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#8b7355] -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
              {t('subtitle')}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-8 leading-tight">
              {t('title').split(' ').slice(0, 4).join(' ')}<br />
              {t('title').split(' ').slice(4).join(' ')}
            </h2>
            
            <blockquote className="border-l-2 border-[#8b7355] pl-6 my-8 italic text-xl text-gray-600">
              &ldquo;{t('quote')}&rdquo;
              <footer className="mt-2 text-sm not-italic text-[#8b7355]">
                {t('quoteAuthor')}
              </footer>
            </blockquote>

            <p className="text-gray-600 leading-relaxed mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t('paragraph2')}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-[#8b7355] tracking-widest text-sm uppercase hover:text-[#6d5a43] transition-colors group"
            >
              {t('learnMore')}
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
      </div>
    </section>
  );
};

export default About;
