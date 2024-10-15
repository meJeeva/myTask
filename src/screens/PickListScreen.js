import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const PickListScreen = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <Header />
            <SearchBar />
            <Text>Pick List screen</Text>
        </View>
    )
}

const SearchBar = () => {
    return (
        <View>
            <Text>Search bar</Text>
        </View>
    )
}

export default PickListScreen

const styles = StyleSheet.create({})