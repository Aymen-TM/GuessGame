import {StyleSheet, Text } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
    <Text className="font-bold text-white border-white text-2xl px-6 py-3 border-4 text-center">{children}</Text>
  )
}

export default Title

