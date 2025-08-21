import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "de", "uk"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const l = (locale ?? "en") as string;
  if (!(locales as readonly string[]).includes(l)) {
    notFound();
  }

  const messages = (await import(`./src/messages/${l}.json`)).default;

  return {
    locale: l,
    messages
  };
});
