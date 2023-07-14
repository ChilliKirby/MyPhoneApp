import { StyleSheet, Platform, StatusBar } from "react-native";


export const styles = StyleSheet.create({
/////////////////////////////////////////////////////////////////////////
    //Containers for scenes
    generalContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
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
        alignItems: 'stretch',

    },
///////////////////////////////////////////////////////////////////////////
    //View containers for pressables
    raisedButtonView: {

        backgroundColor: '#000',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',

    },
    gridButtonView: {
        backgroundColor: '#BF40BF',
        width: '40%',
        height: 210,
        margin: '5%',
        
        //alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
        
    },

    generalButtonView:{
        borderRadius: 30,
        backgroundColor: '#BF40BF',
        width: 88,
        height: 36,
         justifyContent:'center',
        alignItems:'center',
        elevation: 2,
        padding: 2,
        flex: 1,
        margin: 10,
    },

    toDoListView: {
        borderTopColor: "#fff",
        borderTopWidth: 1,
        margin: 15,
    },
/////////////////////////////////////////////////////////////////////////
    //Text
    bigText: {
        fontWeight: 'normal',
        fontSize: 40,
        color: '#fff',
    },
    regularText: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#fff',
    },
    buttonText: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#fff',
        width: 'auto',
        height: 'auto'
    },

    gridText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
/////////////////////////////////////////////////////////////////////////
    //General
   
    gridContainer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'

    },    
    textContainer: {
        height: 'auto',
        borderWidth: 5,
        padding: 20,
        borderRadius: 50,
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: '#fff',
        height: '20%',
        borderWidth: 5,
        padding: 20,
        borderRadius: 50,
        marginBottom: 20,
    },
    multiInputContainer: {
        backgroundColor: '#fff',
        height: '40%',
        borderWidth: 5,
        padding: 20,
        borderRadius: 50,
        marginVertical: 40
    },
    buttonContainer: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexGrow: .5,
    },

    

});