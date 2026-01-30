'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

/* 中身専用コンポーネント */
function GAInner() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId || typeof window === 'undefined') return;

    const url = pathname + '?' + searchParams.toString();

    window.gtag?.('event', 'page_view', {
      page_path: url,
    });
  }, [pathname, searchParams, gaId]);

  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}

/* 外側で Suspense */
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GAInner />
    </Suspense>
  );
}