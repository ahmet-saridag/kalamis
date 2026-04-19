import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { media } from "@/lib/media";
import Image from "next/image";

type TennisGalleryProps = {
  dict: Dictionary;
};

export function TennisGallery({ dict }: TennisGalleryProps) {
  const g = dict.gallery;

  return (
    <Section
      id="gallery"
      eyebrow={g.eyebrow}
      title={g.title}
      subtitle={g.subtitle}
      className="bg-[var(--surface)]"
    >
      <Reveal>
        {/* Mobil: yatay kaydırma · md+: 2 sütun grid · lg: 4 sütun, yatay scroll yok */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-1 [-webkit-overflow-scrolling:touch] scrollbar-hide touch-pan-x sm:-mx-5 sm:gap-4 sm:px-5 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {media.gallery.map((src, i) => (
            <figure
              key={src}
              className="relative aspect-[3/4] w-[min(72vw,260px)] shrink-0 snap-start overflow-hidden rounded-[1.15rem] border border-[var(--line)] shadow-lg sm:w-[min(78vw,280px)] sm:rounded-2xl md:w-full"
            >
              <Image
                src={src}
                alt={g.alts[i] ?? ""}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 72vw, (max-width: 767px) 78vw, (max-width: 1023px) 45vw, 25vw"
              />
              <figcaption className="sr-only">{g.alts[i]}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 flex items-center justify-center gap-2 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] md:hidden">
          <span
            className="h-px w-6 bg-[color-mix(in_oklab,var(--forest)_22%,var(--line))]"
            aria-hidden
          />
          {g.swipeHint}
          <span
            className="h-px w-6 bg-[color-mix(in_oklab,var(--forest)_22%,var(--line))]"
            aria-hidden
          />
        </p>
      </Reveal>
    </Section>
  );
}
