'use client'

import Image from "next/image";

export default function EsperienzaSection() {
    return (
        <section className="container">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-6 md:my-10 bg-accent/10 p-10 rounded-3xl md:max-w-10/12 mx-auto">
                <div className="flex flex-col gap-4 md:gap-6 md:py-6">
                    <h3 className="text-3xl xl:text-5xl font-semibold grow-0u text-accent">Quasi trent’anni di esperienza, tra tecnica e passione</h3>
                    <p className="text-base xl:text-2xl">Ciò che porto in tavola è quasi trent'anni di esperienza nel settore della ristorazione.<br /> Il mio percorso si è formato attraverso una vasta gamma di esperienze: dalla cucina più raffinata e gourmet, fino alle radici profonde della tradizione culinaria.</p>
                </div>
                <Image src={"/sketches/pots.svg"} className="h-full w-auto grow" width={100} height={100} alt="Illustrazione di padelle" />
            </div>
        </section>
    )
};
