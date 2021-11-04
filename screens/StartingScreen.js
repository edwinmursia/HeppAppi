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
      <Image source={require('../images/horse.png')} style={{height: 250, width: 250, marginBottom: 10, marginTop: 10}} />
      <TouchableOpacity>
        <Pressable style={styles.buttonLogIn} onPress={() => navigation.navigate("LogInScreen")} >
          <Text style={styles.text} >Kirjaudu Sisään</Text>
        </Pressable>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable style={styles.buttonSignIn} onPress={() => navigation.navigate("RegisterScreen")} >
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
    fontSize: 24,
    marginBottom: 10
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
  buttonSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 35,
    width: 220,
    marginTop: 10,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  },
  textSignIn: {
    color: '#000',
    fontWeight: 'bold'
  }
});
