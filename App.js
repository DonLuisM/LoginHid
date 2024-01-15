
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeWindStyleSheet } from 'nativewind';
import { Provider, useSelector } from 'react-redux';

import NewPasswScreen from './screens/NewPasswScreen';
import NewAccount from './screens/NewAccount';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CodeSendScreen from './screens/CodeSendScreen';
import ChangePass from './screens/ChangePass';
import { store } from './slices/Store';
import { selectAutenticado, selectPreRegistro } from './slices/dataSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import CompleteRegisterScreen from './screens/CompleteRegisterScreen';
import StartScreen from './screens/StartScreen';

import NotifyScreen from './tabScreens/NotifyScreen';
import HomeHidoScreen from './tabScreens/HomeHidoScreen';
import ScheduleScreen from './tabScreens/ScheduleScreen';
import PerfilScreen from './tabScreens/PerfilScreen';
import FavsScreen from './tabScreens/FavsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppWrapper(){
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

/*
function TabNavigator( {navigation} ) {
  return (
    <SafeAreaProvider>
      <Tab.Navigator>
        <Tab.Screen name = " Notificaciones " component={NotifyScreen} options={{ tabBarBadge: 3, headerShown: false }} />
        <Tab.Screen name=" Favoritos " component={FavsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="  " component={HomeHidoScreen} options={{ headerShown: false }} />
        <Tab.Screen name=" Agenda " component={ScheduleScreen} options={{ headerShown: false }} />
        <Tab.Screen name=" Mi Perfil " component={PerfilScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
*/

function App() {
  const autenticado = useSelector(selectAutenticado)
  const preRegistro = useSelector(selectPreRegistro);
  //const autenticado = true;
  //const preRegistro = true;


  return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            {autenticado ? (
            <>
              {preRegistro ? (
                <Stack.Screen name="StartHome" component={StartScreen} options={{ headerShown: false }}/>
            ):(
              <>
                <Stack.Screen name="CompletaRegistro" component={CompleteRegisterScreen} options={{ headerShown: false }}/>
              </>
            )}
            </>
            
            ):(
              <>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }}/>
              <Stack.Screen name="NewAcco" component={NewAccount} options={{ headerShown:false }}/>
              <Stack.Screen name="ChangePass" component={NewPasswScreen} options={{ headerShown:false }}/>
              <Stack.Screen name="CodeSend" component={CodeSendScreen} options={{ headerShown:false }}/>
              <Stack.Screen name="NewPassword" component={ChangePass} options={{ headerShown:false }}/>
              </>     
            )}
          </Stack.Navigator>    
        </SafeAreaProvider>
      </NavigationContainer>
  );
}

