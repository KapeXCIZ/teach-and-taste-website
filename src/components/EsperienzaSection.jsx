'use client'

import Image from "next/image";
import { useTranslations } from "use-intl";

export default function EsperienzaSection() {
    const t = useTranslations("about.experience");
    return (
        <section className="container">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-6 md:my-10 bg-accent/10 p-10 rounded-3xl md:max-w-10/12 mx-auto">
                <div className="flex flex-col gap-4 md:gap-6 md:py-6">
                    <h3 className="text-3xl xl:text-5xl font-semibold grow-0u text-accent">{t("title")}</h3>
                    <p className="text-base xl:text-2xl">{t("description")}</p>
                </div>
                <Image src={"/images/sketches/pots.svg"} className="h-full w-auto grow" width={100} height={100} alt="Illustrazione di padelle" />
            </div>
        </section>
    )
};
