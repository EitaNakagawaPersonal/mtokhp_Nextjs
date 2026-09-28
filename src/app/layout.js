import { Inter } from "next/font/google";
import "./globals.css";
import InstagramButton from "@/components/InstagramButton";
import Header from "@/components/Header";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.matsuoka-corp.co.jp";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社マツオカ",
    template: "%s | 株式会社マツオカ",
  },
  description: "木と良い関係を目指して - 株式会社マツオカの公式サイト。土木・建設、不動産、造船、樹脂テーブル、林業事業を展開しています。",
  keywords: ["マツオカ", "住宅", "建設", "不動産", "造船", "レジンテーブル", "建材"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社マツオカ",
    title: "株式会社マツオカ",
    description: "木と良い関係を目指して - 株式会社マツオカの公式サイト",
    url: siteUrl,
    images: [{ url: "/images/matsuoka_logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社マツオカ",
    description: "木と良い関係を目指して - 株式会社マツオカの公式サイト",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="pt-20">{children}</main>
        {/* <InstagramButton /> */}
      </body>
    </html>
  );
}