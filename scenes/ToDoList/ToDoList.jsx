import React, { useContext, useReducer } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from '../../styles.js';
import { TasksContext } from "./ToDoListContext.js";



const list = new Array(50).fill(null).map((v, i) => ({
    key: i.toString(), value: `Item ${i}`
}));

const ToDoList = ({ navigation }) => {
    const tasks = useContext(TasksContext);

    return (

        <View style={styles.toDoListContainer}>
            <ScrollView

            >
                {tasks.length && (
                    <View>
                        {tasks.map((task) => (

                            <Text style={styles.text}>
                                val {task.id} and index {task.title}
                            </Text>
                        ))}
                    </View>
                )}
                <View>
                    <View style={styles.raisedButtonContainer}>
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