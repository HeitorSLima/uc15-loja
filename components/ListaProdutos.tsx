import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {produtos} from '../data/produtos'
import Card from './Card'

const ListaProdutos = () => {
  return (
    <View>
      <FlatList
        // de onde vêm os dados
        data={produtos}
        // identificador, tem que ser string e ninguém sabe o porquê
        keyExtractor={(prod) => prod.id}
        // como esse componente vai ser mostrado na tela 
        renderItem={({item}) => (
            <View>
                <Card/>
            </View>
        )}
      />
    </View>
  )
}

export default ListaProdutos

const styles = StyleSheet.create({})