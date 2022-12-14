import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrimaryButton = ({children,onPress}) => {
  return (
    <View className="bg-[#cc317ca1]  rounded-[28px] m-[4px] overflow-hidden">
        <Pressable android_ripple={{color:"#a05479c7"}} className="py-[8px] px-[16px]" onPress={()=>onPress()}>
            <Text className="text-white text-center">{children}</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})