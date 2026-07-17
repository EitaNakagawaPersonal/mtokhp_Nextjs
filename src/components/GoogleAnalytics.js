'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/$/, '') || '/';
}

/* 中身専用コンポーネント */
function GAInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [analyticsConfig, setAnalyticsConfig] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/public/analytics')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setAnalyticsConfig(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setAnalyticsConfig({ pages: [] });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const pageConfig = analyticsConfig?.pages?.find((item) => normalizePath(item.path) === normalizePath(pathname));
  const gaId = pageConfig?.measurementId || process.env.NEXT_PUBLIC_GA_ID || '';
  const enabled = pageConfig?.enabled ?? true;

  useEffect(() => {
    if (!gaId || !enabled || typeof window === 'undefined') return;

    const search = searchParams.toString();
    const url = pathname + (search ? `?${search}` : '');

    window.gtag?.('event', 'page_view', {
      page_path: url,
    });
  }, [pathname, searchParams, gaId, enabled]);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />

      <Script
        id={`gtag-init-${gaId}`}
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