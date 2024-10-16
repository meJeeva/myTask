import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { CommonStyle } from '../utils/CommonStyle'
import SearchContainer from '../components/SearchContainer'

const CustomerListScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={{
            flex: 1,
        }}>
            <Header showBackButton={true} navigation={navigation} />
            <SearchContainer />
            <View style={CommonStyle.dataContainer}>
                <Text style={CommonStyle.title}>Customer Info</Text>
            </View>
        </View>
    )
}

export default CustomerListScreen

const styles = StyleSheet.create({})