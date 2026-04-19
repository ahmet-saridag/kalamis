import { ClubLogo } from "@/components/ClubLogo";
import {
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialBrandIcons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { INSTAGRAM_URL, WHATSAPP_JOIN_URL } from "@/lib/constants";
import Link from "next/link";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  return (
    <header className="sticky top-[10px] z-50 rounded-b-[1.35rem] rounded-t-[1.35rem] border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--background)_94%,white)] backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--background)_88%,white)] sm:rounded-b-[1.75rem] sm:rounded-t-[1.75rem] md:rounded-b-[2.75rem] md:rounded-t-[2.75rem]">
      <div className="mx-auto flex h-[3.25rem] max-w-6xl items-center justify-between gap-2 px-4 sm:h-14 sm:gap-3 sm:px-5 md:h-[3.75rem] md:gap-4 md:px-8">
        <Link
          href={`/${locale}`}
          className="-ml-1 flex min-h-11 min-w-11 items-center justify-center rounded-full p-1 transition-opacity hover:opacity-90 active:opacity-80 sm:ml-0 sm:min-h-0 sm:min-w-0 sm:justify-start sm:p-0"
          aria-label={dict.nav.brandAria}
        >
          <span className="rounded-full bg-[var(--forest)] p-0.5 ring-2 ring-[color-mix(in_oklab,var(--forest)_25%,transparent)]">
            <ClubLogo variant="header" alt={dict.logoAlt} priority />
          </span>
        </Link>
        <div className="flex min-w-0 shrink items-center gap-1 sm:gap-3 md:gap-4">
          <LanguageSwitcher locale={locale} dict={dict} />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-[var(--muted)] transition-colors duration-300 hover:text-[var(--forest)] active:bg-[color-mix(in_oklab,var(--sage-soft)_55%,white)] sm:h-auto sm:w-auto sm:gap-1.5 sm:px-1 sm:py-2"
            aria-label={dict.nav.instagramAria}
          >
            <InstagramIcon className="h-[1.125rem] w-[1.125rem] text-[var(--sky)] sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{dict.nav.instagram}</span>
          </a>
          <a
            href={WHATSAPP_JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-[var(--muted)] transition-colors duration-300 hover:text-[var(--forest)] active:bg-[color-mix(in_oklab,var(--sage-soft)_55%,white)] sm:h-auto sm:w-auto sm:gap-1.5 sm:px-1 sm:py-2"
            aria-label={dict.nav.apply}
          >
            <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] text-[var(--forest)] sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{dict.nav.apply}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
