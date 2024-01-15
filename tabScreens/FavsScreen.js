
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectData } from '../slices/dataSlice'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const FavsScreen = () => {
  const navigation = useNavigation();
  const userData = useSelector(selectData)

  return (
    <ScrollView className="w-auto h-auto bg-slate-50 absolute">
    <View className="flex-1 h-screen w-screen bg-slate-50">
      <View className="bg-[#02B9EC] self-stretch pt-11 pb-[20px] px-8 rounded-3xl justify-start flex-row">
          <View>
            <Text className="text-white text-left text-xl pt-2">Volver</Text>
            <Text className="text-white text-4xl font-extrabold pt-2 ">Favoritos</Text>
          </View>
          <View className="ml-32 pt-2">
            <TouchableOpacity onPress={() => navigation.navigate('Mi Perfil')}>
              <Image className=" pl-10 " 
              source={{ uri: userData.profileImage }} 
              style={{ width: 75, height: 75, opacity: 0.9, borderRadius: 50 }} />
            </TouchableOpacity>
          </View>
      </View>
        <Text className="text-2xl font-bold pl-8 pt-4 text-[#02ACDC]">
          Elige tu mejor opción
        </Text>
        <Text className="text-lg font-light pl-8 pt-1">
          Encontramos los siguientes médicos para ti
        </Text>
    
      <View className=" w-auto h-auto left-auto top-auto items-center justify-center absolute">
        <View className="left-5 rigth-5 top-[232px] bg-white border-white rounded-lg relative pl-36 shadow-xl">
          <Image className=" absolute" 
          style={{ width: 120, height: 110, borderRadius: 10, margin:15, marginLeft:12}} source={require('../assets/Doc1.jpg')} />
          <View className="flex-row">
          <Text className="font-bold text-2xl relative pt-5 ">Dra. Laura Gomez</Text>
          <TouchableOpacity>
          <Icon 
            className="rounded-full pt-6 ml-5"
            name='favorite'
            type='material'
            color='red'
            size={16}/>
          </TouchableOpacity>
          </View>
          <Text className="color-[#03B8EA] text-base font-semibold">Médica General</Text>
          <Text className="color-[#677294] text-base pt-1">7 años de experiencia</Text>

          <View className="flex-row pt-1">
          <Icon 
            className="rounded-full"
            name='star'
            type='material'
            color='#F6D060'
            size={20}/>
          <Text className="color-[#677294] text-sm pl-0.5 mt-[2px]">5.0</Text>
          <Icon 
            className="rounded-full pl-2"
            name='person'
            type='material'
            color='#02B6E8'
            size={20}/>
          <Text className="color-[#677294] text-sm pl-0.5 mt-[2px]">78 Pacientes Atendidos</Text>
          </View>

          <View className="items-center justify-center absolute mx-5 pt-36 ">
          <Text className="color-[#02B6E8] text-xl font-extrabold"> $65.000 COP</Text>
          </View>

        <TouchableOpacity className='bg-sky-500 justify-center mt-5 px-16 py-2 rounded-xl items-center mb-3 mr-2 ml-2'>
          <Text className='text-white text-lg font-semibold'>Agendar</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View className="absolute items-center justify-center">
        <View className="left-5 right-5 top-[428px] hscreen bg-white border-white rounded-lg relative pl-36 shadow-xl">
          <Image className=" absolute" 
          style={{ width: 120, height: 110, borderRadius: 10, margin:15, marginLeft:12}} source={require('../assets/DocRadio.png')} />
          <View className="flex-row">
          <Text className="font-bold text-2xl relative pt-5 ">Dr. Adrian Ramos</Text>
          <TouchableOpacity>
          <Icon 
            className="rounded-full pt-6 ml-5"
            name='favorite'
            type='material'
            color='red'
            size={16}/>
          </TouchableOpacity>
          </View>
          <Text className="color-[#03B8EA] text-base font-semibold">Pediatría</Text>
          <Text className="color-[#677294] text-base pt-1">10 años de experiencia</Text>

          <View className="flex-row pt-1">
          <Icon 
            className="rounded-full"
            name='star'
            type='material'
            color='#F6D060'
            size={20}/>
          <Text className="color-[#677294] text-sm pl-0.5 mt-[2px]">4.8</Text>
          <Icon 
            className="rounded-full pl-2"
            name='person'
            type='material'
            color='#02B6E8'
            size={20}/>
          <Text className="color-[#677294] text-sm pl-0.5 mt-[2px]">150 Pacientes Atendidos</Text>
          </View>

          <View className="items-center justify-center absolute mx-5 pt-36 ">
          <Text className="color-[#02B6E8] text-xl font-extrabold"> $65.000 COP</Text>
          </View>

        <TouchableOpacity className='bg-sky-500 justify-center mt-5 px-16 py-2 rounded-xl items-center mb-3 mr-2 ml-2'>
          <Text className='text-white text-lg font-semibold'>Agendar</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
    </ScrollView>
  )
}

