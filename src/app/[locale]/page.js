'use client'
import CosaOffroSection from "@/components/CosaOffroSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  const slides = [
    '/images/piatti/1.jpg',
    '/images/piatti/2.jpg',
    '/images/piatti/4.jpg',
    '/images/piatti/5.jpg',
    '/images/piatti/6.jpg',
    '/images/piatti/8.jpg',
    '/images/piatti/9.jpg',
    '/images/piatti/12.jpg',
    '/images/piatti/13.jpg',
  ]
  return (
    <>
      <div className="min-h-[80dvh]">
        <Hero />
        <ImageCarousel slides={slides} />
        <CosaOffroSection />
        <CTASection />
      </div>
    </>
  );
}
