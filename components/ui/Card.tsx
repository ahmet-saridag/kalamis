type CardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function Card({ icon, title, description, className = "" }: CardProps) {
  return (
    <article
      className={`group rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_2px_24px_-8px_rgba(26,61,52,0.12)] transition-all duration-300 hover:border-[color-mix(in_oklab,var(--forest)_22%,var(--line))] hover:shadow-[0_12px_40px_-12px_rgba(26,61,52,0.18)] md:p-8 ${className}`}
    >
      {icon ? (
        <div
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--sage-soft)_55%,white)] text-[var(--forest)] transition-colors duration-300 group-hover:border-[color-mix(in_oklab,var(--sky)_35%,var(--line))]"
          aria-hidden
        >
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
        {description}
      </p>
    </article>
  );
}
