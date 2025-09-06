// NOTE: もっと見るボタンコンポーネント

"use client";

import { getAllArticles } from "@/libs/api";
import { Article } from "@/types/types";
import React from "react";
import ArticleCard from "./ArticleCard";
import { MAX_DISPLAY_ARTICLE } from "@/utils/constants";

type LoadMoreButtonProps = {
  totalCount: number;
  initialArticles: number;
};

const LoadMoreButton = ({
  totalCount,
  initialArticles,
}: LoadMoreButtonProps) => {
  const [articles, setArticles] = React.useState<Article[]>([]); // 画面に表示する記事の状態
  const [loading, setLoading] = React.useState(false); // ローディング状態
  const [currentCount, setCurrentCount] = React.useState(initialArticles); // 現在の表示記事数

  const remaining = totalCount - currentCount;

  // Load moreボタンがクリックされた時の処理
  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    try {
      //現在の表示記事数から＋3件取得
      const { articles } = await getAllArticles(
        MAX_DISPLAY_ARTICLE,
        currentCount
      );
      setArticles((prev) => [...prev, ...articles]); // 取得した記事を追加
      setCurrentCount((prev) => prev + articles.length); // 現在の表示記事数を更新
    } catch (error) {
      console.error("Error loading more articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {remaining > 0 && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="mt-7 border border-transparent bg-gradient-to-r from-red-950 via-purple-900 to-blue-950 px-8 py-3 rounded-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed animate-pulse hover:scale-105 transition-transform duration-300"
            style={{ animationDuration: "4s" }}
          >
            <span className="text-white">
              {loading ? "Loading..." : "Load more"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;
