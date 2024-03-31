import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addProduct } from '../Redux/UserSlice';
import { useNavigation } from '@react-navigation/native';
const ShowProduct = () => {
    const [productName,setProductsName]=useState("")
    const [price,setPrice]=useState("")
    const [quentity,setQuentity]=useState("")
    const [descriptions,setDescriptions]=useState("")
    const [model,setModel]=useState("")
    const [lauch,setLauch]=useState("")
    const [year,setYear]=useState("")
   
    const dispatch=useDispatch()
    const navigation=useNavigation()
    
  return (
    <View style={{flex:1,justifyContent:"center"}}>
    <Text style={{alignSelf:"center",fontSize:30, fontWeight:"700"}}>Add products</Text>
    <ScrollView>
    <View style={styles.container}>

    <TextInput style={styles.index}
     placeholder='Enter Products Name'
     value={productName}
     onChangeText={txt=>setProductsName(txt)}
     />


    <TextInput style={styles.index}
     placeholder='Enter Products Price'
     value={price}
     onChangeText={txt=>setPrice(txt)}
     />


    <TextInput style={styles.index}
     placeholder='Enter products quentity'
     value={quentity}
     onChangeText={txt=>setQuentity(txt)}
     />


    <TextInput style={styles.index}
     placeholder='Enter products descriptions'
     value={descriptions}
     onChangeText={txt=>setDescriptions(txt)}
     />


    <TextInput style={styles.index}
     placeholder='Enter products avalablibly'
     value={model}
     onChangeText={txt=>setModel(txt)}
     />


    <TextInput style={styles.index}
     placeholder='Enter products models'
     value={lauch}
     onChangeText={txt=>setLauch(txt)}
     />


    <TextInput style={styles.index}
     placeholder='Enter products year lauch'
     value={year}
     onChangeText={txt=>setYear(txt)}
     />


    <TextInput style={styles.index} placeholder='Enter products exprire year '/>


  <TouchableOpacity style={styles.btn} 
  onPress={()=>{
    dispatch(addProduct({productName,price,quentity,descriptions,model,lauch,year}))
    navigation.navigate('ShowProducts')
  }}
  >
  <Text style={{alignSelf:"center",color:"white",fontSize:20}}>ADD</Text>
  </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  )
}

export default ShowProduct

const styles = StyleSheet.create({
    container:{
    },
    index:{
        borderWidth:1,
        width:"85%",
        alignSelf:"center",
        marginTop:10,
        borderRadius:10,
        height:40,
        paddingLeft:30  ,
              
    },
    btn:{
        width:"85%",
        alignSelf:"center",
        textAlign:"center",
        marginTop:20,
        justifyContent:"center",
        borderColor:"green",
        borderWidth:1,
        height:40,
        backgroundColor:"green",
        borderRadius:10

    }
})