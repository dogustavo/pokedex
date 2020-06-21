import { StyleSheet, Dimensions } from 'react-native';
import fontFamily from '../../styles/fontFamily';

const widthDimensions = Dimensions.get('window').width
const heightDimensions = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        position: 'relative',
        height: '50%',
        alignItems: 'center',
    },
    pokemonStatusWap: {
        height: '50%', 
        alignItems: 'center',
        position: 'relative'
    },
    statusBackground: {
        backgroundColor: 'white',
        width: widthDimensions,
        height: heightDimensions,
    },
    wrapPokemon: {
        position: 'absolute',
        alignItems: 'center',
        top: 30,
        zIndex: 4
    },
    pokemonImage: {
        width: 200,
        height: 200,
    },
    pokemonBackground: {
        width: widthDimensions,
        height: '100%',
        zIndex: 3,
    },
    wrapStatus: {
        zIndex: 2,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    dolarText: {
        fontFamily: fontFamily.bold,
        fontSize: 110,
        bottom: 0,
        color: 'rgba(0, 0, 0, 0.6)',
    },
    pokemonName: {
        fontSize: 40,
        textTransform: 'capitalize',
        fontFamily: fontFamily.regular,
    }
    
})

export default styles