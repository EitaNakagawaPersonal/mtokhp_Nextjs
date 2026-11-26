import { PageHero, Worries, Features, Steps, Faq, BackLink } from '../components/shared/Sections';
import InquiryForm from '../components/shared/InquiryForm';

export const metadata = {
  title: "不動産を売りたい方へ",
  description: "土地・中古住宅・空き家など、不動産の売却に関するご相談を承ります。株式会社マツオカ不動産事業。",
  alternates: { canonical: "/business/real-estate/sell" },
};

const fields = [
  { name: 'name', label: '氏名', required: true },
  { name: 'tel', label: '電話番号', type: 'tel', required: true },
  { name: 'email', label: 'メールアドレス', type: 'email', required: true },
  { name: 'address', label: '物件所在地', required: true },
  { name: 'property_type', label: '物件種別', options: ['土地', '中古住宅', '空き家', 'その他'], required: true },
  { name: 'message', label: '相談内容', textarea: true },
];

export default function SellPage() {
  return (
    <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      <main className="relative">
        <PageHero
          title="不動産を売りたい方へ"
          lines={["土地・建物の売却をお考えの方は、お気軽にご相談ください。", "土地・中古住宅・空き家など、地域の不動産売却をサポートします。"]}
          ctaLabel="不動産売却の無料相談・査定はこちら"
          ctaHref="#inquiry"
          image="/images/products/residential-building.avif"
        />
        <Worries items={[
          "相続した土地や家を売りたい",
          "空き家を処分したい",
          "住み替えのために自宅を売却したい",
          "土地を売りたいが、価格の相場がわからない",
          "古い家でも売却できるか知りたい",
        ]} />
        <Features en="Features" title="売却サービスの特徴" items={[
          { title: "地域に根ざした不動産相談", text: "地域の事情を踏まえて、丁寧にご相談をお受けします。" },
          { title: "幅広い不動産に対応", text: "土地・中古住宅・空き家など、さまざまな不動産に対応します。" },
          { title: "価格や売却方法のご相談", text: "売却価格や売却方法について、ご希望に合わせてご相談いただけます。" },
          { title: "建物の状態・リフォームも含めて相談", text: "建材を扱う当社ならではの視点で、建物の状態やリフォームの可能性も含めてご相談いただけます。" },
        ]} />
        <Steps items={["お問い合わせ・ご相談", "物件の確認・査定", "売却価格や条件のご提案", "媒介契約・販売活動", "売買契約・引き渡し"]} />
        <Faq items={[
          { q: "査定や相談に費用はかかりますか？", a: "ご相談・査定の費用については、お問い合わせの際にご案内いたします。" },
          { q: "古い建物や空き家でも売却できますか？", a: "建物の状態によりますが、古い建物や空き家のご相談も承っております。まずはお問い合わせください。" },
          { q: "土地だけでも売却できますか？", a: "はい、土地のみのご相談も可能です。" },
          { q: "売却までにどのくらいの期間がかかりますか？", a: "物件の種類・立地・条件により異なります。状況に合わせて目安をご案内いたします。" },
          { q: "売却時にはどのような費用がかかりますか？", a: "仲介手数料や登記関連費用、各種税金などがかかる場合があります。内容はご相談時に詳しくご説明いたします。" },
        ]} />
        <InquiryForm type="不動産売却" fields={fields} submitLabel="売却について相談する" />
        <BackLink />
      </main>
    </div>
  );
}
