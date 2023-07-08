import Image from "next/image"
import ServiseCard from "@/components/ServiceCard"
import GallerySlider from "@/components/gallerySlider"
import client from "@/lib/apollo-client"
import { gql } from "@apollo/client";


export const revalidate = 120;


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
                clinic_page_acf {
                    cards {
                      text
                    }
                    bannertext {
                      text
                    }
                    info
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

    const bannerText = []
    data?.page?.clinic_page_acf?.bannertext?.forEach(_text => {
        bannerText.push(_text.text);
    });
    const offer = []
    data?.page?.clinic_page_acf?.cards?.forEach(_card => {
        offer.push(_card);
    });

    return {
        docs: data?.page?.docs?.nodes,
        commmon: data?.common,
        staff: data?.staff?.staff?.management,
        banner: {
            title: "О нас",
            text: bannerText,
        },
        offer: offer,
        info: data?.page?.clinic_page_acf?.info,
    };
}


export default async function Page() {
    const wpData = await getData()
    console.log(wpData.banner)

    const data = {
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
    }

    return (
        <main className="pt-[75px] main:pt-[111px]">
            <div className="max-main:hidden absolute bg-[#f2f2f2] inset-x-0 top-0 h-[111px]" />
            <div className=" bg-[#f2f2f2] rounded-b-[48px] animate group">
                <div className="container mx-auto py-6 main:py-9 flex flex-col gap-2">
                    <h1 className="transition-all delay-[400ms] duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2">
                        {wpData.banner.title}
                    </h1>
                    {wpData.banner.text?.map((_text, _i) =>
                        <h5 key={_i} className="transition-all delay-[700ms] duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2">
                            {_text}
                        </h5>
                    )}
                </div>
            </div>

            <div className="container mx-auto my-6 main:my-12 flex flex-col gap-4
                animate transition-all delay-[400ms] duration-1000
                [&:not(.show)]:opacity-0 [&:not(.show)]:translate-y-1/2"
            >
                <h4 className="font-bold">{wpData?.commmon?.offer?.offerText}</h4>
                <div className="grid grid-cols-2 main:grid-cols-4 gap-2">
                    {wpData?.commmon?.offer?.offerCards?.map((_offer, _i) =>
                        <ServiseCard key={_i} image={_offer.icon?.sourceUrl}>{_offer.text}</ServiseCard>
                    )}
                </div>
            </div>

            <NashaKlinika title={wpData?.commmon?.gallery_acf?.galleryTitle} nodes={wpData?.commmon?.gallery_acf?.galleryGallery}></NashaKlinika>

            <div className="flex flex-col mx-auto container
                py-6 gap-6
                main:py-12 main:gap-12
                animate group
            ">
                <h4 className="transition-all delay-[400ms] duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2"
                >
                    {data.subtitle3}
                </h4>
                <div className=" grid grid-cols-1 main:grid-cols-3 gap-2">
                    {wpData?.staff?.map((_person, _i) =>
                        <div key={_i} className={`transition-all ${delay[_i * 3 + 6]} duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-1/2`}
                        >
                            <Person person={_person} />
                        </div>
                    )}
                </div>
            </div>

            <div className="grid mx-auto container
                py-6 gap-6 grid-cols-1
                main:py-12 main:gap-12 main:grid-cols-2
                group animate
            ">
                <div className="flex flex-col gap-4 main:gap-6
                    transition-all delay-[400ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                ">
                    <h4>{data.subtitle4}</h4>
                    <div className="text-grey-1 underscorer" dangerouslySetInnerHTML={{ __html: wpData.info }}>
                    </div>
                </div>
                <div className="flex flex-col gap-4 main:gap-6">
                    <h4 className="transition-all delay-[700ms] duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                    ">
                        {data.subtitle5}
                    </h4>
                    {wpData.docs?.map((_node, _i) =>
                        <div key={_i} className={`flex gap-6 px-6 py-4 bg-white rounded-3xl border border-pink-100
                            transition-all ${delay[_i * 3 + 10]} duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-1/2`}
                        >
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
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
        '>
            <GallerySlider nodes={nodes}>
                <h4>{title}</h4>
            </GallerySlider>
        </div>
    )
}


const delay = [
    "delay-[0ms]",
    "delay-[100ms]",
    "delay-[200ms]",
    "delay-[300ms]",
    "delay-[400ms]",
    "delay-[500ms]",
    "delay-[600ms]",
    "delay-[700ms]",
    "delay-[800ms]",
    "delay-[900ms]",
    "delay-[1000ms]",
    "delay-[1100ms]",
    "delay-[1200ms]",
    "delay-[1300ms]",
    "delay-[1400ms]",
    "delay-[1500ms]",
    "delay-[1600ms]",
    "delay-[1700ms]",
    "delay-[1800ms]",
    "delay-[1900ms]",
    "delay-[2000ms]",
    "delay-[2100ms]",
    "delay-[2200ms]",
    "delay-[2300ms]",
    "delay-[2400ms]",
    "delay-[2500ms]",
    "delay-[2600ms]",
    "delay-[2700ms]",
    "delay-[2800ms]",
    "delay-[2900ms]",
    "delay-[3000ms]",
    "delay-[3100ms]",
    "delay-[3200ms]",
    "delay-[3300ms]",
    "delay-[3400ms]",
    "delay-[3500ms]",
    "delay-[3600ms]",
    "delay-[3700ms]",
    "delay-[3800ms]",
    "delay-[3900ms]",
    "delay-[4000ms]",
    "delay-[4100ms]",
    "delay-[4200ms]",
    "delay-[4300ms]",
    "delay-[4400ms]",
    "delay-[4500ms]",
    "delay-[4600ms]",
    "delay-[4700ms]",
    "delay-[4800ms]",
    "delay-[4900ms]",
]