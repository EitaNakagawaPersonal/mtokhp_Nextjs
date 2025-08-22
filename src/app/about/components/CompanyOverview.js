import Image from 'next/image';

// 会社情報のデータをオブジェクトとしてまとめておくと管理が楽になります
const companyDetails = [
  { term: "社 名", description: "株式会社マツオカ" },
  { term: "設 立", description: "1945年9月" },
  { term: "本 社", description: "大分県佐伯市西浜2-39" },
  { term: "代表者", description: "代表取締役 廣瀬 岳" },
  { term: "資本金", description: "2,250万円" },
  { term: "従業員数", description: "33名" },
  { term: "取引銀行", description: "大分銀行/伊予銀行/大分信用金庫/豊和銀行" },
  { term: "木材事業部", description: "建築資材・造船資材・土木架設・梱包材等の製造、販売" },
  { term: "建材事業部", description: "建具・エクステリア・サッシ・水廻り商品等の販売" },
];

export default function CompanyOverview() {
  return (
    // font-serif-jp でセクション全体のフォントを明朝体に変更
    <section className="font-serif-jp">
      
      {/* --- 1. スローガンセクション --- */}
      <div className="relative h-64 sm:h-80 flex items-center justify-center text-white">
        {/* 背景画像 */}
        <Image
          src="/images/wood-bg.jpg" // 背景用の木材画像を public/images に配置
          alt="背景の木材"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* 半透明の黒いオーバーレイ */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* テキスト */}
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl tracking-widest">
          人と木の良い関係を目指して
        </h2>
      </div>

      {/* --- 2. 会社概要詳細セクション --- */}
      {/* mdサイズ以上で2カラムのグリッドレイアウトに */}
      <div className="grid md:grid-cols-2">
        {/* 左カラム: 画像 */}
        <div className="relative h-96 md:h-auto">
          <Image
            src="/images/forest-logs.jpg" // 森と丸太の画像を public/images に配置
            alt="森と丸太"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* 右カラム: 会社情報 */}
        <div className="relative p-8 sm:p-12 text-gray-800">
          {/* 背景画像 (半透明にする親要素) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/log-pile-bg.jpg" // 丸太の背景画像を public/images に配置
              alt="丸太の背景"
              layout="fill"
              objectFit="cover"
              className="opacity-20" // 画像自体の透明度を調整
            />
            {/* 白いオーバーレイ */}
            <div className="absolute inset-0 bg-white/80"></div>
          </div>
          
          {/* テキストコンテンツ */}
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">会社概要</h3>
            <dl>
              {companyDetails.map((item) => (
                <div key={item.term} className="flex border-b py-3 text-sm">
                  <dt className="w-1/4 font-semibold">{item.term}</dt>
                  <dd className="w-3/4">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}