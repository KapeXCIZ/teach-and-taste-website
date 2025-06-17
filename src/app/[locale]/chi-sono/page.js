import ChiSonoHero from "@/components/ChiSonoHero";
import CTASection2 from "@/components/CTASection2";
import EsperienzaSection from "@/components/EsperienzaSection";

export default function Home() {

  return (
    <>
      <div className=" min-h-[80dvh]">
        <ChiSonoHero />
        <EsperienzaSection />
        <CTASection2 />
      </div>
    </>
  );
}
