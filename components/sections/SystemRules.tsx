import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SystemRulesProps = {
  dict: Dictionary;
};

export function SystemRules({ dict }: SystemRulesProps) {
  const r = dict.rules;

  return (
    <Section
      id="rules"
      eyebrow={r.eyebrow}
      title={r.title}
      subtitle={r.subtitle}
      className="bg-[color-mix(in_oklab,var(--sage-soft)_42%,var(--background))]"
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {r.items.map((rule, i) => (
          <Reveal key={rule} delayMs={i * 55}>
            <div className="flex gap-3 rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm sm:gap-4 sm:rounded-3xl sm:p-6 md:p-7">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--forest)] text-sm font-bold text-white"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
                {rule}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
