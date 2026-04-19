import { ClubLogo } from "@/components/ClubLogo";
import { InstagramIcon } from "@/components/icons/SocialBrandIcons";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { INSTAGRAM_URL } from "@/lib/constants";
import Link from "next/link";

type SiteFooterProps = {
  dict: Dictionary;
  locale: Locale;
};

export function SiteFooter({ dict, locale }: SiteFooterProps) {
  const f = dict.footer;

  const links = [
    { href: `/${locale}#how-it-works`, label: dict.footerLinks.how },
    { href: `/${locale}#why`, label: dict.footerLinks.why },
    { href: `/${locale}#gallery`, label: dict.footerLinks.gallery },
    { href: `/${locale}#rules`, label: dict.footerLinks.rules },
    { href: `/${locale}#join`, label: dict.footerLinks.join },
  ];

  return (
    <footer className="rounded-b-[1.35rem] border-t border-[var(--line)] bg-[var(--surface)] px-4 py-10 sm:rounded-b-[1.75rem] sm:px-5 sm:py-14 md:rounded-b-[2.75rem] md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[var(--forest)] p-0.5 ring-2 ring-[color-mix(in_oklab,var(--forest)_20%,transparent)]">
              <ClubLogo variant="footer" alt={dict.logoAlt} />
            </span>
            <div>
              <p className="font-semibold text-[var(--foreground)]">{f.club}</p>
              <p className="mt-0.5 text-sm text-[var(--muted)]">{f.location}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            {f.tagline}
          </p>
        </div>
        <nav
          className="flex flex-col gap-2 md:col-span-4"
          aria-label={dict.footerLinks.navAria}
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--forest)]">
            {dict.footerLinks.sectionTitle}
          </p>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="-mx-1 inline-flex min-h-11 items-center rounded-lg px-1 text-sm text-[var(--muted)] transition-colors hover:text-[var(--forest)] active:bg-[color-mix(in_oklab,var(--sage-soft)_35%,white)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--forest)]">
            {dict.footerLinks.socialTitle}
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 touch-manipulation items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--background)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[color-mix(in_oklab,var(--forest)_25%,var(--line))] active:scale-[0.99]"
            aria-label={f.instagramAria}
          >
            <InstagramIcon className="h-4 w-4 text-[var(--sky)]" />
            {f.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
