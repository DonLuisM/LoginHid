import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal, KeyboardAvoidingView, ActivityIndicator, Touchable } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import SVGImg from '../assets/hidoclogo.svg';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPasswScreen from './NewPasswScreen';
import CodeSendScreen from './CodeSendScreen';
import ChangePass from './ChangePass';

import { apiClearError, apiError, apiPending, apiSetAutenticado, apiSetPreRegistro, apiSuccess, apiSuccessToken, selectError, selectLoading, selectToken } from '../slices/dataSlice';
import { apiCloseModal, apiVerModal, selectVerCodigo, selectVerEmail, selectVerModal, selectVerNewPass, uiRecuperarEmail } from '../slices/UISlice';
import axios from 'axios';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();


    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const token = useSelector(selectToken)

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const verRecuperarEmail = useSelector(selectVerEmail);
    const verEnvioCodigo = useSelector(selectVerCodigo);
    const verRecuperarPass = useSelector(selectVerNewPass);
    const verModal = useSelector(selectVerModal) 
  

    const togglePasswordVisibility = () => {
      setShowPass(!showPass);
    };
    
    const handleNewAccount = () => {
      navigation.navigate("NewAcco")
    } 

    const handlePost = () => {
      dispatch(apiPending());
      const data = { email: email, password: password }
      const apiUrl = 'https://us-central1-hidocfun-f7947.cloudfunctions.net/api/login';
      axios.post(apiUrl, data)
        .then((response) => {
          dispatch(apiSuccessToken(response.data));
          dispatch(apiClearError());
          obtenerInformacionUsuario()
        })
        .catch((error) => {
          dispatch(apiError(error.response.data))
          console.log(error.response.data);
        });
    };
  
    useEffect(() => {
      dispatch(apiClearError())
    }, [navigation])

    useFocusEffect(
      useCallback(() => {
        dispatch(apiClearError());
      }, [])
    );

    const obtenerInformacionUsuario = () => {
      const getUrl = `https://us-central1-hidocfun-f7947.cloudfunctions.net/api/usuarios/${email}`
      axios.get(getUrl)
        .then((res) => {
          dispatch(apiSuccess(res.data[0]))
          dispatch(apiSetAutenticado());
          dispatch(apiSetPreRegistro());
          console.log(res.data[0])
        })
        .catch((error) => {
          dispatch(apiError(error))
          console.log(error);
        })
    }

  return (    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     <View className={`w-full h-full flex-1 justify-center items-center`}>
        <View className='w-full flex items-center h-auto p-4 -mt-16'>
        <SVGImg width={300} height={300} />
        <Text className='text-blue-900 text-3xl font-bold tracking-tight self-center whitespace-nowrap'>Inicia Sesión</Text>
        </View>  


    <View className="w-screen h-auto items-center">
      <View className={` h-auto flex-row bg-white border justify-between items-center mt-5 mx-6 pl-6 pr-4 
      py-4 rounded-xl border-solid border-slate-200 ${(error.email || error.error) && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
        autoComplete='email'
        placeholder='email@email.com'
        keyboardType='email-address'
        className="w-auto text-xl self-stretch flex-1"
        onChangeText={onChangeEmail}
        value={email}
        />
      </View>
      {error.email?(<Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent 
        ${(error.email || error.error) && "text-[#FA6972] font-semibold "} `}> {error.email}</Text>):(<></>)}

      <View className={` h-auto flex-row bg-white justify-between items-center mt-5 mx-6 pl-6 pr-4 
        py-4 rounded-xl border border-solid border-slate-200 ${(error.password || error.error) && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
        autoComplete='password'
        placeholder='Contraseña'
        className="w-auto text-xl self-stretch flex-1"
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
        {(error.password || error.error)?
          (<Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent 
          ${(error.password || error.error) && "text-[#FA6972]"} `}> {(error.password || error.error)} </Text>):(<></>)}
      </View>
      <View >
      {error.general?(<Text className={`mt-5 pl-6 pr-4 font-semibold text-sm text-transparent 
          ${error.general && "text-[#FA6972]"}`}> {error.general}</Text>):(<></>)}
      </View>

    {loading ? (<ActivityIndicator size="large" color="gray" className="mt-8"/>): (
      <TouchableOpacity 
      onPress={handlePost} 
      className='bg-sky-500 relative justify-center mt-6 px-16 py-4 rounded-xl items-start'>
      <Text className='text-white text-xl font-semibold'>Iniciar Sesión</Text>
      </TouchableOpacity>)}

      <TouchableOpacity onPress={() =>{
        dispatch(apiVerModal())
        dispatch(uiRecuperarEmail())
      }} >
        <Text className="text-sky-500 text-lg tracking-tight self-center whitespace-nowrap mt-5">
          ¿Olvidaste la contraseña?
        </Text>
      </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={verModal}
          onRequestClose={() => { dispatch(apiCloseModal) }}
          statusBarTranslucent={true}
        >
          <View className="flex-1 items-center">
            <KeyboardAvoidingView behavior="position">
              <TouchableOpacity className=" bg-gray-800 opacity-70 w-screen h-full" onPress={() => dispatch(apiCloseModal()) }></TouchableOpacity>
              <View className=" bottom-0 absolute w-screen items-center bg-white border-4 border-slate-200 rounded-t-3xl shadow-2xl shadow-black">
                {verRecuperarEmail ? (<NewPasswScreen />) : null}
                {verEnvioCodigo ? (<CodeSendScreen />) : null}
                {verRecuperarPass ? (<ChangePass />) : null}
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>

        <View>
          <TouchableOpacity
            onPress={handleNewAccount}>
            <Text className="text-sky-500 text-lg tracking-tight self-center whitespace-nowrap mt-14">
              ¿No tienes una cuenta? Registrate Aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default LoginScreen;



