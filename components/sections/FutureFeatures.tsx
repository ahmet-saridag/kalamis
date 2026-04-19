import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { media } from "@/lib/media";
import Image from "next/image";

type FutureFeaturesProps = {
  dict: Dictionary;
};

export function FutureFeatures({ dict }: FutureFeaturesProps) {
  const f = dict.roadmap;

  return (
    <Section
      id="roadmap"
      eyebrow={f.eyebrow}
      title={f.title}
      subtitle={f.subtitle}
      className="bg-[var(--background)]"
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {f.items.map((item, i) => (
          <Reveal key={item.title} delayMs={i * 90}>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_8px_36px_-16px_rgba(26,61,52,0.2)] sm:rounded-[2rem]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={media.roadmap[i]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--sky)]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
                  {item.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