export default FavsScreen

/*
<div style="width: 100%; height: 100%; position: relative; background: white">
    <div style="width: 340px; height: 713px; left: 12px; top: 83px; position: absolute">
        <div style="width: 335px; height: 170px; left: 5px; top: 0px; position: absolute">
            <div style="width: 335px; height: 170px; left: 0px; top: 0px; position: absolute; background: white; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08); border-radius: 8px"></div>
            <div style="width: 15px; height: 12px; left: 300px; top: 27px; position: absolute; background: #FF0000"></div>
            <div style="width: 176px; height: 34px; left: 126px; top: 119px; position: absolute">
                <div style="width: 176px; height: 34px; left: 0px; top: 0px; position: absolute; background: #02B6E8; border-radius: 4px"></div>
                <div style="width: 51px; left: 63px; top: 10px; position: absolute; color: white; font-size: 12px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Agendar</div>
            </div>
            <div style="left: 26px; top: 128px; position: absolute; color: #02B6E8; font-size: 13px; font-family: Rubik; font-weight: 500; word-wrap: break-word">$65.000 COP</div>
            <img style="width: 92px; height: 87px; left: 20px; top: 18px; position: absolute; border-radius: 4px" src="https://via.placeholder.com/92x87" />
            <div style="width: 189px; height: 78px; left: 126px; top: 22px; position: absolute">
                <div style="width: 140px; height: 15px; left: 49px; top: 63px; position: absolute">
                    <div style="width: 140px; height: 15px; left: 0px; top: 0px; position: absolute">
                        <div style="left: 18px; top: 1px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">69 Pacientes Atendidos</div>
                        <div style="width: 15px; height: 15px; left: 0px; top: 0px; position: absolute">
                            <div style="width: 8.33px; height: 8.33px; left: 3.33px; top: 0px; position: absolute; background: #02B6E8"></div>
                            <div style="width: 15px; height: 5.83px; left: 0px; top: 9.17px; position: absolute; background: #02B6E8"></div>
                        </div>
                    </div>
                </div>
                <div style="width: 148px; height: 57px; left: 0px; top: 0px; position: absolute">
                    <div style="left: 0px; top: 22px; position: absolute; color: #03B8EA; font-size: 13px; font-family: PT Sans; font-weight: 400; word-wrap: break-word">Medica General</div>
                    <div style="left: 0px; top: 43px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">7 años de experiencia</div>
                    <div style="left: 0px; top: 0px; position: absolute; color: #333333; font-size: 18px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Dra. Laura Gomez</div>
                </div>
                <div style="width: 17px; height: 14px; left: 20px; top: 64px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">5.0</div>
                <div style="width: 15px; height: 15px; left: 0px; top: 63px; position: absolute; background: #F6D060"></div>
            </div>
        </div>
        <div style="width: 335px; height: 170px; left: 0px; top: 181px; position: absolute">
            <div style="width: 335px; height: 170px; left: 0px; top: 0px; position: absolute; background: white; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08); border-radius: 8px"></div>
            <div style="width: 15px; height: 12px; left: 300px; top: 27px; position: absolute; background: #FF0000"></div>
            <div style="width: 176px; height: 34px; left: 126px; top: 119px; position: absolute">
                <div style="width: 176px; height: 34px; left: 0px; top: 0px; position: absolute; background: #02B6E8; border-radius: 4px"></div>
                <div style="width: 51px; left: 63px; top: 10px; position: absolute; color: white; font-size: 12px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Agendar</div>
            </div>
            <div style="left: 26px; top: 128px; position: absolute; color: #02B6E8; font-size: 13px; font-family: Rubik; font-weight: 500; word-wrap: break-word">$65.000 COP</div>
            <img style="width: 92px; height: 87px; left: 20px; top: 18px; position: absolute; border-radius: 4px" src="https://via.placeholder.com/92x87" />
            <div style="width: 189px; height: 78px; left: 126px; top: 22px; position: absolute">
                <div style="width: 140px; height: 15px; left: 49px; top: 63px; position: absolute">
                    <div style="width: 140px; height: 15px; left: 0px; top: 0px; position: absolute">
                        <div style="left: 18px; top: 1px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">69 Pacientes Atendidos</div>
                        <div style="width: 15px; height: 15px; left: 0px; top: 0px; position: absolute">
                            <div style="width: 8.33px; height: 8.33px; left: 3.33px; top: 0px; position: absolute; background: #02B6E8"></div>
                            <div style="width: 15px; height: 5.83px; left: 0px; top: 9.17px; position: absolute; background: #02B6E8"></div>
                        </div>
                    </div>
                </div>
                <div style="width: 148px; height: 57px; left: 0px; top: 0px; position: absolute">
                    <div style="left: 0px; top: 22px; position: absolute; color: #03B8EA; font-size: 13px; font-family: PT Sans; font-weight: 400; word-wrap: break-word">Medica General</div>
                    <div style="left: 0px; top: 43px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">7 años de experiencia</div>
                    <div style="left: 0px; top: 0px; position: absolute; color: #333333; font-size: 18px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Dra. Laura Gomez</div>
                </div>
                <div style="width: 17px; height: 14px; left: 20px; top: 64px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">5.0</div>
                <div style="width: 15px; height: 15px; left: 0px; top: 63px; position: absolute; background: #F6D060"></div>
            </div>
        </div>
        <div style="width: 335px; height: 170px; left: 0px; top: 362px; position: absolute">
            <div style="width: 335px; height: 170px; left: 0px; top: 0px; position: absolute; background: white; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08); border-radius: 8px"></div>
            <div style="width: 176px; height: 34px; left: 126px; top: 119px; position: absolute">
                <div style="width: 176px; height: 34px; left: 0px; top: 0px; position: absolute; background: #02B6E8; border-radius: 4px"></div>
                <div style="width: 51px; left: 63px; top: 10px; position: absolute; color: white; font-size: 12px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Agendar</div>
            </div>
            <div style="left: 26px; top: 128px; position: absolute; color: #02B6E8; font-size: 13px; font-family: Rubik; font-weight: 500; word-wrap: break-word">$65.000 COP</div>
            <img style="width: 92px; height: 87px; left: 20px; top: 18px; position: absolute; border-radius: 4px" src="https://via.placeholder.com/92x87" />
            <div style="width: 189px; height: 78px; left: 126px; top: 22px; position: absolute">
                <div style="width: 140px; height: 15px; left: 49px; top: 63px; position: absolute">
                    <div style="width: 140px; height: 15px; left: 0px; top: 0px; position: absolute">
                        <div style="left: 18px; top: 1px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">69 Pacientes Atendidos</div>
                        <div style="width: 15px; height: 15px; left: 0px; top: 0px; position: absolute">
                            <div style="width: 8.33px; height: 8.33px; left: 3.33px; top: 0px; position: absolute; background: #02B6E8"></div>
                            <div style="width: 15px; height: 5.83px; left: 0px; top: 9.17px; position: absolute; background: #02B6E8"></div>
                        </div>
                    </div>
                </div>
                <div style="width: 148px; height: 57px; left: 0px; top: 0px; position: absolute">
                    <div style="left: 0px; top: 22px; position: absolute; color: #03B8EA; font-size: 13px; font-family: PT Sans; font-weight: 400; word-wrap: break-word">Medica General</div>
                    <div style="left: 0px; top: 43px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">7 años de experiencia</div>
                    <div style="left: 0px; top: 0px; position: absolute; color: #333333; font-size: 18px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Dra. Laura Gomez</div>
                </div>
                <div style="width: 17px; height: 14px; left: 20px; top: 64px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">5.0</div>
                <div style="width: 15px; height: 15px; left: 0px; top: 63px; position: absolute; background: #F6D060"></div>
            </div>
            <div style="width: 15px; height: 12px; left: 300px; top: 27px; position: absolute; background: #FF0000"></div>
        </div>
        <div style="width: 335px; height: 170px; left: 0px; top: 543px; position: absolute">
            <div style="width: 335px; height: 170px; left: 0px; top: 0px; position: absolute; background: white; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08); border-radius: 8px"></div>
            <div style="width: 176px; height: 34px; left: 126px; top: 119px; position: absolute">
                <div style="width: 176px; height: 34px; left: 0px; top: 0px; position: absolute; background: #02B6E8; border-radius: 4px"></div>
                <div style="width: 51px; left: 63px; top: 10px; position: absolute; color: white; font-size: 12px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Agendar</div>
            </div>
            <div style="left: 26px; top: 128px; position: absolute; color: #02B6E8; font-size: 13px; font-family: Rubik; font-weight: 500; word-wrap: break-word">$65.000 COP</div>
            <img style="width: 92px; height: 87px; left: 20px; top: 18px; position: absolute; border-radius: 4px" src="https://via.placeholder.com/92x87" />
            <div style="width: 189px; height: 78px; left: 126px; top: 22px; position: absolute">
                <div style="width: 140px; height: 15px; left: 49px; top: 63px; position: absolute">
                    <div style="width: 140px; height: 15px; left: 0px; top: 0px; position: absolute">
                        <div style="left: 18px; top: 1px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">69 Pacientes Atendidos</div>
                        <div style="width: 15px; height: 15px; left: 0px; top: 0px; position: absolute">
                            <div style="width: 8.33px; height: 8.33px; left: 3.33px; top: 0px; position: absolute; background: #02B6E8"></div>
                            <div style="width: 15px; height: 5.83px; left: 0px; top: 9.17px; position: absolute; background: #02B6E8"></div>
                        </div>
                    </div>
                </div>
                <div style="width: 148px; height: 57px; left: 0px; top: 0px; position: absolute">
                    <div style="left: 0px; top: 22px; position: absolute; color: #03B8EA; font-size: 13px; font-family: PT Sans; font-weight: 400; word-wrap: break-word">Medica General</div>
                    <div style="left: 0px; top: 43px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">7 años de experiencia</div>
                    <div style="left: 0px; top: 0px; position: absolute; color: #333333; font-size: 18px; font-family: Rubik; font-weight: 500; word-wrap: break-word">Dra. Laura Gomez</div>
                </div>
                <div style="width: 17px; height: 14px; left: 20px; top: 64px; position: absolute; color: #677294; font-size: 12px; font-family: Rubik; font-weight: 300; word-wrap: break-word">5.0</div>
                <div style="width: 15px; height: 15px; left: 0px; top: 63px; position: absolute; background: #F6D060"></div>
            </div>
            <div style="width: 15px; height: 12px; left: 300px; top: 27px; position: absolute; background: #FF0000"></div>
        </div>
    </div>
    <div style="width: 335px; height: 73px; left: 26px; top: 20px; position: absolute">
        <div style="width: 335px; height: 24px; left: 0px; top: 0px; position: absolute; color: #02ACDC; font-size: 20px; font-family: Rubik; font-weight: 700; word-wrap: break-word">Elige tu mejor opción</div>
        <div style="width: 326px; height: 43px; left: 0px; top: 30px; position: absolute; color: #1C4D8D; font-size: 15px; font-family: Rubik; font-weight: 300; word-wrap: break-word">Encontramos los siguientes médicos para ti </div>
    </div>
</div>
*/

