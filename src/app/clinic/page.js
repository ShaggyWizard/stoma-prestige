import Image from "next/image"
import ServiseCard from "@/components/ServiceCard"
import GallerySlider from "@/components/gallerySlider"

export default function Page() {
    const data = {
        title: "Клиника",
        text1: "Стоматологическая клиника «Стома Престиж» работает в Якутске с ноября 2006 года и оказывает комплексные услуги по лечению зубов. С 2011 года клинику возглавляет Козлова Валентина Васильевна.",
        text2: "В нашей клинике созданы все условия для того, чтобы вы чувствовали себя комфортно. Наша дружная команда профессионалов сделала сотни красивых улыбок, которые изменили жизнь пациентов к лучшему. Мы используем только современные технологии и материалы. Благодаря опыту наших врачей мы восстанавливаем здоровье ваших зубов даже в сложных случаях.",
        text3: "<p>Стоматологическая клиника “Стома Престиж”<br />\nг. Якутск,  <a href=\"https://www.youtube.com/watch?v=g1mPqu7u39o&amp;ab_channel=REDGroup\">ул. Лермонтова, 23</a>, ​1 этаж​</p>\n<br />\n<ul>\n<li>Реквизиты</li>\n<li>Сведения об учредителях</li>\n</ul>\n",
        offers: [
            { text: "Предложение 1", image: "/icons/offers/icon1.svg" },
            { text: "Предложение 2", image: "/icons/offers/icon (1).svg" },
            { text: "Предложение 3", image: "/icons/offers/icon (2).svg" },
            { text: "Предложение 4", image: "/icons/offers/icon (3).svg" },
        ],
        subtitle1: "Мы предлагаем:",
        subtitle2: "Наша клиника",
        subtitle3: "Наша команда",
        subtitle4: "Сведения об организации",
        subtitle5: "Документы",

        doctors: [
            { name: "Вэш ", role: "Ураган", image: "/images/Vash.png" },
            { name: "Найвс Миллионс", role: "Найвс", image: "/images/Knives.png" },
            { name: "Николас Д. Вульфвуд", role: "Священник" },
        ],
    }


    return (
        <main>
            <div className=" bg-[#f2f2f2] pt-[111px] rounded-b-[48px]">
                <div className="container mx-auto py-9 flex flex-col gap-2">
                    <h1>{data.title}</h1>
                    <h5>{data.text1}</h5>
                    <h5>{data.text2}</h5>
                </div>
            </div>

            <div className="container mx-auto my-12">
                <h4 className="font-bold">{data.subtitle1}</h4>
                <div className="grid grid-cols-4 gap-2">
                    {data.offers.map((_offer, _i) =>
                        <ServiseCard key={_i} image={_offer.image}>{_offer.text}</ServiseCard>
                    )}
                </div>
            </div>

            <NashaKlinika title={data.subtitle2}></NashaKlinika>

            <div className="flex flex-col my-12 mx-auto container gap-12">
                <h4>{data.subtitle3}</h4>
                <div className=" grid grid-cols-3 gap-2">
                    {data.doctors.map((_doctor, _i) =>
                        <NashDoctor key={_i} doctor={_doctor} />
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-12 mx-auto py-12 container">
                <div className="gap-12 flex flex-col">
                    <h4>{data.subtitle4}</h4>
                    <div className="text-grey-1 underscorer" dangerouslySetInnerHTML={{ __html: data.text3 }}>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4>{data.subtitle5}</h4>
                    {data.doctors.map((_doctor, _i) =>
                        <div key={_i} className="flex gap-6 px-6 py-4 bg-white rounded-3xl border border-pink-100">
                            <Image width={24} height={24} src="/icons/docIcon.svg" alt=""/>
                            <p>{_doctor.name}</p>
                        </div>
                    )}

                </div>
            </div>


        </main>
    )
}

const NashDoctor = ({ doctor }) => {
    return (
        <div className="p-6 bg-white border border-pink-100 rounded-3xl flex gap-6 group hover:bg-additional transition-colors duration-300">
            <div className="flex-1 flex flex-col gap-2.5">
                <h5 className="group-hover:text-primary duration-300 transition-colors">{doctor?.name}</h5>
                <div className="text-grey-1">{doctor?.role}</div>
            </div>
            <Image width={144}
             height={206}
             className="rounded-[100px] shrink-0 object-cover"
              src={doctor?.image ? doctor.image : "/images/doctor-placeholder.png"}
               alt={doctor?.name} />


        </div>
    )
}
const NashaKlinika = ({ title }) => {
    const nodes = [
        {
            image: "/images/RSPGgvH3ajg.jpg",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
    ]
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <GallerySlider nodes={nodes}>
                <h4>{title}</h4>
            </GallerySlider>
        </div>
    )
}