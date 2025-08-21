// src/app/components/InstagramButton.js

import Link from 'next/link';

// InstagramのロゴSVG (変更なし)
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3" />
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
  </svg>
);

export default function InstagramButton() {
  const instagramUrl = "https://www.instagram.com/saikyoserushio/";

  return (
    <Link
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      // --- ↓ このclassNameを変更しました ↓ ---
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white/20 border border-white/30 backdrop-blur-lg rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white/40 hover:scale-110 transition-all duration-300 ease-in-out"
      aria-label="Instagramで見る"
    >
      <InstagramIcon />
    </Link>
  );
}