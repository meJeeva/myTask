import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CommonStyle } from '../utils/CommonStyle'
import SearchContainer from '../components/SearchContainer'
import { Colors, DIM } from '../utils/Constant'
import { statusColor } from '../utils/utilFunctions'

const ProductListScreen = () => {
    const [selectedTab, setSelectedTab] = useState('1');

    const navigation = useNavigation()
    const route = useRoute();
    let productListData = route?.params?.customerData?.products || [];

    const tabOptions = [
        {
            title: "Delivery",
            value: '1'
        },
        {
            title: "Collections",
            value: "2"
        }
    ];

    return (
        <View style={{
            flex: 1,
        }}>
            <Header showBackButton={true} navigation={navigation} />
            <View style={{
                marginTop: DIM.deviceHeight * 0.01,
                marginHorizontal: DIM.deviceHeight * 0.01
            }}>
                <FlatList
                    data={tabOptions}
                    renderItem={({ item, i }) => <TabOptions item={item} key={i} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />}
                    style={{
                        backgroundColor: Colors.lightGray,
                        padding: DIM.deviceHeight * 0.01,
                        borderRadius: 99,
                    }}
                    horizontal
                />
            </View>

            <SearchContainer />
            <View style={CommonStyle.dataContainer}>
                <Text style={CommonStyle.title}>Products</Text>

                <FlatList
                    data={productListData}
                    renderItem={({ item, i }) => <RenderProductList item={item} key={i} navigation={navigation}
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

export default ProductListScreen

const TabOptions = ({ item, key, selectedTab, setSelectedTab }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedTab(item)} key={key} style={{
            paddingHorizontal: DIM.deviceWidth * 0.15,
            backgroundColor: selectedTab.value === item.value ? Colors.white : Colors.lightGray,
            padding: DIM.deviceHeight * 0.02,
            marginHorizontal: 3,
            borderRadius: 99
        }}>
            <Text style={{
            }}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const RenderProductList = ({ item, key, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductListScreen', {
            data: item
        })} key={key}
            style={[CommonStyle.flatListContainer, {
                alignItems: 'center'
            }]}>
            <View>
                <Text style={{
                    fontSize: DIM.deviceHeight * 0.019,
                    fontWeight: 'bold'
                }}>{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        fontSize: DIM.deviceHeight * 0.017,
                        marginTop: DIM.deviceHeight * 0.0035
                    }}><Text style={{ color: Colors.primary }}>Qty : </Text><Text style={{
                        fontWeight: 'bold',
                        color: Colors.black
                    }}>{item.quantity}/{item.total}</Text></Text>
                    <Text style={[CommonStyle.status, {
                        borderColor: statusColor(item?.status || ""),
                        color: statusColor(item?.status || ""),
                    }]}>
                        {item.status}
                    </Text>
                </View>
                <Text style={{
                    fontSize: DIM.deviceHeight * 0.017,
                    marginTop: DIM.deviceHeight * 0.0035
                }}><Text style={{ color: Colors.primary }}>Item Code : </Text><Text style={{
                    fontWeight: 'bold',
                    color: Colors.black
                }}>{item.itemCode}</Text></Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontSize: DIM.deviceHeight * 0.017,
                        marginTop: DIM.deviceHeight * 0.0035
                    }}><Text style={{ color: Colors.primary }}>DIV : </Text><Text style={{
                        fontWeight: 'bold',
                        color: Colors.black
                    }}>{item.div?.toUpperCase() || ""}</Text></Text>
                    <Text style={{
                        fontSize: DIM.deviceHeight * 0.017,
                        marginTop: DIM.deviceHeight * 0.0035,
                        marginStart: DIM.deviceWidth * 0.04
                    }}><Text style={{ color: Colors.primary }}>UOM : </Text><Text style={{
                        fontWeight: 'bold',
                        color: Colors.black
                    }}>{item.uom}</Text></Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: Colors.primary,
                    padding: DIM.deviceHeight * 0.01,
                    paddingHorizontal: DIM.deviceWidth * 0.05,
                    borderRadius: 8
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.white,
                        fontSize: DIM.deviceHeight * 0.018,
                    }}>Update</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})