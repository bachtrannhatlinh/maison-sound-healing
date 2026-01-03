'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const t = useTranslations('nav');
  const tCourse = useTranslations('course');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const courseItems = [
    { name: tCourse('items.basic.title'), href: '/course/khoa-co-ban' },
    { name: tCourse('items.advanced.title'), href: '/course/khoa-hoc-nang-cao-chuyen-sau' },
    { name: tCourse('items.extended.title'), href: '/course/khoa-hoc-nang-cao-mo-rong' },
    { name: tCourse('items.intro.title'), href: '/course/khoa-hoc-gieo-duyen' },
  ];

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('course'), href: '/course', hasDropdown: true },
    { name: t('services'), href: '/services' },
    { name: t('team'), href: '/team' },
    { name: t('contact'), href: '/contact' },
  ];

  const switchLocale = (newLocale: 'vi' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isDropdownItemActive = (href: string) => pathname === href;

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-light tracking-widest text-[#2c3e50]">
              MAISON
            </div>
            <span className="text-xs tracking-widest text-[#8b7355] uppercase">
              Healing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setCourseDropdownOpen(true)}
                  onMouseLeave={() => setCourseDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm tracking-widest transition-colors duration-300 uppercase ${
                      isActive(item.href) ? 'text-[#8b7355] font-medium' : 'text-gray-700 hover:text-[#8b7355]'
                    }`}
                  >
                    {item.name}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${courseDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {courseDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-72 z-50">
                      <div className="bg-white shadow-lg border border-gray-100 py-2">
                        {courseItems.map((course) => (
                          <Link
                            key={course.href}
                            href={course.href}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              isDropdownItemActive(course.href) 
                                ? 'text-[#8b7355] font-medium bg-[#faf8f5]' 
                                : 'text-gray-700 hover:bg-[#faf8f5] hover:text-[#8b7355]'
                            }`}
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm tracking-widest transition-colors duration-300 uppercase ${
                    isActive(item.href) ? 'text-[#8b7355] font-medium' : 'text-gray-700 hover:text-[#8b7355]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l pl-6 ml-2">
              <button
                onClick={() => switchLocale('vi')}
                className={`text-sm ${locale === 'vi' ? 'text-[#8b7355] font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              >
                VI
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => switchLocale('en')}
                className={`text-sm ${locale === 'en' ? 'text-[#8b7355] font-medium' : 'text-gray-500 hover:text-gray-700'}`}
              >
                EN
              </button>
            </div>

            <Link href="/booking" className="btn-primary">
              {t('booking')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-2 text-sm tracking-widest uppercase ${
                        isActive(item.href) ? 'text-[#8b7355] font-medium' : 'text-gray-700 hover:text-[#8b7355]'
                      }`}
                    >
                      {item.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileCoursesOpen && (
                      <div className="pl-8 space-y-2 mt-2">
                        {courseItems.map((course) => (
                          <Link
                            key={course.href}
                            href={course.href}
                            className={`block py-2 text-sm ${
                              isDropdownItemActive(course.href) ? 'text-[#8b7355] font-medium' : 'text-gray-600 hover:text-[#8b7355]'
                            }`}
                            onClick={() => { setIsOpen(false); setMobileCoursesOpen(false); }}
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 text-sm tracking-widest uppercase ${
                      isActive(item.href) ? 'text-[#8b7355] font-medium' : 'text-gray-700 hover:text-[#8b7355]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-4 px-4 py-2">
                <button
                  onClick={() => { switchLocale('vi'); setIsOpen(false); }}
                  className={`text-sm ${locale === 'vi' ? 'text-[#8b7355] font-medium' : 'text-gray-500'}`}
                >
                  Tiếng Việt
                </button>
                <button
                  onClick={() => { switchLocale('en'); setIsOpen(false); }}
                  className={`text-sm ${locale === 'en' ? 'text-[#8b7355] font-medium' : 'text-gray-500'}`}
                >
                  English
                </button>
              </div>

              <div className="px-4 pt-2">
                <Link href="/booking" className="btn-primary block text-center">
                  {t('booking')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
