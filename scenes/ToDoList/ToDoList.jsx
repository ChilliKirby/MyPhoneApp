import React, { useContext, useReducer } from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from '../../styles.js';
import  { TasksProvider, TasksContext} from "./ToDoListContext.js";
import Listy from "./ass.jsx";


// const list = new Array(50);

// const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
const list = new Array(50).fill(null).map((v, i) => ({
    key: i.toString(), value: `Item ${i}`
}));

const ToDoList = ({ navigation }) => {
//const {tasks} = useContext(TasksContext);

    return (
         <TasksProvider>
            <View style={styles.toDoListContainer}>
                {/* <ScrollView >

                    {list.length && (
                    <View>
                        
                        <ul>
                        {list.map((i) => (
                            <Text style={styles.text}>
                                val {i.value} and index {i.key}
                            </Text>
                            // <li key={i.id}>
                            //     {i.title}
                            // </li>
                        ))}
                        </ul>
                    </View>
                    )}
                </ScrollView> */}
                <Listy></Listy>

                <View style={styles.raisedButtonContainer}>
                    <Icon
                        style={styles.raisedButton}
                        raised
                        name='file-plus'
                        type='feather'
                        reverse
                        reverseColor='#FFF'
                        color='#BF40BF'
                        onPress={() => navigation.navigate("ToDoListAddItem")}
                    >

                    </Icon>
                </View>

            </View>
         </TasksProvider>

    )


}

export default ToDoList;