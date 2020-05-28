import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import style from './style';
import searchIcon from '../../assets/search/search.png';

const Home = () => {
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.discoverText}>Discover</Text>
                <TouchableOpacity>
                    <Image source={searchIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;