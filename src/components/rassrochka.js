import { FormatText } from "@/lib/textFormatter";
import Image from "next/image";


export default function Rassrochka({ data }) {
    return (
        <div className='p-12 rounded-3xl bg-additional flex relative overflow-hidden border border-additional
            flex-col gap-6
            main:flex-row main:gap-16
            max-main:pb-[101px]
        '>
            <div className='flex flex-col  shrink-0
                w-full gap-9
                main:w-[523px]
            '>
                <h3>
                    <FormatText highlightClass="text-primary" text={data?.creditTitle} />
                </h3>

                <h2>{data?.creditText}</h2>
            </div>
            <h5 className='text-grey-1 flex-1'>
                <FormatText highlightClass="text-primary" numberClass='transition-colors hover:text-primary' text={data?.creditAdditionalText} />
            </h5>
            <div className="absolute right-0 grid grid-cols-3
                -bottom-2 w-full h-[85px]
                main:bottom-0 main:w-[644] main:h-[151px]
            ">
                {data?.creditIcons?.map((_node, _i) =>
                    <BankCard key={_i} src={_node.icon?.sourceUrl} />
                )}
            </div>
        </div>
    )
}

function BankCard({ src }) {
    return (
        <div className="relative main:h-[156px]">
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