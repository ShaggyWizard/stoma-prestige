import Image from "next/image"
import ServiseCard from "@/components/ServiceCard"
import GallerySlider from "@/components/gallerySlider"
import client from "@/lib/apollo-client"
import { gql } from "@apollo/client";


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            page(id: "300", idType: DATABASE_ID) {
                docs {
                  nodes {
                    name
                    file {
                      sourceUrl
                    }
                  }
                }
            }
            common {
              offer {
                offerText
                offerCards {
                  text
                  icon {
                    sourceUrl
                  }
                }
              }
              gallery_acf {
                galleryTitle
                galleryGallery {
                  sourceUrl
                }
              }
            }
            staff {
              staff {
                management {
                  name
                  role
                  photo {
                    sourceUrl
                  }
                }
              }
            }
        }
    `,
    });

    return {
        docs: data?.page?.docs?.nodes,
        commmon: data?.common,
        staff: data?.staff?.staff?.management
    };
}


export default async function Page() {
    const wpData = await getData()

    const data = {
        title: "Клиника",
        text1: "Стоматологическая клиника «Стома Престиж» работает в Якутске с ноября 2006 года и оказывает комплексные услуги по лечению зубов. С 2011 года клинику возглавляет Козлова Валентина Васильевна.",
        text2: "В нашей клинике созданы все условия для того, чтобы вы чувствовали себя комфортно. Наша дружная команда профессионалов сделала сотни красивых улыбок, которые изменили жизнь пациентов к лучшему. Мы используем только современные технологии и материалы. Благодаря опыту наших врачей мы восстанавливаем здоровье ваших зубов даже в сложных случаях.",
        text3: "<p>Стоматологическая клиника “Стома Престиж”<br />\nг. Якутск,  <a href=\"https://www.youtube.com/watch?v=g1mPqu7u39o&amp;ab_channel=REDGroup\">ул. Лермонтова, 23</a>, ​1 этаж​</p>\n<br />\n<ul>\n<li>Реквизиты</li>\n<li>Сведения об учредителях</li>\n</ul>\n",
        offers: [
            { text: "Гибкая система оплаты", image: "/icons/offers/icon1.svg" },
            { text: "Удобное время посещения", image: "/icons/offers/icon (1).svg" },
            { text: "Прием без очереди", image: "/icons/offers/icon (2).svg" },
            { text: "Вежливый персонал", image: "/icons/offers/icon (3).svg" },
        ],
        subtitle1: "Мы предлагаем:",
        subtitle2: "Наша клиника",
        subtitle3: "Наша команда",
        subtitle4: "Сведения об организации",
        subtitle5: "Документы",

        doctors: [
            { name: "Вэш Ураган", role: "Человек стомостью в 60000000000$$", image: "/images/Vash.png" },
            { name: "Найвс Миллионс", role: "Найвс", image: "/images/Knives.png" },
            { name: "Николас Д. Вульфвуд", role: "Священник" },
            // { name: "Мэрил Страйф", role: "Страховщик", image: "" },
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
                <h4 className="font-bold">{wpData?.commmon?.offer?.offerText}</h4>
                <div className="grid grid-cols-4 gap-2">
                    {wpData?.commmon?.offer?.offerCards?.map((_offer, _i) =>
                        <ServiseCard key={_i} image={_offer.icon?.sourceUrl}>{_offer.text}</ServiseCard>
                    )}
                </div>
            </div>

            <NashaKlinika title={wpData?.commmon?.gallery_acf?.galleryTitle} nodes={wpData?.commmon?.gallery_acf?.galleryGallery}></NashaKlinika>

            <div className="flex flex-col my-12 mx-auto container gap-12">
                <h4>{data.subtitle3}</h4>
                <div className=" grid grid-cols-3 gap-2">
                    {wpData?.staff?.map((_person, _i) =>
                        <Person key={_i} person={_person} />
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
                    {wpData.docs?.map((_node, _i) =>
                        <div key={_i} className="flex gap-6 px-6 py-4 bg-white rounded-3xl border border-pink-100">
                            <Image width={24} height={24} src="/icons/docIcon.svg" alt="" />
                            <a href={_node.file?.sourceUrl} target="_blank" rel="noopener noreferrer">{_node.name}</a>
                        </div>
                    )}

                </div>
            </div>
        </main>
    )
}

const Person = ({ person }) => {
    return (
        <div className="p-6 bg-white border border-pink-100 rounded-3xl flex gap-6 group hover:bg-additional transition-colors duration-300">
            <div className="flex-1 flex flex-col gap-2.5">
                <h5 className="group-hover:text-primary duration-300 transition-colors">{person?.name}</h5>
                <div className="text-grey-1">{person?.role}</div>
            </div>
            <Image width={144}
                height={206}
                className="rounded-[100px] shrink-0 object-cover"
                src={person?.photo?.sourceUrl ? person.photo.sourceUrl : "/images/doctor-placeholder.png"}
                alt={person?.name} />


        </div>
    )
}
const NashaKlinika = ({ title, nodes }) => {
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <GallerySlider nodes={nodes}>
                <h4>{title}</h4>
            </GallerySlider>
        </div>
    )
}