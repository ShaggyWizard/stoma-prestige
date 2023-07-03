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

    return (
        <main className="pt-[75px] main:pt-[111px]">
            <div className="container mx-auto relative flex flex-col">
                <div className="bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute inset-0" />
                <div className="flex gap-4 py-6 main:py-16 
                    flex-col
                    main:flex-row
                ">
                    <h1 className="main:w-[425px] flex-shrink-0">{banner.title}</h1>
                    <h5 className="flex-1">{banner.text}</h5>
                </div>
            </div>

            <div className="container mx-auto flex flex-col">
                <div className='grid grid-cols-1 main:grid-cols-2 gap-2 py-6 main:py-12'>
                    {faq?.map((_node, _i) =>
                        <FaqCard node={_node} key={_i} />
                    )}
                </div>

                <div className="py-12">
                    <FormQuestion />
                </div>
            </div>
        </main>
    )
}
