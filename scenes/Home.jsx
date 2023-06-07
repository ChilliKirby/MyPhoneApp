import React from "react";
import { ScrollView, View, Text, Button, StatusBar } from "react-native";
import { styles } from "../styles.js";
import Box from "../components/Box.jsx";


//Create an array of grid boxes(images) to be used for navigation
const boxes = new Array(20).fill(null).map((v, i) => i + 1);

const Home = ({ }) => {

    return (
        <View style={styles.container}>
           
            <ScrollView>

                <View style={styles.gridContainer}>
                    {boxes.map((i) => (
                        <Box key={i}> #{i} </Box>
                    ))}
                </View>

            </ScrollView>
        </View>
    );
}

export default Home;