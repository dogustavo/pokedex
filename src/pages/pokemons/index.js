import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';

import PokemonCard from '../../components/card';
import FooterCard from '../../components/footerCard';
import PokemonShimmer from '../../components/pokemonShimmer';
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
            <View style={style.topContainer}>
                <PokemonShimmer/>
                {/* <ScrollView 
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
                </ScrollView> */}
            </View>
            <View style={style.bottomContainer}>
                <Text style={style.bottomTitle}>Iniciais</Text>
                    {
                        pokeData.map((pokemon, id) => (
                            <FooterCard
                                key={id}
                                pokemon={pokemon}
                            />
                        ))
                    }
            </View>
        </SafeAreaView>
    )
}

export default Pokemons