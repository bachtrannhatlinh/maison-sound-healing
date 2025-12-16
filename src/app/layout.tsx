import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Maison Sound Healing | Âm Thanh Trị Liệu & Thiền Định",
  description:
    "Trung tâm chữa lành toàn diện kết hợp trí tuệ cổ đại với y học hiện đại. Trải nghiệm âm thanh trị liệu, thiền định, yoga và các phương pháp chữa lành tâm hồn.",
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
    title: "Maison Sound Healing | Âm Thanh Trị Liệu & Thiền Định",
    description:
      "Trung tâm chữa lành toàn diện kết hợp trí tuệ cổ đại với y học hiện đại.",
    url: "https://maisonsoundhealing.com",
    siteName: "Maison Sound Healing",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className={`${cormorant.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
