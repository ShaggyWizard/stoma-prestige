import { FormatText } from "@/lib/textFormatter";
import Image from "next/image";


export default function Rassrochka({ data }) {
    const cardDelay = [
        "delay-[1800ms]",
        "delay-[1500ms]",
        "delay-[1200ms]",
    ]
    return (
        <div className='p-12 rounded-3xl bg-additional flex relative overflow-hidden border border-additional
            flex-col gap-6
            main:flex-row main:gap-16
            max-main:pb-[101px]
            group animate
        '>
            <div className='flex flex-col shrink-0 w-full gap-9 main:w-[523px]
            '>
                <h3 className="transition-all duration-1000 delay-[400ms]
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                ">
                    <FormatText highlightClass="text-primary" text={data?.creditTitle} />
                </h3>

                <h2 className="transition-all duration-1000 delay-[700ms]
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                ">
                    {data?.creditText}
                </h2>
            </div>
            <h5 className='text-grey-1 flex-1
                transition-all duration-1000 delay-[1000ms]
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
            '>
                <FormatText highlightClass="text-primary" numberClass='transition-colors hover:text-primary' text={data?.creditAdditionalText} />
            </h5>
            <div className="absolute right-0 grid grid-cols-3
                -bottom-2 w-full h-[85px]
                main:bottom-0 main:w-[644px] main:h-[151px]
                group animate
            ">
                {data?.creditIcons?.map((_node, _i) =>
                    <BankCard key={_i} src={_node.icon?.sourceUrl}
                        className={`
                            transition-all duration-700 ${cardDelay[_i]}
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-full
                        `}
                    />
                )}
            </div>
        </div>
    )
}

function BankCard({ src, className }) {
    return (
        <div className={`relative main:h-[156px] ${className}`}>
            <div className='absolute inset-0 -right-6 bg-white rounded-tl-2xl border shadow
                pl-[15px] pt-[11px]
                main:pl-[31px] main:pt-[23px]
            '>
                {src &&
                    <div className="relative
                        w-[82px] h-[35px]
                        main:w-[165px] main:h-[72px]
                    ">
                        <Image fill src={src} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}