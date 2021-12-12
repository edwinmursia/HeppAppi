import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
    const [checked, setchecked] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");


    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    const goForward = async () => {
        if (checked, email, name, password, confirmpassword) {
            const nameString = JSON.stringify(name)
            const emailString = JSON.stringify(email)
            const passwordString = JSON.stringify(password)
            const confirmPasswordString = JSON.stringify(confirmpassword)
            AsyncStorage.setItem('nameInput', nameString);
            AsyncStorage.setItem('emailInput', emailString);
            AsyncStorage.setItem('passwordInput', passwordString);
            AsyncStorage.setItem('confirmPasswordInput', confirmPasswordString);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            console.log(await AsyncStorage.getItem('nameInput'))
            console.log(await AsyncStorage.getItem('emailInput'))
            console.log(await AsyncStorage.getItem('passwordInput'))
            console.log(await AsyncStorage.getItem('confirmPasswordInput'))
            navigation.navigate('MainScreen')
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.IconWrapper} onPress={goBack}>
                <Icon name='chevron-back' size={30} color="#000" style={{ marginRight: -22 }} />
                <Icon name='chevron-back' size={30} color="#000" />
                <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Takaisin</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 11, width: '80%', textAlign: 'center', textTransform: 'none', color: 'grey'}}>Täytä kaikki kentät rekisteröityäksesi!</Text>
            <TextInput style={styles.input} placeholder="Etunimi ja Sukunimi" type="name" value={name} onChangeText={(data) => setName(data)} />
            <TextInput style={styles.input} placeholder="Sähköposti" type="email" value={email} onChangeText={(data) => setEmail(data)} />
            <TextInput style={styles.input} placeholder="Salasana" secureTextEntry={true} type="password" value={password} onChangeText={(data) => setPassword(data)}/>
            <TextInput style={styles.input} placeholder="Vahvista salasana" secureTextEntry={true} type="confirmPassword" value={confirmpassword} onChangeText={(data) => setConfirmPassword(data)} />
            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
                <Text style={{fontSize: 12, width: '80%', textAlign: 'center', paddingTop: 15, paddingLeft: '19%'}} >Paina avataksesi tietosuojaseloste ja käyttöehdot</Text>
            </TouchableOpacity>
            <View style={styles.checkboxContainer} >
                <CheckBox
                    title="Olen lukenut ja hyväksyn tietosuojaselosteen ja käyttöehdot"
                    checked={checked}
                    checkedColor={'#66CE26'}
                    containerStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                    size={26}
                    onPress={() => setchecked(!checked)}
                />
            </View>
            <TouchableOpacity onPress={goForward}>
                <Pressable style={styles.buttonRegister}>
                    <Text style={styles.text} >Rekisteröidy</Text>
                </Pressable>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default RegisterScreen

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
        bottom: '5%',
        right: 90,
        alignItems: 'center',
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
    checkboxContainer: {
        paddingTop: 20,
        width: '70%',
    }
});
