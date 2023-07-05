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
            <div className="relative">
                <div className=" bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute inset-0 bottom-[72px] main:bottom-[144px]" />
                <div className="container mx-auto flex flex-col pb-6
                    gap-6 pt-6
                    main:gap-12 main:pt-16 
                ">
                    <div className="container mx-auto flex gap-4 flex-col main:flex-row">
                        <h1 className="main:w-[425px] flex-shrink-0">{banner.title}</h1>
                        <h5 className="flex-1">{banner.text}</h5>
                    </div>

                    <div className='grid gap-2 overflow-hidden
                        grid-cols-2 auto-rows-[129px] max-main:h-[266px]
                        main:grid-cols-4 main:auto-rows-[162px]
                    '>
                        {cards.map((_node, _i) =>
                            <Fragment key={_i}>
                                {_node.image ?
                                    <ImageCard image={_node.image} />
                                    :
                                    <TextCard>{_node.text}</TextCard>
                                }
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex flex-col
                py-6 gap-6
                main:py-12 main:gap-12
            '>
                <h3>{works.title}</h3>
                <div className="grid grid-cols-1 main:grid-cols-2 gap-2">
                    {works.cards.map((_node, _i) =>
                        <WorkCard key={_i} node={_node} />
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

const TextCard = ({ children }) => {
    return (
        <div className='bg-white text-black p-6 rounded-3xl border border-grey-4'>
            <h5>{children}</h5>
        </div>
    )
}
const ImageCard = ({ image }) => {
    return (
        <div className='bg-white rounded-3xl overflow-hidden flex flex-col justify-between relative'>
            <Image quality={90} style={{ objectFit: "cover" }} fill src={image} alt="" />
        </div>
    )
}
