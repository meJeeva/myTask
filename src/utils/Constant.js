import { Dimensions } from "react-native";

const DIM = {
    deviceWidth: Math.round(Dimensions.get("window").width),
    deviceHeight: Math.round(Dimensions.get("window").height),
}

const Images = {
    backIcon: require('../assets/BackIcon.png'),
    dateIcon: require('../assets/DateIcon.png'),
    exitIcon: require('../assets/ExitIcon.png'),
    filterIcon: require('../assets/FilterIcon.png'),
    searchIcon: require('../assets/searchIcon.png'),
    userIcon: require('../assets/user.png'),
}

const Colors = {
    white: '#ffffff',
    primary: "#0077b3",
    gray: "#a6a6a6",
    black: "#000000",
    lightGray: "#bfbfbf",
    oceanBlue: "#66ccff",
    orange: "#ff9933",
    green: "#339933"
}

export {
    DIM,
    Images,
    Colors
}