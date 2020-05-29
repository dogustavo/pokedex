import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 30,
        borderWidth: 0.5,
        borderColor: 'rgba(204, 204, 2204, 0.3)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
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
        height: 150
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default style;