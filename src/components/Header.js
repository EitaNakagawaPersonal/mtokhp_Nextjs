"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-4 flex justify-between items-center bg-white shadow-md">
      {/* ロゴ */}
      <Link href="/">
        <Image src="/images/logo.png" alt="ロゴ" width={160} height={40} priority />
      </Link>

      {/* ハンバーガーメニューボタン */}
      <button onClick={toggleMenu} className="z-50 space-y-2">
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

      {/* ナビゲーションメニュー */}
      {isOpen && (
        <nav className="fixed top-0 left-0 z-40 w-full h-screen bg-white flex flex-col justify-center items-center">
          <ul className="space-y-8 text-center text-2xl">
            <li>
              <Link href="/about" onClick={toggleMenu}>
                松岡木材について
              </Link>
            </li>
            <li>
              <Link href="/business" onClick={toggleMenu}>
                事業紹介
              </Link>
            </li>
            <li>
              <Link href="/recruit" onClick={toggleMenu}>
                採用情報
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}