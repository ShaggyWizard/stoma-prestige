import Enroll from "@/components/enroll";
import ReviewForm from "@/components/reviewForm";
import client from "@/lib/apollo-client";
import { FormatText } from "@/lib/textFormatter"
import { gql } from "@apollo/client";
import Image from "next/image"


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
        }
    `,
    });


    return {
        reviews: data?.reviews?.reviews?.nodes,
        banner: {
            title: "Отзывы",
            text: "Мы очень внимательно относимся к каждому отзыву и делаем все возможное, чтобы визит в нашу клинику оставил у вас положительные эмоции. Ваши отзывы помогают нам становиться лучше!",
        },
        form: {
            title: "Поделитесь своими **впечатлениями**",
            text: "Если вы были в нашей клинике, то мы будем благодарны за ваш отзыв!",
        },
    }
}

export default async function Home() {

    const { reviews, banner, form } = await getData();

    return (
        <main className="pt-[75px] main:pt-[111px] flex flex-col gap-6 main:gap-16">
            <div className="relative">
                <div className="absolute inset-0 main:bottom-[226px] bg-[#F2F2F2] rounded-b-[48px] -z-10" />
                <div className="container mx-auto flex gap-4 flex-col main:flex-row py-6 main:py-12">
                    <h1 className="main:w-[425px] flex-shrink-0">{banner.title}</h1>
                    <h5 className="flex-1">{banner.text}</h5>
                </div>
                <div className="container mx-auto grid gap-6 bg-additional rounded-3xl
                    px-6 py-4 grid-cols-1
                    main:px-12 main:py-8 main:grid-cols-2
                ">
                    <div className="flex flex-col gap-6">
                        <h3 className=""><FormatText highlightClass="text-primary" text={form.title} /></h3>
                        <h5 className="">{form.text}</h5>
                    </div>
                    <ReviewForm />
                </div>
            </div>


            <div className="container mx-auto grid grid-cols-1 main:grid-cols-2 gap-4">
                {reviews.map((_node, _i) =>
                    <div key={_i} className="rounded-3xl bg-white border border-grey-4 flex flex-col gap-6 p-6">
                        <p>{_node.text}</p>
                        <div className="flex justify-between relative">
                            <p>{_node.name}</p>
                            <Image className="opacity-10" src="/icons/2gis.svg" alt="" width={95} height={31} />
                        </div>
                    </div>
                )}
            </div>

            <Enroll />
        </main>
    )
} 