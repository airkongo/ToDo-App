import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import TaskDetailScreen from './src/screens/TaskDetailScreen';

const Stack = createStackNavigator();

function App() {
    return ( <
        NavigationContainer >
        <
        Stack.Navigator initialRouteName = "Home" >
        <
        Stack.Screen name = "Home"
        component = { HomeScreen }
        /> <
        Stack.Screen name = "AddTask"
        component = { AddTaskScreen }
        /> <
        Stack.Screen name = "TaskDetail"
        component = { TaskDetailScreen }
        /> <
        /Stack.Navigator> <
        /NavigationContainer>
    );
}

export default App;