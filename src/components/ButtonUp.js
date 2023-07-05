"use client"

import Image from "next/image"

export default function ButtonUp() {
    return (
        <div 
            className='fixed z-[5000] bottom-6 left-6 rounded-full p-[18px] bg-transparent border border-primary'
            onClick={() => {window?.scrollTo(0,0)}}
        >
            <Image width={24} height={24} src="./icons/chevron-up.svg" alt="" />
        </div>
    )
}