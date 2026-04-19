type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
  headerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-[calc(10px+3.25rem+1rem)] py-12 sm:scroll-mt-[calc(10px+3.5rem+1rem)] sm:py-16 md:scroll-mt-[calc(10px+3.75rem+1rem)] md:py-24 ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-5 md:px-8 ${containerClassName}`}
      >
        {(eyebrow || title || subtitle) && (
          <header className={`mb-9 max-w-3xl sm:mb-12 md:mb-14 ${headerClassName}`}>
            {eyebrow ? (
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--forest)]">
                <span
                  className="h-1 w-1 rounded-full bg-[var(--sky)]"
                  aria-hidden
                />
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-balance text-[1.65rem] font-semibold leading-snug tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted)] md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
