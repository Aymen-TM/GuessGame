import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberContainer = ({children}) => {
  return (
    <View>
      <Text className=" p-6 text-center rounded-lg text-[32px] text-[#ddb52f] font-bold border-4 mt-4" style={styles.border}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    border:{
        borderColor: '#ddb52f',
    }
})