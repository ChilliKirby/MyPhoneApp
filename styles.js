import { StyleSheet, Platform, StatusBar } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight },
        })
    },
    text: {
        fontWeight: 'normal',
        fontSize: 40,
    },

    gridText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    gridBox: {
        backgroundColor: '#BF40BF',
        width: '40%',
        height: 50,
        margin: '5%',
        padding: 10,
        alignContent: 'space-between',
        
    },
    gridContainer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between'
        
    }

});