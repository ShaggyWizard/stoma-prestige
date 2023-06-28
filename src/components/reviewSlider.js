"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";

export default function ReviewSlider({ children, nodes }) {
    const swiper = useRef(null);
    return (
        <div className="flex flex-col gap-12 ">
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

            <Swiper ref={swiper} style={{overflow:"visible"}} slidesPerView={3} spaceBetween={8} className="w-full h-[300px] overflow-visible">
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