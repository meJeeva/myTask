import {  FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CommonStyle } from '../utils/CommonStyle'
import SearchContainer from '../components/SearchContainer'
import { Colors, DIM } from '../utils/Constant'
import {  statusColor } from '../utils/utilFunctions'
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux'
import { updateProductCount } from '../redux/actions'
import Toast from 'react-native-toast-message'

const ProductListScreen = () => {
    const [selectedTab, setSelectedTab] = useState('1');
  const [isModalVisible, setModalVisible] = useState(false);
  const[selectedProduct,setSelectedProduct] = useState({});
  const[inputQty,setInputQty] = useState('');
    const dispatch = useDispatch();


    const navigation = useNavigation()
    const route = useRoute();
    let productListData = route?.params?.customerData?.products || [];
    let pickId = route?.params?.pickId || "";
    let customerId = route?.params?.customerData?.id || ""

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

      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

       const handleUpdateCount = ( productId) =>{
         dispatch(updateProductCount(pickId, customerId, productId, inputQty));
          Toast.show({type : 'success', text1: 'Product Quantity Updated',text2 : '',position:'bottom'});
        setModalVisible(!isModalVisible)
       }       

    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header
          showBackButton={true}
          pickScreen={true}
          navigation={navigation}
        />
        <View
          style={{
            marginTop: DIM.deviceHeight * 0.01,
            marginHorizontal: DIM.deviceHeight * 0.01,
          }}>
          <FlatList
            data={tabOptions}
            renderItem={({item, i}) => (
              <TabOptions
                item={item}
                key={i}
                setSelectedTab={setSelectedTab}
                selectedTab={selectedTab}
              />
            )}
            style={{
              backgroundColor: Colors.lightGray,
              padding: DIM.deviceHeight * 0.01,
              borderRadius: 99,
            }}
            horizontal
          />
        </View>

        <SearchContainer title="productListScreen" />
        <View style={CommonStyle.dataContainer}>
          <Text style={CommonStyle.title}>Products</Text>

          <FlatList
            data={productListData}
            renderItem={({item, i}) => (
              <RenderProductList
                item={item}
                key={i}
                navigation={navigation}
                toggleModal={toggleModal}
                setSelectedProduct={setSelectedProduct}
                setInputQty={setInputQty}
              />
            )}
            style={{
              marginTop: DIM.deviceHeight * 0.02,
            }}
          />
        </View>

        <BottomHalfModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          toggleModal={toggleModal}
          selectedProduct={selectedProduct}
          inputQty={inputQty}
          setInputQty={setInputQty}
          handleUpdateCount={handleUpdateCount}
        />
      </View>
    );
}

export default ProductListScreen

const TabOptions = ({ item, key, selectedTab, setSelectedTab }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedTab(item.value)} key={key} style={{
            paddingHorizontal: DIM.deviceWidth * 0.135,
            backgroundColor: selectedTab === item.value ? Colors.white : Colors.lightGray,
            padding: DIM.deviceHeight * 0.02,
            marginHorizontal: 3,
            borderRadius: 99
        }}>
            <Text style={{
                fontSize:DIM.deviceHeight*0.019
            }}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const RenderProductList = ({
  item,
  key,
  toggleModal,
  setSelectedProduct,
  setInputQty,
}) => {
  return (
    <View
      key={key}
      style={[
        CommonStyle.flatListContainer,
        {
          alignItems: 'center',
        },
      ]}>
      <View>
        <Text
          style={{
            fontSize: DIM.deviceHeight * 0.019,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: DIM.deviceHeight * 0.017,
              marginTop: DIM.deviceHeight * 0.0035,
            }}>
            <Text style={{color: Colors.primary}}>Qty : </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              {item.quantity}/{item.total}
            </Text>
          </Text>
          <Text
            style={[
              CommonStyle.status,
              {
                borderColor: statusColor(item?.status || ''),
                color: statusColor(item?.status || ''),
              },
            ]}>
            {item.status}
          </Text>
        </View>
        <Text
          style={{
            fontSize: DIM.deviceHeight * 0.017,
            marginTop: DIM.deviceHeight * 0.0035,
          }}>
          <Text style={{color: Colors.primary}}>Item Code : </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.black,
            }}>
            {item.itemCode}
          </Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: DIM.deviceHeight * 0.017,
              marginTop: DIM.deviceHeight * 0.0035,
            }}>
            <Text style={{color: Colors.primary}}>DIV : </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              {item.div?.toUpperCase() || ''}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: DIM.deviceHeight * 0.017,
              marginTop: DIM.deviceHeight * 0.0035,
              marginStart: DIM.deviceWidth * 0.04,
            }}>
            <Text style={{color: Colors.primary}}>UOM : </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.black,
              }}>
              {item.uom}
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelectedProduct(item);
            setInputQty(item.quantity)
            toggleModal();
          }}
          style={{
            backgroundColor: Colors.primary,
            padding: DIM.deviceHeight * 0.01,
            paddingHorizontal: DIM.deviceWidth * 0.05,
            borderRadius: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Colors.white,
              fontSize: DIM.deviceHeight * 0.018,
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BottomHalfModal = ({
  isModalVisible,
  toggleModal,
  selectedProduct,
  inputQty,
  setInputQty,
  handleUpdateCount,
}) => {
  const {name, quantity, total,id} = selectedProduct;

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: '35%',
          }}>
          <View
            style={{
              marginTop: DIM.deviceHeight * 0.02,
            }}>
            <Text
              style={{
                fontSize: DIM.deviceHeight * 0.025,
                fontWeight: '500',
                color: Colors.primary,
              }}>
              Products
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: DIM.deviceHeight * 0.03,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: DIM.deviceHeight * 0.02,
                    fontWeight: '500',
                    color: Colors.primary,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: DIM.deviceHeight * 0.018,
                    fontWeight: '500',
                  }}>
                  <Text style={{color: Colors.primary, fontWeight: '400'}}>
                    {' '}
                    Qty :
                  </Text>{' '}
                  {quantity}/{total}
                </Text>
              </View>
              <TextInput
                value={inputQty?.toString()}
                onChangeText={setInputQty}
                style={{
                  borderWidth: 1,
                  borderColor: Colors.lightGray,
                  borderRadius: 5,
                  width: DIM.deviceWidth * 0.13,
                  color: Colors.black,
                  fontSize: DIM.deviceHeight * 0.02,
                  textAlign: 'center',
                  fontWeight: '500',
                }}
                maxLength={total?.toString()?.length || 2}
                onBlur={() => {
                    if(!inputQty){
                        setInputQty(0);
                    }
                    else if(Number(inputQty) > Number(total)){
                        setInputQty(total);
                       
                    }
                    else{
                        setInputQty(inputQty)
                    }
                }}
                onFocus={() => {
                  if(Number(inputQty) === 0){
                    setInputQty('');
                  }
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: DIM.deviceWidth * 0.05,
                marginTop: DIM.deviceHeight * 0.03,
              }}>
              <TouchableOpacity
              onPress={() => setInputQty(0)}
                style={{
                  backgroundColor: Colors.white,
                  borderWidth: 1,
                  borderColor: Colors.lightGray,
                  padding: DIM.deviceHeight * 0.015,
                  borderRadius: 5,
                  flex: 1,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: DIM.deviceHeight * 0.02,
                  }}>
                  Reset
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleUpdateCount(id)}
                style={{
                  backgroundColor: Colors.primary,
                  padding: DIM.deviceHeight * 0.015,
                  borderRadius: 5,
                  flex: 1,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: DIM.deviceHeight * 0.02,
                    color: Colors.white,
                  }}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({})