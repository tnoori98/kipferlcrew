import {getRequestConfig} from "next-intl/server";
import {createNavigation} from "next-intl/navigation";
import {notFound} from "next/navigation";

export const locales = ["en", "de", "uk"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  const l = (locale ?? "en") as string;

  if (!(locales as readonly string[]).includes(l)) {
    notFound();
  }

  const messages = (await import(`../messages/${l}.json`)).default;

  return {
    locale: l,
    messages
  };
});

export const {Link, redirect, usePathname, useRouter} = createNavigation({locales, pathnames: {}});
