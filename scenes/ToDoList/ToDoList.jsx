import React, { useContext, useReducer } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from '../../styles.js';
import { TasksContext, useTasks } from "./ToDoListContext.js";


const ToDoList = ({ navigation }) => {


    const tasks = useContext(TasksContext);
    console.log(tasks[0]);
    return (

        <View style={styles.toDoListContainer}>
            
            <ScrollView

            >
             {/* <View>
                    <Text style={styles.buttonText}>
                         {tasks[1].title}
                    </Text>
                </View> */}
                {(tasks.length > 0) && (
                    <View>
                        {tasks.map((task) => (

                            <Text style={styles.text}>
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