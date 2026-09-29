import Menu from './components/menu';
import Merit from './components/merit';
import Engage from './components/engage';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumb';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "採用情報", path: "/recruit" },
]);

export const metadata = {
  title: "採用情報",
  description: "株式会社マツオカの採用情報ページです。",
  alternates: { canonical: "/recruit" },
};

export default function Recruit() {
  return (
    <>
      <main>
        <JsonLd data={breadcrumbJsonLd} />
        {/* 
        <Menu />
        <Merit />
        <Engage />
        */}
      </main>
    </>
  );
}