import React, { useState, useEffect } from 'react';

import PokemonCard from '../../components/card';
import { View, FlatList } from 'react-native';

const Pokemons = () => {
    const [ pokeData, setPokeData ] = useState([]);
    const [ loading, setloading ] = useState(true);

    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    const fetchPokemons = () => {
        fetch(`${initialUrl}`)
            .then(res => res.json())
            .then(async pokemons => {              
                pokemons.results.map(pokemon => (
                    fetch(pokemon.url)
                        .then(res => res.json())
                        .then(pokemonInfo =>            
                            setPokeData(value => [...value, pokemonInfo])                            
                        )
                ))
            })
        
    }

    useEffect(() => {
        fetchPokemons();
    }, [])
    
    
    return (
        <View>
            {
                pokeData.map((pokemon, id) => (
                    <PokemonCard 
                        key={id}
                        pokemon={pokemon}
                    />
                ))
            }
        </View>
    )
}

export default Pokemons