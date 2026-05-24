import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elsayed-mokdam-portfolio.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://elsayed-mokdam-portfolio.vercel.app/projects",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://elsayed-mokdam-portfolio.vercel.app/resume",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://elsayed-mokdam-portfolio.vercel.app/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
