const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getCommonData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            common {
                offer {
                    offerText
                    offerCards {
                        text
                        icon {
                            sourceUrl
                        }
                    }
                }
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
                gallery_acf {
                    galleryTitle
                    galleryGallery {
                        sourceUrl
                    }
                }
                how_acf {
                    howTitle
                    howCards {
                        problem
                        doctor
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `,
    });

    const how = data?.common?.how_acf;
    const worksCards = []
    how?.howCards?.forEach(_card => {
        worksCards.push({
            problem: _card.problem,
            doctor: _card.doctor,
            image: _card.image?.sourceUrl,
        });
    });

    return {
        common: data.common,
        works: {
            title: how?.howTitle,
            cards: worksCards,
        },
    };
}