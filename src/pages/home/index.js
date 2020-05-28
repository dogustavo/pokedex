import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import style from './style';
import searchIcon from '../../assets/search/search.png';
import Menu from '../../components/menu/menu';

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
        </View>
    )
}

export default Home;