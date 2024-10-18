import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Toast from 'react-native-toast-message'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({})