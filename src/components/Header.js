"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "企業情報" },
  {
    label: "事業部",
    subItems: [
      { href: "/business/construction", label: "住宅建材事業" },
      { href: "/business/shipbuilding", label: "造船資材事業" },
      { href: "/business/resin-table", label: "素材倉庫“FOREST“" },
      { href: "/business/real-estate", label: "不動産事業" },
    ]
  },
  { href: "https://en-gage.net/pinehirose_saiyo/", label: "採用情報", external: true },
  {
    label: "Forest オンライン店舗",
    subItems: [
      { href: "https://www.yahoo.co.jp/", label: "個人のお客様" },
      { href: "https://www.yahoo.co.jp/", label: "法人のお客様" },
    ]
  },
  { href: "/#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-4 flex justify-between items-center bg-white shadow-md h-20">
      <Link href="/" onClick={closeMenu} className="flex-shrink-0">
        <Image src="/images/matsuoka_logo.jpg" alt="ロゴ" width={160} height={40} priority />
      </Link>

      {/* --- ハンバーガーメニューボタン --- */}
      <button onClick={toggleMenu} className="z-50 space-y-2 md:hidden">
        <span className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </button>

      {/* --- スマホ・タブレット用ナビゲーション --- */}
      <nav
        className={`fixed top-20 left-0 z-40 w-full bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-y-auto`}
      >
        <ul className="flex flex-col items-center">
          {navItems.map((item) => (
            <li key={item.label} className="w-full text-center border-b">
              {item.subItems ? (
                <div>
                  <button onClick={() => handleDropdownToggle(item.label)} className="w-full py-4 flex justify-center items-center font-medium">
                    {item.label}
                    <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <ul className="bg-gray-50">
                      {item.subItems.map((subItem, index) => (
                          <li key={`${subItem.href}-${index}`} className="border-t">
                          <Link href={subItem.href} onClick={closeMenu} className="block py-3 text-gray-600">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block py-4 font-medium">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href || ''} onClick={closeMenu} className="block py-4 font-medium">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* --- PC用ナビゲーション --- */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-base">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.subItems ? (
                <>
                  <div className="flex items-center cursor-default font-medium">
                    {item.label}
                    <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  </div>
                  <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                    {item.subItems.map((subItem, index) => (
                        <li key={`${subItem.href}-${index}`}>
                        <Link href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 font-medium">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href || ''} className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 font-medium">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}