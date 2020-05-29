import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';

import PokemonCard from '../../components/card';
import style from './style';


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
        <SafeAreaView style={{flex: 1}}>
            <View style={style.container}>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        pokeData.map((pokemon, id) => (
                            <PokemonCard 
                                key={id}
                                pokemon={pokemon}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Pokemons