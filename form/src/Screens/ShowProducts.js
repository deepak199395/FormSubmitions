import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const ShowProducts = () => {
const products= useSelector(state=>state.user)
console.log(products);
  return (
    <View style={styles.container}>
    <FlatList data={products.data} renderItem={({item,index})=>{
     return(
      <View style={styles.flatlist}>
      <Text>{item.productName}</Text>
      <Text>{item.price}</Text>
      <Text>{item.quentity}</Text>
      <Text>{item.descriptions}</Text>
      <Text>{item.model}</Text>
      <Text>{item.lauch}</Text>
      <Text>{item.year}</Text>
      </View>
     )
    }}
    
    />
    </View>
  )
}

export default ShowProducts

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})