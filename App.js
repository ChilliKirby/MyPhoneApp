//import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { styles } from "./styles.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TasksProvider } from './scenes/ToDoList/ToDoListContext.js';

import Home from "./scenes/Home.jsx";

//Todo List scenes
import ToDoList from "./scenes/ToDoList/ToDoList.jsx";
import ToDoListAddItem from './scenes/ToDoList/ToDoListAddItem.jsx';
import ToDoItem from './scenes/ToDoList/ToDoItem.jsx';

//Map scenes
import Map from "./scenes/Map/Map.jsx";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TasksProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <Stack.Navigator>

          <Stack.Screen name="Home" component={Home} options={{
            title: 'MyPhone',
            headerStyle: {
              backgroundColor: '#BF40BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

          {/* ToDo list screens//////////////////////////////////////////// */}
          <Stack.Screen name="ToDoList" component={ToDoList} options={{
            title: 'MyPhone- To do list',
            headerStyle: {
              backgroundColor: '#BF40BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

          <Stack.Screen name="ToDoListAddItem" component={ToDoListAddItem} options={{
            title: 'MyPhone- Add new item to List',
            headerStyle: {
              backgroundColor: '#BF40BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />

          <Stack.Screen name="ToDoItem" component={ToDoItem} options={{
            title: 'MyPhone- To do...',
            headerStyle: {
              backgroundColor: '#BF40BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />

          {/* ToDo list screens//////////////////////////////////////////// */}
          <Stack.Screen name="Map" component={Map} options={{
            title: "MyPhone - Map",
            headerStyle: {
              backgroundColor: '#BF$)BF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </TasksProvider>
  );
}


