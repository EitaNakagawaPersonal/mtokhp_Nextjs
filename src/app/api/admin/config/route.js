import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { getAnalyticsConfig, saveAnalyticsConfig, getSiteContent, saveSiteContent } from "@/lib/adminContent";

async function saveUploadedFile(file, subdir = "uploads") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = path.extname(file.name) || ".jpg";
  const fileName = `${Date.now()}-${randomUUID().slice(0, 8)}${extension}`;
  const relativePath = `/images/${subdir}/${fileName}`;
  const absolutePath = path.join(process.cwd(), "public", relativePath.replace(/^\/+/, ""));

  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, buffer);

  return relativePath;
}

export async function GET(request) {
  const sessionCookie = request.cookies.get("admin_session");
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || "matsuoka-admin";

  if (!sessionCookie || sessionCookie.value !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [analytics, content] = await Promise.all([getAnalyticsConfig(), getSiteContent()]);
  return NextResponse.json({ analytics, content });
}

export async function POST(request) {
  const sessionCookie = request.cookies.get("admin_session");
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || "matsuoka-admin";

  if (!sessionCookie || sessionCookie.value !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const newsEnabled = formData.get("newsEnabled") === "true";
    const existingImageUrl = formData.get("existingImageUrl")?.toString() || "";
    const newsItem = {
      date: formData.get("newsDate")?.toString() || "",
      title: formData.get("newsTitle")?.toString() || "",
      body: formData.get("newsBody")?.toString() || "",
      url: formData.get("newsUrl")?.toString() || "",
      hasImage: formData.get("newsHasImage") === "true",
      startDate: formData.get("newsStartDate")?.toString() || "",
      endDate: formData.get("newsEndDate")?.toString() || "",
    };

    let imageUrl = "";
    const image = formData.get("newsImage");
    if (image && typeof image !== "string" && image instanceof File) {
      imageUrl = await saveUploadedFile(image, "uploads");
    } else if (newsItem.hasImage) {
      imageUrl = existingImageUrl;
    }

    const content = await getSiteContent();
    content.news = {
      enabled: newsEnabled,
      item: {
        ...newsItem,
        imageUrl: newsItem.hasImage ? imageUrl : "",
        hasImage: newsItem.hasImage,
      },
    };

    await saveSiteContent(content);
    return NextResponse.json({ ok: true, content });
  }

  const body = await request.json();
  const { pages } = body;
  const analytics = { pages };
  await saveAnalyticsConfig(analytics);

  return NextResponse.json({ ok: true, analytics });
}
