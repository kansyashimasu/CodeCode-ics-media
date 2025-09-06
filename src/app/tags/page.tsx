// NOTE: タグ一覧ページ

import Hero from "@/components/layouts/Hero";
import { getAllTags } from "@/libs/api";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

// 動的メタデータの作成
export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title: "All Tags",
    };
  } catch (error) {
    console.error("Metadata generation error", error);

    return {
      title: "Tags Not Found",
      description: "The specified tags do not exist",
    };
  }
}

const Tags = async () => {
  // タグを全取得
  const { tags } = await getAllTags();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Hero title="Article Tags" />
      <main className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-6xl mx-auto">
          {/* タグ一覧 */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-12 mt-16">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
              All Tags
            </h3>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.id}`} className="group">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-950 hover:to-purple-950 rounded-lg px-4 py-3 border border-gray-600 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {tag.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tags;
