// NOTE: microCMSからのデータ取得する際の関数群

import { Article } from "@/types/types";
import { client } from "./client";

// 全記事取得
export const getAllArticles = async (limit: number, offset: number) => {
  const data = await client.getList<Article>({
    endpoint: "articles",
    queries: { limit: limit || 100, offset: offset || 0 },
  });

  return { articles: data.contents, totalCount: data.totalCount };
};

// 詳細記事の取得
export const getDetailArticle = async (contentId: string) => {
  const data = await client.get<Article>({
    endpoint: "articles",
    contentId: contentId,
  });

  return { article: data };
};

// 特定のタグを持つ記事を取得
export const getArticleByTag = async (
  contentId: string,
  limit: number,
  offset: number
) => {
  const data = await client.getList<Article>({
    endpoint: "articles",
    queries: {
      filters: `tags[contains]${contentId}`,
      limit: limit || 100,
      offset: offset || 0,
    },
  });

  return { articles: data.contents, totalCount: data.totalCount };
};

// タグを全取得
export const getAllTags = async () => {
  const data = await client.getList({
    endpoint: "tags",
  });

  return { tags: data.contents };
};
