import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
//import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import SVGImg from '../assets/hidoclogo.svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewPasswScreen from './NewPasswScreen';

const Stack = createNativeStackNavigator();

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const [showPass, setShowPass] = useState(false);

    //const [passwordMessage, setPasswordMessage] = useState(false);
    //const [emailMessage, setEmailMessage] = useState(false);

    const [errors,changeErrors] = useState({email: "", contrasena:""});
    const [loading,setLoading]=useState(false);

    const [verRecuperarEmail, setVerRecuperarEmail] =useState(true);
    const [verEnvioCodigo, setVerEnvioCodigo] = useState(false);
    const [verRecuperarPass, setVerRecuperarPass] = useState(false);


    /* 
    const dispatch = useDispatch();
  
    state=(
      email:"",
      password:"",
      loading:false,  --> pasar a true
      error:{}
    )

    handleSubmit() =>{
      axios.post(/login,data).then{
        dispatch(
          cambiar los slices
          almacenar el token
          set el estado errors

          cambiar el reducer de errores
          error:{email}
        )
      }
    }
    get deribade state

    // Home comprobar que exista un token "a" de entrada y que sea
    // igual al token "b" 
    // Comprobar autenticación
    
    {errors.email?(<Text>{errors.email}</Text>):(<View></View>)}

    */

    const togglePasswordVisibility = () => {
      setShowPass(!showPass);
    };
  
    const handleForgotPassword = () => {
      navigation.navigate('ChangePass')
      //, { email: email }); para mandar la ruta
    }
    const handleNewAccount = () => {
      navigation.navigate("NewAcco")
    }
    
    const handleVisible = () =>{
      setModalVisible(!modalVisible);
      setVerRecuperarEmail(false);
      setVerEnvioCodigo(true);
      setVerRecuperarPass(false);
    }

    // Funcion de React-Navigation Native
    const route = useRoute(); // Accede a cualquier ruta actual o screen

    // Verifica la pantalla actual con una validación booleana que se vuelve true
    // si se encuentra en esa screen
    const isNewScreenPass = route.name === 'ChangePass'
      || route.name === "CodeSend" || route.name === 'NewPassword';

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     <View className={`w-full h-full flex-1 justify-center items-center  
      ${isNewScreenPass ? 'mt-[700px]' : 'mt-0'}`}
      >
        <View className='w-full flex items-center h-auto p-4 -mt-16'>
        <SVGImg width={300} height={300} />
        <Text className='text-blue-900 text-3xl font-bold tracking-tight self-center whitespace-nowrap'>Inicia Sesión</Text>
        </View>  


    <View className="w-screen h-auto items-center">
      <View className={` h-auto flex-row bg-white border justify-between items-center mt-5 mx-6 pl-6 pr-4 
      py-4 rounded-xl border-solid border-slate-200 ${errors.email && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
        autoComplete='email'
        placeholder='email@email.com'
        keyboardType='email-address'
        className="w-auto text-xl self-stretch flex-1"
        onChangeText={onChangeEmail}
        value={email}
        />
      </View>
      <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent 
        ${errors.email && "text-[#FA6972]"} `}> {errors.email} </Text>
        <View className={` h-auto flex-row bg-white justify-between items-center mt-5 mx-6 pl-6 pr-4 
          py-4 rounded-xl border border-solid border-slate-200 ${errors.contrasena && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
        autoComplete='password'
        placeholder='contraseña'
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
        <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent 
          ${errors.contrasena && "text-[#FA6972]"} `}> {errors.contrasena} </Text>
      </View>

    <TouchableOpacity onPress={()=>navigation.navigate('Start')} 
      className='bg-sky-500 relative justify-center mt-6 px-16 py-4 rounded-xl items-start'>
      <Text className='text-white text-xl font-semibold'>Iniciar Sesión</Text>
    </TouchableOpacity>
    

      <View className="h-auto items-center justify-center">
        <View>
        <Stack.Screen name="ChangePass" component={NewPasswScreen} options={{ headerShown:false }}/>
          <TouchableOpacity 
            onPress={handleForgotPassword}
            >
            <Text className="text-sky-500 text-lg tracking-tight self-center whitespace-nowrap mt-3">
              ¿Olvidaste la contraseña?
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleNewAccount}>
            <Text className="text-sky-500 text-lg tracking-tight self-center whitespace-nowrap mt-14">
              ¿No tienes una cuenta? Registrate Aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  )
}
export default LoginScreen;



