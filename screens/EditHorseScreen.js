import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const EditHorseScreen = () => {

    //console.log(RadioButton);
    //const [val, setVal] = useState("-");

    function pressCircle(i) {
        setVal(i);
    }

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.IconWrapper} onPress={goBack}>
                <Icon name='chevron-back' size={30} color="#000" style={{ marginRight: -22 }} />
                <Icon name='chevron-back' size={30} color="#000" />
                <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Takaisin</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Hevosen kutsumanimi" />
            <TextInput style={styles.input} placeholder="Sukupuoli" />
            <TextInput style={styles.input} placeholder="Ikä" />
            <TextInput style={styles.input} placeholder="Rotu"/>
            <TextInput style={styles.input} placeholder="Osoite"/>
            <TextInput style={styles.input1} placeholder="Lisätietoja hevosesta..."/>
            <Pressable style={styles.buttonLogIn} >
                <Text style={styles.text} >Päivitä tiedot</Text>
                </Pressable>
            <Pressable style={styles.buttonLogIn} >
                <Text style={styles.text} >Poista hevonen</Text>
                </Pressable>
        </SafeAreaView>
    )
}

export default EditHorseScreen

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
    buttonLogIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b6122',
        height: 45,
        width: 230,
        marginTop: 5,
        borderRadius: 10,
        borderWidth: 0
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
    buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 30,
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
