import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`;

export const GET_SINGLE = gql`
    query pokemon($id: String) {
        pokemon(id: $id) {
            name
            weight {
                maximum
            }
            height {
                maximum
            }
        }
    }
`;