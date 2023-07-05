import Image from "next/image"
import PriceList from "@/components/priceList"
import Rassrochka from "@/components/rassrochka"
import Enroll from "@/components/enroll"
import client from '@/lib/apollo-client'
import { gql } from "@apollo/client"
import getPricingData from "@/lib/queries/getPricingData"
import getCommonData from "@/lib/queries/getCommonData"

export const revalidate = 0;

export default async function Home() {

    const commonData = await getCommonData();
    const pricingData = getPricingData();

    const [pricing, { common }] = await Promise.all([pricingData, commonData])

    return (
        <main className="pt-[75px] main:pt-[111px]">
            <div className="max-main:hidden absolute bg-[#f2f2f2] inset-x-0 top-0 h-[111px]" />
            <div className="flex flex-col gap-6 main:gap-16 relative">
                <div className="absolute inset-0 bottom-[27px] main:bottom-[35px] bg-[#F2F2F2] rounded-b-[48px] -z-10" />

                <div className="container mx-auto pt-6 main:pt-[74px] grid grid-cols-1 main:grid-cols-2 gap-4">
                    <h1>Услуги</h1>
                    <h2>
                        Мы предлагаем своим пациентам качественные услуги, работаем с современным оборудованием и материалами
                    </h2>
                </div>

                <div className="container mx-auto grid grid-cols-1 main:grid-cols-3 gap-2">
                    <FactCard>Первичная консультация - Бесплатно</FactCard>
                    <FactCard>Лечение без боли</FactCard>
                    <FactCard>Честные и прозрачные цены</FactCard>
                </div>
            </div>
            <PriceList pricing={pricing} />

            <div className="container mx-auto flex
                flex-col py-6 gap-6
                main:flex-row main:py-12 main:gap-12
            ">
                <a
                    href="" target='_blank' rel="noopener noreferrer"
                    className="
                                bg-primary rounded-full px-4 py-3 flex gap-2 items-center 
                                transition-colors hover:bg-primary-hover
                                shrink-0 self-start
                            "
                >
                    <Image width={24} height={24} src="/icons/document.svg" alt="" />
                    <p className="font-medium text-white ">Скачать прайс-лист</p>
                </a>
                <p className="body2 text-grey-2">* Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте прайс-листа, однако во избежание возможных недоразумений, советуем уточнять стоимость услуг в регистратуре по телефону +7 (914) 27-58-558. Окончательная стоимость будет рассчитана после консультации и плана лечения. Размещенный прайс не является офертой. Медицинские услуги оказываются на основании договора.</p>
            </div>

            <div className='py-6 main:py-12 container mx-auto'>
                <Rassrochka data={common?.credit_acf} />
            </div>

            <div className="container mx-auto flex
                py-6 gap-6
                main:py-12 main:gap-12
            ">
                <Enroll />
            </div>
        </main>
    )
}

const FactCard = ({ children }) => {
    return (
        <div className="p-4 main:p-6 rounded-3xl border border-grey-4 bg-white">
            <p>{children}</p>
        </div>
    )
}