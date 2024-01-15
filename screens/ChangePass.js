import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { apiCloseModal, selectLoadingUi, selectUiError, uiError, uiPending } from '../slices/UISlice';
import { selectEmail } from '../slices/dataSlice';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ChangePass = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const loading = useSelector(selectLoadingUi);
    const error = useSelector(selectUiError);
    const email = useSelector(selectEmail);

    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setShowNewPass(!showNewPass);
      };
    
    const toggleConfirmNewPasswordVisibility = () => {
      setShowConfirmNewPass(!showConfirmNewPass);
    };

    const handleSubmit = () => {
      dispatch(uiPending());
      const data = { 
        email: email, 
        password: password, 
        confirmPassword: confirmPassword }
      const apiUrl = 'https://us-central1-hidocfun-f7947.cloudfunctions.net/api/cambiarcontrasena';
      console.log(data);
      axios.post(apiUrl, data)
        .then(() => {
          // Creo que deberíamos crear otro modal a modo de mensaje, en donde se muestre la respuesta del servidor, antes de cerrar de manera definitiva el modal
          dispatch(apiCloseModal());
        })
        .catch((error) => {
          dispatch(uiError(error.response.data));
          console.log(error.response.data);
        })
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1 justify-end items-center">
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70" />
          <View className="h-[420px] min-w-full bg-white p-5 rounded-xl">
            <Text className="text-black text-2xl font-medium tracking-tight max-w-[251px] mt-8">Nueva Contraseña</Text>
            <Text className="text-slate-500 text-sm leading-6 tracking-tight max-w-[310px] mt-3">
              Escribe una nueva contraseña para tu cuenta, recuerda
              que esta debe ser segura para ti.
            </Text>
            <View className={`flex-row text-slate-500 border justify-between pl-6 pr-4 py-2 rounded-xl 
                border-slate-500 ${(error.passwords || error.password) && "border-[#FA6972]"} border-opacity-20 mt-5`}>
              <TextInput
                autoComplete='new-password'
                placeholder='Nueva Contraseña'
                className="w-auto text-base"
                onChangeText={onChangePassword}
                value={password}
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
            <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent ${(error.passwords || error.password) && "text-[#FA6972]"} `}>
              {(error.passwords || error.password)}</Text>

            <View className={`flex-row text-slate-500 border justify-between pl-6 pr-4 py-2 rounded-xl
                 border-slate-500 ${(error.passwords || error.confirmPassword) && "border-[#FA6972]"} border-opacity-20 mt-5`}>
              <TextInput
                autoComplete='new-password'
                placeholder='Confirma Nueva Contraseña'
                className="w-auto text-base"
                onChangeText={onChangeConfirmPassword}
                value={confirmPassword}
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
            <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent ${(error.confirmpassword || error.passwords) && "text-[#FA6972]"} `}>
              {(error.confirmpassword || error.passwords)}</Text>


            <View className="items-center justify-center mt-11">
            {loading ? (<ActivityIndicator size="large" color="gray" />) : (
            <TouchableOpacity 
              onPress={handleSubmit}
              className=" bg-sky-500 px-20 py-3 rounded-2xl">
              <Text className="text-white font-medium text-lg items-center justify-center">Actualizar Contraseña</Text>
            </TouchableOpacity>
            )}
            </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      );
  };

export default ChangePass