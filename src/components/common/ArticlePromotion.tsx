// NOTE: プロモーション用コンポーネント

import Link from "next/link";
import React from "react";

const ArticlePromotion = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-xl p-6 my-8">
      {/* ヘッダー */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">
          <span
            className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse"
            style={{ animationDuration: "4s" }}
          >
            Delivering the Latest Tech Information
          </span>
        </h3>
        <p className="text-gray-300 text-sm">
          Regularly delivering the latest programming trends and best practices
        </p>
      </div>

      {/* メインコンテンツ */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* ニュースレター */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold">Newsletter</h4>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            We deliver carefully selected tech articles once a week
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
            />
            <button className="bg-black hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* SNSフォロー */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="text-white font-semibold">Follow Us</h4>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Get notifications for the latest articles
          </p>
          <div className="flex gap-2">
            <Link
              href={`https://x.com/stylishcoding`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </Link>
            <Link
              href={`https://github.com/kansyashimasu`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black hover:bg-gray-600 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* 関連リンク */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          Tech Blog
        </a>
        <span className="text-gray-600">•</span>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          Tutorials
        </a>
        <span className="text-gray-600">•</span>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          Contact
        </a>
        <span className="text-gray-600">•</span>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default ArticlePromotion;
