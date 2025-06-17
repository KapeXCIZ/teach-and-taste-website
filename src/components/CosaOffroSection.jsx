import { ChefHatIcon, ForkKnifeIcon, GraduationCapIcon, OvenIcon } from "@phosphor-icons/react";
import ServicesCard from "./ServicesCard";
import { useTranslations } from "next-intl";


export default function CosaOffroSection() {
    const t = useTranslations("home");
    const services = t.raw("services.list");
    return (
        <section className=" w-full bg-amber-100 py-10 md:py-20 fixed-bg ">
            <div className="container flex flex-col gap-10 md:gap-14">
                <h1 className="font-serif font-bold text-6xl md:text-7xl text-shadow-lg text-shadow-accent text-center text-white lg:tracking-wide xl:tracking-wider">{t("services.title")}</h1>
                <p className="text-white text-2xl md:text-3xl text-shadow-lg text-shadow-accent lg:text-4xl">{t("services.subtitle")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8 ">
                    <ServicesCard icon={<ChefHatIcon weight="duotone" />} title={services[0].title} description={services[0].description} alt={services[0].alt} />
                    <ServicesCard icon={<GraduationCapIcon weight="duotone" />} title={services[1].title} description={services[1].description} alt={services[1].alt} />
                    <ServicesCard icon={<OvenIcon weight="duotone" />} title={services[2].title} description={services[2].description} alt={services[2].alt} />
                    <ServicesCard icon={<ForkKnifeIcon weight="duotone" />} title={services[3].title} description={services[3].description} alt={services[3].alt} />
                </div>
            </div>
        </section>
    )
};
