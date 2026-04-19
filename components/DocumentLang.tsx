"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export function DocumentLang() {
  const pathname = usePathname();

  useEffect(() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    const lang = seg && isLocale(seg) ? seg : defaultLocale;
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
