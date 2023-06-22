import React from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { styles } from "../styles.js";
import HomeScreenNavButton from "../components/HomeScreenNavButton.jsx";


//Create an array of grid boxes(images) to be used for navigation
const boxes = [
    "ToDoList",
    "Map",
    "Shop",
    "Settings"];

const Home = ({ navigation }) => {

    return (
        <View style={styles.homeContainer}>

            <ScrollView>
                <View style={styles.gridContainer}>
                    {boxes.map((i) => (
                        <HomeScreenNavButton style={styles.gridButton} title={i} navigation={navigation} key={i}></HomeScreenNavButton>
                    ))}
                </View>

            </ScrollView>
        </View>
    );
}

export default Home;