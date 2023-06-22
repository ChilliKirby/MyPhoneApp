import React, { useContext, useReducer } from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from '../../styles.js';
import  { TasksProvider, TasksContext} from "./ToDoListContext.js";


//const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

const Listy = ({ }) => {
const tasks = useContext(TasksContext);

    return (
        <ScrollView >

            {tasks.length && (
                <View>
  {/* <ul> */}
    
                        {tasks.map((task) => (
                            // <li key={task.id}>
                            <Text style={styles.text}>
                                val {task.id} and index 
                            </Text>
                        //    </li>
                        ))}
                        
                        {/* </ul> */}
                    {/* <ul> */}
                        {/* {tasks.map((i) => ( */}
                            {/* <Text style={styles.text}>
                                val  and index {tasks.length}
                            </Text> */}
                            {/* // <li key={i.id}>
                                
                                // <Text>
                                // {i.title}
                                // </Text>

                                
                            // </li> */}
                        {/* ))} */}
                    {/* </ul> */}
                </View>
            )}
        </ScrollView>

    )
}

export default Listy;