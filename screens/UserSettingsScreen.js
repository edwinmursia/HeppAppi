import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const UserSettingsScreen = () => {

    //console.log(RadioButton);
    //const [val, setVal] = useState("-");

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

    const addHorse = () => {
        navigation.navigate('SettingsScreen')
    }

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.IconWrapper} onPress={goBack}>
                <Icon name='chevron-back' size={30} color="#000" style={{ marginRight: -22 }} />
                <Icon name='chevron-back' size={30} color="#000" />
                <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Takaisin</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Etunimi" />
            <TextInput style={styles.input} placeholder="Sukunimi" />
            <TextInput style={styles.input} placeholder="Vanha salasana?" />
            <TextInput style={styles.input} placeholder="Uusi salasana" secureTextEntry={true}/>
            <TextInput style={styles.input} placeholder="Vahvista uusi salasana" secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={goForward} >
                <Text style={styles.text} >Päivitä tiedot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={addHorse} >
                <Text style={styles.text} >Lisää hevonen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default UserSettingsScreen

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
        height: 20,
        bottom: '15%',
        right: 90,
        alignItems: 'center'
    },
    buttonLogIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b6122',
        height: 45,
        width: 240,
        marginTop: 5,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2
    },
    input: {
        height: 50,
        margin: 6,
        borderWidth: 2,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    input1: {
        height: 250,
        margin: 6,
        borderWidth: 2,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    passwordText: {
        fontWeight: 'bold',
        margin: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 35,
        width: 220,
        marginTop: 10,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2
    }
});
