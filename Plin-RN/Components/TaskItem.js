import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class TaskItem extends React.Component {
    render() {
        return (
            <View style={styles.task_item}>
                <Text style={styles.task_text}>
                    {this.props.task.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    task_item: {
        borderRadius: 10,
        height: 40,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 12,
        marginBottom: 6,
        elevation: 3,
    },
    task_text: {
        fontSize: 12,
    }

});