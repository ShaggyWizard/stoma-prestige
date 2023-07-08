"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper";

export default function ReviewSlider({ children, nodes }) {
    const swiper = useRef(null);
    const cols = window?.innerWidth < 1248 ? 'auto' : 3;
    return (
        <div className="flex flex-col gap-12 animate group">
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

            <Swiper ref={swiper} style={{overflow:"visible"}} slidesPerView={cols} spaceBetween={8} 
                modules={[Autoplay]}  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                className="review-slider w-full h-[300px] overflow-visible transition-all duration-1000 delay-[800ms]
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2"
            >
                {nodes?.map((node, i) =>
                    <SwiperSlide key={i}>
                        <div className="rounded-3xl bg-white border border-grey-4 flex flex-col gap-6 p-6">
                            <p>{node.text}</p>
                            <div className="flex justify-between relative">
                                <p>{node.name}</p>
                                <Image className="opacity-10" src="/icons/2gis.svg" width={95} height={31} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}