
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import LoginScreen from '../screens/LoginScreen';

const CodeSendScreen = () => {
  const navigation=useNavigation();

  const handleChangePassword = () => {
    navigation.navigate("NewPassword")
    }

  const [errors, changeErrors] = useState({
      codigo: "",
    })
  const [value, setValue] = useState("")

  const ref = useBlurOnFulfill({ value, cellCount: 4 })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue })

  return (
    <View className="flex-1 justify-end items-center">
      <View>
        <LoginScreen
        />
      </View>
      <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70" />
        <View className="h-[350px] min-w-full bg-white p-5 rounded-xl">
          <Text className="text-black text-2xl font-medium tracking-tight max-w-[251px] mt-8 mx-5">Ingresa el Código</Text>
          <Text className="text-slate-500 text-sm leading-6 tracking-tight max-w-[270px] mt-3 mx-5">
            Ingresa el código de 4 dígitos que recibiste en tu correo.
          </Text>
          <View className="w-auto justify-between items-center">
          <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                cellCount={4}
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    className={` w-[55] h-[55] text-3xl self-stretch text-sky-400 border mt-5 mx-5 px-3 py-2.5 text-center rounded-xl border-solid
                     border-slate-400 ${errors.codigo && "border-[#FA6972]"} border-opacity-10`}
                    key={index} onLayout={getCellOnLayoutHandler(index)}> {symbol || (isFocused ? <Cursor /> : null)} </Text>
                )}
              />
          <Text className={` w-screen pl-6 pr-4 font-medium text-sm text-transparent text-center mt-3 
            ${errors.codigo && "text-[#FA6972]"} `}>{errors.codigo} y {value}</Text>
          </View>

          <View className="items-center justify-center">
          <TouchableOpacity 
            onPress={handleChangePassword}
            className="  tracking-tight whitespace-nowrap bg-sky-500 max-w-[306px] px-16 py-3 rounded-2xl mt-6">
            <Text className="text-white font-medium text-lg items-center justify-center">Continuar</Text>
          </TouchableOpacity>
            </View>
          </View>
      </View>

    );
};

export default CodeSendScreen



