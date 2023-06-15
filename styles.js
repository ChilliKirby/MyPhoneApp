import { StyleSheet, Platform, StatusBar } from "react-native";


export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        // ...Platform.select({
        //     ios: { paddingTop: 20 },
        //     android: { paddingTop: StatusBar.currentHeight },
        // })
    },
    toDoListContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        
    },
    raisedButtonContainer: {
       
        backgroundColor: '#000',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        
    },
    text: {
        fontWeight: 'normal',
        fontSize: 40,
        color:'#fff',
    },

    gridText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    gridBox: {
        backgroundColor: '#BF40BF',
        width: '40%',
        height: 210,
        margin: '5%',
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
        
    },
    gridContainer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
        
    },

    gridButton: {
        backgroundColor: '#BF40BF',
        height: 200,
    },
    raisedButton: {
        width: 500,
        height: 200, 
        
        
                  
        
    }

});