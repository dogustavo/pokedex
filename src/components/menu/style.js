import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        position: 'relative'
    },
    menuText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 20
    },
    menuTextPressed: {
        color: '#F3B700',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 20,
    },
    selected: {
        width: 25,
        height: 6,
        borderRadius: 6 / 2,
        backgroundColor: '#F3B700',
        position: 'absolute',
        top: 30
    }
})

export default style;