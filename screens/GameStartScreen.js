import {Text, TextInput, View,StyleSheet, TouchableWithoutFeedback, Keyboard, ImageBackground, Alert } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants/Colors'

import Layout from './Layout'

const GameStartScreen = ({navigation}) => {


  // stats
  const [number, setNumber] = useState("")
  // stats
 
  
  // functions
  function resetInputHnadler(){
    setNumber("")
  }

  function confirmInputeHandler(){

    let guessNumber = parseInt(number)
    if(isNaN(guessNumber) || guessNumber < 0 || guessNumber >99){
        Alert.alert('Invalide Number','number must be between 0 ans 99',[{text:'OK',style:"destructive",onPress:()=>resetInputHnadler()}])
    }else{
      navigation.navigate("GameScreen",{
        number: number
      })
    }
  }
  // functions


    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
        gestureEnabled:true,
      })
    
    }, [])

















  return (
    <Layout>
      <View className=" flex-1">
        <View style={styles.shadow} className="bg-[#72063c] p-[16px] mx-[24px] mt-[100px] rounded-[8px] items-center">
          <Text className="text-[#deac73] font-bold text-xl">Enter a Number</Text>
          <TextInput value={number} onChangeText={(text)=>setNumber(text)} maxLength={2} keyboardType={"number-pad"} className="my-[8px] text-center text-[#ddb52f] border-b-2 border-b-[#ddb52f] h-[50px] w-[50px] text-[32px] font-bold"  />
            <View className="flex-row ">
              <View className="flex-1">
                <PrimaryButton navigation={navigation} onPress={resetInputHnadler} >Reset</PrimaryButton>
                  </View>
                    <View className="flex-1">
                        <PrimaryButton onPress={confirmInputeHandler} >Confirm</PrimaryButton>
                    </View>
                  </View>
              </View>
          </View>
    </Layout>
  )
}
const styles = StyleSheet.create({
  opacity:{
    opacity:0.25
  }
});

export default GameStartScreen

