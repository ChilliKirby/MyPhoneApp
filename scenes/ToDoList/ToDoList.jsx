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
        let tasks = await getData();
        dispatch({ type: "LOAD_TASKS", tasks: tasks });
    }

    return (

        <View style={styles.toDoListContainer}>

            <ScrollView

            >

                {(tasks.length > 0) && (
                    <View>
                        {tasks.map((task) => (
                            <View
                                borderTopColor="#fff"
                                borderTopWidth={1}
                                margin={15}
                            >
                                <Text key={task.toString() + task.title.toString()} style={styles.bigText}>
                                    {task.title}
                                </Text>
                            </View>
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