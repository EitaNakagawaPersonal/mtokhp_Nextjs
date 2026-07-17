import fs from "fs/promises";
import path from "path";

const contentFilePath = path.join(process.cwd(), "src/data/site-content.json");
const analyticsFilePath = path.join(process.cwd(), "src/data/analytics.json");

function normalizeNews(news) {
  return {
    enabled: Boolean(news?.enabled),
    item: {
      date: news?.item?.date || "",
      title: news?.item?.title || "",
      body: news?.item?.body || "",
      url: news?.item?.url || "",
      hasImage: Boolean(news?.item?.hasImage),
      imageUrl: news?.item?.imageUrl || "",
      startDate: news?.item?.startDate || "",
      endDate: news?.item?.endDate || "",
    },
  };
}

function normalizeGalleryImages(images = []) {
  return Array.from({ length: 9 }, (_, index) =>
    typeof images?.[index] === "string" ? images[index] : "",
  );
}

function normalizeSiteContent(content) {
  if (!content?.resinTable) {
    return content;
  }

  return {
    ...content,
    resinTable: {
      ...content.resinTable,
      galleryImages: normalizeGalleryImages(content.resinTable.galleryImages),
    },
    news: normalizeNews(content.news),
  };
}

const defaultContent = {
  resinTable: {
    heroImage: "/images/resin-table/resin1.jpg",
    galleryImages: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
      "/images/gallery5.jpg",
      "/images/gallery6.jpg",
      "",
      "",
      "",
    ],
  },
  shipbuilding: {
    achievements: [
      { title: "【函館ドック様】進水台トリガー", imageUrl: "/images/achievement1.png" },
      { title: "【某修繕ドック】特殊緩衝材", imageUrl: "/images/achievement2.png" },
      { title: "【佐伯重工業㈱様】ピンブロック・矢盤木", imageUrl: "/images/achievement3.png" },
      { title: "【㈱臼杵造船様 船台(ヘッド式)", imageUrl: "/images/achievement4.png" },
    ],
  },
  news: normalizeNews(null),
};

const defaultAnalytics = {
  pages: [
    { path: "/", title: "トップページ", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
    { path: "/about", title: "会社概要", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
    { path: "/business/construction", title: "建設事業", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
    { path: "/business/real-estate", title: "不動産事業", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
    { path: "/business/resin-table", title: "レジンテーブル事業", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
    { path: "/business/shipbuilding", title: "造船資材事業", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
    { path: "/recruit", title: "採用情報", enabled: true, measurementId: process.env.NEXT_PUBLIC_GA_ID || "" },
  ],
};

async function readJson(filePath, fallback) {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function getSiteContent() {
  const content = await readJson(contentFilePath, defaultContent);
  return normalizeSiteContent(content);
}

export async function saveSiteContent(content) {
  const normalizedContent = normalizeSiteContent(content);
  await writeJson(contentFilePath, normalizedContent);
  return normalizedContent;
}

export async function getAnalyticsConfig() {
  return readJson(analyticsFilePath, defaultAnalytics);
}

export async function saveAnalyticsConfig(config) {
  await writeJson(analyticsFilePath, config);
  return config;
}
