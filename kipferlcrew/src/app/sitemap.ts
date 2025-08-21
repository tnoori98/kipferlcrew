import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kipferlcrew.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/en`, lastModified: new Date() },
    { url: `${base}/uk`, lastModified: new Date() },
    { url: `${base}/de`, lastModified: new Date() },
  ];
}
