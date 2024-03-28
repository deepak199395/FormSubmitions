import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigations from './src/Screens/Navigations'
import { Provider } from 'react-redux'
import Mystore from './src/Redux/MyStore'

const App = () => {
  return (
    <Provider store={Mystore}>
    <Navigations/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})