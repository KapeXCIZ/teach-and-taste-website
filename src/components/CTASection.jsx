import Link from "next/link";
import CustomLink from "./CustomLink";
import { ChefHatIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";

export default function CTASection() {
    const t = useTranslations("home");
    const n = useTranslations("nav");
    const locale = useLocale();
    return (
        <section className="py-20 sm:py-26 bg-accent/10">
            {/* contenitore centrato */}
            <div className="container mx-auto px-4 max-w-4xl text-center">
                {/* frase motivazionale */}
                <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">
                    {t("cta.quote")}
                </h2>

                {/* sottotitolo */}
                <p className="text-lg md:text-xl text-neutral-700 mb-8">
                    {t("cta.subtitle")}
                </p>

                {/* doppia CTA */}
                <div className="text-sm md:text-md lg:text-lg xl:text-xl font-sans flex flex-col justify-center items-center lg:flex-row gap-4 text-nowrap">
                    <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/contatti`} variant={"solid"}>
                        <PhoneCallIcon weight="duotone" size={20} />
                        {t("cta.contact-button")}
                    </CustomLink>
                    <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/chi-sono`}>
                        <ChefHatIcon className="text-accent" weight="duotone" size={20} />
                        {n("about")}
                    </CustomLink>
                </div>
            </div>
        </section>
    );
}