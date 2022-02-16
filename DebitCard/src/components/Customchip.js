import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../theme/Colors'

const Customchip = ({value}) => {
    return (
        <View style={styles.dollarView}>
        <Text style={styles.dollarText}>$$ {value}</Text>
    </View>
    )
}

export default Customchip

const styles = StyleSheet.create({
    dollarView: {
        backgroundColor: COLORS.ProgressView,
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dollarText: {
        color: COLORS.primary,
        fontSize: 12,
        fontWeight: '900'
    },
})
