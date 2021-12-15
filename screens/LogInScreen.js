import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';

const LogInScreen = () => {

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    const goForward = () => {
        navigation.navigate('MainScreen')
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.IconWrapper} onPress={goBack}>
                <Icon name='chevron-back' size={30} color="#000" style={{ marginRight: -22 }} />
                <Icon name='chevron-back' size={30} color="#000" />
                <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Takaisin</Text>
            </TouchableOpacity>
            <Image source={require('../images/horse.png')} style={{ height: 200, width: 200, marginBottom: 20, marginTop: 10 }} />
            <TextInput style={styles.input} placeholder="Sähköposti" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextInput style={styles.input} placeholder="Salasana" secureTextEntry={true} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TouchableOpacity style={styles.buttonLogIn} onSubmit={submitHandler}>
                <Text style={styles.text} >Kirjaudu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.passwordText} >Unohtuiko salasana?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LogInScreen

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
        bottom: '30%',
        right: 90,
        alignItems: 'center'
    },
    input: {
        height: 50,
        marginTop: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    buttonLogIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 0
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    passwordText: {
        fontWeight: 'bold',
        margin: 15
    }
});

