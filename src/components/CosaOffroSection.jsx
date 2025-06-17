import { ChefHatIcon, ForkKnifeIcon, GraduationCapIcon, OvenIcon } from "@phosphor-icons/react";
import ServicesCard from "./ServicesCard";


export default function CosaOffroSection() {
    return (
        <section className=" w-full bg-amber-100 py-10 md:py-20 fixed-bg ">
            <div className="container flex flex-col gap-10 md:gap-14">
                <h1 className="font-serif font-bold text-6xl md:text-7xl text-shadow-lg text-shadow-accent text-center text-white lg:tracking-wide xl:tracking-wider">Cosa offro?</h1>
                <p className="text-white text-3xl text-shadow-lg text-shadow-accent lg:text-4xl">Ti offro esperienze culinarie su misura, portando la cucina professionale direttamente a casa tua o nei tuoi eventi.</p>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8 ">
                    <ServicesCard icon={<ChefHatIcon weight="duotone" />} title={"Chef a domicilio"} description={"Un’esperienza culinaria privata direttamente a casa tua. Che si tratti di una cena intima, una ricorrenza o una serata speciale tra amici, mi occupo di tutto: dalla spesa all’impiattamento."} />
                    <ServicesCard icon={<GraduationCapIcon weight="duotone" />} title={"Corsi di cucina"} description={"Lezioni pratiche pensate per ogni livello, realizzate su misura per te. A casa tua o al mio laboratorio, per imparare tecniche, ricette e segreti della cucina, in un ambiente informale e coinvolgente."} />
                    <ServicesCard icon={<OvenIcon weight="duotone" />} title={"Catering per eventi"} description={"Il miglior ristorante, a casa tua. Scegli tu il tipo di esperienza: una cena, un evento, o una lezione di cucina."} />
                    <ServicesCard icon={<ForkKnifeIcon weight="duotone" />} title={"Consulenza gastronomica"} description={"Supporto per lo sviluppo del menù, analisi dei costi, pianificazione cooking show ed ottimizzazione degli spazi."} />
                </div>
            </div>
        </section>
    )
};
