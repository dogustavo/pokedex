import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        marginRight: 30,
        width: '60%',
        height: '50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        
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
    }
})

export default style;