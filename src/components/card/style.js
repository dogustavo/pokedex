import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 30,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 1,
        borderRadius: 20,
        height: '60%',
        width: 200,
        
    },
    cardWrap: {
        width: '100%',
        height: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    pokemonImage: {
        width: 150, 
        height: 150,
        marginBottom: 20
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default style;