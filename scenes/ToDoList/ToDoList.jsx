import React, { useContext, useEffect, } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from '../../styles.js';

import { TasksContext, TasksDispatchContext } from "./ToDoListContext.js";
import ToDoItem from "./ToDoItem.jsx";
import { getData } from "../../utilities/AsyncStorage.js";

const ToDoList = ({ navigation }) => {

    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

    useEffect(() => {
        load();
        
    }, []);

    //get list of todo items from asyncstorage and then dispatch
    const load = async () => {
        let t = await getData();

        dispatch({ type: "LOAD_TASKS", tasks: t });
        
    }

    return (

        <View style={styles.toDoListContainer}>

            <ScrollView

            >

                {(tasks.tasks != null) && (

                    <View>
                        {tasks.tasks.map((task) => (
                            <Pressable
                                key={task.toString() + task.title.toString()}
                                onPress={() => {
                                    dispatch({
                                        type: "DISPLAY_LIST_ITEM",
                                        title: task.title,
                                        task: task.task,
                                    });
                                    navigation.navigate("ToDoItem")
                                }}
                            >
                                <View
                                    style={styles.toDoListView}
                                // key={task.toString() + task.title.toString()}
                                >
                                    <Text style={styles.bigText}>
                                        {task.title}
                                    </Text>
                                </View>
                            </Pressable>
                        ))}

                    </View>

                )}
                <View>
                    <View style={styles.raisedButtonView}>
                        <Pressable
                            onPress={() => {
                                navigation.navigate("ToDoListAddItem")
                            }}

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