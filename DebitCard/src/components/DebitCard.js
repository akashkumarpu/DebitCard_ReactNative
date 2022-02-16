import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { COLORS } from '../theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAewsomeIcon from 'react-native-vector-icons/FontAwesome'

const windowWidth = Dimensions.get('window').width;

const DebitCard = ({ style, firstfour, secondFour, thirdFour, fourthFour, holderName, thruDate, cvv, isHidden, onPressHideButton }) => {

    const hiddednString = "xxxx"

    return (
        <View style={style}>
            <View style={styles.topView}>
                <TouchableOpacity 
                    style={styles.hideContainer}
                    onPress={onPressHideButton}
                    >
                    <Icon name = {isHidden ? "eye" : "eye-off"} size={25} color={COLORS.primary}/>
                    <Text style={styles.hideText}>{isHidden ? "Show" : "Hide"} card number</Text>
                </TouchableOpacity>
            </View>
        <View style={styles.cardView}>
            <Text style={styles.logoText}>aspire</Text>
            <Text style={styles.nameText}>{holderName}</Text>
            <View style={styles.cardNumberView}>
                <Text style={styles.cardnumber}>{isHidden ? hiddednString : firstfour}</Text>
                <Text style={styles.cardnumber}>{isHidden ? hiddednString : secondFour}</Text>
                <Text style={styles.cardnumber}>{isHidden ? hiddednString : thirdFour}</Text>
                <Text style={styles.cardnumber}>{isHidden ? hiddednString : fourthFour}</Text>
            </View>
            <View style={styles.cardNumberView}>
                <Text style={styles.cardnumber}>thru: {thruDate}</Text>
                <Text style={styles.cardnumber}>cvv: {cvv}</Text>
            </View>
            <View style={styles.iconContainer}>
            <FontAewsomeIcon name="cc-visa" size ={35} color="white"/>
            </View>
        </View>
        </View>
    )
}

export default DebitCard

const styles = StyleSheet.create({
    topView:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },  
    hideContainer:{
        width: "50%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingBottom: 5,
        marginBottom: -7,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    hideText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 10
    },
    cardView: {
        width: windowWidth * 0.9,
        height: windowWidth * 0.9 * 0.6,
        backgroundColor: COLORS.primary,
        alignSelf: 'center',
        borderRadius: 10,
    },
    logoText: {
        color: 'white',
        marginRight: 15,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        fontFamily: 'Avenir'
    },
    nameText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    cardNumberView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    cardnumber: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Arial'
    },
    iconContainer: {
        marginTop: 15,
        alignItems: 'flex-end',
        paddingRight: 15
    }
})
