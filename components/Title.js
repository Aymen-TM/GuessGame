import {StyleSheet, Text } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
    <Text className="font-bold text-{#ddb52f} text-2xl px-6 py-3 border-2 text-center" style={styles.border}>{children}</Text>
  )
}

export default Title


const styles = StyleSheet.create({
  border:{
      borderColor: '#ddb52f',
  }
})