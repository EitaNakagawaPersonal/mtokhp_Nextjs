const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.matsuoka-corp.co.jp";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
