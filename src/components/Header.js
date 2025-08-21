"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/business", label: "事業内容" },
  { href: "/recruit", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // メニューの開閉を切り替える
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // メニューを閉じる
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    // 【修正①】ヘッダーに固定の高さを設定 (h-20 は 80px)
    <header className="fixed top-0 left-0 z-50 w-full p-4 flex justify-between items-center bg-white shadow-md h-20">
      <Link href="/" onClick={closeMenu} className="flex-shrink-0">
        <Image src="/images/logo.png" alt="ロゴ" width={160} height={40} priority />
      </Link>

      {/* ハンバーガーメニューボタン (スマホ・タブレットでのみ表示) */}
      <button onClick={toggleMenu} className="z-50 space-y-2 md:hidden">
        <span
          className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        ></span>
      </button>

      {/* ナビゲーションメニュー (スマホ・タブレット用) */}
      <nav 
        className={`fixed left-0 z-40 w-full bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden flex items-center justify-center ${
          // 表示位置とアニメーションを変更
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        //  ヘッダーの真下に配置し、高さを設定
        style={{ top: '80px', height: '20vh' }}
      >
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                onClick={closeMenu}
                className="inline-block transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ナビゲーションメニュー (PC用: 常時表示) */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className="inline-block transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}