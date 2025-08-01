'use client'

import { EnvelopeIcon, MapPinIcon, PhoneCallIcon, ReadCvLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContattiSection() {
    const t = useTranslations();
    const i = useTranslations("images")
    return (
        <section className="container relative grid grid-cols-1 lg:grid-cols-2 py-22 justify-center items-center gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
                <h1 className="font-serif text-5xl md:text-7xl">{t("contacts.title.1")} <span className="underline decoration-auto hover:decoration-wavy  decoration-yellow-400">{t("contacts.title.underline")}</span></h1>
                <p className="text-xl md:text-3xl leading-normal">{t("contacts.description")}</p>
            </div>
            <div>
                <div className="flex flex-col gap-6 justify-start items-start flex-wrap  mx-auto w-full bg-accent/10 backdrop-blur-lg p-10 rounded-3xl relative z-20">
                    <div className="sm:text-xl w-fit">
                        <a href="tel:+393476179570" className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><PhoneCallIcon size={26} weight="duotone" className="text-accent" />+39 347 617 9570</a>
                    </div>
                    <div className="sm:text-xl w-fit">
                        <a href="mailto:info@teachandtaste.it" className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><EnvelopeIcon size={26} weight="duotone" className="text-accent" />info@teachandstaste.it</a>
                    </div>
                    <div className="sm:text-xl w-fit">
                        <p className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><MapPinIcon size={26} weight="duotone" className="text-accent" />{t("footer.address")}</p>
                    </div>
                    <div className="sm:text-xl w-fit">
                        <p className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><ReadCvLogoIcon size={26} weight="duotone" className="text-accent" />{t("footer.vat")}</p>
                    </div>
                </div>
            </div>
            <Image src={"/images/sketches/knife.svg"} width={250} height={250} className="absolute left-5 sm:-left-10 bottom-1 sm:bottom-0 lg:-bottom-10 -z-10 sm:z-0   xl:w-auto w-30 sm:w-36 h-auto opacity-50 hover:opacity-90 transition duration-300 ease-in-out" alt={i("knife")} />
            <Image src={"/images/sketches/tools.svg"} width={200} height={200} className="absolute right-5 md:-right-10 top-1 sm:-top-20  xl:w-auto h-30 sm:h-60 w-auto opacity-50 hover:opacity-90 transition duration-300 ease-in-out" alt={i("tools")} />
        </section>
    )
};
