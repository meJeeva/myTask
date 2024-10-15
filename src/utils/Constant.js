import { Dimensions } from "react-native";

const DIM = {
    deviceWidth: Math.round(Dimensions.get("window").width),
    deviceHeight: Math.round(Dimensions.get("window").height),
}

const Images = {
    backIcon: require('../assets/Back Icon.png'),
    dateIcon: require('../assets/Date Icon.png'),
    exitIcon: require('../assets/Exit Icon.png'),
    filterIcon: require('../assets/Filter Icon.png'),
    searchIcon: require('../assets/search icon.png'),
}

const Colors = {

}

export {
    DIM,
    Images,
    Colors
}