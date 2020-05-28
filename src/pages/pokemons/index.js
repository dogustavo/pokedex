import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import axios from 'axios';

const Pokemons = () => {
    const [ data, setData ] = useState([]);

    const getPokemons = () => {
         fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => res.json())
            .then( async pokemons =>
                await setData(pokemons.results)
            )
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return (
        <View>
            {
                data.map(pokemon => (
                    <Text key={pokemon.name}>
                        {pokemon.name}
                    </Text>
                    
                ))
            }
        </View>
    )
}

export default Pokemons