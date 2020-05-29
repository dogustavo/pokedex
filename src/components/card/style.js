import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 30,
        borderRadius: 30,
        height: '60%',
        width: 230,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardWrap: {
        width: '100%',
        height: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
    },
    backgroundCard: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 30,
    },
    WrapImage: {
        width: 150, 
        height: 150,
        backgroundColor: 'black',
        borderRadius: 150/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 4,
        borderColor: 'white'
    },
    pokemonImage: {
        width: 150, 
        height: 150
    },
    wrapName: {
        height: 30,
        width: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 60,
        marginBottom: 20,
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center'        
    },
    typesWrap: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    },
    tyepes: {
        height: 20,
        width: 65,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 65 / 2,
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'white'
    }
})

export default style;