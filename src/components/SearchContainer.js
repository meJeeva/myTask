import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, DIM, Images } from '../utils/Constant'

const SearchContainer = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: DIM.deviceHeight * 0.02,
        }}>
            <View style={{
                borderColor: Colors.lightGray,
                borderRadius: 8,
                elevation: 5,
                backgroundColor: Colors.white,
                flexDirection: 'row',
                alignItems: 'center',
                flex: 0.83,
            }}>
                <TouchableOpacity>
                    <Image
                        source={Images.searchIcon}
                        style={{
                            height: DIM.deviceHeight * 0.03,
                            width: DIM.deviceHeight * 0.03,
                            tintColor: Colors.gray,
                            marginHorizontal: DIM.deviceWidth * 0.02
                        }}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{
                        flex: 1
                    }}
                    placeholder='Search...'
                    placeholderTextColor={Colors.gray}
                />
            </View>
            <View style={{
                flex: 0.1
            }}>
                <TouchableOpacity style={{
                }}>
                    <Image
                        source={Images.filterIcon}
                        style={{
                            height: DIM.deviceHeight * 0.05,
                            width: DIM.deviceHeight * 0.05,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchContainer

const styles = StyleSheet.create({})