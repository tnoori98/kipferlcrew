import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "uk"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(en|de|uk)/:path*"],
};
