// NOTE: トップページ

import ArticleCardList from "@/components/ArticleCardList";
import Hero from "@/components/layouts/Hero";
import LoadMoreButton from "@/components/LoadMoreButton";
import { getAllArticles } from "@/libs/api";

export default async function Home() {
  try {
    // microCMSから記事データを全取得
    const { articles, totalCount } = await getAllArticles(6, 0);

    return (
      <>
        <Hero title="Welcome to the IT Media Next.js App" />
        {/* 記事一覧 */}
        <main className="container mx-auto px-4">
          <div className="mx-auto text-center py-8">
            <div className="mt-32">
              <h2 className="text-2xl font-bold md:text-3xl">Article List</h2>
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
    console.error("Error fetching articles:", error);
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Failed to fetch articles</h2>
        <p className="mt-4">Please try again.</p>
      </div>
    );
  }
}
