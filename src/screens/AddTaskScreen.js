import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTaskScreen = ({ navigation }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        // Implement task addition logic here
        // Don't forget to update the 'tasks' array in HomeScreen with the new task
    };

    return ( <
        View >
        <
        TextInput placeholder = "Enter task..."
        value = { task }
        onChangeText = {
            (text) => setTask(text) }
        /> <
        Button title = "Add Task"
        onPress = { handleAddTask }
        /> <
        /View>
    );
};

export default AddTaskScreen;