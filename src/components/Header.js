import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DIM } from '../utils/Constant'

const Header = () => {
    return (
        <View style={{
            height: DIM.deviceHeight * 0.01,
            backgroundColor: "blue"
        }}>
            <Text>Header</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})