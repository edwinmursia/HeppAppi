import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';

const LogInScreen = ({history}) => {

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    const goForward = () => {
        navigation.navigate('MainScreen')
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history.push("/MainScreen");
        }
    }, [history]);

    const submitHandler= async (e) => {
        e.preventDefault();

        try {
            const config={
                headers: {
                    "Content-type":"application/json"
                }
            }
        
            setLoading(true)

            const { data }=await axios.post(
                '/api/users/login', 
                {
                email,
                password,
                },
                config
            );

    console.log(data);
    localStorage.setItem('userInfo',JSON.stringify(data));
    setLoading(false)
    } catch (error) {
        setError(error.response.data.message);
        setLoading(false)
    }
    };

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
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    buttonLogIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 35,
        width: 220,
        marginTop: 15,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    passwordText: {
        fontWeight: 'bold',
        margin: 10
    }
});

