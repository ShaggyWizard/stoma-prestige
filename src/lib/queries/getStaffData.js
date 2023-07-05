const { gql } = require("@apollo/client");
const { default: client } = require("../apollo-client");

export default async function getStaffData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            staff {
                staff {
                    doctors {
                        name
                        role
                        photo {
                            sourceUrl
                        }
                    }
                    management {
                        name
                        role
                        photo {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `,
    });

    let doctors = []
    data?.staff?.staff?.doctors?.forEach(_doctor => {
        doctors.push({ name: _doctor.name, role: _doctor.role, image: _doctor.photo?.sourceUrl });
    });
    let management = []
    data?.staff?.staff?.management?.forEach(_manager => {
        doctors.push({ name: _manager.name, role: _manager.role, image: _manager.photo?.sourceUrl });
    });

    return { doctors, management }
}