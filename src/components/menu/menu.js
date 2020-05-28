import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';

const Home = () => {
    const [ pressed, setPressed ] = useState('Pokemons');

    const handleClick = (text) => {
        setPressed(text);
    }

    const carouselMenu = [
        {
            id: 1,
            name: 'Pokemons'
        },
        {
            id: 2,
            name: 'Berries'
        },
        {
            id: 3,
            name: 'Items'
        }
    ]

    
    return (
        <View style={style.menuContainer}>
            {
                carouselMenu.map(menu => (
                    <TouchableOpacity onPress={() => handleClick(menu.name)} key={menu.id}>
                        <Text 
                            style={pressed == menu.name ? style.menuTextPressed : style.menuText}

                        >
                            {menu.name}
                        </Text>

                        <Text style={pressed == menu.name ? style.selected : ''}/>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default Home;