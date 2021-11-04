import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const RegisterScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <Text>This is the register screen.</Text>
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
    }
  });
  
