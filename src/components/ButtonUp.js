"use client"

import Image from "next/image"

export default function ButtonUp() {
    const handleClick = () => {
        if (window)
            window?.scrollTo(0,0)
    }
    return (
        <div 
            className='fixed z-[5000] bottom-6 left-6 rounded-full p-[18px] bg-transparent border border-primary'
            onClick={handleClick}
        >
            <Image width={24} height={24} src="./icons/chevron-up.svg" alt="" />
        </div>
    )
}