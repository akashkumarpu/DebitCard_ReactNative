import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLORS } from '../theme/Colors'

const windowWidth = Dimensions.get('window').width;

const ProgressView = (props) => {

    const width = props.spentValue / props.limitValue

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Debit card spending limit</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.spentText}>${props.spentValue}</Text>
                    <Text style={styles.limitText}>| ${props.limitValue}</Text>
                </View>
            </View>
        <View style={styles.progressBar}>
            <View
                style={{ backgroundColor: COLORS.primary, width: width * (windowWidth * 0.9), borderRadius: 10 }
                }></View>
        </View>
        </View>
    )
}

export default ProgressView

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.9,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    titleText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400'
    },
    valueContainer: {
        flexDirection: 'row'
    },
    spentText: {
        fontSize: 13,
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    limitText: {
        fontSize: 13,
        marginLeft: 5,
        color: 'grey'
    },
    progressBar: {
        height: 15,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: COLORS.ProgressView,
        borderRadius: 10,
        marginTop: 5
    },
})
