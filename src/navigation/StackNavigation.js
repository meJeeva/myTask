import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PickListScreen from '../screens/PickListScreen';
import CustomerListScreen from '../screens/CustomerListScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={PickListScreen} name='PickListScreen'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen component={CustomerListScreen} name='CustomerListScreen'
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})