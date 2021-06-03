import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Pokemon from '../components/Pokemon';
import { GET_POKEMONS, GET_SINGLE } from '../graphql/get-pokemons';

function PokemonsContainer() {
    const { data: { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
        variables: { first: 9 }
    });
    const { data: { pokemon: {name = '', weight: { maximum = ''} = {}} = {}} = {}} = useQuery(GET_SINGLE, {
        variables: { id: "UG9rZW1vbjowMDI=" }
    });
    
    useEffect(() => {
        console.log(name, maximum);
    }, [ name, maximum ]);

    return(
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
}

export default PokemonsContainer;