import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { media } from "@/lib/media";
import Image from "next/image";

const stepIcons = [
  <svg
    key="poll"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z" />
    <path d="M9 12h6M9 16h6" />
  </svg>,
  <svg
    key="selection"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>,
  <svg
    key="match"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M16.5 8.5L21 4M21 4h-4.5M21 4v4.5M7.5 15.5L3 20M3 20v-4.5M3 20h4.5" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  <svg
    key="play"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 019 9" />
    <path d="M12 3a9 9 0 00-9 9" />
  </svg>,
] as const;

type HowItWorksProps = {
  dict: Dictionary;
};

export function HowItWorks({ dict }: HowItWorksProps) {
  const s = dict.howItWorks;

  return (
    <Section
      id="how-it-works"
      eyebrow={s.eyebrow}
      title={s.title}
      subtitle={s.subtitle}
      className="bg-[color-mix(in_oklab,var(--surface)_88%,var(--sage-soft))]"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {s.steps.map((step, i) => (
          <Reveal key={step.title} delayMs={i * 70}>
            <div className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_4px_28px_-12px_rgba(26,61,52,0.15)] transition-shadow duration-300 active:scale-[0.99] sm:rounded-3xl sm:active:scale-100 md:hover:shadow-[0_16px_40px_-16px_rgba(26,61,52,0.22)]">
              <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-[16/11]">
                <Image
                  src={media.howStepSrc[i]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-7">
                <div className="mb-4 text-[var(--forest)]">{stepIcons[i]}</div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
