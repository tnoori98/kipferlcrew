import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Viewport } from "next";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "uk" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    );
  } catch {
    notFound();
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020414" },
  ],
};
