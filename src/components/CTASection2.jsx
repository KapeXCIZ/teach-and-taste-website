'use client'
import CustomLink from "./CustomLink";
import { ChefHatIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";

export default function CTASection2() {
    const t = useTranslations("home");
    const locale = useLocale();
    return (
        <section className="py-26 ">
            {/* contenitore centrato */}
            <div className="container mx-auto px-4 max-w-4xl text-center flex flex-col gap-4">
                {/* frase motivazionale */}
                <h2 className="text-3xl md:text-3xl  text-accent mb-4">
                    {t("cta2.quote")}
                </h2>


                {/* doppia CTA */}
                <div className="text-sm md:text-md lg:text-lg xl:text-xl font-sans flex flex-col justify-center items-center lg:flex-row gap-4 text-nowrap">
                    <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/contatti`} variant={"solid"}><PhoneCallIcon weight="duotone" size={20} />{t("cta2.contact-button")}</CustomLink>
                </div>
            </div>
        </section>
    );
}