import Enroll from "@/components/enroll";
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
            input: {
                name: "Ваше имя",
                email: "Ваше имя",
                review: "Отзыв...",
                submit: "Оставить отзыв",
            },
            consents: [
                "В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с политикой конфиденциальности",
                "Согласен на размещение вопроса на сайте",
            ],
        },
    }
}

export default async function Home() {

    const { reviews, banner, form } = await getData();

    return (
        <main>
            <div className="h-[525px] bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute top-0 left-0 right-0" />
            <div className="flex flex-col gap-16 relative pt-[185px]">

                <div className="container mx-auto flex gap-4">
                    <h1 className="w-[425px] flex-shrink-0">{banner.title}</h1>
                    <h5 className="flex-1">{banner.text}</h5>
                </div>

                <div className="container mx-auto px-12 py-8 grid grid-cols-2 gap-6 bg-additional rounded-3xl mb-6">
                    <div className="flex flex-col gap-6">
                        <h3 className=""><FormatText highlightClass="text-primary" text={form.title} /></h3>
                        <h5 className="">{form.text}</h5>
                    </div>
                    <form className="flex flex-col gap-6" action="/api/form" method="post">
                        <div className="grid grid-cols-2 gap-6">
                            <input className="rounded-lg px-4 py-[13px]" placeholder={form.input.name} type="text" id="name" name="name" />
                            <input className="rounded-lg px-4 py-[13px]" placeholder={form.input.email} type="text" id="email" name="email" />
                        </div>

                        <textarea className="rounded-lg px-4 py-[13px] h-24 resize-none" placeholder={form.input.review} />

                        {form.consents?.map((_node, _i) =>
                            <div key={_i} className="flex gap-6 items-start">
                                <input type="checkbox" id="question" name="question" />
                                <p>{_node}</p>
                            </div>
                        )}

                        <button
                            className="bg-white rounded-full px-6 py-4 w-fit self-center
                        text-primary font-medium
                        transition-colors duration-300
                        hover:text-primary-hover hover:bg-additional"
                            type="submit">
                            {form.input.submit}
                        </button>
                    </form>
                </div>

                <div className="container mx-auto grid grid-cols-2 gap-4">
                {reviews.map((_node,_i) => 
                    <div key={_i} className="rounded-3xl bg-white border border-grey-4 flex flex-col gap-6 p-6">
                            <p>{_node.text}</p>
                            <div className="flex justify-between relative">
                                <p>{_node.name}</p>
                                <Image className="opacity-10" src="/icons/2gis.svg" alt="" width={95} height={31} />
                            </div>
                        </div>
                )}   
                </div>
                
                <Enroll/>
            </div>
        </main>
    )
} 