import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/BackButton';

const SettingsScreen = () => {

    function pressCircle(i) {
        setVal(i);
    }

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    const goForward = () => {
        navigation.navigate('MainScreen')
    }

    return (
        <SafeAreaView style={styles.container} >
            <BackButton />
            <TextInput style={styles.input} placeholder="Hevosen kutsumanimi" />
            <TextInput style={styles.input} placeholder="Sukupuoli" />
            <TextInput style={styles.input} placeholder="Ikä" />
            <TextInput style={styles.input} placeholder="Rotu"/>
            <TextInput style={styles.input} placeholder="Osoite"/>
            <TextInput multiline={true} numberOfLines={6} style={styles.inputMultiline} placeholder={'Lisätietoja hevosesta...'} />
            <TouchableOpacity style={styles.button} onPress={goForward} >
                <Text style={styles.text} >Päivitä tiedot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text} >Poista hevonen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    IconWrapper: {
        flexDirection: 'row',
        height: 40,
        bottom: '25%',
        right: 90,
        alignItems: 'center'
    },
    input: {
        height: 50,
        margin: 6,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    input1: {
        height: 250,
        margin: 6,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    inputMultiline: {
        height: 100,
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10,
        textAlignVertical: 'top',
        paddingTop: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 0
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    passwordText: {
        fontWeight: 'bold',
        margin: 10
    },
});
