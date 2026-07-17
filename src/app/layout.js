import { Noto_Sans_JP, Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";
import InstagramButton from "@/components/InstagramButton";
import Header from "@/components/Header";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const notoSerif = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

export const metadata = {
  title: "株式会社マツオカ",
  description: "木と良い関係を目指して - 株式会社マツオカの公式サイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="pt-20">{children}</main>
        {/* <InstagramButton /> */}
      </body>
    </html>
  );
}