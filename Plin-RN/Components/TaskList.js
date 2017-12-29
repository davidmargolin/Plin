import React from "react";
import TaskItem from './TaskItem'
import {StyleSheet, View} from "react-native";

export default class TaskList extends React.Component {
    render() {
      
        return (
            <View style={styles.list}>
                {this.props.tasks.map(function(task){
                    return <TaskItem task={task}/>
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'flex-start',
    }
});