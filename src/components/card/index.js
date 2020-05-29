import React from 'react';
import { Text, View, Image } from 'react-native';

import style from './style';

const PokemonCard = props => {
    console.log(props.pokemon);
        
    return (
        <View style={style.container}>
            <View style={style.cardWrap}>
                <Image source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}} style={style.pokemonImage} />
                <Text style={style.pokemonName}>#{props.pokemon.order} - {props.pokemon.name.toUpperCase()}</Text>
                    {
                        props.pokemon.types.map((type, id) => (     
                            // console.log(type)
                                                  
                            <View key={id}>
                                <Text>{type.type.name}</Text>                        
                            </View>
                        ))
                    }
            </View>
        </View>
    )
}

export default PokemonCard;