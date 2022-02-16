import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { COLORS } from '../theme/Colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

const ListItem = (props) => {

    let Icon;
    if (props.iconType == "material") {
        Icon = <MaterialIcon name={props.icon} size={15} color={COLORS.ProgressView} />
    }
    else {
       Icon = <Ionicon name={props.icon} size={15} color={COLORS.ProgressView} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.iconContainer}>
                    {Icon}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                </View>
            </View>
            <View style={styles.switchContainer}>
                {
                    props.showSwitch ?
                        <Switch
                            trackColor={{ false: "#767577", true: COLORS.primary }}
                            thumbColor={"#f4f3f4"}
                            onValueChange={props.onValueChanged}
                            value={props.isEnabled}
                        />
                        : null
                }
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    leftContainer: {
        flexDirection: 'row'
    },
    iconContainer: {
        backgroundColor: COLORS.secondary,
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: "flex-start",
        marginLeft: 10
    },
    title: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400'
    },
    subtitle: {
        color: 'grey',
        fontSize: 11
    },
})
