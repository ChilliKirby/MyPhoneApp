import React from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { styles } from "../styles.js";
import Box from "../components/Box.jsx";


//Create an array of grid boxes(images) to be used for navigation
const boxes = [
    "ToDoList",
    "Map",
    "Shop",
    "Settings"];

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
           
            <ScrollView>

                <View style={styles.gridContainer}>
                    {boxes.map((i) => (
                        <Box style={styles.gridBox} title={i} navigation={navigation} key={i}></Box>
                    ))}
                </View>

            </ScrollView>
        </View>
    );
}

export default Home;