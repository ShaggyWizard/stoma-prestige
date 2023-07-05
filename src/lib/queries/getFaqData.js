const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getFaqData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            faq {
                pageTitle
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

    return data.faq;
}