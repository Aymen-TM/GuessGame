import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from './Layout'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

const GameOverScreen = ({navigation}) => {

  function restartGame(){
    navigation.replace("GameStartScreen")
  }


  return (
    <Layout>
      <View className="flex-1 justify-center items-center">
        <Title>GameOver</Title>
        <Text className="text-2xl text-white">My guess is correct</Text>
        <PrimaryButton onPress={restartGame}>Restart The Game</PrimaryButton>
      </View>
    </Layout>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });