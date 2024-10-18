import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Colors, DIM, Images } from '../utils/Constant'
import SearchContainer from '../components/SearchContainer'
import { CommonStyle } from '../utils/CommonStyle'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { statusColor } from '../utils/utilFunctions'

const PickListScreen = () => {
    const navigation = useNavigation();
    const pickListData = useSelector(state => state.products.pickList)

    return (
        <View style={{
            flex: 1,
        }}>
            <Header />
            <View style={{
                flex: 1,
                padding: DIM.deviceHeight * 0.005
            }}>
                <SearchContainer />
                <View style={CommonStyle.dataContainer}>
                    <Text style={CommonStyle.title}>Pick List</Text>
                    <Text style={{
                        marginVertical: DIM.deviceHeight * 0.01,
                        fontSize: DIM.deviceHeight * 0.018,
                        color: Colors.black
                    }}>Today ({pickListData?.length || 0})</Text>
                    {
                        pickListData &&
                            pickListData.length > 0 ? (
                            <FlatList
                                data={pickListData}
                                renderItem={({ item, i }) => <RenderPickList item={item} key={i} navigation={navigation} />}
                            />
                        ) : null
                    }

                </View>
            </View>
        </View>
    )
}


const RenderPickList = ({ item, key, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CustomerListScreen', {
            data: item
        })} key={key}
            style={CommonStyle.flatListContainer}>
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: Colors.black,
                        fontSize: DIM.deviceHeight * 0.02,
                        fontWeight: 'bold',
                        color: Colors.primary,
                    }}>{item.id}</Text>
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
                }}><Text style={{ color: Colors.primary }}>Sales Person : </Text><Text style={{
                    fontWeight: 'bold',
                    color: Colors.black
                }}>{item.salesPerson}</Text></Text>
                <Text style={{
                    fontSize: DIM.deviceHeight * 0.017,
                    marginTop: DIM.deviceHeight * 0.0035
                }}><Text style={{ color: Colors.primary }}>Route : </Text><Text style={{
                    fontWeight: 'bold',
                    color: Colors.black
                }}>{item.route}</Text></Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: DIM.deviceHeight * 0.007
            }}>
                <Image
                    source={Images.dateIcon}
                    style={{
                        height: DIM.deviceHeight * 0.02,
                        width: DIM.deviceHeight * 0.02,
                    }}
                />
                <Text>{item.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PickListScreen

const styles = StyleSheet.create({})