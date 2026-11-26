import Image from 'next/image';
import Link from 'next/link';

export function PageHero({ title, lines, ctaLabel, ctaHref, image }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <h1 className="mb-6 text-3xl font-bold text-white sm:text-5xl">{title}</h1>
        <div className="space-y-2 max-w-2xl">
          {lines.map((l) => <p key={l} className="text-base sm:text-lg text-white/95">{l}</p>)}
        </div>
        <a href={ctaHref} className="mt-8 inline-block w-full sm:w-auto text-center rounded-full bg-blue-700 px-8 py-4 font-bold text-white shadow-lg hover:bg-blue-600 transition-colors">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}

export function SectionTitle({ en, title, children }) {
  return (
    <div className="text-center">
      <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">{en}</h2>
      <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</p>
      {children && <p className="mt-4 max-w-2xl mx-auto text-gray-600">{children}</p>}
    </div>
  );
}

export function Wrap({ children }) {
  return <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-5xl mx-auto">{children}</div></section>;
}

export function Worries({ items }) {
  return (
    <Wrap>
      <SectionTitle en="Worries" title="こんなお悩みはありませんか？" />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3 rounded-lg bg-white/80 p-5 shadow">
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-700 text-sm text-white">✓</span>
            <span className="text-gray-800">{t}</span>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export function Features({ en, title, items, lead }) {
  return (
    <Wrap>
      <SectionTitle en={en} title={title}>{lead}</SectionTitle>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {items.map((f) => (
          <div key={f.title} className="rounded-lg bg-white/80 p-6 shadow">
            <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
            {f.text && <p className="mt-2 text-gray-600">{f.text}</p>}
          </div>
        ))}
      </div>
    </Wrap>
  );
}

export function Steps({ items }) {
  return (
    <Wrap>
      <SectionTitle en="Flow" title="ご利用の流れ" />
      <ol className="mt-10 space-y-4">
        {items.map((s, i) => (
          <li key={s} className="relative flex items-center gap-5 rounded-lg bg-white/80 p-5 shadow">
            <span className="flex h-12 w-12 flex-none flex-col items-center justify-center rounded-full bg-blue-800 text-white leading-none">
              <span className="text-[10px]">STEP</span><span className="text-lg font-bold">{i + 1}</span>
            </span>
            <span className="font-semibold text-gray-900">{s}</span>
            {i < items.length - 1 && <span aria-hidden className="absolute -bottom-4 left-[2.4rem] z-10 text-blue-800">▼</span>}
          </li>
        ))}
      </ol>
    </Wrap>
  );
}

export function Faq({ items }) {
  return (
    <Wrap>
      <SectionTitle en="FAQ" title="よくあるご質問" />
      <div className="mt-10 space-y-3">
        {items.map((f) => (
          <details key={f.q} className="group rounded-lg bg-white/80 p-5 shadow">
            <summary className="cursor-pointer list-none font-semibold text-gray-900 flex justify-between gap-4">
              <span><span className="text-blue-800 mr-2">Q.</span>{f.q}</span>
              <span className="text-blue-800 transition-transform group-open:rotate-45">＋</span>
            </summary>
            <p className="mt-3 text-gray-600"><span className="font-bold text-blue-800 mr-2">A.</span>{f.a}</p>
          </details>
        ))}
      </div>
    </Wrap>
  );
}

export function BottomCta({ text, label, href }) {
  return (
    <Wrap>
      <div className="rounded-lg bg-blue-900/90 p-8 sm:p-12 text-center text-white shadow-lg">
        <p className="text-xl sm:text-2xl font-bold">{text}</p>
        <a href={href} className="mt-6 inline-block w-full sm:w-auto rounded-full bg-white px-8 py-4 font-bold text-blue-900 hover:bg-blue-100 transition-colors">{label}</a>
      </div>
    </Wrap>
  );
}

export function BackLink() {
  return (
    <div className="pb-16 text-center">
      <Link href="/business/real-estate" className="text-blue-800 underline">← 不動産事業トップへ戻る</Link>
    </div>
  );
}
