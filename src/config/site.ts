// NOTE: メタデータ設定

import { Metadata } from "next";

export const siteConfig = {
  name: "IT Media for Next.js App",
  title: "IT Media for Next.js App",
  description: "A Next.js app integrated with microCMS",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE_URL || "opengraph-image.jpg",
  icon: "/favicon.ico",
  creator: "CodeCode",
  type: "website",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "プログラミング",
    "Web開発",
  ],
} as const;

export const defaultMetadata: Metadata = {
  // metadataBaseを追加
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  authors: {
    name: siteConfig.creator,
    url: siteConfig.url,
  },
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.description,
      },
    ],
  },
  icons: {
    icon: siteConfig.icon,
    shortcut: siteConfig.icon,
    apple: siteConfig.icon,
  },
};
