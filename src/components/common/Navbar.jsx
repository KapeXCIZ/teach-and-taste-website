'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChefHatIcon, PhoneCallIcon } from "@phosphor-icons/react";
import CustomLink from "../CustomLink";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function Navbar({ }) {
    const pathName = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={cn(" w-full h-22 sticky top-0 z-50 bg-bg flex items-center justify-between border-accent/20", isScrolled ? "shadow-lg bg-bg/90 backdrop-blur-lg" : "")}>
            <div className="container flex  items-center justify-between">
                <Link href={"/"} className="flex flex-column gap-2 justify-content-center items-center">
                    <Image className="" alt="Site logo" src={"/logo.svg"} width={64} height={64} />
                    <div className="text-accent tracking-[.2em]  sm:block hidden">TEACH AND TASTE</div>
                </Link>
                <div className="flex flex-column sm:gap-2 text-sm lg:text-lg">
                    <CustomLink href="" linkClassName=" text-xl">🇬🇧</CustomLink>
                    <CustomLink buttonClassName="gap-2" href="/chi-sono"><ChefHatIcon className="text-accent" weight="duotone" size={20} />Chi sono</CustomLink>
                    <CustomLink buttonClassName="gap-2" href="/contatti" ><PhoneCallIcon className="text-accent" weight="duotone" size={20} />Contatti</CustomLink>
                </div>
            </div>
        </nav>
    );
};
