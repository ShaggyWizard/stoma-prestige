const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getReviewsData() {
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

    return data?.reviews?.reviews?.nodes;
}