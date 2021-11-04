import React from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const LogInScreen = () => {

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.IconWrapper} onPress={goBack}>
                <Icon name='chevron-back' size={30} color="#000" style={{ marginRight: -22 }} />
                <Icon name='chevron-back' size={30} color="#000" />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 1 }} >Takaisin</Text>
            </TouchableOpacity>
            <Image source={require('../images/horse.png')} style={{ height: 200, width: 200, marginBottom: 20, marginTop: 10 }} />
            <TextInput style={styles.input} placeholder="Sähköposti" />
            <TextInput style={styles.input} placeholder="Salasana" secureTextEntry={true} />
            <Pressable style={styles.buttonLogIn} >
                <Text style={styles.text} >Kirjaudu</Text>
            </Pressable>
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

