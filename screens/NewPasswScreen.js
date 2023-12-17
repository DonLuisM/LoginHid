

import { View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';



const NewPasswScreen = () => {
    const [Email, onChangeEmail] = useState('');
    const [errors, changeErrors] = useState({ email: "" })
    const navigation = useNavigation();

    /*
    // Busca la ruta que viene del login screen el email del usuario
    const route = useRoute();
    const { email } = route.params;
    */
    
  
    const handleCodeScreen = () => {
        navigation.navigate("CodeSend");
    }
    
    return (
      <View className=" justify-end items-center h-auto"> 
      <View >
        <LoginScreen
        />
      </View>      
        <View 
          className=" flex-1 absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70" />
          <View className="h-[350px] min-w-full bg-white p-5 rounded-xl">
            <Text className="text-black text-2xl font-medium tracking-tight max-w-[251px] mt-8">Recuperar Contraseña</Text>
            <Text className="text-slate-500 text-sm leading-6 tracking-tight max-w-[300px] mt-3">
              Ingresa el email con el cual estás registrado para realizar el proceso
              de verificación.
              Enviaremos un código de 4 dígitos a tu correo.
            </Text>
            <View className={`text-slate-500 whitespace-nowrap border bg-white  
              justify-center pl-6 pr-4 py-4 rounded-xl border-solid border-slate-500  ${errors.email && "border-[#FA6972]"} border-opacity-20 items-start mt-5 `}>
              <TextInput
                autoComplete='email'
                placeholder='email@email.com'
                className="w-auto text-base"
                keyboardType='email-address'
                onChangeText={onChangeEmail}
                value={Email}
              />
            </View>
            <Text className={` min-w-full pl-6 pr-4 mt-1 font-medium text-sm text-transparent 
              ${errors.email && "text-[#FA6972]"} `}> {errors.email}
            </Text>

            <View className="items-center justify-center">
          <TouchableOpacity 
            onPress={handleCodeScreen}
            className="tracking-tight whitespace-nowrap bg-sky-500 max-w-[306px] px-16 py-3 rounded-2xl mt-3">
            <Text className="text-white font-medium text-lg items-center justify-center">Continuar</Text>
          </TouchableOpacity>
            </View>
        </View>
      </View> 
      );
  };

export default NewPasswScreen



