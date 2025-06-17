'use client'
import CosaOffroSection from "@/components/CosaOffroSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  const slides = [
    '/piatti/1.jpg',
    '/piatti/2.jpg',
    '/piatti/4.jpg',
    '/piatti/5.jpg',
    '/piatti/6.jpg',
    '/piatti/8.jpg',
    '/piatti/9.jpg',
    '/piatti/12.jpg',
    '/piatti/13.jpg',
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
