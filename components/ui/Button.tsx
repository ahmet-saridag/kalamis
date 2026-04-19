import type { ComponentProps } from "react";

const base =
  "inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--forest)]/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40";

const variants = {
  primary:
    "bg-[var(--forest)] text-white shadow-[0_2px_0_color-mix(in_oklab,var(--forest-mid)_100%,black)_inset] hover:-translate-y-0.5 hover:bg-[var(--forest-mid)] hover:shadow-[0_14px_40px_-12px_color-mix(in_oklab,var(--forest)_50%,transparent)] active:translate-y-0",
  secondary:
    "border border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--forest)_28%,var(--line))] hover:shadow-md active:translate-y-0",
  ghost:
    "border border-transparent bg-transparent text-[var(--muted)] hover:bg-[color-mix(in_oklab,var(--sage-soft)_40%,white)] hover:text-[var(--foreground)]",
  onDark:
    "border border-white/25 bg-white text-[var(--forest)] hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,white_92%,var(--sky-soft))] hover:shadow-lg active:translate-y-0",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = Omit<ComponentProps<"a">, "className"> & {
  variant?: Variant;
  className?: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
