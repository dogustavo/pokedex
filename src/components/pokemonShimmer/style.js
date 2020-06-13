import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 30
    },
    cardWrap: {
        width: '100%',
        height: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
    },
    cardShimmer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 20,
    },
    pokemonCard: {
        backgroundColor: '#DDD',
        height: '100%',
        width: 230,
        borderRadius: 30,
    },
    pokemonImage: {
        width: 150, 
        height: 150,
        backgroundColor: '#D0D0D0',
        borderRadius: 150/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    pokemonName: {
        height: 30,
        width: 200,
        backgroundColor: '#D0D0D0',
        borderRadius: 60,
        marginBottom: 20,
    },
    pokemonType: {
        height: 25,
        width: 110,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 65 / 2,
        backgroundColor: '#D0D0D0',
    }
})

export default styles;