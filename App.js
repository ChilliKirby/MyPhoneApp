//import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { styles } from "./styles.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Box from "./components/Box.jsx";
import Home from "./scenes/Home.jsx";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home}  options={{
          title: 'MyPhone',
          headerStyle: {
            backgroundColor: '#BF40BF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


