import { View, Text, SafeAreaView, Button, TouchableOpacity, 
  TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import SVGImg from '../assets/hidoclogo.svg';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { apiClearError, apiError, apiPending, apiSetAutenticado, apiSuccess, apiSuccessToken } from '../slices/dataSlice';

const NewAccount = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [handle, setHandle] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPass, onChangeConfirmPass] = useState('');

  const [terminos, setTerminos] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const loading = useSelector((state) => state.data.loading)
  const error = useSelector((state) => state.data.error)
  const token = useSelector((state) => state.data.token)

  
  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const handlePost = () => {
 
    dispatch(apiPending());
    const data = { 
      handle: "@" + handle, 
      email: email, 
      password: password, 
      confirmPassword: confirmPass
    }
    const apiUrl = 'https://us-central1-hidocfun-f7947.cloudfunctions.net/api/signup';
    axios.post(apiUrl, data)
      .then((response) => {
        dispatch(apiClearError());
        dispatch(apiSuccessToken(response.data));
        dispatch(apiSetAutenticado());
        obtenerInfoUsuario();
        dispatch(apiClearError());
        console.log(data);
      })
      .catch((error) => {
        dispatch(apiError(error.response.data));
        console.log(error.response.data);
      });
  };

  const obtenerInfoUsuario = () => {
    const getUrl = `https://us-central1-hidocfun-f7947.cloudfunctions.net/api/usuarios/${email}`
    axios.get(getUrl)
      .then((response) => {
        dispatch(apiSuccess(response.data[0]))
        console.log(response.data[0])
      })
      .catch((error) => {
        dispatch(apiError(error.response.data))
        console.log(error.response.data);
      })
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(apiClearError());
    }, [])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView className="bg-white">
        <KeyboardAvoidingView>
            <View className="items-center -mt-3">
                <SVGImg width={300} height={300} />
                <Text className="text-blue-900 font-medium text-3xl tracking-tight whitespace-nowrap -mt-10">
                  Regístrate
                </Text>
            </View>
        <View className="w-screen h-auto items-center">
            <View className={`h-auto flex-row bg-white justify-between items-center mt-2 mx-7 pl-6 
              pr-4 py-4 rounded-xl border border-solid border-slate-200 ${error.handle && "border-[#FA6972]"} border-opacity-10`}>
                <TextInput
                    autoComplete='name'
                    placeholder='Nombre de Usuario'
                    className="w-auto text-xl flex-1"
                    onChangeText={setHandle}
                    value={handle}
                />
            </View>
            <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent ${error.handle && "text-[#FA6972]"}`}>{error.handle}</Text>

            <View className={`h-auto flex-row bg-white justify-between items-center mt-2 mx-7 pl-6 
               pr-4 py-4 rounded-xl border border-solid border-slate-200 ${error.email && "border-[#FA6972]"} border-opacity-10`} >
                <TextInput
                    autoComplete='email'
                    placeholder='email@email.com'
                    className="w-auto text-xl flex-1"
                    keyboardType='email-address'
                    onChangeText={onChangeEmail}
                    value={email}
                />
            </View>
            <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent ${error.email && "text-[#FA6972]"} `}>
              {error.email}</Text>

            <View className={` h-auto flex-row bg-white justify-between items-center mt-2 mx-7 pl-6 
              pr-4 py-4 rounded-xl border border-solid border-slate-200 ${error.password && "border-[#FA6972]"} border-opacity-10`}>
            <TextInput
              autoComplete='password'
              placeholder='Contraseña'
              className="w-auto text-xl flex-1"
              onChangeText={onChangePassword}
              value={password}
              secureTextEntry={!showPass}   
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {!showPass ? (
                  <Icon
                  className="p-2 bg-black rounded-full w-10 mt-5"
                  name='visibility-off'
                  type='material'
                  color='gray' 
                />
                  ): 
                  <Icon
                  className="p-2 bg-black rounded-full w-10 mt-5"
                  name='visibility'
                  type='material'
                  color='gray' 
                />}
            </TouchableOpacity>
            </View> 
            <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent ${(error.password || error.error) && "text-[#FA6972]"} `}>
              {error.password}</Text>

            <View className={` h-auto flex-row bg-white justify-between items-center mt-2 mx-7 pl-6 
              pr-4 py-4 rounded-xl border border-solid border-slate-200 ${(error.confirmPassword || error.error) && "border-[#FA6972]"} border-opacity-10`}>
            <TextInput
              autoComplete='password'
              placeholder='Confirmar Contraseña'
              className="w-auto text-xl flex-1"
              onChangeText={onChangeConfirmPass}
              value={confirmPass}
              secureTextEntry={!showConfirmPass}   
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              {!showConfirmPass ? (
                  <Icon
                  className="p-2 bg-black rounded-full w-10 mt-5"
                  name='visibility-off'
                  type='material'
                  color='gray' 
                />
                  ): 
                  <Icon
                  className="p-2 bg-black rounded-full w-10 mt-5"
                  name='visibility'
                  type='material'
                  color='gray' 
                />}
            </TouchableOpacity>
            </View>
            <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent ${(error.confirmPassword || error.passwords || error.error) && "text-[#FA6972]"} `}>
              {(error.confirmPassword || error.passwords || error.error)}</Text>

          <View className="flex-row items-center mt-3 pl-3 ">
            <TouchableOpacity onPress={() => {setTerminos(!terminos)}} className=" pl-6 pr-2">
              {!terminos ? (
              <Icon 
                type='material' 
                name="toggle-off" 
                color="gray"
                size={31} 
                />) : (<Icon 
                type='material' 
                name="toggle-on" 
                color="green" 
                size={31} 
                />)}
            </TouchableOpacity>
            <Text className=" text-base tracking-tight flex-1 -mt-1 pr-4">Estoy de acuerdo con los 
              Términos de Servicio y Políticas de Seguridad
            </Text>

          </View>

          <View>
          {loading ? (
            <ActivityIndicator size="large" color="gray" className="mt-auto py-4" />
          ) : (
          <TouchableOpacity 
            onPress={handlePost}
            className={`bg-sky-500 relative justify-center mt-6 px-16 py-4 rounded-xl
              ${!terminos && "opacity-50"}`}
              disabled={!terminos}
              >
            <Text className='text-white text-xl font-semibold'> Registrarme </Text>
          </TouchableOpacity>

          )}
          </View>
          
          <View className="h-auto items-center justify-center"> 
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}>
            <Text className="text-sky-500 items-center text-center text-lg tracking-tight whitespace-nowrap mt-10">
                Tienes una Cuenta? Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
      </View> 
        </KeyboardAvoidingView>
    </ScrollView>
    </TouchableWithoutFeedback>
    )
  }

export default NewAccount