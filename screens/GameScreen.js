import {Alert, Text, View } from 'react-native'
import React, {useEffect, useState } from 'react'
import Layout from './Layout'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'



function generateRandomNumberBetween(min, max,exclude){
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if(rndNum === exclude){
    return generateRandomNumberBetween(min, max, exclude);
  }else{
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({navigation,route}) => {

 
  let userNumber = route.params.number

  const initialGuess = generateRandomNumberBetween(1,100,userNumber)
  const [currentGuess, setcurrentGuess] = useState(initialGuess)


  function nextRandomNumber(direction){

    if((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber) ){
      Alert.alert("Don't lie","you are not telling me the truth",[{text:"try again",style:"cancel",onPress:()=>{navigation.replace("GameStartScreen")}}])
    }else if(direction === "lower"){
       maxBoundary = currentGuess;
    }else{
       minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
    setcurrentGuess(newRndNumber)
  }


  useEffect(() => {
    if(currentGuess == userNumber){
      navigation.push("GameOverScreen")
      minBoundary = 1
      maxBoundary = 100

    
    }
  }, [currentGuess])
  

  

  return (
    <Layout>
      <Title>Opponent's Guess</Title>
      <NumberContainer >{currentGuess}</NumberContainer>
      <View className="w-full ">
        <Text className="text-center text-{32px} my-4">Higher or Lower ?</Text>
        <View className="flex-row ">
          <View className="flex-1">
            <PrimaryButton onPress={nextRandomNumber.bind(this,"lower")} >Lower</PrimaryButton>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={nextRandomNumber.bind(this,"higher")} >Higher</PrimaryButton>
          </View>
        </View>
      </View>
    </Layout>
  )
}

export default GameScreen
