const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wood-matsuoka.com";

// items: [{ name: "表示名", path: "/business/construction" }, ...] ("/"はホームを表す)
export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
