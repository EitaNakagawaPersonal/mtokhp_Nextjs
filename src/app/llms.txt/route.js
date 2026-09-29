const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wood-matsuoka.com/";

export async function GET() {
  const body = `# 株式会社マツオカ

> 大分県佐伯市の製材業者。造船資材・建築資材・建材の製造販売、不動産事業、レジンテーブルの製造販売を行っています。

## 会社概要
- 設立: 1945年9月
- 所在地（木材事業部）: 大分県佐伯市西浜2-39
- 所在地（建材事業部）: 大分県佐伯市常盤東町9-5
- 詳細: ${siteUrl}/about

## 事業案内
- [建築資材事業](${siteUrl}/business/construction): 建具・エクステリア・サッシ・水廻り商品等の建築資材、建材の製造・販売
- [造船資材事業](${siteUrl}/business/shipbuilding): 進水台トリガー、矢盤木、緩衝材等の造船資材の製造・販売
- [不動産事業](${siteUrl}/business/real-estate): 不動産の売買・賃貸・管理等の業務
- [レジンテーブル事業](${siteUrl}/business/resin-table): オーダーメイドのレジンテーブルの製造・販売
- [林業（Forestオンライン店舗）](${siteUrl}/forest)

## 採用情報
- [採用情報](${siteUrl}/recruit)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
