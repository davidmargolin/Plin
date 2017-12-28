import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export default class Toolbar extends React.Component {
    render() {
        return (
                <View style={styles.top_bar}>
                    <Text style={styles.date_text}>{this.props.date}</Text>
                    <Text style={styles.event_text}>{this.props.event}</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    top_bar: {
        alignSelf: 'stretch',
        borderRadius: 10,
        height: 58,
        marginTop: 32,
        elevation: 3,
        margin: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 16,
    },
    date_text: {
        fontSize: 16,
    },
    event_text: {
        fontSize: 14,
    }
});

