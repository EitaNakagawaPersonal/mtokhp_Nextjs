import { put } from "@vercel/blob";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/adminContent";
import { isAuthorized } from "@/lib/adminAuth";

const blobToken = process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_TOKEN;
const storeId = process.env.BLOB_STORE_ID;
const oidcToken = process.env.VERCEL_OIDC_TOKEN;
const hasBlobCredentials = Boolean(blobToken || (storeId && oidcToken));

function normalizeGalleryImages(images = []) {
  return Array.from({ length: 9 }, (_, index) =>
    typeof images?.[index] === "string" ? images[index] : "",
  );
}

async function saveUploadedFile(file, subdir = "uploads") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extension = file.name && file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const fileName = `${Date.now()}-${randomUUID().slice(0, 8)}.${extension}`;
  const blobPath = `gallery/${subdir}/${fileName}`;

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

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const image = formData.get("image");
  const slotIndex = Number.parseInt(formData.get("slotIndex")?.toString() ?? "0", 10);

  if (!image || typeof image === "string" || !(image instanceof File)) {
    return NextResponse.json({ error: "画像が見つかりませんでした。" }, { status: 400 });
  }

  if (!Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= 9) {
    return NextResponse.json({ error: "対象の枚数が不正です。" }, { status: 400 });
  }

  try {
    const imagePath = await saveUploadedFile(image, "uploads");
    const content = await getSiteContent();
    const galleryImages = normalizeGalleryImages(content.resinTable.galleryImages);
    galleryImages[slotIndex] = imagePath;
    content.resinTable.galleryImages = galleryImages;

    await saveSiteContent(content);
    return NextResponse.json({ ok: true, content });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "画像のアップロードに失敗しました。" },
      { status: 500 },
    );
  }
}
