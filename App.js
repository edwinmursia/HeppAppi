import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartingScreen from './screens/StartingScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import MainScreen from './screens/MainScreen';
import ReservationScreens from './screens/ReservationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartingScreen" >
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ReservationScreen" component={ReservationScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
