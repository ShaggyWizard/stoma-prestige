"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function GallerySlider({ children, nodes }) {
    const swiper = useRef(null);
    const cols = window?.innerWidth < 1248 ? 1 : 3;

    return (
        <div className="flex flex-col gap-6 main:gap-12">
            <div className="flex justify-between items-center">
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

            <Swiper ref={swiper} slidesPerView={cols} spaceBetween={8} className="w-full h-[179px] main:h-[300px]" style={{overflow: "visible"}}>
                {nodes?.map((node, i) =>
                    <SwiperSlide key={i} className="rounded-3xl group overflow-hidden">
                        {node.sourceUrl &&
                            <Image className="object-cover duration-300 transition-transform group-hover:scale-[1.12]" fill src={node.sourceUrl} alt="" />
                        }
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}