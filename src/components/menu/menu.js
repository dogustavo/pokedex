import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';

const Home = props => {

    const handleClick = (text) => {
        props.setPressed(text);
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
                            style={props.pressed == menu.name ? style.menuTextPressed : style.menuText}

                        >
                            {menu.name}
                        </Text>

                        <Text style={props.pressed == menu.name ? style.selected : ''}/>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default Home;