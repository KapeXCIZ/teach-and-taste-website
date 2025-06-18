'use client'

import Image from "next/image";
import CustomLink from "../CustomLink";
import { ChefHatIcon, CookieIcon, CopyrightIcon, EnvelopeIcon, HeartIcon, MapPinIcon, PhoneCallIcon, ReadCvLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import PrivacyModal from "../PrivacyModal";
import CookieModal from "../CookieModal";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations();
    const locale = useLocale();
    return (
        <footer className="w-full h-fit bg-bg-white border-t border-t-accent/50 py-6 pb-8">
            <div className="container flex flex-col md:flex-row justify-center items-center gap-4">
                <Link href={`/${locale}/`} className="order-1 md:order-2">
                    <Image className=" h-auto w-auto max-w-[400px]" src={"/images/logo-extended-1.svg"} width={200} height={200} alt="Footer logo extended" />
                </Link>
                <div className="w-full h-[100%] order-2 md:order-1">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 text-accent text-nowrap w-fit mx-auto *:mx-auto">
                        <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/chi-sono`}><ChefHatIcon size={16} weight="duotone" />{t("nav.about")}</CustomLink>
                        <CustomLink buttonClassName="gap-2 w-fit" href={`/${locale}/contatti`}><PhoneCallIcon size={16} weight="duotone" /> {t("footer.contacts")}</CustomLink>
                        <CookieModal />
                        <PrivacyModal />
                    </div>
                    <hr className="text-accent/50 my-6 lg:mx-16" />
                    <div className="flex flex-col  md:flex-row gap-8 justify-start lg:justify-around items-center flex-wrap py-3 mx-auto w-fit">
                        <div className="sm:text-md w-fit">
                            <a href="tel:+393476179570" className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><PhoneCallIcon size={26} weight="duotone" className="text-accent" />+39 347 617 9570</a>
                        </div>
                        <div className="sm:text-md w-fit">
                            <a href="mailto:info@teachandtaste.it" className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><EnvelopeIcon size={26} weight="duotone" className="text-accent" />info@teachandstaste.it</a>
                        </div>
                        <div className="sm:text-md w-fit">
                            <p className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><MapPinIcon size={26} weight="duotone" className="text-accent" />{t("footer.address")}</p>
                        </div>
                        <div className="sm:text-md w-fit">
                            <p className="flex flex-row justify-center items-start gap-1 hover:underline underline-offset-3 decoration-accent/50"><ReadCvLogoIcon size={26} weight="duotone" className="text-accent" />{t("footer.vat")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-6 container text-nowrap gap-1">
                <div className="text-xs text-neutral-500 flex flex-row items-center gap-1">
                    <CopyrightIcon /> {new Date().getFullYear()} Teach and Taste. {t("footer.rights")}
                </div>
                <div className="text-xs text-neutral-500 mx-1 hidden sm:block">
                    |
                </div>
                <Link href={"https://alessio-capecchi-photographer.netlify.app/"} className="text-xs text-neutral-500 flex flex-row gap-1 justify-center items-center">
                    Made with<HeartIcon weight="fill" />by Alessio Capecchi
                </Link>
            </div>
        </footer>
    )
};
