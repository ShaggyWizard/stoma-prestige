const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getContactsData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            contacts {
                contacts_acf {
                    adress {
                        text
                        link
                    }
                    email {
                        text
                        link
                    }
                    telephones {
                        text
                        link
                    }
                    whatsapp {
                        text
                        link
                    }
                }
            }
        }
    `,
    });

    const contacts = data?.contacts?.contacts_acf;

    const telephones = []
    contacts?.telephones?.forEach(_number => {
        telephones.push({
            text: _number.text,
            link: "tel:+7" + _number.link,
        });
    });

    return {
        adress: {
            text: contacts?.adress?.text,
            link: contacts?.adress?.link,
        },
        email: {
            text: contacts?.email?.text,
            link: "mailto:" + contacts?.email?.link,
        },
        whatsapp: {
            text: contacts?.whatsapp?.text,
            link: "https://wa.me/7" + contacts?.whatsapp?.link,
        },
        telephones: telephones,
    }
}