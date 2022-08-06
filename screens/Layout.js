import { ImageBackground, Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Layout = ({children}) => {
  return (
  
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <LinearGradient colors={['#3b021f','#ddb52f']} className="flex-1">
        <ImageBackground imageStyle={styles.opacity} className="flex-1"  source={require('../assets/images/background.jpg')} resizeMode="cover">
          <SafeAreaView className={"flex-1 p-16"}>
            {children}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </TouchableWithoutFeedback>
  
  )
}

export default Layout

const styles = StyleSheet.create({
  opacity:{
    opacity:0.25
  }
})