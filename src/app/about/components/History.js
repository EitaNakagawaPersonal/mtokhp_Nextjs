"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function History() {
  const events = [
    { year: '1955', title: '松岡巌がマツオカ材木店設立' },
    { year: '1960', title: '製材工場設立' },
    { year: '1962', title: '社員旅行（佐伯市内で初）' },
    { year: '1970', title: 'マツオカ建材店設立' },
    { year: '1998', title: '宅地建物取引免許取得（大分県知事(3)第2491号）' },
    { year: '2004', title: '株式会社マツオカへ名称変更' },
    { year: '2005', title: '他社敷地購入' },
    { year: '2015', title: '他社敷地購入' },
  ];

  // public/images/history にある画像ファイル名に合わせてマップを作成
  const imageMap = {
    '1955': '/images/history/1955-setsuritsu.jpg',
    '1960': '/images/history/1960-kojo-setsuritsu.jpg',
    '1962': '/images/history/1962-syainryokou.jpg',
    '1970': '/images/history/1970-mise-setsuritsu.jpg',
    '1998': '/images/history/1998-takkensyutoku.jpg',
    '2004': '/images/history/2004-meisyohenkou.jpg',
    '2005': '/images/history/2005-shikichikounyu.jpg',
    '2015': '/images/history/2015-shikichikounyu2.jpg',
  };

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeModal();
    }
    if (selected) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  function openModal(img, caption) {
    setSelected({ img, caption });
    try { document.body.style.overflow = 'hidden'; } catch (e) {}
  }

  function closeModal() {
    setSelected(null);
    try { document.body.style.overflow = ''; } catch (e) {}
  }

  return (
    <section className="w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">歴史</h2>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* 中央の縦線 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2"></div>

          <ul className="space-y-12">
            {events.map((ev) => {
              const imgSrc = imageMap[ev.year];
              return (
                <li key={ev.year} className="relative">
                  <div className={`md:grid md:grid-cols-3 md:items-center gap-6`}>

                    {/* 年バッジ + タイトル */}
                    <div className={`md:col-span-1 flex items-center md:justify-start justify-center`}> 
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                          {ev.year}
                        </div>
                        <div className="max-w-xs text-left">
                          <div className="text-base font-semibold text-gray-800">{ev.title}</div>
                        </div>
                      </div>
                    </div>

                    {/* 中央ラインのドット */}
                    <div className="md:col-span-1 flex justify-center">
                      <div className="relative flex items-center justify-center">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>
                        <div className="z-10 w-8 h-8 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* 画像（あれば表示） */}
                    <div className="md:col-span-1 flex justify-center">
                      {imgSrc ? (
                        <button type="button" onClick={() => openModal(imgSrc, ev.title)} className="w-72 h-44 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none">
                          <Image src={imgSrc} alt={`${ev.year} の写真`} fill className="object-cover"/>
                        </button>
                      ) : (
                        <div className="w-72 h-44 flex items-center justify-center bg-gray-50 text-gray-400 rounded-lg border border-dashed">
                          画像なし
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black">
              <Image src={selected.img} alt={selected.caption} fill className="object-contain"/>
            </div>
            <p className="text-center text-white mt-4">{selected.caption}</p>
            <button aria-label="閉じる" className="absolute top-3 right-3 text-white bg-black/30 rounded-full p-2" onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}