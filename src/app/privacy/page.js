import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            page(id: "327", idType: DATABASE_ID) {
                title
                content(format: RENDERED)
            }
        }
    `,
    });

    return {
        title: data?.page?.title,
        text: data?.page?.content,
    }
}

export default async function Home() {

    const { title, text } = await getData();

    return (
        <main>
            <div className="h-[306px] bg-[#F2F2F2] rounded-b-[48px] -z-10 absolute top-0 left-0 right-0" />
            <div className="pt-[111px] container mx-auto flex flex-col">
                <h1 className="py-16">{title}</h1>
                <div className="py-12 main:columns-2 policy" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </main>
    )
}
