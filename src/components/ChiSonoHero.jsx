'use client'

import { useTranslations } from "next-intl"
import Image from "next/image"

export default function ChiSonoHero() {
    const t = useTranslations("about.hero")

    return (
        <header className="container">
            <div className="flex flex-col md:flex-row py-10 md:py-20 xl:py-30 gap-8 mx-auto md:max-w-10/12">
                <div className="flex-shrink-0 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[400px]">
                    <Image
                        src={"/eduard.png"}
                        className="rounded-full mx-auto w-full h-auto"
                        width={1000}
                        height={1000}
                        alt="Chef Eduard photo"
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 240px, (max-width: 1024px) 320px, 400px"
                    />
                </div>
                <div className="flex flex-col justify-center gap-4 lg:gap-10 ">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif">
                        {t("title")} <span className="underline decoration-auto hover:decoration-wavy decoration-yellow-400">Eduard</span>
                    </h1>
                    <h3 className="text-base md:text-xl lg:text-2xl xl:text-3xl">
                        {t("description")}
                    </h3>
                </div>
            </div>
        </header>
    )
};
