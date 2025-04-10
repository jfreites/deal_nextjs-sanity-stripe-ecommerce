import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import { getCurrentSession } from "@/actions/auth";
import { SanityLive } from "@/sanity/lib/live";
import HeaderCategorySelector from "@/components/layout/HeaderCategorySelector";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Deal Store",
  description: "The best offers all in one place",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = await getCurrentSession()

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header user={user} categorySelector={<HeaderCategorySelector />} />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}

export default RootLayout
