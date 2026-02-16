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
    // フルブリード背景画像 + ダークオーバーレイで強い区切りを作る
    <section className="relative font-serif-jp w-full">
      <div className="absolute inset-0 z-0">
        <Image src="/images/sagyochu.jpg" alt="作業風景" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-transparent">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 左: テキスト */}
            <div className="text-white">
              <h3 className="text-5xl font-bold mb-6">会社概要</h3>
              <dl className="space-y-4 text-lg opacity-95 leading-relaxed">
                {companyDetails.map((item) => (
                  <div key={item.term} className="flex items-start border-b py-3 text-sm">
                    <dt className="w-36 flex-shrink-0 font-semibold pr-4">{item.term}</dt>
                    <dd className="flex-1 break-words whitespace-normal">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 右: 補助情報（空白） - ロゴは削除 */}
            <div className="flex justify-end md:justify-end">
              {/* intentionally left blank for visual balance */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}