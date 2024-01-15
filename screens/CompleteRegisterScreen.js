import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Image, ActivityIndicator, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiClearError, apiError, apiPending, apiSetPreRegistro, 
    apiSuccess, selectData, selectError, selectLoading } from '../slices/dataSlice';
import DatePicker from 'react-native-modern-datepicker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list';

const CompleteRegisterScreen = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [prefix, setPrefix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [ver, setVer] = useState(false);

  const [imageDef, setImage] = useState(true);
  const [imageUri, setImageUri] = useState("");
  const [imageName, setImageName] = useState("");

  const token = useSelector((state) => state.data.token)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const userData = useSelector(selectData)

  function handleOnPress() {
    setVer(!ver)
  }

  function handleChange(propDate) {
    setBirthday(propDate)
  }

  const PickImage = () => {
    ImagePicker.requestMediaLibraryPermissionsAsync();
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.
        Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      allowsMultipleSelection: false
    })
      .then((result) => {
        if (!result.canceled) {
          setImageUri(result.assets[0].uri);
          setImage(false);
        }
        else {
          setImage(true)
        }
      })
      .catch((err) => {
        dispatch(apiError(err.result))
        console.log(err.result);
      })
  };


  const handleUpdate = () => {

    dispatch(apiPending());

    const formData = new FormData();
    formData.append('handle', userData.handle)
    formData.append('name', name)
    formData.append('surname',surname)
    formData.append('birthday',birthday)
    formData.append('country', country)
    formData.append('state',state)
    formData.append('city',city)
    formData.append('prefix', prefix)
    formData.append('number',phoneNumber)
    {
        imageDef ? (
          formData.append('profileImage', { uri: "https://firebasestorage.googleapis.com/v0/b/hidocfun-f7947.appspot.com/o/usuarios%2FDefaultProfile.jpg?alt=media&token=956fdcac-ec8c-46fa-94ec-5f395184ca61", name: `DefaultProfile.png`, type: 'image/*' })
        ) : (
          formData.append('profileImage', { uri: imageUri, name: `${imageName}`, type: 'image/*' })
        )
    }

    const apiUrl = 'https://us-central1-hidocfun-f7947.cloudfunctions.net/api/createUser';
    axios.post(apiUrl, formData, { headers: { "Content-Type": 'multipart/form-data' } })
      .then((res) => {
        dispatch(apiClearError())
        obtenerInfoUsuario();
        console.log(userData.handle)
    })
      .catch((error) => {
        dispatch(apiError(error.response.data))
        console.error('Error al enviar el formulario:', error.response.data);
    })
  }

  const obtenerInfoUsuario = () => {
    console.log(userData.email) //opcional
    const getUrl = `https://us-central1-hidocfun-f7947.cloudfunctions.net/api/usuarios/${userData.email}`
    axios.get(getUrl)
      .then((response) => {
        console.log("Parada B")
        dispatch(apiSuccess(response.data[0]))
        dispatch(apiSetPreRegistro(response.data[0].completo))
      })
      .catch((error) => {
        dispatch(apiError(error.response.data))
        console.log("Error B")
        console.log(error.response.data);
      })
  }

  const data = [
    { key: '1', value: 'EEUU', disabled: true },
    { key: '2', value: 'Colombia' },
    { key: '3', value: 'Nueva Zelanda' },
    { key: '4', value: 'Portugal'},
    { key: '5', value: 'Chile' },
  ]

  useEffect(() => {   // Como el estado se "demora" en cambiar, entonces el use effect lo que hace es que apenas cambie ejecuta esto
    const patch = require('path')
    const ruta = patch.basename(imageUri)
    setImageName(ruta)
  }, [imageUri])

  return (
    <ScrollView className=" bg-white">
    <View className='justify-center'>
      <View className=" bg-cyan-500 self-stretch pt-11 px-16 rounded-3xl justify-start items-center">
        <View className="flex-initial items-center">
        <Text className=" flex-row text-white text-xl font-bold items-start">
          Completa tu Perfil
        </Text>
        <Text className=" flex-row text-white text-lg font-semibold ml-1"> 
          {userData.handle} 
        </Text>
        </View>
        <TouchableOpacity onPress={PickImage} 
            className=" border-4 border-slate-300 border-opacity-50 rounded-full mb-4 mt-2">
          {!imageDef ? (
                <Image source={{ uri: imageUri }}
                className=" rounded-full "
                style={{ width: 100, height: 100 }} 
                />
            ) : (
                <Image
                source={{ uri: "https://firebasestorage.googleapis.com/v0/b/hidocfun-f7947.appspot.com/o/usuarios%2FDefaultProfile.jpg?alt=media&token=956fdcac-ec8c-46fa-94ec-5f395184ca61" }}
                className="rounded-full"
                style={{ width: 100, height: 100 }}
                />
            )}
          <View className="absolute bottom-0 right-0 bg-slate-500 p-2 rounded-full">
            <Icon type='material' name="add-a-photo" color="white" size={17} />
          </View>
        </TouchableOpacity>
      </View>

      <View 
        className={`h-auto flex-row bg-white justify-between items-center mt-4 mx-7 pl-5 
        pr-4 py-4 rounded-xl border border-solid border-slate-200 ${(error.name) && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
          className=" w-auto text-xl flex-1"
          autoComplete='name'
          placeholder='Nombre'
          onChangeText={setName}
          value={name}
        />
      </View>
      {error.name ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${error.name && "text-[#FA6972]"} `}> {error.name} </Text>) : <></>}

      <View 
      className={`h-auto flex-row bg-white justify-between items-center mt-3 mx-7 pl-5
      pr-4 py-4 rounded-xl border border-solid border-slate-200 ${(error.surname) && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
          className=" w-auto text-xl flex-1"
          autoComplete='additional-name'
          placeholder='Apellido'
          onChangeText={setSurname}
          value={surname}
        />
      </View>
      {error.surname ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${error.surname && "text-[#FA6972]"} `}> {error.surname} </Text>) : <></>}

      <View 
      className={`h-auto flex-row bg-white justify-between items-center mt-3 mx-7 pl-5 
      pr-4 py-4 rounded-xl border border-solid border-slate-200 ${error.birthday && "border-[#FA6972]"} border-opacity-10`}>
        <TextInput
          className=" w-auto text-xl flex-1"
          autoComplete='birthdate-full'
          placeholder='Fecha de nacimiento'
          onChangeText={setBirthday}
          value={birthday}
          onPressIn={handleOnPress}
          inputMode='none'
        />
      </View>
      {error.birthday ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${error.birthday && "text-[#FA6972]"} `}> {error.birthday} </Text>) : <></>}

      <View 
      className={`bg-white mt-3 mx-7 pl-5 py-4 rounded-xl border 
      border-solid border-slate-200 ${error.country && "border-[#FA6972]"} border-opacity-10`}>
        <SelectList
          setSelected={(val) => setCountry(val)}
          data={data} //Cambiar según corresponda
          save="value"
          placeholder='País'
          searchPlaceholder='País'
          arrowicon={<Icon type="material" name="expand-more" size={25} color={'#02A8D7'} />}
          boxStyles={{ borderColor: "white", paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
          dropdownStyles={{ borderColor: "white", paddingRight: 15 }}
          notFoundText="País no encontrado"
          inputStyles={{ color: "#999999", fontSize: 18 }}
        />
        {/*<TextInput
        placeholder='País'
        className="w-auto text-xl flex-1 absolute"
        onChangeText={setCountry}
        value={country}
        />
        <Icon
        className="pl-[252px] font-bold"
        type='material' 
        name="expand-more" 
        color="lime"
        size={25} .

        />*/}
      </View>
      {error.country ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${error.country && "text-[#FA6972]"} `}> {error.country} </Text>) : <></>}

      <View 
      className={` bg-white mt-3 mx-7 pl-5 py-4 rounded-xl 
      border border-solid border-slate-200 ${error.state && "border-[#FA6972]"} border-opacity-10`} >
        <SelectList
          setSelected={(val) => setState(val)}
          data={data} //Cambiar según corresponda
          save="value"
          placeholder='Estado'
          searchPlaceholder='Estado'
          arrowicon={<Icon type="material" name="expand-more" size={25} color={'#02A8D7'} />}
          boxStyles={{ borderColor: "white", paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
          dropdownStyles={{ borderColor: "white", paddingRight: 15 }}
          notFoundText="Estado o deparatamento no encontrado"
          inputStyles={{ color: "#999999", fontSize: 18 }}
        />
        {/*<TextInput
            placeholder='Estado'
            className="w-auto text-xl flex-1 absolute"
            onChangeText={setState}
            value={state}
            />
            <Icon
            className="pl-[252px]"
            type='material' 
            name="expand-more" 
            color="lime"
            size={25} 
        />*/}
      </View>
      {error.state ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${error.state && "text-[#FA6972]"} `}> {error.state} </Text>) : <></>}

      <View 
      className={` bg-white mt-3 mx-7 pl-5 py-4 rounded-xl border border-solid 
      border-slate-200 ${error.city && "border-[#FA6972]"} border-opacity-10`}>
        <SelectList
          setSelected={(val) => setCity(val)}
          data={data} //Cambiar según corresponda
          save="value"
          placeholder='Ciudad'
          searchPlaceholder='Ciudad'
          arrowicon={<Icon type="material" name="expand-more" size={25} color={'#02A8D7'} />}
          boxStyles={{ borderColor: "white", paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
          dropdownStyles={{ borderColor: "white", paddingRight: 15 }}
          notFoundText="Ciudad no encontrada"
          inputStyles={{ color: "#999999", fontSize: 18 }}
        />
        {/*<TextInput
          className=" w-auto text-lg self-stretch flex-1"
          autoComplete='off'
          placeholder='City'
          onChangeText={setCity}
          value={state.length == 0 ? ("") : (city)}
          editable={state.length == 0 ? (false) : (true)} // Si no se ha escogido un estado no se podrá hacer nada con la ciudad
      />*/}
      </View>
      {error.city ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${error.city && "text-[#FA6972]"} `}> {error.city} </Text>) : <></>}

      <View className ={`h-auto flex-row bg-white justify-between items-center mt-4 
      mx-7 pl-6 pr-4 py-4 rounded-xl border border-solid ${(error.phoneNumber || error.prefix) && "border-[#FA6972]"} border-slate-200 border-opacity-10`}>
          {/*
          <SelectList
            setSelected={(val) => setCode(val)}
            data={data} //Cambiar según corresponda
            save="value"
            placeholder='Prefix'
            searchPlaceholder='Code'
            arrowicon={<Icon type="material" name="expand-more" size={25} color={'#02A8D7'} />}
            boxStyles={{ borderColor: "white", paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
            dropdownStyles={{ borderColor: "white", paddingRight: 15 }}
            notFoundText="Ciudad no encontrada"
            inputStyles={{ color: "#999999", fontSize: 18 }}
      /> */}
          <TextInput
            className={`w-auto text-lg self-stretch flex-1`}
            autoComplete='off'
            placeholder='+(Code)'
            onChangeText={setPrefix}
            value={prefix}
          />
          
          <TextInput
            className="text-lg flex-auto"
            autoComplete='off'
            placeholder='Phone number'
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType='numeric'
          />
      </View>
      {(error.phoneNumber || error.prefix) ?
        (<Text className={` w-screen pl-6 pr-4 font-medium text-sm ${(error.phoneNumber || error.prefix) && "text-[#FA6972]"} `}> {error.phoneNumber} </Text>) : <></>}


      {loading ? (<ActivityIndicator size="large" color="gray" className=" my-4" />) : 
        (
        <TouchableOpacity className=" py-3 px-11 self-center bg-[#02A8D7] mt-4 rounded-xl mb-3" onPress={handleUpdate}>
          <Text className='text-white text-lg font-semibold'>Completar registro</Text>
        </TouchableOpacity>
        )}
    </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={ver}
        statusBarTranslucent={true}
      >
        <TouchableOpacity className=" bg-zinc-900 flex-1 absolute h-full w-full opacity-20" onPress={handleOnPress}>
        </TouchableOpacity>
        <View className=" w-11/12 bg-white self-center m-auto rounded-2xl">
          <View className=" items-center p-3">
            <DatePicker
              mode='calendar'
              selected={birthday}
              onDateChange={handleChange}
              locale='es'
              options={{
                mainColor: '#02A8D7'
              }}
            />
            <TouchableOpacity onPress={handleOnPress} className="mt-0 px-11 py-2 bg-[#02A8D7] rounded-xl ">
              <Text className=" text-white text-xl">Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}


export default CompleteRegisterScreen