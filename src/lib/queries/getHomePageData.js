const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getHomePageData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            page(id: "170", idType: DATABASE_ID) {
                main_banner {
                    bannerTitle
                    bannerText
                    bannerImage {
                        sourceUrl
                    }
                    bannerCards {
                        text
                        icon {
                            sourceUrl
                        }
                    }
                }
                advantages {
                    advantagesTitle
                    advantagesText
                    advantagesCards {
                        card {
                            text
                            image {
                                sourceUrl
                            }
                        }
                    }
                }
                about {
                    aboutTitle
                    aboutText
                }
            }
        }
    `,
    });

    const banner = data?.page?.main_banner;
    const advantages = data?.page?.advantages;
    const about = data?.page?.about;

    const bannerCards = []
    banner?.bannerCards?.forEach(_card => {
        bannerCards.push({
            text: _card.text,
            image: _card.icon?.sourceUrl,
        });
    });

    const advantagesCards = []
    advantages?.advantagesCards?.forEach(_card => {
        advantagesCards.push({
            text: _card.card?.text,
            image: _card.card?.image?.sourceUrl,
        });
    });

    return {
        banner: {
            title: banner?.bannerTitle,
            text: banner?.bannerText,
            image: banner?.bannerImage?.sourceUrl,
            cards: bannerCards,
        },
        advantages: {
            title: advantages?.advantagesTitle,
            text: advantages?.advantagesText,
            cards: advantagesCards,
        },
        about: {
            title: about?.aboutTitle,
            text: about?.aboutText,
        },
        doctors: {
            title: "Наши врачи",
            text: "Наши врачи постоянно повышают квалификацию и развиваются в своей специализации",
        },
    }
}