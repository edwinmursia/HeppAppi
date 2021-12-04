import React from 'react'
import { SafeAreaView, StyleSheet, Image, TextInput, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const BackButton = () => {

    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <TouchableOpacity style={styles.IconWrapper} onPress={goBack}>
            <Icon name='chevron-back' size={30} color="#000" style={{ marginRight: -22 }} />
            <Icon name='chevron-back' size={30} color="#000" />
            <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Takaisin</Text>
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    IconWrapper: {
        flexDirection: 'row',
        paddingRight: '55%',
        alignItems: 'center',
        marginTop: '20%'
    }
});
