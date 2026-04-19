"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

const otherLocale: Record<Locale, Locale> = {
  tr: "en",
  en: "tr",
};

type LanguageSwitcherProps = {
  locale: Locale;
  dict: Dictionary;
};

export function LanguageSwitcher({ locale, dict }: LanguageSwitcherProps) {
  const next = otherLocale[locale];

  return (
    <a
      href={`/${next}`}
      onClick={(e) => {
        const hash =
          typeof window !== "undefined" ? window.location.hash : "";
        if (hash) {
          e.preventDefault();
          window.location.assign(`/${next}${hash}`);
        }
      }}
      className="inline-flex h-11 min-w-[2.75rem] touch-manipulation items-center justify-center rounded-full border border-[var(--line)] bg-transparent px-3 text-xs font-semibold tracking-wide text-[var(--muted)] transition-all duration-300 hover:border-[color-mix(in_oklab,var(--forest)_30%,var(--line))] hover:text-[var(--forest)] active:bg-[color-mix(in_oklab,var(--sage-soft)_45%,white)] sm:h-9 sm:min-w-0 sm:py-1"
      aria-label={dict.nav.switchLangAria}
    >
      {dict.nav.switchLangShort}
    </a>
  );
}
