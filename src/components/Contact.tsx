'use client';

import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('contact');

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
              {t('subtitle')}
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-8">
              {t('title').split(' ').slice(0, 3).join(' ')}<br />
              {t('title').split(' ').slice(3).join(' ')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              {t('description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">{t('address')}</h4>
                  <p className="text-gray-600">{t('addressValue')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">{t('phone')}</h4>
                  <p className="text-gray-600">+84 336256356</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">{t('email')}</h4>
                  <p className="text-gray-600">physiofrench@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">{t('hours')}</h4>
                  <p className="text-gray-600">{t('weekdays')}</p>
                  <p className="text-gray-600">{t('weekend')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-light text-[#2c3e50] mb-8">
              {t('form.title')}
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors"
                    placeholder={t('form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-gray-600 mb-2">
                  {t('form.service')}
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors bg-white"
                >
                  <option value="">{t('form.selectService')}</option>
                  <option value="sound-healing">Sound Healing</option>
                  <option value="meditation">Meditation</option>
                  <option value="yoga">Yin Yoga</option>
                  <option value="breathwork">Breathwork</option>
                  <option value="retreat">Retreat & Workshop</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors resize-none"
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
