import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            page(id: "329", idType: DATABASE_ID) {
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
        <main className="flex flex-col">
            <div className="h-[111px] bg-[#F2F2F2]" />
            <div className="flex flex-col">
                <div className="bg-[#F2F2F2] rounded-b-[48px]">
                    <h1 className="py-16 container mx-auto">{title}</h1>
                </div>
                <div className="py-12 columns-2 policy container mx-auto" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </main>
    )
}
