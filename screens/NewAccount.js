import { View, Text, SafeAreaView, Button, TouchableOpacity, 
  TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SVGImg from '../assets/hidoclogo.svg';
import { Icon } from 'react-native-elements/dist/icons/Icon';



const NewAccount = () => {
  const navigation = useNavigation();

  const handleGoBackLogin2 = () => {
      navigation.goBack();
  }

  //const [nombre, onChangeNombre] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPass, onChangeConfirmPass] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const handleInputChange = (text) => {
  setInputValue(text);
  setError(''); // Limpiar el mensaje de error al cambiar el valor
  };

  const handleValidation = () => {
  if (inputValue.trim() === '') {
    setError('  El campo no puede estar vacío');
    return;
  } setError(!error)
  console.log('¡Validación exitosa!');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView className="bg-white">
    <SafeAreaView className="bg-white flex-1 items-center ">
        <KeyboardAvoidingView>
            <View className="items-center -mt-3">
                <SVGImg width={300} height={300} />
                <Text className="text-blue-900 font-medium text-3xl tracking-tight whitespace-nowrap -mt-10">
                  Regístrate
                </Text>
            </View>
      <View className="w-screen h-auto items-center">
            <View className="h-auto flex-row bg-white justify-between items-center mt-5 mx-7 pl-6 
              pr-4 py-4 rounded-xl border border-solid border-slate-200 border-opacity-10" >
                <TextInput
                    autoComplete='name'
                    placeholder='Nombre'
                    className="w-auto text-xl flex-1"
                    onChangeText={handleInputChange}
                    value={inputValue}
                />
                {error !== '' && <Text>{error}</Text>}
            </View>
            <View className="h-auto flex-row bg-white justify-between items-center mt-5 mx-7 pl-6 
               pr-4 py-4 rounded-xl border border-solid border-slate-200 border-opacity-10" >
                <TextInput
                    autoComplete='email'
                    placeholder='email@email.com'
                    className="w-auto text-xl flex-1"
                    keyboardType='email-address'
                    onChangeText={onChangeEmail}
                    value={email}
                />
            </View>
            <View className={` h-auto flex-row bg-white justify-between items-center mt-5 mx-7 pl-6 
              pr-4 py-4 rounded-xl border border-solid border-slate-200 border-opacity-10`}>
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
            <View className={` h-auto flex-row bg-white justify-between items-center mt-5 mx-7 pl-6 
              pr-4 py-4 rounded-xl border border-solid border-slate-200 border-opacity-10`}>
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

        <View className="w-full mt-3 flex-row items-center justify-center">
          <Text className="text-black text-base font-medium p-2 mt-1">Aceptar términos y condiciones</Text>
          <TouchableOpacity 
            className="text-white text-center mt-1"
            onPress={handleValidation}>
        {!error ? (
            <Icon
            className="p-2 bg-black rounded-full w-10 mt-5"
            name='verified'
            type='material'
            color='gray' 
          />
            ): 
            <Icon
            className="p-2 bg-black rounded-full w-10 mt-5"
            name='verified'
            type='material'
            color='blue' 
          />
          }
          </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate('Start')} 
            className='bg-sky-500 relative justify-center mt-4 px-16 py-4 rounded-xl'>
            <Text className='text-white text-xl font-semibold'>Registrarme</Text>
          </TouchableOpacity>
          
          <View className="h-auto items-center justify-center"> 
            <TouchableOpacity
              onPress={handleGoBackLogin2}>
            <Text className="text-sky-500 items-center text-center text-lg tracking-tight whitespace-nowrap mt-12">
                Tienes una Cuenta? Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
      </View>
        

            
        </KeyboardAvoidingView>
    </SafeAreaView>
    </ScrollView>
    </TouchableWithoutFeedback>
    )
  }




  /*
  return (
    <View>
        <View className="justify-center items-center h-screen">
        <TextInput
          placeholder='correo@gmail.com'
          value={email}
          onChangeText={text => setEmail(text)}
          className="p-4 pl-4 w-3/4 h-12 mt-5 border rounded-xl"
          //className="px-24 py-3 m-5 border rounded-md"
          //style={styles.boxLogin}
        />
        <TextInput
          placeholder='Contraseña'
          value={password}
          onChangeText={text => setPassword(text)}
          className="p-4 pl-4 w-3/4 h-12 mt-5 border rounded-xl"
          //style={styles.boxLogin}
          secureTextEntry
        />
        <TextInput
          placeholder='Confirmar Contraseña'
          value={password}
          onChangeText={text => setPassword(text)}
          className="p-4 pl-4 w-3/4 h-12 mt-5 border rounded-xl"
          //style={styles.boxLogin}
          secureTextEntry
        />


        <TouchableOpacity onPress={handleGoBackLogin2}>
            <Text className="text-black font-semibold text-lg mt-5">Volver a Inicio de Sesión</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
*/

export default NewAccount