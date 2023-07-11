import { ScrollView, Text, View } from 'react-native'
import { styles } from '../../styles';
import GeneralButton from "../../components/GeneralButton.jsx"
import { TasksContext, TasksDispatchContext } from "./ToDoListContext.js";
import { useContext } from 'react';

const ToDoItem = ({ navigation }) => {

    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

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
                        hi
                    </Text>
                    <Text style={styles.regularText}>
                        description
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <GeneralButton title="Delete List Item" handleClick={() => { }

                    }/>
                </View>
            </ScrollView>

        </View>
    )
}

export default ToDoItem;