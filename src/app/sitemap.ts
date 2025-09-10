// NOTE: サイトマップ

import { getAllArticles } from "@/libs/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  //   基本ページ
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  try {
    // microCMSから全記事を取得
    const { articles } = await getAllArticles(1000, 0);

    // 記事ページを追加
    const articleRoutes = articles.map((article) => ({
      url: `${baseUrl}/articles/${article.id}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [...routes, ...articleRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return routes;
  }
}
