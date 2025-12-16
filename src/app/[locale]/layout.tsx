import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale } from '@/i18n/config';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as { title: string; description: string };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [
      "sound healing",
      "âm thanh trị liệu",
      "thiền định",
      "meditation",
      "yoga",
      "yin yoga",
      "breathwork",
      "chữa lành",
      "healing center",
    ],
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: "https://maisonsoundhealing.com",
      siteName: "Maison Sound Healing",
      locale: locale === 'vi' ? "vi_VN" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className={`${cormorant.className} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
