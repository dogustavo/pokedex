import { StyleSheet, Dimensions } from 'react-native';
import fontFamily from '../../styles/fontFamily';

const widthDimensions = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
    },
    header: {
        position: 'relative',
        height: '40%',
        alignItems: 'center'
    },
    pokemonStatusWap: {
        height: '60%', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    statusBackground: {
        height: '120%',
        width: widthDimensions,
        backgroundColor: 'white',
        zIndex: 2,
    },
    wrapPokemon: {
        position: 'absolute',
        alignItems: 'center',
        top: 30,
        zIndex: 3
    },
    pokemonImage: {
        width: 200,
        height: 200,
    },
    pokemonBackground: {
        resizeMode: 'cover',
        width: widthDimensions,
        height: '110%',
    },
    dolarText: {
        fontFamily: fontFamily.bold,
        fontSize: 110,
        bottom: 0,
        textAlign: 'center',
        width: widthDimensions,
        color: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        zIndex: 2
    },
    pokemonName: {
        fontFamily: fontFamily.regular,
    }
    
})

export default styles