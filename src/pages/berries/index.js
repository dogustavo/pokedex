import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

import styles from './style'
import pokemonBg from '../../assets/pokemonDolarBg.png'

const Berries = () => {
    const [ pokemon, getPokemon ] = useState([])
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
                getPokemon(res.data)
            });
    }
    
    useEffect(() => {
        fetchDolar()
            .then(res =>
                fetchPokemon(res)
            )
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={pokemonBg}
                    style={styles.pokemonBackground}
                />
                
                <View style={styles.wrapPokemon}>
                    <View>
                        <Text>#{pokemon.id}</Text>
                        <Text style={styles.pokemonName}>{pokemon.name}</Text>
                    </View>
                    <Image 
                        source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}} 
                        style={styles.pokemonImage} 
                    />
                </View>
            </View>

            <View style={styles.pokemonStatusWap}>
                <View style={styles.statusBackground}/>
                <Text style={styles.dolarText}>R$ {dolar.replace('.', ',')}</Text>
            </View>

        </View>
    )
}

export default Berries