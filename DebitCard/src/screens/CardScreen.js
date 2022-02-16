import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Dimensions, Platform, ScrollView } from 'react-native'
import { COLORS } from '../theme/Colors'
import DebitCard from '../components/DebitCard';
import ProgressView from '../components/ProgressView';
import ListItem from '../components/ListItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const API_URL =
    Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.2.2:3000";


const CardScreen = (props) => {

    const [limit, setLimit] = useState(5000)
    const [spent, setSpent] = useState(2000)
    const [hideCardNumber, sethideCardNumber] = useState(false)
    const [isLimitEnabled, setIsLimitEnabled] = useState(true)

    const [holderName, setHolderName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [thruDate, setThruDate] = useState("")
    const [cvv, setCvv] = useState("")

    const [firstfour, setFirstfour] = useState("")
    const [secondFour, setSecondFour] = useState("")
    const [thirdFour, setThirdFour] = useState("")
    const [fourthFour, setFourthFour] = useState("")

    useEffect(() => {
        setIsLimitEnabled(true)
        getMoviesFromApi();
    }, [])

    useEffect(() => {
        var noSpacesString = cardNumber.replace(/ /g, '');
        var pieces = noSpacesString.split("");
        var firstFourArray = [];
        var secondFourArray = [];
        var thirdFourArray = [];
        var fourthFourArray = [];
        for (let index = 0; index < pieces.length; index++) {
            const element = pieces[index];
            if (index < 4) {
                firstFourArray.push(element)
                var stringVal = firstFourArray.join("")
                setFirstfour(stringVal)
            }
            else if (index < 8) {
                secondFourArray.push(element)
                var stringVal = firstFourArray.join("")
                setSecondFour(secondFourArray)
            }
            else if (index < 12) {
                thirdFourArray.push(element)
                var stringVal = firstFourArray.join("")
                setThirdFour(thirdFourArray)
            }
            else if (index < 16) {
                fourthFourArray.push(element)
                var stringVal = firstFourArray.join("")
                setFourthFour(fourthFourArray)
            }
        }
    }, [cardNumber])

    const getMoviesFromApi = () => {
        return fetch(API_URL)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setHolderName(json.holderName);
                setCardNumber(json.cardnumber)
                setThruDate(json.thruDate);
                setCvv(json.cvv)
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const SwitchValuechanged = () => {
        if(isLimitEnabled) {
            setIsLimitEnabled(false)
        }
        else{
            props.navigation.navigate("Limit")
        }
    }

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.secondary}
                barStyle={"light-content"}
            />
            <View style={styles.headerView}>
                <View style={styles.headerTitleView}>
                    <Text style={styles.headerTitle}>Debit Card</Text>
                    <Image
                        source={require('../asssets/images/headerIcon.png')}
                        style={styles.headerIcon}
                    />
                </View>
                <Text style={styles.balanceText}>Available balance</Text>
                <View style={styles.balanceView}>
                    <View style={styles.dollarView}>
                        <Text style={styles.dollarText}>$$</Text>
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={styles.headerTitle}>3000</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <DebitCard
                    style={styles.cardView}
                    firstfour={firstfour}
                    secondFour={secondFour}
                    thirdFour={thirdFour}
                    fourthFour={fourthFour}
                    holderName={holderName}
                    thruDate={thruDate}
                    cvv={cvv}
                    isHidden={hideCardNumber}
                    onPressHideButton={() => { sethideCardNumber(!hideCardNumber) }}
                />
                <View style={styles.progressBar}>
                    <ProgressView
                        limitValue={limit}
                        spentValue={spent}
                    />
                </View>
                <View style={styles.listContainer}>
                <ListItem
                    icon="arrow-up"
                    iconType="ionicon"
                    title="Top-up account"
                    subtitle="Deposit money to your account to use with card"
                    onValueChanged={() => { }}
                    isEnabled={true}
                    showSwitch={false}
                />
                <ListItem
                    icon="speedometer"
                    iconType="ionicon"
                    title="Weekly spending limit"
                    subtitle={"Your weekly spending limit is" + limit}
                    onValueChanged={() => SwitchValuechanged()}
                    isEnabled={isLimitEnabled}
                    showSwitch={true}
                />
                <ListItem
                    icon="dangerous"
                    iconType="material"
                    title="Freeze card"
                    subtitle="Your debit card is currently active"
                    onValueChanged={() => { }}
                    isEnabled={false}
                    showSwitch={true}
                />
                <ListItem
                    icon="card-outline"
                    iconType="ionicon"
                    title="Get a new card"
                    subtitle="This deactivates your current debit card"
                    onValueChanged={() => { }}
                    isEnabled={false}
                    showSwitch={false}
                />
                <ListItem
                    icon="block"
                    iconType="material"
                    title="Deacttivated cards"
                    subtitle="Your previously deactivated cards"
                    onValueChanged={() => { }}
                    isEnabled={false}
                    showSwitch={false}
                />
                </View>
            </View>

        </SafeAreaView>
        </ScrollView>
    )
}

export default CardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: windowHeight,
        backgroundColor: COLORS.secondary
    },
    headerView: {
        backgroundColor: COLORS.secondary,
        height: windowHeight * 0.3
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
    },
    headerIcon: {
        height: 30,
        width: 30,
        alignSelf: 'flex-start'
    },
    balanceText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 20,
        paddingLeft: 10,
        borderRadius: 10
    },
    balanceView: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 10,
    },
    dollarView: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
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
        alignItems: 'center'
    },
    cardView: {
        marginTop: -(windowWidth * 0.9 * 0.6) * 0.4
    },
    progressBar: {
        marginTop: 20
    },
    listContainer:{
        width: "100%",
        alignItems: 'center',
        marginTop: 10
    }
})
