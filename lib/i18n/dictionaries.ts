import type { Locale } from "./config";
import { defaultLocale, isLocale } from "./config";
import en from "@/messages/en.json";
import tr from "@/messages/tr.json";

export type Dictionary = typeof tr;

const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
};

export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
