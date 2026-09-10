const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.matsuoka-corp.co.jp";

const routes = [
  "",
  "/about",
  "/business/construction",
  "/business/real-estate",
  "/business/resin-table",
  "/business/shipbuilding",
  "/forest",
  "/recruit",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
