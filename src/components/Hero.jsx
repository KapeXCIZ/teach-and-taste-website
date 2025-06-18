'use client'

import Image from "next/image";
import CustomLink from "./CustomLink";
import { ChefHatIcon, PhoneCallIcon } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";

export default function Hero({ }) {
    const t = useTranslations("home");
    const i = useTranslations("images");
    const locale = useLocale();

    return (
        <header className="w-full grid grid-cols-1 md:grid-cols-2 mt-20 gap-2 container relative ">
            <div className="flex flex-col gap-4 lg:gap-10 order-2  md:order-1 ">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif ">{t("hero.title.1")} <span className=" italic">{t("hero.title.italic")}</span>{t("hero.title.2")} <span className="underline decoration-auto hover:decoration-wavy  decoration-yellow-400">{t("hero.title.underline")}</span>:</h1>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">{t("hero.description")}</p>
                {/* alt: Cooking class, chef a domicilio ed eventi privati: vivi la cucina come non l’hai mai fatta */}
                <div className="text-sm md:text-md lg:text-lg xl:text-xl font-sans flex flex-col lg:flex-row gap-4 text-nowrap">
                    <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/contatti`} variant={"solid"}><PhoneCallIcon weight="duotone" size={20} />{t("hero.cta-button")}</CustomLink>
                    <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/chi-sono`}><ChefHatIcon className="text-accent" weight="duotone" size={20} />{t("hero.about")}</CustomLink>
                </div>
            </div>
            <Image src={"/images/Hero Image.png"} width={1500} height={1500} className="z-30 pointer-events-none" alt={t("hero.alt.dishes")} />
            <Image src={"/images/sketches/onion.svg"} width={250} height={250} className="absolute left-5 md:-left-10 -top-10 -z-10 sm:z-0   xl:w-auto w-36 h-auto opacity-50 hover:opacity-90 transition duration-300 ease-in-out" alt={i("onion")} />
            <Image src={"/images/sketches/cheese.svg"} width={200} height={200} className="absolute right-5 md:-right-10 -bottom-10  xl:w-auto w-32 h-auto opacity-50 hover:opacity-90 transition duration-300 ease-in-out" alt={i("cheese")} />
        </header>
    )
};
