import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ task, completeTask }) => {
    return (
    <TouchableOpacity onPress={() => completeTask(task)}>
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{task}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'lightblue',
        borderRadius: 3,
        opacity: 0.4,
        marginRight: 15
    },
    itemText: {
        width: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#558cb6',
        borderWidth: 2,
        borderRadius: 5,
    }
})

export default Task;