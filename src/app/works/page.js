import Enroll from "@/components/enroll";
import { WorkCard } from "@/components/objectSlider";
import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image"
import { Fragment } from "react";


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            reviews {
                reviews {
                    nodes {
                        name
                        text
                    }
                }
            }
            common {
                how_acf {
                  howTitle
                  howCards {
                    problem
                    doctor
                    image {
                      sourceUrl
                    }
                  }
                }
              }
        }
    `,
    });

    const worksCards = []
    data?.common?.how_acf?.howCards?.forEach(_card => {
        worksCards.push({
            problem: _card.problem,
            doctor: _card.doctor,
            image: _card.image?.sourceUrl,
        });
    });

    return {
        reviews: data?.reviews?.reviews?.nodes,
        banner: {
            title: "Работы",
            text: "Мы собрали работы наших врачей, чтобы показать вам: безнадежных случаев нет и красивая улыбка доступна всем.",
        },
        cards: [
            { text: "Современное оборудование" },
            { text: "Прозрачные цены" },
            { image: "/images/image (2).webp" },
            { text: "Без боли и дискомфорта" },
            { text: "Усиленные меры безопасности" },
            { image: "/images/image (3).webp" },
            { text: "Лечение в рассрочку" },
            { image: "/images/image (4).webp" },
        ],
        works: {
            title: "Примеры наших работ",
            cards: worksCards,
        },
    }
}

export default async function Home() {

    const { banner, cards, works } = await getData();

    return (
        <main className="pt-[75px] main:pt-[111px]">
            <div className="max-main:hidden absolute bg-[#f2f2f2] inset-x-0 top-0 h-[111px]" />
            <div className="relative group animate">
                <div className=" bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute inset-0 bottom-[72px] main:bottom-[144px]" />
                <div className="container mx-auto flex flex-col pb-6
                    gap-6 pt-6
                    main:gap-12 main:pt-16 
                ">
                    <div className="container mx-auto flex gap-4 flex-col main:flex-row">
                        <h1 className="main:w-[425px] flex-shrink-0 
                            transition-all delay-[400ms] duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                        ">{banner.title}</h1>
                        <h5 className="flex-1
                            transition-all delay-[700ms] duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                        ">{banner.text}</h5>
                    </div>

                    <div className='grid gap-2 overflow-hidden
                        grid-cols-2 auto-rows-[129px] max-main:h-[266px]
                        main:grid-cols-4 main:auto-rows-[162px]
                    '>
                        {cards.map((_node, _i) =>
                            <Fragment key={_i}>
                                {_node.image ?
                                    <ImageCard image={_node.image} className={`transition-all ${delay[_i * 2 + 10]} duration-1000
                                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-1/2
                                    `} />
                                    :
                                    <TextCard className={`transition-all ${delay[_i * 2 + 10]} duration-1000
                                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-1/2
                                    `}>
                                        {_node.text}
                                    </TextCard>
                                }
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex flex-col
                py-6 gap-6
                main:py-12 main:gap-12
                group animate
            '>
                <h3 className="transition-all delay-[400ms] duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                ">{works.title}</h3>
                <div className="grid grid-cols-1 main:grid-cols-2 gap-2">
                    {works.cards.map((_node, _i) =>
                        <div key={_i} className={`h-[298px]
                            transition-all ${delay[_i * 3 + 7]} duration-1000
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                        `}>
                            <WorkCard node={_node} />
                        </div>
                    )}
                </div>
            </div>

            <div className='container mx-auto
                py-6
                main:py-12
            '>
                <Enroll />
            </div>
        </main>
    )
}

const TextCard = ({ children, className }) => {
    return (
        <div className={`bg-white text-black p-6 rounded-3xl border border-grey-4 ${className}`}>
            <h5>{children}</h5>
        </div>
    )
}
const ImageCard = ({ image, className }) => {
    return (
        <div className={`bg-white rounded-3xl overflow-hidden flex flex-col justify-between relative ${className}`}>
            <Image quality={90} style={{ objectFit: "cover" }} fill src={image} alt="" />
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