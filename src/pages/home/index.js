import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import style from './style';
import searchIcon from '../../assets/search/search.png';
import Menu from '../../components/menu/menu';
import Pokemons from '../pokemons';
import PokeDolar from '../pokeDolar';
import Items from '../items';

const Home = () => {
    const [ pressed, setPressed ] = useState('Pokemons');

    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.discoverText}>Discover</Text>
                <TouchableOpacity>
                    <Image source={searchIcon}/>
                </TouchableOpacity>
            </View>
            <Menu pressed={pressed} setPressed={setPressed}/>

            {
                pressed === 'Pokemons'
                ? <Pokemons/>
                : pressed === 'PokeDolar'
                ? <PokeDolar/>
                : <Items/>
            }
        </View>
    )
}

export default Home;