import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PokemonStatus = ({ pokemons }) => {
    return (
        <View style={styles.container}>
            {
                pokemons.stats.map((status, id) => (
                    <View key={id} style={styles.status}>
                        <View style={styles.wrapStatus}>
                            <Text>{status.stat.name}</Text>
                            <Text>{status.base_stat}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default PokemonStatus