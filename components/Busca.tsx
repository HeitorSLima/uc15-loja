import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
            <Image source={{uri: item.imagem}} style={styles.img}></Image>
            <Text style={styles.nomeProduto}>{item.titulo}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
      )}
      />
    </View>
  )
}

export default Busca

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f3f3',
    height: '100%'
  },
  input:{
    backgroundColor: '#fcfcfc',
    color: 'black',
    margin: 6,
    padding: 8,
    borderRadius: 8,
    borderColor: '#aeaeae',
    borderWidth: 2
  },
  card:{
    margin: 6,
    backgroundColor: '#fcfcfc',
    borderRadius: 12,
    padding: 8,
    gap: 4,
    borderColor: '#cccccc',
    borderWidth: 2
  },
  nomeProduto:{
    color: 'black',
    fontWeight: 800,
    fontSize: 18
  },
  preco:{
    color: '#009900',
    fontSize: 16,
    fontWeight: 700
  },
  img:{
    width: '100%',
    height: 300,
    borderRadius: 7,
    borderWidth: 2
  },
  btn:{
    backgroundColor: '#0066ff',
    padding: 4,
    alignItems: 'center',
    borderRadius: 7
  }
})