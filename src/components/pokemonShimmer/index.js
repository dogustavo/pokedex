import React from 'react';
import { View } from 'react-native';

import styles from './style';

const PokemonShimmer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pokemonCard}>
                <View style={styles.cardWrap}>
                    <View style={styles.pokemonImage}/>
                    <View style={styles.pokemonName}/>
                    <View style={styles.pokemonType}/>
                </View>
            </View>
        </View>
    )
}

export default PokemonShimmer;