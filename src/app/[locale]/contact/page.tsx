import { setRequestLocale } from 'next-intl/server';
import Contact from '@/components/Contact';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === 'vi' ? 'Liên Hệ | Maison Sound Healing' : 'Contact | Maison Sound Healing',
    description: locale === 'vi'
      ? 'Liên hệ với Maison Sound Healing để đặt lịch tư vấn hoặc đặt câu hỏi về các dịch vụ của chúng tôi.'
      : 'Contact Maison Sound Healing to schedule a consultation or ask questions about our services.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/contact-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">Liên Hệ</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Kết Nối Với Chúng Tôi
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241673789986!2d106.70142!3d10.7768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjUiTiAxMDbCsDQyJzA1LjEiRQ!5e0!3m2!1svi!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Maison Sound Healing Location"
        ></iframe>
      </section>
    </>
  );
}
