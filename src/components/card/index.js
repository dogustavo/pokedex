import React from 'react';
import { Text, View, Image } from 'react-native';

import style from './style';

const PokemonCard = props => {
    // console.log(props.pokemon);
        
    return (
        <View style={style.container}>
            <View style={style.cardWrap}>
                <Image source={{uri: `${props.pokemon.sprites.front_default}`}} style={style.pokemonImage} />
                <Text>{props.pokemon.name}</Text>
            </View>
        </View>
    )
}

export default PokemonCard;