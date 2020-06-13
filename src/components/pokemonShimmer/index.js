import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import styles from './style';

const PokemonShimmer = props => {

    return (
        <View style={styles.container}>
            <View style={styles.pokemonCard}>
                <View style={styles.cardWrap}>
                    <ShimmerPlaceHolder
                        style={styles.cardShimmer} 
                        autoRun={true}
                        visible={props.visible}
                    />
                    <ShimmerPlaceHolder autoRun={true} visible={props.visible} style={styles.pokemonImage}/>
                    <ShimmerPlaceHolder autoRun={true} visible={props.visible} style={styles.pokemonName}/>
                    <ShimmerPlaceHolder autoRun={true} visible={props.visible} style={styles.pokemonType}/>
                </View>
                
            </View>
        </View>
    )
}

export default PokemonShimmer;