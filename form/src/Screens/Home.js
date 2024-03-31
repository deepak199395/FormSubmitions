import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const Home = () => {
   const  navigation= useNavigation()

   const users= useSelector(state=>state.user)
   console.log(users);

 
  return (
    <View style={styles.container}>

   <FlatList data={users.data} renderItem={({item,index})=>{
    return(
      <View style={styles.flatlist}>
       <Text>{item.name}</Text>
       <Text>{item.email}</Text>
       <Text>{item.phone}</Text>
       <Text>{item.address}</Text>
       {users.image && <Image source={{ uri: users.image }} style={{ width: 50, height: 50 }} />}
      </View>
    )
   }}/>
  
    <View style={styles.footer}>
    <TouchableOpacity onPress={()=>navigation.navigate('ShowOnform')}>
    <Text style={styles.text}>Add Products </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('ShowProduct')}>
    <Text style={styles.text}>Add Products </Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    footer:{
     flexDirection:"row",
     position:"absolute",
     bottom:0,
     width:"99%",
     borderWidth:1,
     height:90,
     justifyContent:"space-between",
     alignItems:"center",
     alignSelf:"center",
     backgroundColor:"black",
    },
    text:{
     color:"white",
     padding:10,
     fontSize:20,
     fontWeight:"900",
     borderWidth:1,
     borderColor:"white",
     borderRadius:5
    },
    flatlist:{
      width:"90%",
      height:270,
      borderWidth:1,
      alignSelf:"center"
    }
})