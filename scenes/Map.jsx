import React from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { Icon } from '@rneui/themed';
import { styles } from "../styles";

const list = new Array(50).fill(null).map((v, i) => ({
    key: i.toString(), value: `Item ${i}`
}));

const Map = ({ navigation }) => {


    return (
        <View style={styles.toDoListContainer}>
         <text>map</text>
        </View>
    )
}

export default Map;