import React from 'react';
import { Text, View, Image } from 'react-native';

import style from './style';

const PokemonCard = props => {
    // console.log(props.pokemon.types);
        
    return (
        <View style={style.container}>
            <View style={style.cardWrap}>
                <Text>Pokemon number</Text>
                <Text>{props.pokemon.order}</Text>
                <Image source={{uri: `${props.pokemon.sprites.front_default}`}} style={style.pokemonImage} />
                <Text style={style.pokemonName}>{props.pokemon.name}</Text>
                <View>
                    {
                        props.pokemon.types.map((type, id) => (
                            <Text key={id}>{type.type.name}</Text>                        
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default PokemonCard;