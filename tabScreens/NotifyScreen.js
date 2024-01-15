import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { selectData } from '../slices/dataSlice';
import { Icon } from 'react-native-elements';


const NotifyScreen = () => {

  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const userData = useSelector(selectData)

  return (
    <ScrollView className="flex-1 w-auto h-auto bg-slate-50">
    <View className="flex-1 w-auto h-auto bg-slate-50">
      <View className="bg-[#02B9EC] self-stretch pt-11 pb-[20px] px-8 rounded-3xl justify-start flex-row">
          <View>
            <Text className="text-white text-left text-xl pt-2">Volver</Text>
            <Text className="text-white text-4xl font-extrabold pt-2 ">Notificaciones</Text>
          </View>
          <View className="ml-14 pt-2">
            <TouchableOpacity onPress={() => navigation.navigate('Mi Perfil')}>
              <Image className=" pl-10 " 
              source={{ uri: userData.profileImage }} 
              style={{ width: 75, height: 75, opacity: 0.9, borderRadius: 50}} />
            </TouchableOpacity>
          </View>
        </View>

      <View className=" w-auto h-[500px] left-[16px] top-[34px] items-center justify-center">

        <View className="w-[348px] h-[127px] left-0 top-[0px] border-white rounded-2xl shadow-xl absolute bg-white">
          <View className="w-[80px] h-[75px] left-[15px] top-[8px] rounded-xl items-center justify-center bg-[#02A8D7]">
            <Text className="text-white text-2xl font-bold">27</Text>
            <Text className="text-white text-2xl font-bold">FEB</Text>
          </View>
          <View className="w-[80px] h-[30px] left-[15px] top-[13px] rounded-md bg-[#02A8D74D] justify-center items-center">
            <Text className="text-[#02A8D7] text-lg font-bold">NEW</Text>
          </View>
            <View className="w-auto h-auto left-[110px] top-[24px] absolute flex-initial">
            <Text className="w-auto h-auto text-black text-xl font-semibold">
             Records added by you
            </Text>
            <View className="w-auto h-auto left-[205px] top-[-15px] flex-row absolute items-end justify-end">
            <TouchableOpacity>
            <Icon
              className="font-semibold items-end"
              type='material' 
              name="more-vert" 
              color="gray"
              size={25}
            />
            </TouchableOpacity>
            </View>
            <Text className="text-[#02A8D7] text-base mt-1">
              Record for Abdullah mamun
            </Text>
            <Text className="text-base text-[#677294] mt-2">
              1 Prescription
            </Text>
          </View>
        </View>

        <View className="w-[348px] h-[127px] left-0 top-[134px] border-white rounded-2xl shadow-xl absolute bg-white">
          <View className="w-[80px] h-[75px] left-[15px] top-[8px] rounded-xl items-center justify-center bg-[#02A8D7]">
            <Text className="text-white text-2xl font-bold">28</Text>
            <Text className="text-white text-2xl font-bold">FEB</Text>
          </View>
          <View className="w-[80px] h-[30px] left-[15px] top-[13px] rounded-md bg-[#02A8D74D] justify-center items-center">
            <Text className="text-[#02A8D7] text-lg font-bold">NEW</Text>
          </View>
          <View className="w-auto h-auto left-[110px] top-[24px] absolute flex-initial">
            <Text className="w-auto h-auto text-black text-xl font-semibold">
             Records added by you
            </Text>
            <View className="w-auto h-auto left-[205px] top-[-15px] flex-row absolute items-end justify-end">
            <TouchableOpacity>
            <Icon
              className="font-semibold items-end"
              type='material' 
              name="more-vert" 
              color="gray"
              size={25}
            />
            </TouchableOpacity>
            </View>
            <Text className="text-[#02A8D7] text-base mt-1">
              Record for Abdullah shuvo
            </Text>
            <Text className="text-base text-[#677294] mt-2">
              1 Prescription
            </Text>
          </View>
        </View>

        <View className="w-[348px] h-[127px] left-0 top-[270px] border-white rounded-2xl shadow-xl absolute bg-white">
          <View className="w-[80px] h-[75px] left-[15px] top-[8px] rounded-xl items-center justify-center bg-[#02A8D7]">
            <Text className="text-white text-2xl font-bold">01</Text>
            <Text className="text-white text-2xl font-bold">MAR</Text>
          </View>
          <View className="w-[80px] h-[30px] left-[15px] top-[13px] rounded-md bg-[#02A8D74D] justify-center items-center">
            <Text className="text-[#02A8D7] text-lg font-bold">NEW</Text>
          </View>
          <View className="w-auto h-auto left-[110px] top-[24px] absolute flex-initial">
            <Text className="w-auto h-auto text-black text-xl font-semibold">
             Records added by you
            </Text>
            <View className="w-auto h-auto left-[205px] top-[-15px] flex-row absolute items-end justify-end">
            <TouchableOpacity>
            <Icon
              className="font-semibold items-end"
              type='material' 
              name="more-vert" 
              color="gray"
              size={25}
            />
            </TouchableOpacity>
            </View>
            <Text className="text-[#02A8D7] text-base mt-1">
              Record for Shruti Kedia
            </Text>
            <Text className="text-base text-[#677294] mt-2">
              1 Prescription
            </Text>
          </View>
        </View>
      </View>

    </View>
    </ScrollView>
  )
}
export default NotifyScreen
