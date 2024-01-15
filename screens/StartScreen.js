import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHidoScreen from '../tabScreens/HomeHidoScreen';
import PerfilScreen from '../tabScreens/PerfilScreen';
import NotifyScreen from '../tabScreens/NotifyScreen';
import FavsScreen from '../tabScreens/FavsScreen';
import ScheduleScreen from '../tabScreens/ScheduleScreen';
import { Icon } from 'react-native-elements';
//import { Icon } from 'react-native-elements/dist/icons/Icon';

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();


// Const para el Home principal de la ventana Home
const HomeTab = createNativeStackNavigator();
function HomeStackScreen (){
  return (
    <HomeTab.Navigator>
       <HomeTab.Screen name="Home" component={HomeHidoScreen}  options={{headerShown:false}}/>
        {/*<HomeTab.Screen name="Screen1" component={Screen1} options={{ headerShown: false}} />
        <HomeTab.Screen name="Screen2" component={Screen2} options={{ headerShown: false}} />*/}
        <UserAccounts.Screen name="UserAccounts" component={PerfilScreen} options={{headerShown: false,}} />
    </HomeTab.Navigator>
  )
}

// Const para notificaciones
const Notifications = createNativeStackNavigator();
function NotificationScreen (){
  return (
    <Notifications.Navigator>
       <Notifications.Screen name="Notifications" component={NotifyScreen} 
       options={{ headerShown: false }} />
    </Notifications.Navigator>
  )
}
const Favorites = createNativeStackNavigator();
function FavoriteScreen (){
  return (
    <Favorites.Navigator>
       <Favorites.Screen name="Favorites" component={FavsScreen} options={{ headerShown: false,}} />
    </Favorites.Navigator>
  )
}
const Calendars = createNativeStackNavigator();
function CalendarScreen (){
  return (
    <Calendars.Navigator>
       <Calendars.Screen name="Calendars" component={ScheduleScreen} options={{headerShown: false,}} />
    </Calendars.Navigator>
  )
}
const UserAccounts = createNativeStackNavigator();
function UserAccountScreen (){
  return (
    <UserAccounts.Navigator>
       <UserAccounts.Screen name="UserAccounts" component={PerfilScreen} options={{headerShown: false,}} />
    </UserAccounts.Navigator>
  )
}


export default function AppNavigator() {
  return (
      <Tab.Navigator 
      initialRouteName="Home" 
      screenOptions= {{headerShown:false,
        tabBarLabelStyle: {fontSize: 12, height: "auto", marginBottom: 5, position:'relative'},
       }}>
        
        <Tab.Screen name='Notificaciones' component={NotificationScreen} options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="bell" size={size} color={"#02A8D7"} />),
          headerShown: false,
        }} />

        <Tab.Screen name='Favoritos' component={FavoriteScreen} options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="heart" size={size} color="#02A8D7" />),
          headerShown: false,
        }}/>
        
        <Tab.Screen name='  ' component={HomeStackScreen} options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="hospital" size={36} color="#02A8D7" style={{ marginBottom: -10}}s/>),
          headerShown: false,
        }}/>

        <Tab.Screen name='Agenda' component={CalendarScreen} options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="calendar-alt" family="classic" size={size} color="#02A8D7" />),
          headerShown: false,
        }}/>

        <Tab.Screen name="Mi Perfil" component={UserAccountScreen} options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name="user-cog" size={size} color="#02A8D7" />),
          headerShown: false,
          //tabBarBadge: "!"
        }} />

      </Tab.Navigator>
    
  )
}