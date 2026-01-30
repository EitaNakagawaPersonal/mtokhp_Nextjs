import { Geist, Geist_Mono, Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";
import InstagramButton from "@/components/InstagramButton";
import Header from "@/components/Header";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics />}
        <Header />
        <main className="pt-20">{children}</main>
        {/* <InstagramButton /> */}
      </body>
    </html>
  );
}