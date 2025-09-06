// NOTE: タグ一覧ページからの記事一覧ページ

import ArticleCardList from "@/components/ArticleCardList";
import Hero from "@/components/layouts/Hero";
import LoadMoreButton from "@/components/LoadMoreButton";
import { getArticleByTag } from "@/libs/api";
import { Metadata } from "next";
import React from "react";

type DetailTagPageProps = {
  params: {
    slug: string;
  };
};

// 動的メタデータの作成
export async function generateMetadata({
  params,
}: DetailTagPageProps): Promise<Metadata> {
  const contentsId = params.slug;

  const { articles } = await getArticleByTag(contentsId, 6, 0);
  // contentsIdに基づいて記事のタグを取得
  const currentTag = articles.map((article) =>
    article.tags.find((tag) => tag.id === contentsId)
  );

  const tagName = currentTag.find((tag) => tag)?.name;

  try {
    return {
      title: tagName,
    };
  } catch (error) {
    console.error("Metadata generation error", error);

    return {
      title: "記事が見つかりません",
      description: "指定された記事は存在しません",
    };
  }
}

const DetailTagPage = async ({ params }: DetailTagPageProps) => {
  // URLからcontentsIdを取得
  const contentsId = params.slug;

  try {
    // タグに関連する記事の取得
    const { articles, totalCount } = await getArticleByTag(contentsId, 6, 0);
    // contentsIdに基づいて記事のタグを取得
    const currentTag = articles.map((article) =>
      article.tags.find((tag) => tag.id === contentsId)
    );

    const tagName = currentTag.find((tag) => tag)?.name;

    return (
      <>
        <Hero title={`Tag: ${tagName}`} />
        {/* 記事一覧 */}
        <main className="container mx-auto px-4">
          <div className="mx-auto text-center py-8">
            <div className="mt-32">
              <h2 className="text-2xl font-bold md:text-3xl">
                Articles with {tagName}
              </h2>
              <ArticleCardList articles={articles} />
              <LoadMoreButton
                totalCount={totalCount}
                initialArticles={articles.length}
              />
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching tag data:", error);
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Failed to fetch tag information</h2>
        <p className="mt-4">Please try again.</p>
      </div>
    );
  }
};

export default DetailTagPage;
