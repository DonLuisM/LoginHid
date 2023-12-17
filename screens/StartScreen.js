
import { View, Text, ScrollView, 
  FlatList,  } from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
    <ScrollView horizontal={true}>
    <View>
      <Text> StartScreen</Text>
    </View>
    </ScrollView>
  )
}

// SCROLL VIEW HORIZONTAL, CON ARREGLOS DE IMÁGENES
export default StartScreen


/*
import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function MyComponent(props) {
  return (
    <View className="bg-white flex max-w-[480px] w-full flex-col justify-center items-stretch mx-auto">
      <View className="flex-col overflow-hidden relative flex aspect-[0.46208530805687204] w-full pt-7 pb-12 px-5">
        <View
          loading="lazy"
          srcSet="..."
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <View className="relative self-stretch flex w-full justify-between gap-5 items-start">
          <View className="text-neutral-800 text-center text-sm font-bold tracking-tight">
            <Text>9:41</Text>
          </View>
          <View className="self-stretch flex items-stretch justify-between gap-1.5">
            <View
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0112e62ac9ea7dd899481318eabf3a25e342abc6a7d99057bfeb65ecd219604?"
              className="aspect-[1.6] object-contain object-center w-4 fill-neutral-800 overflow-hidden shrink-0 max-w-full self-start"
            />
            <View
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3c29e457ae94c456e6c22d118c23fd8c0fdc3486b300775c96ec9bb30e0c3e?"
              className="aspect-[1.4] object-contain object-center w-3.5 fill-neutral-800 overflow-hidden shrink-0 max-w-full self-start"
            />
            <View
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c90dc739b87ce6b98da970eecf1280ae34863435db1911287af274d7d316642?"
              className="aspect-[2.09] object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
            />
          </View>
        </View>
        <View className="relative text-neutral-50 text-center text-3xl font-medium tracking-tight mt-[560px]">
          <Text>
            Dile Adiós a las <br />
            Esperas
          </Text>
        </View>
        <View className="relative text-white text-2xl font-semibold bg-sky-500 self-center w-full max-w-[295px] justify-center mt-3 px-16 py-5 rounded-xl items-start">
          <Text>Descubre Más</Text>
        </View>
        <View className="relative text-cyan-500 text-center text-xl leading-8 tracking-tight self-center whitespace-nowrap mt-6 mb-6">
          <Text>Omitir</Text>
        </View>
      </View>
    </View>
  );
}
*/
