import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { CheckBox } from 'react-native-elements'

const RegisterScreen = () => {
    const [checked, setchecked] = useState(false);

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    const goForward = () => {
        if (checked) {
            //Jos kaikki kohdat on täytetty ja salasana ja vahvista salasana ovat samat ->
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
            <Text style={{fontSize: 12, width: '80%', textAlign: 'center', textTransform: 'uppercase', color: 'red'}}>Täytä kaikki kentät rekisteröityäksesi!</Text>
            <TextInput style={styles.input} placeholder="Etunimi" />
            <TextInput style={styles.input} placeholder="Sukunimi" />
            <TextInput style={styles.input} placeholder="Sähköposti" />
            <TextInput style={styles.input} placeholder="Salasana" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Vahvista salasana" secureTextEntry={true} />
            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
                <Text style={{fontSize: 12, width: '80%', textAlign: 'center', paddingTop: 5, paddingLeft: '19%'}} >Paina avataksesi tietosuojaseloste ja käyttöehdot</Text>
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
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 10
    },
    buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 35,
        width: 220,
        marginTop: 30,
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
    },
    checkboxContainer: {
        paddingTop: 20,
        width: '70%',
    }
});
