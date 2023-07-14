import { Pressable, ScrollView, Text, View, TextInput } from 'react-native'
import { styles } from '../../styles';
import GeneralButton from "../../components/GeneralButton.jsx"
import { TasksContext, TasksDispatchContext } from "./ToDoListContext.js";
import { useContext } from 'react';
import { c } from "../../utilities/AsyncStorage.js";
import { useState } from "react";

const ToDoItem = ({ navigation }) => {

    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

    const [edit, setEdit] = useState(false);
    const [taskDesc, onChangeTaskDesc] = useState(tasks.task);



    const handleDelete = () => {

        dispatch({
            type: "DELETE_LIST_ITEM",
            title: tasks.title,
        })

        navigation.navigate("ToDoList");
    }


    return (
        <View style={styles.generalContainer}
        >
            <ScrollView>
                <View >
                    <Text style={styles.bigText
                    }

                        adjustsFontSizeToFit={true}
                        allowFontScaling={true}
                        numberOfLines={2}

                    >
                        {tasks.title}
                    </Text>
                </View>

                {/* Show description of task  */}
                {(edit == false) && (
                    <Pressable
                        onPress={() => setEdit(true)}
                    >
                    <View style={styles.textContainer}>
                        <Text style={styles.regularText}>
                            {tasks.task}
                        </Text>
                    </View>
                    </Pressable>
                )}

                {/* Task description has been tapped and can be edited*/}
                {(edit == true) && (
                    <View style={styles.multiInputContainer}>
                        <TextInput
                            editable
                            multiline={true}
                            numberOfLines={5}
                            maxLength={500}
                            onChangeText={(text) => { onChangeTaskDesc(text) }}
                            value={taskDesc}
                            style={styles.multiTextInput}
                            placeholder='To do...'
                        />
                    </View>
                )}

                <View style={styles.buttonContainer}>
                    <GeneralButton title="Delete List Item" handleClick={handleDelete

                    } />
                </View>
            </ScrollView>

        </View>
    )
}

export default ToDoItem;