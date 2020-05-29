import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import style from './style';
import pokemonBg from '../../assets/pokemon.jpg'

const TYPE_COLORS = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#823551D',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#3295F6'
};

const PokemonCard = props => {
    console.log(props.pokemon.name);
        
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.cardWrap}>
                <Image source={pokemonBg} style={style.backgroundCard}/>
                <View style={style.WrapImage}>
                    <Image 
                        source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}} 
                        style={style.pokemonImage} 
                    />
                </View>
                <View style={style.wrapName}>
                    <Text style={style.pokemonName}>#{props.pokemon.order} - {props.pokemon.name.toUpperCase()}</Text>
                </View>
                    <View style={style.typesWrap}>
                        {
                            props.pokemon.types.map((type, id) => (     
                                // console.log(type)
                                                    
                                <Text 
                                    style={{
                                        ...style.tyepes,
                                        backgroundColor: `${TYPE_COLORS[type.type.name]}`                                        
                                    }}
                                    key={id}
                                >
                                    {type.type.name.toUpperCase()}
                                </Text>                        
                            ))
                        }
                    </View>
            </TouchableOpacity>
        </View>
    )
}

export default PokemonCard;