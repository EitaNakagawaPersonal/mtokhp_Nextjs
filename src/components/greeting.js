// 文字の出し方を変える、文字のフォントを変える、背景画像を設定する

"use client";

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Greeting() {
  const greetingImage = "/images/greeting.png";
  const title = "ご挨拶";
  const message = `
弊社は1955年から全国のお客様に建築・土木材をお届けしてきました。
近年では造船資材販売も展開し、さらに広い分野での挑戦を続けております。
今日まで会社が存続して来ましたのも、弊社の強みである木材の知識・特殊加工技術とお客様との信頼を第一にしたコミュニケーションが社会に受け入れられたからだと信じております。
世界情勢の変化が激しい現在、弊社はこれからも常に時代の変化に対応し、新たな挑戦を続けてまいります。
  `;
  const name = "代表取締役社長";
  const ceoName = "廣瀬 岳";
// 背景画像を暗くしすぎないようにフィルターの透明度を調整
  // 要素が画面に入ったかを監視する設定
  const { ref, inView } = useInView({
    triggerOnce: true, // アニメーションを1回だけ実行する
    threshold: 0.2,    // 要素が20%見えたらトリガー
  });

  return (
    // refをセットして、このセクションを監視対象にする
    <section ref={ref} className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
      {/* 背景画像 */}
      <Image
        src={greetingImage}
        alt="社長挨拶の背景"
        fill
        style={{ objectFit: 'cover' }}
        priority
        quality={80}
      />

      {/* 半透明の黒いフィルター */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* テキストコンテンツ */}
      <div 
        className={`relative z-10 h-full flex flex-col justify-center items-center text-white text-center p-8 transition-all duration-1000 ease-in-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="max-w-3xl text-lg leading-relaxed whitespace-pre-line mb-8">
          {message}
        </p>
        <p className="text-lg">{name}</p>
        <p className="text-2xl font-semibold">{ceoName}</p>
      </div>
    </section>
  );
}