import { FormatText } from "@/lib/textFormatter";
import Image from "next/image";


export default function Rassrochka({ data }) {
    return (
        <div className='container mx-auto p-12 rounded-3xl bg-additional flex gap-16 relative overflow-hidden border border-additional'>
            <div className='w-[523px] flex flex-col gap-9 shrink-0'>
                <h3>
                    <FormatText highlightClass="text-primary" text={data?.creditTitle} />
                </h3>

                <h2>{data?.creditText}</h2>
            </div>
            <h5 className='text-grey-1 flex-1'>
                <FormatText highlightClass="text-primary" numberClass='transition-colors hover:text-primary' text={data?.creditAdditionalText} />
            </h5>
            <div className='w-[253px] h-[156px] bg-white rounded-tl-2xl border shadow absolute bottom-[-5px] right-[391px] pl-[31px] pt-[23px]'>
                {(data?.creditIcons && data.creditIcons[0].icon?.sourceUrl) &&
                    <Image width={165} height={72} src={data.creditIcons[0].icon.sourceUrl} alt="" />
                }
            </div>
            <div className='w-[253px] h-[156px] bg-white rounded-tl-2xl border shadow absolute bottom-[-5px] right-[178px] pl-[31px] pt-[23px]'>
                {(data?.creditIcons && data.creditIcons[1].icon?.sourceUrl) &&
                    <Image width={165} height={72} src={data.creditIcons[1].icon.sourceUrl} alt="" />
                }
            </div>
            <div className='w-[253px] h-[156px] bg-white rounded-tl-2xl border shadow absolute bottom-[-5px] right-[-51px] pl-[31px] pt-[23px]'>
                {(data?.creditIcons && data.creditIcons[2].icon?.sourceUrl) &&
                    <Image width={165} height={72} src={data.creditIcons[2].icon.sourceUrl} alt="" />
                }
            </div>
        </div>
    )
}