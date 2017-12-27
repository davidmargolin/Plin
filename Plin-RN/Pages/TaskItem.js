import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class TaskItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.taskname}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    taskitem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});