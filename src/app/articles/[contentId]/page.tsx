// NOTE: 記事詳細ページ

import { getDetailArticle } from "@/libs/api";
import React from "react";
import Link from "next/link";
import ShareButton from "@/components/common/ShareButton";
import ArticlePromotion from "@/components/common/ArticlePromotion";
import { Metadata } from "next";

type DetailArticleProps = {
  params: {
    contentId: string;
  };
};

// 動的メタデータの作成
export async function generateMetadata({
  params,
}: DetailArticleProps): Promise<Metadata> {
  const contentId = params.contentId;

  try {
    // 詳細記事の取得
    const { article } = await getDetailArticle(contentId);

    return {
      title: article.title,
      description: article.title,
      openGraph: {
        title: article.title,
        description: article.title,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${contentId}`,
        images: [
          {
            url: article.thumbnail.url || "/next.svg",
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      }
    };
  } catch (error) {
    console.error("Metadata generation error", error);

    return {
      title: "記事が見つかりません",
      description: "指定された記事は存在しません",
    };
  }
}

const DetailArticle = async ({ params }: DetailArticleProps) => {
  const contentId = params.contentId;

  try {
    const { article } = await getDetailArticle(contentId);

    // 現在のURLを取得(記事のシェア用)
    const currentURL = `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${contentId}`;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* ヘッダー部分 */}
        <div className="bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950 py-5">
          <div className="container mx-auto px-4 flex flex-col justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105 mb-6"
            >
              ← Back to Articles
            </Link>
            <h1 className="text-3xl font-bold leading-tight animate-fade-in-up animation-delay-200">
              <span
                className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse"
                style={{ animationDuration: "6s" }}
              >
                {article.title}
              </span>
            </h1>
            <div className="mt-6 flex items-center space-x-4 text-gray-300 animate-fade-in-up animation-delay-400">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                {new Date(article.createdAt).toLocaleDateString("ja-JP")}
              </span>

              {article.tags &&
                article.tags.length > 0 &&
                article.tags.map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.id}`}>
                    <span className="bg-purple-900 px-3 py-1 rounded-full text-sm hover:bg-purple-800 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                      {tag.name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <main className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            {/* 記事本文 */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 md:mx-0 border border-gray-700">
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h1:text-4xl prose-h1:border-b prose-h1:border-gray-600 prose-h1:pb-4
                  prose-h2:text-3xl prose-h2:text-blue-400 prose-h2:border-l-4 prose-h2:border-blue-500 prose-h2:pl-4
                  prose-h3:text-2xl prose-h3:text-gray-200
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                  prose-code:bg-gray-800 prose-code:text-pink-400 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-600
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-800 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                  prose-strong:text-white
                  prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300
                  prose-table:border-gray-600 prose-th:bg-gray-800 prose-th:text-white prose-td:text-gray-300"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
            <div className="text-center my-10">
              <ShareButton title={article.title} url={currentURL} />
            </div>
            <div className="text-center my-10">
              <ArticlePromotion />
            </div>
          </article>

          {/* 記事下部のナビゲーション */}
          <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-700">
            <div className="flex justify-center">
              <Link
                href="/"
                className="bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950 hover:from-blue-800 hover:via-purple-800 hover:to-pink-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300 animate-pulse"
                style={{ animationDuration: "4s" }}
              >
                <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Read Other Articles
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("記事の取得に失敗しました:", error);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-red-400 mb-4">
            記事が見つかりませんでした
          </h1>
          <p className="text-gray-300 mb-8">
            指定された記事は存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950 hover:from-blue-800 hover:via-purple-800 hover:to-pink-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              ホームに戻る
            </span>
          </Link>
        </div>
      </div>
    );
  }
};

export default DetailArticle;
