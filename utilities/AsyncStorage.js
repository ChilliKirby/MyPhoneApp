import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async(value) => {
    try{
        console.log("before stringify")
        const jsonValue = JSON.stringify(value);
        console.log("before setItem");
        await AsyncStorage.setItem("todolist", jsonValue);
        console.log("saved");

    } catch(e){
        //saving error
    }
};

export const getData = async() => {
    console.log("getting data...");
    try{
        const jsonValue = await AsyncStorage.getItem("todolist");
       
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e){
        //error reading value
    }
};

export const c = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  export const printAsyncStorage = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        let asyncStorage = {}
        stores.map((result, i, store) => {
          asyncStorage[store[i][0]] = store[i][1]
        });
        console.table(asyncStorage)
      });
    });

    
  };