
import { View, Text, ScrollView, Image, 
  TouchableOpacity, FlatList, ImageBackground} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

/*
const handleSignInPress = () => {
  navigation.navigate("Login");
} */

const HomeScreen = () => {
  const navigation = useNavigation();
  const data = [
    { key: 'Pantalla Start', 
      texto:'Somos un nuevo hospital en linea',
      image: require('../assets/First.jpg') },
    { key: 'Pantalla Start 1',
      texto:'Salud a tu Alcance cuando lo necesites',
      image: require('../assets/Second.jpg') },
    { key: 'Pantalla Start 2',  
      texto:'Atención médica siempre Disponible',
      image: require('../assets/Third.jpg') },
  ];

  const renderItem = ({ item }) => (
    <View className="h-auto w-auto items-center justify-center bg-gray-600">
    <ImageBackground source={item.image} style={{width:'100%',height:'100%',opacity:0.8}} resizeMode="cover">
    <View className="h-screen w-screen items-center justify-end pb-24">
    <View className="tracking-tight relative ">
  <Text className="text-neutral-50 font-bold text-center text-4xl ">
   {item.texto}
    </Text>
    </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} className='bg-sky-500 relative justify-center mt-3 px-16 py-5 rounded-xl items-start'>
            <Text className='text-white text-2xl font-semibold'>Descubre Más</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} className='tracking-tight self-center relative whitespace-nowrap mt-6 mb-6'>
        <Text className='text-cyan-500 text-center text-xl leading-8 '>Omitir</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
  


  return (
    <View className='h-full w-full'>

    <FlatList
    className='flex-1 h-full w-full'
    data={data}
    horizontal
    pagingEnabled    
    keyExtractor={(item) => item.key}
    renderItem={renderItem}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ flexGrow: 1}}
    />
    </View>

  )
}
export default HomeScreen;


/*
  View general con imagebackground

      <View className="flex-1 items-center align-top">
      <ScrollView horizontal={true}
        pagingEnabled={true}
        className="flex-1 absolute">
      <View>
      <Image 
      className=" w-auto h-auto"
      resizeMode='cover'
      source={require('../assets/First.jpg')}
      />
      </View>
      <View>
      <Image 
      className=" w-auto h-auto "
      resizeMode='cover'
      source={require('../assets/Second.jpg')}
      />
      </View>
      <View>
      <Image 
      className=" w-auto h-auto"
      resizeMode='cover'
      source={require('../assets/Third.jpg')}
      />
      </View>
      
      </ScrollView>
      

      <View className="mt-auto ">
        <View className="items-center ">
          <Text className="text-3xl relative
            font-medium tracking-tight
           text-neutral-50 mt-[560 px]">
            Dile Adiós a las
          </Text>
          < Text className="text-3xl relative
            font-medium tracking-tight
            text-neutral-50 mt-[560 px]"> 
            Esperas
          </Text>
      
        </View>

        <TouchableOpacity 
          className="relative text-white text-2xl font-semibold
            self-center w-full mt-3 px-16 py-5 max-w-[295px] rounded-xl
            bg-sky-500 items-start
            justify-center"  
          onPress={handleSignInPress}>
          <Text className="font-semibold text-lg text-white"> Descubre Más </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="relative text-cyan-500 text-center text-xl
            leading-8 tracking-tight self-center whitespace-nowrap
            mt-6 mb-6 "  
          onPress={() => {}}>
          <Text className="font-semibold text-lg"> Omitir </Text>
        </TouchableOpacity>

      </View>
    </View>
    )
*/