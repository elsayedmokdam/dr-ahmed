import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dr-ahmed-mohamed.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://dr-ahmed-mohamed.vercel.app/gallery",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://dr-ahmed-mohamed.vercel.app/booking",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://dr-ahmed-mohamed.vercel.app/services",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
