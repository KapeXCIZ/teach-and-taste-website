'use client'
import CustomLink from "./CustomLink";

import { ChefHatIcon, PhoneCallIcon } from "@phosphor-icons/react";

export default function CTASection2() {
    return (
        <section className="py-26 ">
            {/* contenitore centrato */}
            <div className="container mx-auto px-4 max-w-4xl text-center flex flex-col gap-4">
                {/* frase motivazionale */}
                <h2 className="text-3xl md:text-3xl  text-accent mb-4">
                    Se vuoi portare un’esperienza di cucina autentica nella tua casa o nel tuo evento, sarò felice di cucinare per te.
                </h2>


                {/* doppia CTA */}
                <div className="text-sm md:text-md lg:text-lg xl:text-xl font-sans flex flex-col justify-center items-center lg:flex-row gap-4 text-nowrap">
                    <CustomLink buttonClassName="gap-2 w-fit" href="/contatti" variant={"solid"}><PhoneCallIcon weight="duotone" size={20} />Contattami</CustomLink>
                </div>
            </div>
        </section>
    );
}