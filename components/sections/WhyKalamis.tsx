import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { media } from "@/lib/media";
import Image from "next/image";

type WhyKalamisProps = {
  dict: Dictionary;
};

export function WhyKalamis({ dict }: WhyKalamisProps) {
  const w = dict.why;

  return (
    <Section
      id="why"
      eyebrow={w.eyebrow}
      title={w.title}
      subtitle={w.subtitle}
      className="bg-[var(--background)]"
    >
      <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface)] shadow-xl sm:rounded-[2rem]">
            <Image
              src={media.why}
              alt={w.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/70 via-[var(--forest)]/10 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/92 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--forest)] shadow-sm backdrop-blur-sm">
              {w.imageBadge}
            </span>
            <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold leading-snug text-white drop-shadow-sm md:text-xl">
              {w.imageTagline}
            </p>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-8 sm:gap-x-10 sm:gap-y-10">
            {w.points.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 55}>
                <li className="group rounded-[1.15rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm transition-all duration-300 active:scale-[0.99] sm:rounded-2xl sm:p-6 sm:active:scale-100 md:hover:border-[color-mix(in_oklab,var(--sky)_28%,var(--line))] md:hover:shadow-md">
                  <div className="flex gap-3">
                    <span
                      className="mt-1 h-8 w-1 shrink-0 rounded-full bg-[var(--sky)]"
                      aria-hidden
                    />
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-[var(--foreground)] md:text-lg">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
