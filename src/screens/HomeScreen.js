import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const tasks = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Finish homework', completed: true },
    // Add more tasks here
];

const HomeScreen = ({ navigation }) => {
    return ( <
        View >
        <
        FlatList data = { tasks }
        keyExtractor = {
            (item) => item.id.toString() }
        renderItem = {
            ({ item }) => ( <
                TouchableOpacity onPress = {
                    () => navigation.navigate('TaskDetail', { task: item }) } >
                <
                Text > { item.task } < /Text> <
                Text > { item.completed ? 'Completed' : 'Not Completed' } < /Text> <
                /TouchableOpacity>
            )
        }
        /> <
        /View>
    );
};

export default HomeScreen;