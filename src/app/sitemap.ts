import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cauveryinteriors.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/modular-kitchens`, lastModified: new Date() },
    { url: `${baseUrl}/services/wardrobes`, lastModified: new Date() },
    { url: `${baseUrl}/services/cnc`, lastModified: new Date() },
    { url: `${baseUrl}/services/ceilings`, lastModified: new Date() },
  ];
}
