import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const PrivacyPolicyScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 16}}>Käyttöehto sivu</Text>
        </SafeAreaView>
    )
}

export default PrivacyPolicyScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

