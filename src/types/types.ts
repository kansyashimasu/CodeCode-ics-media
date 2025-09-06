// NOTE: microCMSからのデータ取得する際の型定義

export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  category: string[];
  author: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
};

export type Tag = {
  id: string;
  name: string;
};
