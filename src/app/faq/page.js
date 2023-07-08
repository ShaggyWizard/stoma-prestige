import ModalButton from "@/components/ModalButton";
import FaqCard from "@/components/faqCard";
import FormQuestion from "@/components/formQuestion";
import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            faq {
                faq_acf {
                    faqNodes {
                        question
                        answer
                    }
                }
            }
        }
    `,
    });

    return {
        banner: {
            title: "Вопрос-ответ",
            text: "Мы понимаем, что лечение зубов - это ответственный процесс и у вас могут возникнуть вопросы. Вы можете записаться к нам на консультацию или задать свой вопрос здесь.",
        },
        faq: data?.faq?.faq_acf?.faqNodes,
    }
}

export default async function Home() {

    const { banner, faq } = await getData();
    let i = 0;
    return (
        <main className="pt-[75px] main:pt-[111px]">
            <div className="max-main:hidden absolute bg-[#f2f2f2] inset-x-0 top-0 h-[111px]" />
            <div className="relative group animate">
                <div className="bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute inset-0" />
                <div className="container mx-auto flex flex-col">
                    <div className="flex gap-4 py-6 main:py-16 
                    flex-col
                    main:flex-row
                ">
                        <h1 className="main:w-[425px] flex-shrink-0 transition-all delay-[400ms] duration-1000
                                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                        ">{banner.title}</h1>
                        <h5 className="flex-1 transition-all delay-[700ms] duration-1000
                                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                        ">
                            Мы понимаем, что лечение зубов - это ответственный процесс и у вас могут возникнуть вопросы. Вы можете&nbsp;
                            <ModalButton className='underline hover:text-primary'>записаться</ModalButton>&nbsp;к нам на консультацию или задать свой вопрос здесь
                        </h5>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col group animate">
                <div className='grid grid-cols-1 main:grid-cols-2 gap-2 py-6 main:py-12'>
                    {faq?.map((_node, _i) => {
                        i++;
                        return (
                            <div key={_i} className={`transition-all ${delay[_i * 3 + 7]} duration-1000
                                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                            `}>
                                <FaqCard node={_node} />
                            </div>
                        )
                    })}
                </div>

                <div className={`py-12
                    transition-all ${delay[i * 3 + 7]} duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/4
                `}>
                    <FormQuestion />
                </div>
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