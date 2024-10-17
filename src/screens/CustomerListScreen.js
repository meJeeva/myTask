import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CommonStyle } from '../utils/CommonStyle'
import SearchContainer from '../components/SearchContainer'
import { DIM } from '../utils/Constant'
import { statusColor } from '../utils/utilFunctions'

const CustomerListScreen = () => {

    const navigation = useNavigation()
    const route = useRoute();
    let customerListData = route?.params?.data?.customers || []

    return (
        <View style={{
            flex: 1,
        }}>
            <Header showBackButton={true} navigation={navigation} />
            <SearchContainer />
            <View style={CommonStyle.dataContainer}>
                <Text style={CommonStyle.title}>Customer Info</Text>

                <FlatList
                    data={customerListData}
                    renderItem={({ item, i }) => <RenderCustomerList item={item} key={i} navigation={navigation}
                    />
                    }
                    style={{
                        marginTop: DIM.deviceHeight * 0.02
                    }}
                />
            </View>
        </View>
    )
}

export default CustomerListScreen

const RenderCustomerList = ({ item, key, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen', {
            customerData: item
        })} key={key}
            style={[CommonStyle.flatListContainer, {
                flexDirection: 'column'
            }]}>
            <Text style={{
                fontSize: DIM.deviceHeight * 0.019,
                fontWeight: 'bold'
            }}>{item.name}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text>Invoice Count : 0/3</Text>
                <Text style={[CommonStyle.status, {
                    borderColor: statusColor(item?.status || ""),
                    color: statusColor(item?.status || ""),
                }]}>
                    {item.status}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})