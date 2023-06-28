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
        <main>
            <div className="h-[502px] bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute top-0 left-0 right-0" />
            <div className="flex flex-col relative pt-[185px]">
                <div className="container mx-auto flex flex-col gap-12 pb-6">
                    <div className="container mx-auto flex gap-4">
                        <h1 className="w-[425px] flex-shrink-0">{banner.title}</h1>
                        <h5 className="flex-1">{banner.text}</h5>
                    </div>

                    <div className="grid grid-cols-4 auto-rows-[minmax(0,_162px)] gap-4">
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

                <div className='py-12 container mx-auto flex flex-col gap-12'>
                    <h3>{works.title}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {works.cards.map((_node, _i) =>
                            <WorkCard node={_node} />
                        )}
                    </div>
                </div>

                <div className='py-12 container mx-auto'>
                    <Enroll />
                </div>
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
