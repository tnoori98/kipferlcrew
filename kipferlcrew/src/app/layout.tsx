import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

const SITE = "https://kipferlcrew.com";
const LOCALES = { en: "/en", uk: "/uk", de: "/de" };

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const locale = h.get("x-next-intl-locale") ?? "en";
  const path = h.get("x-pathname") || "";
  const url = `${SITE}${path || ""}`;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    metadataBase: new URL(SITE),
    title: {
      default: t("title"),
      template: `%s • ${t("brand")}`,
    },
    description:
      t("description"),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/assets/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE}${LOCALES.en}${path || ""}`,
        uk: `${SITE}${LOCALES.uk}${path || ""}`,
        de: `${SITE}${LOCALES.de}${path || ""}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Kipferl Crew",
      title: "Kipferl Crew",
      description:
        t("description"),
      images: [
        {
          url: "/og/og-image.png",
          width: 1200,
          height: 630,
          alt: t("alt"),
        },
      ],
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description:
        t("description"),
      images: ["/og/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    // viewport: {
    //   width: "device-width",
    //   initialScale: 1,
    // },
    // themeColor: [
    //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    //   { media: "(prefers-color-scheme: dark)", color: "#020414" },
    // ],
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const locale = h.get("x-next-intl-locale") ?? "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kipferl Crew",
    url: SITE,
    logo: `${SITE}/assets/logo.svg`,
    sameAs: ["https://www.instagram.com/kipferlcrew"],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        {children}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
