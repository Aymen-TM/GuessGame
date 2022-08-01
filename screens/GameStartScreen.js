import {SafeAreaView, Text, TextInput, View,StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { LinearGradient } from 'expo-linear-gradient'

const GameStartScreen = ({navigation}) => {

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
        gestureEnabled:true,
      })
    
    }, [])

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <LinearGradient colors={['#3b021f','#ddb52f']} className="flex-1">
        <ImageBackground imageStyle={styles.opacity} className="flex-1"  source={require('../assets/images/background.jpg')} resizeMode="cover">
          <View className=" flex-1">
              <View style={styles.shadow} className="bg-[#72063c] p-[16px] mx-[24px] mt-[100px] rounded-[8px] items-center">
                  <Text className="text-[#deac73] font-bold text-xl">Enter a Number</Text>
                  <TextInput maxLength={2} keyboardType={"number-pad"} className="my-[8px] text-center text-[#ddb52f] border-b-2 border-b-[#ddb52f] h-[50px] w-[50px] text-[32px] font-bold"  />
                  <View className="flex-row ">
                      <View className="flex-1">
                          <PrimaryButton navigation={navigation}>Reset</PrimaryButton>
                      </View>
                      <View className="flex-1">
                          <PrimaryButton navigation={navigation}>Guess</PrimaryButton>
                      </View>
                  </View>
              </View>
          </View>
        </ImageBackground>
        </LinearGradient>
    </TouchableWithoutFeedback>

  )
}
const styles = StyleSheet.create({
  opacity:{
    opacity:0.25
  }
  });

export default GameStartScreen

