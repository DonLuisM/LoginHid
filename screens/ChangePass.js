import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import LoginScreen from './LoginScreen';

const ChangePass = () => {

    const [newPassword, onChangeNewPassword] = useState('');
    const [newConfirmPass, onChangeNewConfirmPass] = useState('');
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setShowNewPass(!showNewPass);
      };
    
      const toggleConfirmNewPasswordVisibility = () => {
        setShowConfirmNewPass(!showConfirmNewPass);
      };

    const navigation=useNavigation();

    return (
        <View className="flex-1 justify-end items-center">
        <View className="mt-[95px]">
        <LoginScreen
        />
        </View>
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70" />
          <View className="h-[420px] min-w-full bg-white p-5 rounded-xl">
            <Text className="text-black text-2xl font-medium tracking-tight max-w-[251px] mt-8">Nueva Contraseña</Text>
            <Text className="text-slate-500 text-sm leading-6 tracking-tight max-w-[310px] mt-3">
              Escribe una nueva contraseña para tu cuenta, recuerda
              que esta debe ser segura para ti.
            </Text>
            <View className="flex-row text-slate-500 border justify-between pl-6 pr-4 py-2 rounded-xl 
                border-slate-500 border-opacity-20 mt-5">
              <TextInput
                autoComplete='new-password'
                placeholder='Nueva Contraseña'
                className="w-auto text-base"
                onChangeText={onChangeNewPassword}
                value={newPassword}
                secureTextEntry={!showNewPass}
              />
            <TouchableOpacity onPress={toggleNewPasswordVisibility}>
              {!showNewPass ? (
                  <Icon
                  className="p-2 rounded-full w-10 "
                  name='visibility-off'
                  type='material'
                  color='gray' 
                />
                  ): 
                  <Icon
                  className="p-2 rounded-full w-10"
                  name='visibility'
                  type='material'
                  color='gray' 
                />}
            </TouchableOpacity>
            </View>
            
            <View className="flex-row text-slate-500 border justify-between pl-6 pr-4 py-2 rounded-xl
                 border-slate-500 border-opacity-20 mt-5">
              <TextInput
                autoComplete='new-password'
                placeholder='Confirma Nueva Contraseña'
                className="w-auto text-base"
                onChangeText={onChangeNewConfirmPass}
                value={newConfirmPass}
                secureTextEntry={!showConfirmNewPass}
              />
            <TouchableOpacity onPress={toggleConfirmNewPasswordVisibility}>
              {!showConfirmNewPass ? (
                  <Icon
                  className="p-2 rounded-full w-10"
                  name='visibility-off'
                  type='material'
                  color='gray' 
                />
                  ): 
                  <Icon
                  className="p-2 rounded-full w-10"
                  name='visibility'
                  type='material'
                  color='gray' 
                />}
            </TouchableOpacity>
            </View>


            <View className="items-center justify-center mt-11">
            <TouchableOpacity 
              className=" bg-sky-500 px-20 py-3 rounded-2xl">
              <Text className="text-white font-medium text-lg items-center justify-center">Actualizar Contraseña</Text>
            </TouchableOpacity>
              </View>
        </View>
      </View>
      );
  };

export default ChangePass