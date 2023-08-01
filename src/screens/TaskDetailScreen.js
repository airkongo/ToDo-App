import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskDetailScreen = ({ route, navigation }) => {
    const { task } = route.params;

    const handleDeleteTask = () => {
        // Implement task deletion logic here
        // Don't forget to update the 'tasks' array in HomeScreen after deleting the task
        navigation.goBack();
    };

    return ( <
        View >
        <
        Text > { task.task } < /Text> <
        Text > { task.completed ? 'Completed' : 'Not Completed' } < /Text> <
        Button title = "Delete Task"
        onPress = { handleDeleteTask }
        /> <
        /View>
    );
};

export default TaskDetailScreen;