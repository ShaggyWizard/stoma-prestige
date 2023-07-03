"use client"

import { FormatText } from "@/lib/textFormatter";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"

export default function FaqCard({ node }) {
    const [expanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState(false);
    const questionRef = useRef(null)
    const answerRef = useRef(null)

    const src = expanded ? "/icons/cross.svg" : "/icons/plus.svg"

    useEffect(() => {
        const padding = window?.innerWidth < 1248 ? 32 : 48;
        let maxHeight = padding;
        if (questionRef.current)
            maxHeight += questionRef.current.clientHeight;
        if (answerRef.current && expanded)
            maxHeight += answerRef.current.clientHeight + padding;

        setMaxHeight(maxHeight);
    }, [expanded, questionRef, answerRef])

    return (
        <div
            className={`
                bg-white rounded-3xl border border-grey-4 flex flex-col 
                transition-all duration-500 overflow-hidden
                hover:bg-additional cursor-pointer
                p-4 gap-6
                main:p-6 main:gap-12
            `}
            style={{ maxHeight: maxHeight }}
            onClick={() => setExpanded(current => !current)}
        >
            <div ref={questionRef} className='flex justify-between'>
                <h5>{node.question}</h5>
                <Image className="shrink-0" src={src} alt="" width={36} height={36} />
            </div>
            <p className={`transition-opacity duration-500 ${expanded ? "opacity-100" : "opacity-0"}`} ref={answerRef}>
                <FormatText numberClass='transition-colors hover:text-primary' text={node.answer} />
            </p>
        </div>
    )
}