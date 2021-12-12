import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StartingScreen() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textWelcome}>Tervetuloa HeppAppiin</Text>
      <Image source={require('../images/horse.png')} style={{height: 240, width: 240, marginBottom: 10, marginTop: 10}} />
      <TouchableOpacity onPress={() => navigation.navigate("LogInScreen")} >
        <Pressable style={styles.buttonLogIn} >
          <Text style={styles.text} >Kirjaudu Sisään</Text>
        </Pressable>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} >
        <Pressable style={styles.buttonSignIn} >
          <Text style={styles.textSignIn} >Rekisteröidy</Text>
        </Pressable>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20
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
  buttonSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 45,
    width: 230,
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textSignIn: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
