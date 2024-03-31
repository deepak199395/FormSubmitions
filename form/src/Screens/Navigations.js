import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './Form';
import ShowOnform from './ShowOnform';
import Home from './Home';
import ShowProduct from './ShowProduct';
import ShowProducts from './ShowProducts';
const Navigations = () => {
    const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName='Home'>
   <Stack.Screen name='Home' component={Home}/>
   <Stack.Screen name='Form' component={Form} options={{headerShown:false}}/>
   <Stack.Screen name='ShowOnform' component={ShowOnform} />
   <Stack.Screen name='ShowProduct' component={ShowProduct}/>
   <Stack.Screen name='ShowProducts' component={ShowProducts}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigations

const styles = StyleSheet.create({})