import { PageShell } from "@/components/layout/PageShell";
import { FinalCta } from "@/components/sections/FinalCta";
import { FutureFeatures } from "@/components/sections/FutureFeatures";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SystemRules } from "@/components/sections/SystemRules";
import { TennisGallery } from "@/components/sections/TennisGallery";
import { WhyKalamis } from "@/components/sections/WhyKalamis";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam;
  const dict = getDictionary(locale);

  return (
    <PageShell>
      <SiteHeader locale={locale} dict={dict} />
      <main className="text-[var(--foreground)]">
        <Hero locale={locale} dict={dict} />
        <HowItWorks dict={dict} />
        <WhyKalamis dict={dict} />
        <TennisGallery dict={dict} />
        <SystemRules dict={dict} />
        <FutureFeatures dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <SiteFooter dict={dict} locale={locale} />
    </PageShell>
  );
}
