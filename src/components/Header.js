import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, DIM, Images } from '../utils/Constant'

const Header = ({showBackButton, navigation, pickScreen}) => {
  return (
    <View
      style={{
        height: DIM.deviceHeight * 0.065,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        padding: DIM.deviceHeight * 0.02,
      }}>
      {showBackButton ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() =>
              pickScreen
                ? navigation.replace('PickListScreen')
                : navigation.goBack()
            }>
            <Image
              source={Images.backIcon}
              style={{
                height: DIM.deviceHeight * 0.03,
                width: DIM.deviceHeight * 0.03,
                resizeMode: 'contain',
                tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors.white,
              padding: DIM.deviceHeight * 0.003,
              borderRadius: 99,
            }}>
            <Image
              source={Images.userIcon}
              style={{
                height: DIM.deviceHeight * 0.03,
                width: DIM.deviceHeight * 0.03,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: Colors.white,
            padding: DIM.deviceHeight * 0.003,
            borderRadius: 99,
            alignSelf: 'flex-end',
          }}>
          <Image
            source={Images.userIcon}
            style={{
              height: DIM.deviceHeight * 0.03,
              width: DIM.deviceHeight * 0.03,
              resizeMode: 'contain',
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Header

const styles = StyleSheet.create({})