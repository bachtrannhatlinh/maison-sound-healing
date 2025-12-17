import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === 'vi' ? 'Giới Thiệu | Maison Healing' : 'About Us | Maison Healing',
    description: locale === 'vi' 
      ? 'Tìm hiểu về Maison Healing - Trung tâm chữa lành toàn diện kết hợp trí tuệ cổ đại với y học hiện đại.'
      : 'Learn about Maison Healing - A holistic healing center combining ancient wisdom with modern medicine.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/about-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">Về Chúng Tôi</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Câu Chuyện Của Chúng Tôi
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
              Sứ Mệnh
            </p>
            <h2 className="text-4xl font-light text-[#2c3e50] mb-8">
              Kết Hợp Trí Tuệ Cổ Đại Với Y Học Hiện Đại
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="leading-relaxed mb-6">
              Maison Healing được thành lập với niềm tin rằng sự chữa lành thực sự 
              đến từ sự kết hợp hài hòa giữa trí tuệ cổ đại và khoa học hiện đại. Chúng tôi 
              nhận ra rằng trong khi y học phương Tây đóng vai trò quan trọng trong việc 
              kiểm soát bệnh tật, những nguyên nhân gốc rễ của các triệu chứng thường 
              không được giải quyết triệt để.
            </p>
            <p className="leading-relaxed mb-6">
              Bác sĩ có kinh nghiệm trong lĩnh vực y học và chữa lành, đội ngũ của 
              chúng tôi đã được đào tạo bởi những bậc thầy từ khắp nơi trên thế giới - 
              từ các nhà sư Tây Tạng đến các guru Ấn Độ, từ các pháp sư bản địa đến 
              các nhà khoa học hàng đầu.
            </p>
            <p className="leading-relaxed">
              Chúng tôi tin rằng mỗi người đều có khả năng tự chữa lành. Vai trò của 
              chúng tôi là tạo ra không gian an toàn và cung cấp các công cụ để bạn 
              kết nối lại với sức mạnh nội tại của chính mình.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
              Giá Trị Cốt Lõi
            </p>
            <h2 className="text-4xl font-light text-[#2c3e50]">
              Những Gì Định Hình Chúng Tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Toàn Diện',
                description: 'Chúng tôi nhìn nhận con người như một tổng thể - thể chất, tinh thần và tâm linh đều được quan tâm như nhau.',
                icon: '🌿',
              },
              {
                title: 'Chính Trực',
                description: 'Mọi phương pháp chúng tôi áp dụng đều được nghiên cứu kỹ lưỡng và thực hành với sự tôn trọng tuyệt đối.',
                icon: '💫',
              },
              {
                title: 'Tận Tâm',
                description: 'Mỗi khách hàng là duy nhất, và hành trình chữa lành của họ được thiết kế riêng để phù hợp với nhu cầu cá nhân.',
                icon: '❤️',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-light text-[#2c3e50] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#2c3e50] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] text-[#d4af37] uppercase mb-4">
            Triết Lý
          </p>
          <blockquote className="text-3xl md:text-4xl font-light italic leading-relaxed mb-8">
            &ldquo;Tâm hồn luôn biết cách để chữa lành chính nó. 
            Thách thức là làm sao để tĩnh lặng tâm trí.&rdquo;
          </blockquote>
          <p className="text-gray-300">— Caroline Myss</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f5f1eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-[#2c3e50] mb-6">
            Sẵn Sàng Bắt Đầu Hành Trình?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Hãy để chúng tôi đồng hành cùng bạn trong hành trình khám phá 
            và chữa lành bản thân.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              Xem Dịch Vụ
            </Link>
            <Link href="/contact" className="btn-secondary">
              Liên Hệ Ngay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
