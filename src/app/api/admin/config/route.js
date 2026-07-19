import { put } from "@vercel/blob";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { getAnalyticsConfig, saveAnalyticsConfig, getSiteContent, saveSiteContent } from "@/lib/adminContent";

const blobToken = process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_TOKEN;
const storeId = process.env.BLOB_STORE_ID;
const oidcToken = process.env.VERCEL_OIDC_TOKEN;
const hasBlobCredentials = Boolean(blobToken || (storeId && oidcToken));

async function saveUploadedFile(file, subdir = "uploads") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = file.name && file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const fileName = `${Date.now()}-${randomUUID().slice(0, 8)}.${extension}`;
  const blobPath = `news/${subdir}/${fileName}`;

  if (!hasBlobCredentials) {
    throw new Error(
      "Vercel Blob credentials are not configured. Add BLOB_READ_WRITE_TOKEN or BLOB_STORE_ID + VERCEL_OIDC_TOKEN in Vercel Project Settings > Environment Variables and redeploy.",
    );
  }

  const blob = await put(blobPath, buffer, {
    access: "private",
    addRandomSuffix: false,
    contentType: file.type || "application/octet-stream",
    ...(blobToken ? { token: blobToken } : {}),
    ...(storeId && oidcToken ? { storeId, oidcToken } : {}),
  });

  return blob.url;
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
    try {
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
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "保存中にエラーが発生しました。" },
        { status: 500 },
      );
    }
  }

  const body = await request.json();
  const { pages } = body;
  const analytics = { pages };
  await saveAnalyticsConfig(analytics);

  return NextResponse.json({ ok: true, analytics });
}
