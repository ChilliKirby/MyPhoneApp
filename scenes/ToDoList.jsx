import React from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from "../styles";

const list = new Array(50).fill(null).map((v, i) => ({
    key: i.toString(), value: `Item ${i}`
}));

const ToDoList = ({ navigation }) => {


    return (
        <View style={styles.toDoListContainer}>
            <ScrollView >
                <View>
                    {list.map((i) => (
                        <Text style={styles.text}>
                            val {i.value} and index {i.key}
                        </Text>

                    ))}
                </View>
            </ScrollView>

            
               <View style={styles.raisedButtonContainer}>
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
               </View>
            
        </View>
    )
}

export default ToDoList;