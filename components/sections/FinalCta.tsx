import { ClubLogo } from "@/components/ClubLogo";
import { WhatsAppIcon } from "@/components/icons/SocialBrandIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { WHATSAPP_JOIN_URL } from "@/lib/constants";

type FinalCtaProps = {
  dict: Dictionary;
};

export function FinalCta({ dict }: FinalCtaProps) {
  const c = dict.finalCta;

  return (
    <section
      id="join"
      className="relative scroll-mt-[calc(10px+3.25rem+1rem)] px-4 pb-12 pt-2 sm:scroll-mt-[calc(10px+3.5rem+1rem)] sm:px-5 sm:pb-16 sm:pt-4 md:scroll-mt-[calc(10px+3.75rem+1rem)] md:px-8 md:pb-24"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.35rem] border border-[color-mix(in_oklab,var(--forest)_35%,transparent)] bg-[var(--forest)] px-5 py-10 text-center shadow-[0_28px_80px_-24px_rgba(26,61,52,0.55)] sm:rounded-[2rem] sm:px-8 sm:py-14 md:rounded-[2.5rem] md:px-16 md:py-20">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--sky)]/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--clay)]/20 blur-3xl"
          aria-hidden
        />
        <Reveal>
          <div className="mx-auto flex justify-center">
            <span className="rounded-full bg-white/10 p-1 ring-2 ring-white/20">
              <ClubLogo
                variant="cta"
                alt={dict.logoAlt}
                className="opacity-100"
              />
            </span>
          </div>
        </Reveal>
        <Reveal delayMs={60} className="mt-6 sm:mt-8">
          <h2 className="text-balance text-[1.5rem] font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {c.title}
          </h2>
        </Reveal>
        <Reveal delayMs={100} className="mt-3 sm:mt-4">
          <p className="mx-auto max-w-lg text-pretty text-sm text-[color-mix(in_oklab,white_82%,var(--sky-soft))] sm:text-base md:text-lg">
            {c.body}
          </p>
        </Reveal>
        <Reveal delayMs={160} className="mt-8 sm:mt-10">
          <Button
            href={WHATSAPP_JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="onDark"
            className="w-full max-w-sm px-8 sm:w-auto sm:min-w-[200px]"
          >
            <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
            {c.button}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
