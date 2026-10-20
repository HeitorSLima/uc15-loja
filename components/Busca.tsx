import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { produtos } from '../data/produtos'

const Busca = () => {
    const [termo, setTermo] = useState('')

    const produtosFiltrados = produtos.filter((produto) => produto.titulo.toLowerCase().includes(termo.toLowerCase()))

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Digite o nome do produto...' value={termo} onChangeText={setTermo}/>

      <FlatList data={produtosFiltrados} keyExtractor={(produto) => produto.id} renderItem={({item}) => (
        <View style={styles.card}>
            <Text style={styles.nomeProduto}>{item.titulo}</Text>
            <Text style={styles.preco}> R$ {item.preco.toFixed(2)}</Text>
            {/* TODO terminar o resto dessa desgraça que eu chamo de código */}
        </View>
      )}
      />
    </View>
  )
}

export default Busca

const styles = StyleSheet.create({})