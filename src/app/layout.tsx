import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Update this with your domain
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: siteConfig.seo.twitterHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
