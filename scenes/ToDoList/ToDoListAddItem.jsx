import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../../styles.js';
import GeneralButton from '../../components/GeneralButton.jsx';
import { TasksContext, TasksDispatchContext } from './ToDoListContext.js';
import { getData, storeData, c } from '../../utilities/AsyncStorage.js';


const ToDoListAddItem = ({ navigation }) => {

    const [taskTitle, onChangeTaskTitle] = React.useState("");
    const [taskDesc, onChangeTaskDesc] = React.useState("");
    const dispatch = useContext(TasksDispatchContext)
    const tasks = useContext(TasksContext);


    const addToList = () => {
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
            //modal something////////////////////////////////////////////////
            console.log("duplicate title");
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
            // flexDirection='row'
            // justifyContent='space-around'

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