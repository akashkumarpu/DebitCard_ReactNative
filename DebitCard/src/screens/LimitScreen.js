import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Dimensions, Platform, ScrollView, TextInput } from 'react-native'
import { COLORS } from '../theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import Customchip from '../components/Customchip';


const windowHeight = Dimensions.get('window').height;

const LimitScreen = (props) => {

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor={COLORS.secondary}
                    barStyle={"light-content"}
                />
                <View style={styles.headerView}>
                    <View style={styles.headerTitleView}>
                        <Icon name="chevron-back-outline" size={30} color="white" />
                        <Image
                            source={require('../asssets/images/headerIcon.png')}
                            style={styles.headerIcon}
                        />
                    </View>
                    <Text style={styles.headerTitle}>Spending Limit</Text>
                </View>
                <View style={styles.body}>

                    <View style={{width: '100%', alignItems: 'center'}}>
                    <View style={styles.labelContainer}>
                        <Icon name="speedometer" size={15} color='black' />
                        <Text style={styles.indicatorLabel}>Set a weekly debit card sending limit</Text>
                    </View>

                    <View style={styles.TextFieldSection}>
                        <View style={styles.dollarView}>
                            <Text style={styles.dollarText}>$$</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            value="3000"
                        />
                    </View>
                    <Text style={styles.weekText}>Here weekly means the last 7 days - not the calender week</Text>
                       <View style={styles.chipContainer}>
                        <Customchip value="5,000"/>
                        <Customchip value="10,000"/>
                        <Customchip value="20,000"/>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Save"
                        onClick={()=> {props.navigation.goBack()}}
                    />
                    </View>
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}

export default LimitScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
        backgroundColor: COLORS.secondary
    },
    headerView: {
        backgroundColor: COLORS.secondary,
        height: windowHeight * 0.2
    },
    headerTitleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10
    },
    headerIcon: {
        height: 30,
        width: 30,
        alignSelf: 'flex-start'
    },
    LimitText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    dollarView: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    dollarText: {
        color: "white",
        fontSize: 14,
        fontWeight: '900'
    },
    body: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: -30,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    labelContainer: {
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    indicatorLabel: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 10
    },

    TextFieldSection: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 15
    },
    input: {
        flex: 1,
        paddingTop: 10,
        marginRight: 10,
        paddingBottom: 10,
        marginLeft: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2
    },
    weekText: {
        color: 'grey',
        fontSize: 12,
        opacity: 0.5,
        marginTop: 20
    },
    chipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        height: 75
    },
    buttonContainer: {
        width: "100%",
        alignItems: 'center',
        marginBottom: 50
    }
})

