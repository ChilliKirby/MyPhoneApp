import { ScrollView, Text, View } from 'react-native'
import { styles } from '../../styles';
import GeneralButton from "../../components/GeneralButton.jsx"
import { TasksContext, TasksDispatchContext } from "./ToDoListContext.js";
import { useContext } from 'react';
import { c } from "../../utilities/AsyncStorage.js";

const ToDoItem = ({ navigation }) => {

    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

    const handleDelete = () => {
        // dispatch({
        //     type: "DELETE_LIST_ITEM",
            
        // })
        c();
        console.log(tasks.title);
        console.log(tasks.task);
        console.log("ass");
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

                    //}
                    >
                        {tasks.title}
                    </Text>
                    <Text style={styles.regularText}>
                        {tasks.task}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <GeneralButton title="Delete List Item" handleClick={handleDelete

                    }/>
                </View>
            </ScrollView>

        </View>
    )
}

export default ToDoItem;