import { en } from "@/locales/en";
import { fr } from "@/locales/fr";

export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export const messages = {
  fr,
  en,
} as const;

export function getMessages(locale?: string) {
  const key = (locale as Locale) ?? defaultLocale;
  return messages[key] ?? messages[defaultLocale];
}
