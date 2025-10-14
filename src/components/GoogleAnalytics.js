'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

export const GoogleAnalytics = () => {
  // 環境変数から測定IDを取得
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // pathnameかsearchParamsが変更されたら、pageviewイベントを発火させる
  useEffect(() => {
    if (!gaId) {
      return
    }

    const url = pathname + searchParams.toString()
    
    window.gtag('event', 'page_view', {
      page_path: url,
    })
  }, [pathname, searchParams, gaId])

  // 測定IDがなければ何も表示しない
  if (!gaId) {
    return null
  }

  return (
    <>
      {/* Googleタグを読み込む */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      {/* gtagを初期化し、最初のpageviewを送信する */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}