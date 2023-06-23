import React, { useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles.js';
import GeneralButton from '../../components/GeneralButton.jsx';
import { TasksDispatchContext } from './ToDoListContext.js';


const ToDoListAddItem = ({ navigation }) => {

    const [taskTitle, onChangeTaskTitle] = React.useState("");
    const [taskDesc, onChangeTaskDesc] = React.useState("");
    const dispatch = useContext(TasksDispatchContext)


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

            <View  style={styles.multiInputContainer}>
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
                flexDirection='row'
                justifyContent='space-around'
                
                >
                <GeneralButton
                    onpress={addToList}
                    title="add"
                />
            </View>
        </View>
    )

    const addToList = () => {
        console.log('ass');
        dispatch({
            

            title: taskTitle,
            task: taskDesc,
        })
    }

}

export default ToDoListAddItem;