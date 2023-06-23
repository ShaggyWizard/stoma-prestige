import Image from "next/image"
import PriceList from "@/components/priceList"
import Rassrochka from "@/components/rassrochka"
import Enroll from "@/components/enroll"
import ServiseCard from "@/components/ServiceCard"

export default function Page() {
    const data = {
        title: "Клиника",
        text1: "Стоматологическая клиника «Стома Престиж» работает в Якутске с ноября 2006 года и оказывает комплексные услуги по лечению зубов. С 2011 года клинику возглавляет Козлова Валентина Васильевна.",
        text2: "В нашей клинике созданы все условия для того, чтобы вы чувствовали себя комфортно. Наша дружная команда профессионалов сделала сотни красивых улыбок, которые изменили жизнь пациентов к лучшему. Мы используем только современные технологии и материалы. Благодаря опыту наших врачей мы восстанавливаем здоровье ваших зубов даже в сложных случаях.",
        offers: [
            { text: "Предложение 1", image: "/icons/offers/icon1.svg" },
            { text: "Предложение 2", image: "/icons/offers/icon (1).svg" },
            { text: "Предложение 3", image: "/icons/offers/icon (2).svg" },
            { text: "Предложение 4", image: "/icons/offers/icon (3).svg" },
        ],
        subtitle1: "Мы предлагаем:",
    }


    return (
        <main>
            <div className=" bg-[#f2f2f2] pt-[111px] font-blblbl ">
                <div className="container mx-auto py-9 flex flex-col gap-4">
                    <h1>{data.title}</h1>
                    <h5>{data.text1}</h5>
                    <h5>{data.text2}</h5>
                </div>
            </div>
            <div className="container mx-auto my-12">
                <h4 className="font-bold">{data.subtitle1}</h4>
                <div className="grid grid-cols-4 gap-2">
                    {data.offers.map((_offer, _i) =>
                        <ServiseCard image={_offer.image}>{_offer.text}</ServiseCard>
                    )}
                </div>
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