import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async(value) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("todolist", jsonValue);
    } catch(e){
        //saving error
    }
};

export const getData = async() => {
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