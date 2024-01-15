import { View, Text, TouchableOpacity, FlatList, ImageBackground, Image, ScrollView } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Ionicons, AntDesign, FontAwesome6, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { selectData } from '../slices/dataSlice';
import { useSelector } from 'react-redux';

import VectorAsiste from '../assets/VectorAsiste.svg';
import VectorConsulta from '../assets/VectorConsulta.svg';
import VectorMental from '../assets/VectorMental.svg';
import VectorHospital from '../assets/VectorHospital.svg';
import VectorLabs from '../assets/VectorLabs.svg';
import VectorAmbu from '../assets/VectorAmbu.svg';



const HomeHidoScreen = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(true);
  const userData = useSelector(selectData)

  const [items, setItems] = useState([
    { name: 'Dra. Laura Gomez', specialty: 'Medico General', rating: 3.8, visible: false,  image: require('../assets/Doc1.jpg') },
    { name: 'Dr. Felipe Arias', specialty: 'Medico Internista', rating: 4.5, visible: false, image: require('../assets/DrRecom.jpg') },
    { name: 'Ing. Fernando Barrios', specialty:'Ingeniero', rating:4.8, visible:false, image:require('../assets/Fourth.png')},
    { name: 'Dra. Michelle Gomez', specialty: 'Pediatría', rating: 4.6, visible:false, image: require('../assets/First.jpg')},
    { name: 'Dr. Francisco Arias', specialty: 'Pediatría', rating: 4.2, visible:false, image: require('../assets/Second.jpg')}
    // Agrega más elementos según sea necesario con imágenes únicas
  ]);

  const pressVisible = (index) => {
    const newItems = [...items];
    newItems[index].visible = !newItems[index].visible;
    setItems(newItems);
  };

  //onPress={() => { navigation.navigate('Screen1'); }}
  //onPress={() => { navigation.navigate('Screen2'); }}
  return (

    <View className="flex-1">
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View className="bg-[#02B9EC] self-stretch pt-12 pb-[20px] px-8 rounded-3xl justify-start flex-row">

          <View>
            <Text className="text-white text-left text-xl pt-2">¡ Hola {userData.name} !</Text>
            <Text className="text-white text-3xl font-extrabold pt-2  ">Bienvenido a Hidoc</Text>
          </View>
          <View className="ml-10 pt-1 ">
            <TouchableOpacity onPress={() => navigation.navigate('Mi Perfil')}>
              <Image className=" pl-10 " 
              source={{ uri: userData.profileImage }} 
              style={{ width: 75, height: 75, opacity: 0.9, borderRadius: 50 }} />
            </TouchableOpacity>
          </View>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
          <View className={`h-auto w-auto items-center  pt-3  flex-row space-x-4 mx-4 `} >
            <View className="flex-1 bg-[#02B9EC] rounded-xl items-center justify-center">  
            <TouchableOpacity >
              <Image style={{ position:'relative', width: 200, height: 100, opacity: 0.85, borderRadius: 10 }} source={require('../assets/Hidoc_Prime.jpg')} />
              <Text className="absolute pt-[50px] pl-2.5 font-light text-white opacity-85">Hidoc Prime</Text>
              <Text className="absolute pt-[52px] pl-2.5 mt-3.5 text-lg leading-5 font-bold text-white opacity-95">10% Descuento en {"\n"}Consultas</Text>
            </TouchableOpacity>
            </View>

            <View className="flex-1 bg-[#02B9EC] rounded-xl items-center justify-center">
            <TouchableOpacity >
              <Image style={{ position:'relative', width: 200, height: 100, opacity: 0.91, borderRadius: 10 }} source={require('../assets/Doc_Help.jpg')} />
              <Text className=" absolute pt-[50px] pl-2.5 font-light opacity-85">Hidoc Prime</Text>
              <Text className=" absolute pt-[52px] pl-2.5 mt-3.5 text-lg leading-5 font-bold opacity-95">Plan anual {"\n"}
                Desde 99.000 Cop</Text>
            </TouchableOpacity>
            </View>

            <View className="flex-1 bg-[#02B9EC] rounded-xl items-center justify-center">
            <TouchableOpacity>
              <Image style={{ position:'relative', width: 200, height: 100, opacity: 0.91, borderRadius: 10 }} source={require('../assets/Doc_3.jpg')} />
              <Text className="absolute pt-[50px] pl-2.5 font-light">Hidoc Prime</Text>
              <Text className="absolute pt-[52px] pl-2.5 mt-3.5 text-lg leading-5 font-bold">Ofertas en {'\n'}Servicios
                Médicos</Text>
            </TouchableOpacity>
            </View>
          </View>
        </ScrollView>


        <View className="space-y-2 space-x-5  items-center  pt-2" >
          <View className="items-center pt-2  flex-row space-x-7 mx-4">
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#02A8D7', borderRadius: 10, height: 100, width: 160 }}>
              <VectorAsiste width={50} height={50}/>
              <Text className="text-white pt-2 text-center">Asistente {"\n"} Medico Virtual</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#02A8D7', borderRadius: 10, height: 100, width: 160 }}>
              <VectorConsulta width={50} height={50} />
              <Text className="text-white pt-2 text-center">Consulta {"\n"}Virtual</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center pt-2  flex-row space-x-7 mx-4">
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#02A8D7', borderRadius: 10, height: 100, width: 160 }}>
              <VectorHospital width={50} height={50}/>
              <Text className="text-white pt-1 text-sm text-center">Consulta {"\n"}Presencial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#02A8D7', borderRadius: 10, height: 100, width: 160 }}>
              <VectorAmbu width={60} height={60} />
              <Text className="text-white text-center text-sm">Atencion {"\n"}Domiciliaria</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center pt-2  flex-row space-x-7 mx-4">
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#02A8D7', borderRadius: 10, height: 100, width: 160 }}>
              <VectorMental width={50} height={50}/>
              <Text className="text-white pt-1 text-center text-sm">Salud {"\n"}Mental</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#02A8D7', borderRadius: 10, height: 100, width: 160 }}>
              <VectorLabs width={50} height={50} />
              <Text className="text-white pt-2 text-center  text-sm">Examenes de {"\n"}Laboratorio</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View>
          <View className="flex-1 flex-row pt-2.5 ">
            <Text className="ml-5 font-bold text-xl text-[#1C4D8D]">
              Agenda una Consulta Presencial
            </Text>
            <TouchableOpacity>
              <Text className="ml-5 pl-10 pt-1 text-[#677294] ">
                Ver todos {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
            <View className=" space-x-5">
              <View className=" items-center  pt-2  flex-row space-x-4 mx-4">


                <View className="mb-7">
                  <ImageBackground style={{position: 'relative', width: 195, height: 240, overflow:'hidden', borderRadius: 8 }} source={require('../assets/First.jpg')} >
                    <View className="absolute top-[66%] left-0 right-0 h-screen bg-white p-2.5 rounded-sm" >
                      <Text className="text-center text-[#1C4D8D] text-2xl font-semibold">Medicina General</Text>
                      <View className="absolute items-center justify-center ml-9 pt-5">
                        <TouchableOpacity className="bg-[#02A8D7] relative items-center justify-center mt-[22px] rounded-md py-[3.7%] w-32">
                          <Text className="text-base w-auto h-auto text-[#FAFAFA]">
                            Agendar Ahora
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>

                <View className="mb-7">
                  <ImageBackground style={{ position:'relative', width: 195, height: 240, overflow: 'hidden', borderRadius: 8 }} source={require('../assets/Fourth.png')} >
                    <View className="absolute top-[66%] left-0 right-0 bg-white h-screen p-2.5 rounded-sm">
                      <Text className="text-center text-[#1C4D8D] text-2xl font-semibold">Cardiología</Text>
                      <View className="absolute items-center justify-center ml-9 pt-5">
                        <TouchableOpacity className="bg-[#02A8D7] relative items-center justify-center mt-[22px] rounded-md py-[3.7%] w-32">
                          <Text className="text-base  text-[#FAFAFA]">
                            Agendar Ahora
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>

                <View className="mb-7">
                  <ImageBackground style={{ position:"relative", width: 195, height: 240, overflow: 'hidden', borderRadius: 8 }} source={require('../assets/Second.jpg')} >
                    <View className="absolute top-[66%] left-0 right-0 bg-white h-screen p-2.5 rounded-sm">
                      <Text className="text-center text-[#1C4D8D] text-2xl font-semibold">Rehabilitación</Text>
                      <View className="absolute items-center justify-center ml-9 pt-5">
                        <TouchableOpacity className="bg-[#02A8D7] relative items-center justify-center mt-[22px] rounded-md py-[3.7%] w-32">
                          <Text className="text-base  text-[#FAFAFA]">
                            Agendar Ahora
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>


                <View className="mb-7">
                  <ImageBackground style={{ position:'relative', width: 195, height: 240, overflow: 'hidden', borderRadius: 8 }} source={require('../assets/DocRadio.png')} >
                    <View className="absolute top-[66%] left-0 right-0 bg-white h-screen p-2.5 rounded-sm">
                      <Text className="text-center text-[#1C4D8D] text-2xl font-semibold">Radiología</Text>
                      <View className="absolute items-center justify-center ml-9 pt-5">
                        <TouchableOpacity className="bg-[#02A8D7] relative items-center justify-center mt-[22px] rounded-md py-[3.7%] w-32">
                          <Text className="text-base  text-[#FAFAFA]">
                            Agendar Ahora
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>

              </View>
            </View>
          </ScrollView>
        </View>


        <View>
          <View className="flex-row flex-1 ml-5 -mt-3.5">
            <Text className="font-bold text-2xl pr-6 text-[#333]">
              Doctores Recomendados
            </Text>
            <TouchableOpacity >
              <Text className="ml-3 pl-10 pt-1 text-[#677294]">
                Ver mas {'>'}
              </Text>
            </TouchableOpacity>
          </View>


          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="items-center pt-2 flex-row space-x-4 mx-5 w-auto">
              {items.map((item, index) => (
                <View key={index} className="mb-7 bg-white items-center rounded-md pt-3">
                  <View className="flex-row space-x-16 pb-2.5 pl-2 pr-2">
                    <TouchableOpacity onPress={() => pressVisible(index)}>
                      {item.visible ? (
                        <FontAwesome name="heart-o" size={15} color="red" />
                      ) : (
                        <FontAwesome name="heart" size={15} color="red" />
                      )}
                    </TouchableOpacity>

                    <View className="flex-row space-x-1">
                      <FontAwesome name="star" size={15} color="#F6D060" />
                      <Text className="-mt-[0.4px] text-[#677294]">{item.rating}</Text>
                    </View>
                  </View>
                  <View className="-mt-1">
                    <Image style={{ width: 75, height: 75, borderRadius: 9999 }} source={item.image} />
                  </View>
                  <View className="pl-2 pr-2 pb-2">
                    <Text className="pt-2 font-bold text-center text-[#1C4D8D]">{item.name}</Text>
                    <Text className="text-center text-[#677294] text-sm ">{item.specialty}</Text>
                    <TouchableOpacity className="relative justify-center rounded-xl">
                      <Text className="text-[#02A8D7] text-center">Ver perfil</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

        </View>
      </ScrollView >
    </View >

  )
}

export default HomeHidoScreen