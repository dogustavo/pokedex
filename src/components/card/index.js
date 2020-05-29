import React from 'react';
import { Text, View, Image } from 'react-native';

const PokemonCard = props => {
    console.log({uri: props.pokemon.sprites.front_default});
        
    return (
        <View>
            <Image source={{uri: `${props.pokemon.sprites.front_default}`}} style={{width: 66, height: 58}} />
            <Text>{props.pokemon.name}</Text>
        </View>
    )
}

export default PokemonCard;