import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

import PokemonTypes from './components/types';
import PokemonStatus from './components/status';

import styles from './style'
import pokemonBg from '../../assets/pokemonDolarBg.png';

const PokeDolar = () => {
    const [ pokemon, setPokemon ] = useState([])
    const [ dolar, setDolar ] = useState('')

    const fetchDolar = () => {
        return new Promise((resolve, reject) => {
            axios.get(`https://economia.awesomeapi.com.br/USD-BRL/1`)
                    .then(res => {
                        res.data.map(dolar => {
                            let dolarTwoCases = (+dolar.bid).toFixed(2)
                            let dolarNumber = dolarTwoCases.split('.').join('');
                            setDolar(dolarTwoCases);
                            resolve(dolarNumber);
                        })
                        
                    })
                    .catch(error => reject(error))
        })
        
    }

    const fetchPokemon = dolar => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${dolar}`)
            .then(res => {
                setPokemon(value => [...value, res.data])
            });
    }
    
    useEffect(() => {
        fetchDolar()
            .then(res =>
                fetchPokemon(res)
            )
    }, [])

    console.log(pokemon);
    

    return (
        <View style={styles.container}>
            {
                pokemon.map((poke, id) => (
                    <View key={id}>
                        <View style={styles.header}>
                            <Image 
                                source={pokemonBg}
                                style={styles.pokemonBackground}
                            />
                            
                            <View style={styles.wrapPokemon}>

                                <Text>#{poke.id}</Text>
                                <Image 
                                    source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`}} 
                                    style={styles.pokemonImage} 
                                />
                            </View>
                        </View>

                        <View style={styles.pokemonStatusWap}>
                            <View style={styles.statusBackground}/>

                            <View style={styles.wrapStatus}>
                                <Text style={styles.pokemonName}>{poke.name}</Text>

                                <PokemonTypes pokemons={poke}/>
                                <PokemonStatus pokemons={poke}/>

                                <Text style={styles.dolarText}>R$ {dolar.replace('.', ',')}</Text>
                            </View>
                        </View>
                    </View>
                    
                ))
            }
            

        </View>
    )
}

export default PokeDolar