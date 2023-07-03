"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";

export default function ObjectSlider({ children, nodes }) {
    const swiper = useRef(null);
    const cols = window?.innerWidth < 1248 ? 1 : 2;

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

            <Swiper ref={swiper} slidesPerView={cols} spaceBetween={8} className="w-full h-[236px] main:h-[300px]" style={{overflow: "visible"}}>
                {nodes?.map((node, i) =>
                    <SwiperSlide key={i}>
                        <WorkCard node={node} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export function WorkCard({ node }) {
    return (
        <div className="h-full rounded-3xl overflow-hidden flex justify-between group border border-grey-4">
            <div className="w-1/2 main:w-[298px] h-full shrink-0 relative">
                <div className="transition-opacity duration-300 bg-white opacity-80 group-hover:opacity-0 absolute inset-0 z-10" />
                {node.image &&
                    <Image fill className="object-cover" src={node.image} alt="" />
                }
            </div>
            <div className="p-4 main:p-6 flex flex-col gap-2 flex-1">
                <p className="text-grey-2">Проблема и решение</p>
                <p >{node.problem}</p>
                <p className="text-grey-2">Врач</p>
                <p >{node.doctor}</p>
            </div>
        </div>
    )
}