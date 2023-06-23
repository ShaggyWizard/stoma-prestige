import Image from "next/image";

export default function Rassrochka() {
    return (
        <div className='container mx-auto p-12 rounded-3xl bg-additional flex gap-16 relative overflow-hidden'>
            <div className='w-[523px] flex flex-col gap-9 shrink-0'>
                <h3>Лечение зубов <span className='text-primary'>без переплат</span> и в кредит</h3>

                <h2>Мы выбрали наиболее удобный для пациента кредит от лидеров рынка потребительского кредитования</h2>
            </div>
            <h5 className='text-grey-1 flex-1'>Наши сотрудники ответят на все интересующие Вас вопросы ежедневно по телефону <a href="tel:+79142758558" className='transition-colors hover:text-primary'>+7 914 275-85-58</a></h5>
            <div className='w-[253px] h-[156px] bg-white rounded-tl-2xl border shadow absolute bottom-[-5px] right-[391px] pl-[31px] pt-[23px]'>
                <Image width={165} height={72} src="/icons/halva.png" alt="" />
            </div>
            <div className='w-[253px] h-[156px] bg-white rounded-tl-2xl border shadow absolute bottom-[-5px] right-[178px] pl-[31px] pt-[23px]'>
                <Image width={165} height={72} src="/icons/sber.png" alt="" />
            </div>
            <div className='w-[253px] h-[156px] bg-white rounded-tl-2xl border shadow absolute bottom-[-5px] right-[-51px] pl-[31px] pt-[23px]'>
                <Image width={165} height={72} src="/icons/tinkoff.png" alt="" />
            </div>
        </div>
    )
}