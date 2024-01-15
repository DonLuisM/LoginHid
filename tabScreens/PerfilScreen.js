
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectData } from '../slices/dataSlice'
import { Icon } from 'react-native-elements'
import HistoriaClinica from '../assets/HistoriaCli.svg';
import ExamenesLaboratorio from '../assets/ExamenLabs.svg';
import OrdenesMedicas from '../assets/OrdenesMed.svg';
import Config from '../assets/Config.svg';
import MétodosPago from '../assets/Pagos.svg';
import Logout from '../assets/Logout.svg';

const PerfilScreen = () => {

  const userData = useSelector(selectData)

  return (
    <View className="bg-slate-50 w-auto h-auto relative flex-1">
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>

        <View className="bg-[#02B9EC] self-stretch items-center pt-11 pb-[16px] px-16 rounded-3xl justify-start">
        <Text className="text-white text-2xl font-extrabold pt-1">Mi Perfil</Text>
          <TouchableOpacity className=" border-4 border-slate-200 border-opacity-50 rounded-full mt-2 mb-3 ">
            <Image source={{ uri: userData.profileImage }}
              className=" rounded-full "
              style={{ width: 120, height: 120 }} />
            <View className="absolute bottom-0 right-0 bg-[#677294CC] p-2 rounded-full">
              <Icon 
              type='material' 
              name="add-a-photo" 
              color="white" 
              size={20} />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text className="pl-6 pt-4 text-[#333] text-2xl font-bold ">
            Informacion Personal
          </Text>
          <View className="absolute items-center justify-center flex-row pl-[220px] pt-[18px]">
              <TouchableOpacity>
                <Icon 
                className="opacity-80 rounded-full border-gray-50 bg-slate-50"
                type='material' 
                name="edit" 
                color="#677294" 
                size={22} />
              </TouchableOpacity>
            </View>   

          <View className={`h-auto flex-auto bg-[#f4f4f4] justify-between mt-3 mx-7 pl-6 
              pr-4 py-3 rounded-xl border border-solid border-slate-200 border-opacity-10`}>
            <View className="flex-row items-start">
              <Text className="text-[#02A8D7] font-bold text-sm opacity-80">Nombre</Text>
            </View>
            <View className="flex-row items-center">
            <Text className="text-base text-[#677294]">{userData.name} {userData.surname}</Text>
            </View>
          </View>

          <View className={`h-auto flex-auto bg-[#f4f4f4] justify-between mt-3 mx-7 pl-6 
              pr-4 py-3 rounded-xl border border-solid border-slate-200 border-opacity-10`}>
            <View className="flex-row items-start">
              <Text className="text-[#02A8D7] font-bold text-sm opacity-80">Número de contato</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-base text-[#677294]">{userData.prefix} {userData.number}</Text>
            </View>
          </View>

          <View className={`h-auto flex-auto bg-[#f4f4f4] justify-between mt-3 mx-7 pl-6 
            pr-4 py-3 rounded-xl border border-solid border-slate-200 border-opacity-10`}>
            <View className="flex-row items-start">
              <Text className="text-[#02A8D7] font-bold text-sm opacity-80">Fecha de nacimiento</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-base text-[#677294]">{userData.birthday}</Text>
            </View>
          </View>

          <View className={`h-auto flex-auto bg-[#f4f4f4] justify-between mt-3 mx-7 pl-6 
            pr-4 py-3 rounded-xl border border-solid border-slate-200 border-opacity-10`}>
            <View className="flex-row items-start">
              <Text className="text-[#02A8D7] font-bold text-sm opacity-80">Localización</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-base text-[#677294]">{userData.country}</Text>
            </View>
          </View>

        </View>

        <View className="space-y-5 space-x-5 items-center" >

          <View className="items-center pt-7 flex-row space-x-8 mx-5 ">
            <View className="border-white rounded-2xl shadow-xl overflow-hidden">
            <TouchableOpacity style={{ position:'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', overflow:'hidden', borderRadius: 10, height: 180, width: 150 }}>
             <HistoriaClinica width={90} height={90} />
              <Text className="text-[#858EA9] pt-2 text-center">Mi Historia {"\n"} Clinica</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ position:'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, height: 180, width: 150 }}>
              <ExamenesLaboratorio width={90} height={90} />
              <Text className="text-[#858EA9] pt-2 text-center">Mis Examenes {"\n"} de Laboratorio </Text>
            </TouchableOpacity>
          </View>

          <View className="items-center flex-row space-x-8 mx-4 ">
            <TouchableOpacity style={{ position:'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, height: 180, width: 150 }}>
             <OrdenesMedicas width={90} height={90} />
              <Text className="text-[#858EA9] pt-2 text-center">Mi Ordenes {"\n"} Médicas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ position:'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, height: 180, width: 150 }}>
              <Config width={90} height={90} />
              <Text className="text-[#858EA9] pt-2 text-center">Configuración </Text>
            </TouchableOpacity>
          </View>

          <View className="items-center flex-row space-x-8 mx-4 pb-10">
            <TouchableOpacity style={{ position:'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, height: 180, width: 150 }}>
             <MétodosPago width={90} height={90} />
              <Text className="text-[#858EA9] pt-2 text-center">Métodos de Pago {"\n"} y Planes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ position:'relative', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, height: 180, width: 150 }}>
              <Logout width={90} height={90} />
              <Text className="text-[#858EA9] pt-2 text-center">Cerrar Sesión </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PerfilScreen