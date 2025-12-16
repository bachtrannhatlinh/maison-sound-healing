import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Chào mừng đến với
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
          Maison Sound Healing
        </h1>
        <div className="w-24 h-[1px] bg-white/60 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl font-light tracking-wide mb-4">
          Kết Hợp Trí Tuệ Cổ Đại Với Y Học Hiện Đại
        </p>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Trải nghiệm âm thanh trị liệu, thiền định, yoga và các phương pháp 
          chữa lành toàn diện cho tâm hồn và cơ thể
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-white text-gray-900 px-10 py-4 tracking-widest text-sm uppercase hover:bg-gray-100 transition-all duration-300"
          >
            Khám Phá Dịch Vụ
          </Link>
          <Link
            href="/booking"
            className="border border-white text-white px-10 py-4 tracking-widest text-sm uppercase hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Đặt Lịch Ngay
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
