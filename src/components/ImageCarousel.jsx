'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function ImageCarousel({ slides }) {
    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),]
    )

    return (
        <div className="overflow-hidden container my-20" ref={emblaRef} >
            <div className="flex">
                {slides.map((src, index) =>
                    <div key={index} className="flex-[0_0_80%]  md:flex-[0_0_40%] px-3  h-96  text-white rounded-xl">
                        <Image
                            src={src}
                            key={index}
                            alt={`Slide ${index + 1}`}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
