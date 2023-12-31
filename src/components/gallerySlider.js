"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper";

export default function GallerySlider({ children, nodes }) {
    const swiper = useRef(null);

    return (
        <div className="flex flex-col gap-6 main:gap-12 animate group">
            <div className="flex justify-between items-center 
            transition-all duration-1000 delay-[400ms]
            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full"
            >
                <div>
                    {children &&
                        <>
                            {children}
                        </>
                    }
                </div>
                <div className="flex gap-7">
                    <button className="" onClick={() => swiper.current.swiper.slidePrev()}>
                        <Image src="/icons/arrow-left.svg" width={24} height={24} alt="" />
                    </button>
                    <button className="" onClick={() => swiper.current.swiper.slideNext()}>
                        <Image className="-scale-x-100" src="/icons/arrow-left.svg" width={24} height={24} alt="" />
                    </button>
                </div>
            </div>


            <Swiper ref={swiper} slidesPerView={1} spaceBetween={8} modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} style={{ overflow: "visible" }}
                    className="main:hidden w-full h-[179px] main:h-[300px] transition-all duration-1000 delay-[800ms]
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2"
            >
                {nodes?.map((node, i) =>
                    <SwiperSlide key={i} className="rounded-3xl group overflow-hidden slide">
                        {node.sourceUrl &&
                            <Image className="object-cover duration-300 transition-transform group-[.slide]:group-hover:scale-[1.12]" fill src={node.sourceUrl} alt="" />
                        }
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper ref={swiper} slidesPerView={3} spaceBetween={8} modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} style={{ overflow: "visible" }}
                className="max-main:hidden w-full h-[179px] main:h-[300px] transition-all duration-1000 delay-[800ms]
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2"
            >
                {nodes?.map((node, i) =>
                    <SwiperSlide key={i} className="rounded-3xl group overflow-hidden slide">
                        {node.sourceUrl &&
                            <Image className="object-cover duration-300 transition-transform group-[.slide]:group-hover:scale-[1.12]" fill src={node.sourceUrl} alt="" />
                        }
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}