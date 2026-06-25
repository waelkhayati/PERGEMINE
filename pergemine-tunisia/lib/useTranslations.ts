"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getMessages, defaultLocale, Locale } from "@/lib/i18n";

export function useTranslations() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  const locale = useMemo<Locale>(() => {
    const match = pathname.match(/^\/(fr|en)(?:\/|$)/);
    return (match?.[1] as Locale) ?? defaultLocale;
  }, [pathname]);

  const messages = useMemo(() => getMessages(locale), [locale]);

  const t = (path: string, values?: Record<string, string | number>) => {
    const sections = path.split(".");
    let result: unknown = messages;

    for (const section of sections) {
      result = typeof result === "object" && result !== null ? (result as any)[section] : undefined;
      if (result === undefined) break;
    }

    if (typeof result !== "string") {
      return path;
    }

    if (!values) return result;

    return Object.entries(values).reduce(
      (text, [key, value]) => text.replace(new RegExp(`\\{${key}\\}`, "g"), String(value)),
      result,
    );
  };

  const getPathWithoutLocale = (path: string) => path.replace(/^\/(?:fr|en)(?=\/|$)/, "");

  const switchLocale = (nextLocale: Locale) => {
    const basePath = getPathWithoutLocale(pathname);
    const normalizedPath = basePath === "/" ? "" : basePath;
    const target = `/${nextLocale}${normalizedPath}`;
    router.push(target);
  };

  const createLocalizedHref = (href: string) => {
    const path = href.startsWith("/") ? href : `/${href}`;
    const basePath = getPathWithoutLocale(pathname);
    if (locale === defaultLocale && !pathname.startsWith(`/${locale}`)) {
      return path;
    }
    return `/${locale}${path}`.replace(/\/\/+/g, "/");
  };

  return { locale, messages, t, switchLocale, createLocalizedHref };
}
