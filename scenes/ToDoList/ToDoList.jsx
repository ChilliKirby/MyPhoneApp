import React, { useContext, useEffect, useReducer } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from '../../styles.js';
import { TasksContext, TasksDispatchContext, useTasks } from "./ToDoListContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData } from "../../utilities/AsyncStorage.js";

const ToDoList = ({ navigation }) => {

    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

    useEffect(() => {
       load();     
    }, []);

    //get list of todo items from asyncstorage and then dispatch
    const load = async() =>{
        let t = await getData();
        dispatch({ type: "do", tasks: t });
    }

    return (

        <View style={styles.toDoListContainer}>

            <ScrollView

            >
                {(tasks.length > 0) && (
                    <View>
                        {tasks.map((task) => (

                            <Text key={task.toString() + task.title.toString()+ task.text.toString()} style={styles.text}>
                                val {task.title} and index {task.text}
                            </Text>
                        ))}
                    </View>
                )}
                <View>
                    <View style={styles.raisedButtonView}>
                        <Pressable
                            onPress={() => navigation.navigate("ToDoListAddItem")}

                        >
                            <Icon
                                style={styles.raisedButton}
                                raised
                                name='file-plus'
                                type='feather'
                                reverse
                                reverseColor='#FFF'
                                color='#BF40BF'


                            >

                            </Icon>
                        </Pressable>
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}

export default ToDoList;