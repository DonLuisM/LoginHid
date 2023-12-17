
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeWindStyleSheet } from 'nativewind';

import StartScreen from './screens/StartScreen';
import NewPasswScreen from './screens/NewPasswScreen';
import NewAccount from './screens/NewAccount';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CodeSendScreen from './screens/CodeSendScreen';
import ChangePass from './screens/ChangePass';


NativeWindStyleSheet.setOutput({
  default: "native",
})

const Stack = createNativeStackNavigator();
// Facilita la gestión de la navegación 
// entre diferentes pantallas en tu aplicación React Native.

function App() {
  return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="Start" component={StartScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="ChangePass" component={NewPasswScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="NewAcco" component={NewAccount} options={{ headerShown:false }}/>
            <Stack.Screen name="CodeSend" component={CodeSendScreen} options={{ headerShown:false }}/>
            <Stack.Screen name="NewPassword" component={ChangePass} options={{ headerShown:false }}/>           
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
  );
}

export default App;