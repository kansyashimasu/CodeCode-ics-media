// NOTE:　一つ一つの記事を表示するコンポーネント
"use client";

import { Article } from "@/types/types";
import Image from "next/image";
import React from "react";
import { TransitionLink } from "./common/TransitionLink";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <TransitionLink href={`/articles/${article.id}`}>
      <div className="flex flex-col justify-center items-center h-40 border border-gray-600 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
        <Image
          src={article.thumbnail.url}
          width={65}
          height={65}
          alt="Next.js Logo"
          className="mx-auto rounded-lg mb-3"
        />
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-white">{article.title}</h3>
          <div className="flex gap-2 text-xs text-gray-400">
            <span>{new Date(article.createdAt).toLocaleDateString()}公開</span>
            <span>{article.author}</span>
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default ArticleCard;
