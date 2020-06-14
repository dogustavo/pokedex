import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Text, FlatList } from 'react-native';
import axios from 'axios';

import PokemonCard from '../../components/card';
import FooterCard from '../../components/footerCard';
import PokemonShimmer from '../../components/pokemonShimmer';
import style from './style';

const Pokemons = () => {
    const [ pokeData, setPokeData ] = useState([]);
    const [ currentPage, setCurrrentPage ] = useState('https://pokeapi.co/api/v2/pokemon')
    const [ next, setNext ]         = useState('');
    const [ loading, setLoading ]   = useState(true);
    const [ visible, setVisible ]   = useState(false);

    const fetchPokemons = () => {
        axios.get(currentPage)
            .then(res => {
                setNext(res.data.next)
                res.data.results.map(pokemon => (
                    axios.get(pokemon.url)
                        .then(res => {
                            setLoading(false)
                            setPokeData(value => [ ...value, res.data ])
                        })
                ))
            })
    }

    const handleLoadMore = () => {
        setCurrrentPage(next)
    }
    useEffect(() => {
        fetchPokemons();

        if(!loading) {
            setVisible(true)
        }
    }, [currentPage])


    const renderPokemons = ({ item }) => {

        return ( <PokemonCard pokemon={item}/> )
    }

    const loadingPlaceholder = () => ( <PokemonShimmer visible={visible}/> )
            
    const scrollFooter = () => (<PokemonShimmer visible={visible}/>)
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={style.topContainer}>
                <FlatList
                    data={pokeData}
                    renderItem={renderPokemons}
                    keyExtractor={item => item.name}
                    
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.4} 

                    // onMomentumScrollEnd={onMomentumScrollEnd}
                    ListEmptyComponent={loading ? loadingPlaceholder : <></>}
                    ListFooterComponent={loading ? scrollFooter : <></>}
                />
            </View>
            <View style={style.bottomContainer}>
                <Text style={style.bottomTitle}>Iniciais</Text>
                    {
                        pokeData.map((pokemon, id) => (
                            <FooterCard
                                key={id}
                                pokemon={pokemon}
                            />
                        ))
                    }
            </View>
        </SafeAreaView>
    )
}

export default Pokemons