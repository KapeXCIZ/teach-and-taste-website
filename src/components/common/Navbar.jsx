'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChefHatIcon, PhoneCallIcon } from "@phosphor-icons/react";
import CustomLink from "../CustomLink";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Button from "../Button";



export default function Navbar({ locale }) {
    const pathName = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations("nav");
    const router = useRouter();
    const currentLocale = locale;

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function switchLocale() {
        const newLocale = currentLocale === 'it' ? 'en' : 'it';
        // Sostituisci il locale nella pathname
        const newPath = pathName.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath);
    }

    return (
        <nav className={cn(" w-full h-22 sticky top-0 z-50 bg-bg flex items-center justify-between border-accent/20", isScrolled ? "shadow-lg bg-bg/90 backdrop-blur-lg" : "")}>
            <div className="container flex  items-center justify-between gap-1">
                <Link href={"/"} className="flex flex-column gap-2 justify-content-center items-center">
                    <Image className="" alt="Site logo" src={"/images/logo.svg"} width={64} height={64} />
                    <div className="text-accent tracking-[.2em]  sm:block hidden">TEACH AND TASTE</div>
                </Link>
                <div className="flex flex-column gap-1 sm:gap-2 text-xs lg:text-lg text-nowrap justify-center items-center">
                    <CustomLink buttonClassName="gap-1 sm:gap-2" href={`/${locale}/chi-sono`}><ChefHatIcon className="text-accent" weight="duotone" size={20} />{t("about")}</CustomLink>
                    <CustomLink buttonClassName="gap-1 sm:gap-2" href={`/${locale}/contatti`} ><PhoneCallIcon className="text-accent" weight="duotone" size={20} />{t("contacts")}</CustomLink>
                    <Button onClick={switchLocale} className="px-3 text-lg">{locale === "en" ? "🇮🇹" : "🇬🇧"}</Button>
                </div>
            </div>
        </nav>
    );
};
