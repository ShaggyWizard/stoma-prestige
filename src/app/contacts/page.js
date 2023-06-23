import Image from "next/image"
import Rassrochka from "@/components/rassrochka"
import Enroll from "@/components/enroll"
import PriceList from "@/components/priceList"

export default function Home() {
    const nodes = [
        {
            category: "Терапия",
            menu: [
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
            ],
        },
        {
            category: "Хирургия",
            menu: [
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
            ],
        },
        {
            category: "Ортопедия",
            menu: [
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
                { name: "Лечение кариеса", price: "от 3 700 ₽" },
            ],
        },
    ]


    return (
        <main>
            <div className="flex flex-col gap-16 relative">
                <div className="h-[393px] bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute top-0 left-0 right-0" />

                <div className="container mx-auto pt-[185px] grid grid-cols-2 gap-4">
                    <h1>Услуги</h1>
                    <h2>
                        Мы предлагаем своим пациентам качественные услуги, работаем с современным оборудованием и материалами
                    </h2>
                </div>

                <div className="container mx-auto grid grid-cols-3 gap-2">
                    <FactCard>Первичная консультация - Бесплатно</FactCard>
                    <FactCard>Лечение без боли</FactCard>
                    <FactCard>Честные и прозрачные цены</FactCard>
                </div>
            </div>
            <PriceList nodes={nodes} />

            <div className="py-12 container mx-auto flex gap-12">
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

            <div className="py-12 container mx-auto flex gap-12">
                <Rassrochka />
            </div>
            
            <div className="py-12 container mx-auto flex gap-12">
                <Enroll />
            </div>
        </main>
    )
}

const FactCard = ({ children }) => {
    return (
        <div className="p-6 rounded-3xl border border-grey-4 bg-white">
            <p>{children}</p>
        </div>
    )
}