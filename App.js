import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartingScreen from './screens/StartingScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import AddHorseScreen from './screens/AddHorseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartingScreen" >
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AddHorseScreen" component={AddHorseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
