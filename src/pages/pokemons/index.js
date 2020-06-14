import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import axios from 'axios';

import PokemonCard from '../../components/card';
import FooterCard from '../../components/footerCard';
import PokemonShimmer from '../../components/pokemonShimmer';
import style from './style';
import { Value } from 'react-native-reanimated';

const Pokemons = () => {
    const [ pokeData, setPokeData ] = useState([]);
    const [ currentPage, setCurrrentPage ] = useState('https://pokeapi.co/api/v2/pokemon')
    const [ next, setNext ]         = useState('');
    const [ loading, setLoading ]   = useState(true);
    const [ visible, setVisible ]   = useState(false);

    const fetchPokemons = () => {
        axios.get(currentPage)
            .then(res => {
                setNext(res.data.next)
                res.data.results.map(pokemon => (
                    axios.get(pokemon.url)
                        .then(res => {
                            setPokeData(value => [ ...value, res.data ])
                            setLoading(false)
                        })
                ))
            })
    }
    // const fetchPokemons = () => {
    //     fetch(currentPage, {signal})
    //         .then(res => res.json())
    //         .then(async pokemons => {
    //             setNext(pokemons.next);
    //             setPrevious(pokemons.previous);             
    //             pokemons.results.map(pokemon => (
    //                 fetch(pokemon.url)
    //                     .then(res => res.json())
    //                     .then(pokemonInfo => {            
    //                         setPokeData(value => [...value, pokemonInfo])
    //                         setloading(false)                            
    //                     })
    //             ))
    //         })
    // }

    const onMomentumScrollEnd = () => {
        console.log('chegou');

        goToNextPage()
    }

    const goToNextPage = () => {setCurrrentPage(next)}

    useEffect(() => {
        fetchPokemons();
        if(loading === false) {
            setVisible(true)
        }

    }, [currentPage])
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={style.topContainer}>
                <ScrollView 
                    horizontal={true}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    showsHorizontalScrollIndicator={false}
                >
                    
                    {
                        loading === true ?
                            <>
                                <PokemonShimmer visible={visible}/>
                                <PokemonShimmer visible={visible}/>
                            </>
                        :
                            pokeData.map((pokemon, id) => (
                                <PokemonCard 
                                    key={id}
                                    pokemon={pokemon}
                                />
                            ))
                    }
                </ScrollView>
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