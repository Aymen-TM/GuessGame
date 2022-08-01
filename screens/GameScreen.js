import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const GameScreen = ({navigation}) => {



  return (
    <View>
      <Text>GameScreen</Text>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });