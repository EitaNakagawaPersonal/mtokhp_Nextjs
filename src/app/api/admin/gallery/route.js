import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/adminContent";

function normalizeGalleryImages(images = []) {
  return Array.from({ length: 9 }, (_, index) =>
    typeof images?.[index] === "string" ? images[index] : "",
  );
}

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

export async function POST(request) {
  const sessionCookie = request.cookies.get("admin_session");
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || "matsuoka-admin";

  if (!sessionCookie || sessionCookie.value !== expectedToken) {
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

  const imagePath = await saveUploadedFile(image, "uploads");
  const content = await getSiteContent();
  const galleryImages = normalizeGalleryImages(content.resinTable.galleryImages);
  galleryImages[slotIndex] = imagePath;
  content.resinTable.galleryImages = galleryImages;

  await saveSiteContent(content);
  return NextResponse.json({ ok: true, content });
}
