import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Layout from './Layout'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'

const GameScreen = ({navigation,route}) => {

  const initialGuess = generateRandomNumberBetween(1,100,route.params.number)
  const [currentGuess, setcurrentGuess] = useState(initialGuess)






  function generateRandomNumberBetween(min, max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if(rndNum === exclude){
      return generateRandomNumberBetween(min, max, exclude);
    }else{
      return rndNum;
    }
  }

  

  return (
    <Layout>
      <Title>Opponent's Guess</Title>
      <NumberContainer >{currentGuess}</NumberContainer>
    </Layout>
  )
}

export default GameScreen
