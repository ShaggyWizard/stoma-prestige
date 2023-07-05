const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getPricingData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            pricing {
                pricing_acf {
                    category {
                        name
                        items {
                            name
                            price
                        }
                    }
                }
            }
        }
    `,
    });

    const categories = [];
    data?.pricing?.pricing_acf?.category?.forEach(_category => {
        const items = [];
        _category?.items?.forEach(_item => {
            items.push({ name: _item.name, price: _item.price });
        });

        categories.push({ name: _category.name, items: items });
    });

    return categories;
}