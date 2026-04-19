import { CLUB_LOGO_PATH } from "@/lib/constants";
import Image from "next/image";

const variantClass = {
  header: "h-9 w-9 md:h-10 md:w-10",
  hero: "h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32",
  cta: "mx-auto h-14 w-14 sm:h-16 sm:w-16",
  footer: "h-11 w-11 md:h-12 md:w-12",
} as const;

export type ClubLogoVariant = keyof typeof variantClass;

type ClubLogoProps = {
  variant: ClubLogoVariant;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ClubLogo({
  variant,
  alt,
  className = "",
  priority = false,
}: ClubLogoProps) {
  return (
    <Image
      src={CLUB_LOGO_PATH}
      alt={alt}
      width={1024}
      height={1024}
      priority={priority}
      sizes={
        variant === "hero"
          ? "(max-width: 768px) 112px, 128px"
          : variant === "header"
            ? "40px"
            : variant === "cta"
              ? "64px"
              : "48px"
      }
      className={`rounded-full object-contain ${variantClass[variant]} ${className}`}
    />
  );
}
