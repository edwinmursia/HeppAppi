import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import RadioButton from "rn-radio-button";

const RegisterScreen = () => {

    console.log(RadioButton);
    const [val, setVal] = useState("-");

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
            <TextInput style={styles.input} placeholder="Etunimi" />
            <TextInput style={styles.input} placeholder="Sukunimi" />
            <TextInput style={styles.input} placeholder="Sähköposti" />
            <TextInput style={styles.input} placeholder="Salasana" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Vahvista salasana" secureTextEntry={true} />
            <View style={styles.radioButtonContainer} >
                <RadioButton
                    outerWidth={30}
                    innerWidth={20}
                    borderWidth={2}
                    data={listData}
                    color={"#66CE26"}
                    onPress={pressCircle}
                    wrapperStyle={{ padding: 3 }}
                />
            </View>
            <Pressable style={styles.buttonRegister} >
                <Text style={styles.text} >Rekisteröidy</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const listData = [
    { label: "Olen lukenut ja hyväksyn tietosuojaselosteen ja käyttöehdot", value: 1 }
];

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
        bottom: '25%',
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
    radioButtonContainer: {
        paddingTop: 20,
        width: '70%',
    }
});
