import {SafeAreaView, Text, TextInput, View,StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import PrimaryButton from '../components/PrimaryButton'

const GameStartScreen = ({navigation}) => {

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    
    }, [])

  return (
    <SafeAreaView>
        <View className=" flex-1  ">
            <View className="border-2 border-white  ">
                <Text className="font-bold">Guess My Number</Text>
            </View>
            <View style={styles.shadow} className="bg-[#72063c] p-[16px] mx-[24px] mt-[100px] rounded-[8px] items-center">
                <Text className="text-[#deac73] font-bold text-xl">Enter a Number</Text>
                <TextInput maxLength={2} keyboardType={"number-pad"} className="my-[8px] text-center text-[#ddb52f] border-b-2 border-b-[#ddb52f] h-[50px] w-[50px] text-[32px] font-bold"  />
                <View className="flex-row ">
                    <View className="flex-1">
                        <PrimaryButton>Reset</PrimaryButton>
                    </View>
                    <View className="flex-1">
                        <PrimaryButton>Guess</PrimaryButton>
                    </View>
                </View>
            </View>

        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    shadow:{
        elevation:8,
        shadowColor:'black',
        shadowOffset: {width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.25
    },
  });

export default GameStartScreen

