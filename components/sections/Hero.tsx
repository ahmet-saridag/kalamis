import { ClubLogo } from "@/components/ClubLogo";
import { WhatsAppIcon } from "@/components/icons/SocialBrandIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { WHATSAPP_JOIN_URL } from "@/lib/constants";
import { media } from "@/lib/media";
import Image from "next/image";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Hero({ locale, dict }: HeroProps) {
  const h = dict.hero;

  return (
    <header className="court-veil relative">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-6 sm:gap-10 sm:px-5 sm:pb-16 sm:pt-10 md:gap-14 md:px-8 md:pb-24 md:pt-12 lg:min-h-[min(100dvh,56rem)] lg:grid-cols-2 lg:gap-16 lg:pt-12">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <Reveal>
            <div className="mb-4 flex items-center gap-4 sm:mb-6">
              <ClubLogo
                variant="hero"
                alt={dict.logoAlt}
                priority
                className="drop-shadow-[0_10px_28px_rgba(26,61,52,0.2)]"
              />
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <span className="inline-flex w-fit rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--forest)] shadow-sm">
              {h.badge}
            </span>
          </Reveal>
          <Reveal delayMs={120} className="mt-5 sm:mt-6">
            <h1 className="max-w-xl text-balance text-[1.875rem] font-semibold leading-[1.12] tracking-[-0.03em] text-[var(--foreground)] min-[400px]:text-[2rem] sm:text-4xl sm:leading-tight md:text-6xl md:leading-[1.06]">
              {h.titleBefore}{" "}
              <span className="bg-gradient-to-r from-[var(--forest)] via-[var(--forest-mid)] to-[var(--sky)] bg-clip-text text-transparent">
                {h.titleEmphasis}
              </span>
            </h1>
          </Reveal>
          <Reveal delayMs={180} className="mt-5 sm:mt-6">
            <p className="max-w-lg text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg md:text-xl">
              {h.subtitle}
            </p>
          </Reveal>
          <Reveal delayMs={240} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button
              href={WHATSAPP_JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
              {h.primaryCta}
            </Button>
            <Button
              href={`/${locale}#how-it-works`}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {h.secondaryCta}
            </Button>
          </Reveal>
          <Reveal delayMs={300} className="mt-8 border-t border-[var(--line)] pt-6 sm:mt-10 sm:pt-8">
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {h.note}
            </p>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal delayMs={100}>
            <div className="relative mx-auto aspect-[4/5] max-h-[min(62vh,420px)] w-full max-w-md overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(26,61,52,0.35)] sm:max-h-[min(72vh,560px)] sm:rounded-[2rem] lg:max-w-none">
              <Image
                src={media.hero}
                alt={h.heroSpotlightAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/55 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-xs font-medium leading-snug text-white/95 drop-shadow-md sm:bottom-5 sm:left-5 sm:right-5 sm:text-sm">
                {h.heroPhotoCaption}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
