import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async(value) => {
    try{
        console.log("before stringify")
        const jsonValue = JSON.stringify(value);
        console.log("before setItem");
        await AsyncStorage.setItem("todolist", jsonValue);

    } catch(e){
        //saving error
    }
};

export const getData = async() => {
    try{
        const jsonValue = await AsyncStorage.getItem("todolist");
        return jsonValue != null ? JSON.parse(jsonValue) : {};
    } catch(e){
        //error reading value
    }
};