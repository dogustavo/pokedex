import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

const Home = () => {
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.discoverText}>Discover</Text>
            </View>
        </View>
    )
}

export default Home;