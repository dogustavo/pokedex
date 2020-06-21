import { StyleSheet, Dimensions } from 'react-native';

const widthDimensions = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        width: widthDimensions,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    status: {
        maxWidth: '100%',
    },
    wrapStatus: {
        flexDirection: 'row'
    }
})

export default styles