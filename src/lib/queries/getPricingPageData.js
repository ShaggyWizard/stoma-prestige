const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getPricingPageData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            page(id: "409", idType: DATABASE_ID) {
                credit_acf {
                    creditTitle
                    creditText
                    creditAdditionalText
                    creditIcons {
                        icon {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `,
    });

    return data?.page;
}