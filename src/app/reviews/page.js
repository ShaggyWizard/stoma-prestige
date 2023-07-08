import Enroll from "@/components/enroll";
import ReviewForm from "@/components/reviewForm";
import getReviewsData from "@/lib/queries/getReviewsData";
import { FormatText } from "@/lib/textFormatter"
import Image from "next/image"


export const revalidate = 0;


async function getData() {
    const data = await getReviewsData();


    return {
        reviews: data,
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
            <div className="max-main:hidden absolute bg-[#f2f2f2] inset-x-0 top-0 h-[111px]" />
            <div className="relative group animate">
                <div className="absolute inset-0 main:bottom-[226px] bg-[#F2F2F2] rounded-b-[48px] -z-10" />
                <div className="container mx-auto flex gap-4 flex-col main:flex-row py-6 main:py-12">
                    <h1 className="main:w-[425px] flex-shrink-0 
                        animate transition-all delay-[400ms] duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2">{banner.title}</h1>
                    <h5 className="flex-1 transition-all delay-[700ms] duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                    ">{banner.text}</h5>
                </div>
                <div className="container mx-auto grid gap-6 bg-additional rounded-3xl
                    px-6 py-4 grid-cols-1
                    main:px-12 main:py-8 main:grid-cols-2
                    overflow-hidden
                    transition-all delay-[1000ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/4
                ">
                    <div className="flex flex-col gap-6">
                        <h3 className=""><FormatText highlightClass="text-primary" text={form.title} /></h3>
                        <h5 className="">{form.text}</h5>
                    </div>
                    <ReviewForm />
                </div>
            </div>


            <div className="container mx-auto grid grid-cols-1 main:grid-cols-2 gap-4 group animate">
                {reviews.map((_node, _i) =>
                    <div key={_i} className={`rounded-3xl bg-white border border-grey-4 flex flex-col gap-6 p-6
                        transition-all ${delay[_i * 3 + 4]} duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                    `}>
                        <p>{_node.text}</p>
                        <div className="flex justify-between relative">
                            <p>{_node.name}</p>
                            <Image className="opacity-10" src="/icons/2gis.svg" alt="" width={95} height={31} />
                        </div>
                    </div>
                )}
            </div>

            <div className="container mx-auto flex
                py-6 gap-6
                main:py-12 main:gap-12
            ">
                <Enroll />
            </div>
        </main>
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