import { StyleSheet } from "react-native";
import { Colors, DIM } from "./Constant";

export const CommonStyle = StyleSheet.create({
    flatListContainer: {
        backgroundColor: Colors.white,
        elevation: 5,
        margin: DIM.deviceHeight * 0.002,
        padding: DIM.deviceHeight * 0.015,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: DIM.deviceHeight * 0.01
    },
    dataContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        borderTopRightRadius: DIM.deviceHeight * 0.04,
        borderTopLeftRadius: DIM.deviceHeight * 0.04,
        elevation: 3,
        padding: DIM.deviceHeight * 0.02
    },
    status: {
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: 'bold',
        padding: DIM.deviceHeight * 0.003,
        paddingHorizontal: DIM.deviceWidth * 0.02,
        marginStart: DIM.deviceWidth * 0.02,
        fontSize: DIM.deviceHeight * 0.017
    },
    title: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: DIM.deviceHeight * 0.025
    }
})

