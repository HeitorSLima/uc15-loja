import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { produtos } from '../data/produtos'

const Card = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: ''}} style={styles.img}></Image>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#efefef',
        borderColor: '#acacac',
        borderWidth: 2,
        width: 360,
        height: 320
    },
    img: {
        width: 360,
        height: 180
    }
})