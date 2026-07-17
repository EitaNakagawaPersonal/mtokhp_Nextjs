import { getSiteContent } from "@/lib/adminContent";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const content = await getSiteContent();
  const images = content?.resinTable?.galleryImages || [];

  return <GalleryClient images={images} />;
}