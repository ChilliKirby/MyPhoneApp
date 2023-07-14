import React, { useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from '../../styles.js';
import GeneralButton from '../../components/GeneralButton.jsx';
import { TasksContext, TasksDispatchContext } from './ToDoListContext.js';
import { getData, storeData, c } from '../../utilities/AsyncStorage.js';


const ToDoListAddItem = ({ navigation }) => {

    const [taskTitle, onChangeTaskTitle] = React.useState("");
    const [taskDesc, onChangeTaskDesc] = React.useState("");
    const dispatch = useContext(TasksDispatchContext)
    const tasks = useContext(TasksContext);

    //Shows message to user when too many (50) list items exist.
    const largeListAlert = () => {
        Alert.alert("List", "Too many list items. Please delete old items before adding new items",
            [
                {
                    text: "OK",
                    onPress: () => { },
                }
            ])
    }

    //Show message when creating a new item with a duplicate
    //title in the list.
    const duplicateAlert = () => {
        Alert.alert("List", "Duplicate list titles are not allowed.",
            [
                {
                    text: "OK",
                    onPress: () => { },
                }
            ])
    }

    const addToList = () => {

        if (tasks.tasks.length >= 50) {
            largeListAlert();
        }
        else {
            //These will handle white space
            const sanitizedTitle = taskTitle.trim();
            const sanitizedDesc = taskDesc.trim();
            const exists = tasks.tasks.some((value) => value.title === sanitizedTitle);

            if (!exists) {


                dispatch({
                    type: "ADD_TO_LIST",

                    title: sanitizedTitle,
                    task: sanitizedDesc,
                })
                navigation.navigate("ToDoList");
            } else {
                duplicateAlert();
            }
        }
    }

    const handleCancel = () => {
        navigation.navigate("ToDoList");
    }

    return (
        <View style={styles.generalContainer}>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => { onChangeTaskTitle(text) }}
                    value={taskTitle}
                    placeholder='Task Name'

                />
            </View>

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

            <View
                style={styles.buttonContainer}
            >
                <GeneralButton
                    handleClick={addToList}
                    title="add"
                />
                <GeneralButton
                    title="cancel"
                    handleClick={handleCancel}
                />
            </View>
        </View>
    )

}



export default ToDoListAddItem;