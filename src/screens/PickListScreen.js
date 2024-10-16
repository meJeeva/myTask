import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Colors, DIM, Images } from '../utils/Constant'
import SearchContainer from '../components/SearchContainer'
import { CommonStyle } from '../utils/CommonStyle'
import { useNavigation } from '@react-navigation/native'

const PickListScreen = () => {

    let data = [{
        name: "PL002",
        person: "John Doe",
        route: "Gandhipuram A1",
        date: '14 Jun 2024',
        status: 'open'
    }];

    const navigation = useNavigation()

    const statusColor = (status) => status.toLowerCase() === 'open' ? Colors.oceanBlue : status.toLowerCase() === 'partially' ? Colors.orange : status.toLowerCase() === 'completed' ? Colors.green : Colors.black;

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
                    }}>Today (3)</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item, i }) => <RenderPickList item={item} key={i} statusColor={statusColor} navigation={navigation} />}
                        keyExtractor={({ item, i }) => i?.toString() || '0'}
                    />
                </View>
            </View>
        </View>
    )
}


const RenderPickList = ({ item, key, statusColor, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CustomerListScreen')} key={key}
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
                    }}>{item.name}</Text>
                    <Text style={[CommonStyle.status, {
                        borderColor: statusColor(item.status),
                        color: statusColor(item.status),
                    }]}>
                        {item.status}
                    </Text>
                </View>
                <Text style={{
                    fontSize: DIM.deviceHeight * 0.017,
                    marginTop: DIM.deviceHeight * 0.003
                }}><Text style={{ color: Colors.primary }}>Sales Person : </Text><Text style={{
                    fontWeight: 'bold',
                    color: Colors.black
                }}>{item.person}</Text></Text>
                <Text style={{
                    fontSize: DIM.deviceHeight * 0.017,
                    marginTop: DIM.deviceHeight * 0.003
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