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

    }


    return (
        <main>
            <div className="bg-[#F2F2F2] rounded-b-[48px] pt-[111px]">
                <div className="container mx-auto flex flex-col gap-4 py-9 ">
                    <h1>{data.title}</h1>
                    <h5>{data.text1}</h5>
                    <h5>{data.text2}</h5>
                </div>
            </div>

            <div className='container mx-auto flex flex-col gap-4 '>
                <h4>Мы предлагаем:</h4>
                <div className='grid grid-cols-4 gap-2'>
                    <ServiseCard image="">Предложение</ServiseCard>
                    <ServiseCard image="">Предложение</ServiseCard>
                    <ServiseCard image="">Предложение</ServiseCard>
                    <ServiseCard image="">Предложение</ServiseCard>
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