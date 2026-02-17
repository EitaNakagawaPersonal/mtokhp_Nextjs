"use client";
import React, { useRef, useEffect, useState } from 'react';

const images = [
    '/images/resin-table/resin1.jpg',
    '/images/resin-table/resin2.jpg',
    '/images/resin-table/resin3.jpg',
    '/images/resin-table/resin4.jpg',
    '/images/resin-table/resin5.jpg',
];

const Resin = () => {
    // --- JavaScriptのロジックは変更ありません ---
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.disconnect() };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000); // 4秒で画像は切り替わります
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section className="resin-container" ref={ref}>
            <div className="image-wrapper">
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`レジンテーブル ${index + 1}`}
                        className={`resin-img ${index === activeIndex ? 'active' : ''}`}
                    />
                ))}
            </div>

            {/* ▼ ここのCSSだけを変更します ▼ */}
            <style jsx>{`
                .image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }

                .resin-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    
                    /* フェードイン用の設定 */
                    opacity: 0;
                    transition: opacity 1.5s ease-in-out;
                    transform: scale(1.1);
                }

                .resin-img.active {
                    opacity: 1; /* 表示されるときにフェードイン */
                }

                /* ▼ --- ここからがアニメーションの定義 --- ▼ */

                /* 1. アニメーションの内容を定義 */
                @keyframes pan-left {
                    0% { transform: translateX(20px) scale(1.1); }
                    100% { transform: translateX(-20px) scale(1.1); }
                }

                @keyframes pan-right {
                    0% { transform: translateX(-20px) scale(1.1); }
                    100% { transform: translateX(20px) scale(1.1); }
                }

                /* 2. activeな画像にアニメーションを適用 */
                .resin-img.active:nth-of-type(odd) {
                    /* 奇数番目（1,3,5...）は左に動くアニメーションを実行 */
                    animation: pan-left 8s ease-in-out infinite alternate;
                }

                .resin-img.active:nth-of-type(even) {
                    /* 偶数番目（2,4...）は右に動くアニメーションを実行 */
                    animation: pan-right 8s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    );
};

export default Resin;