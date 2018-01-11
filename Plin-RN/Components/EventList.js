import React from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";

export default class EventList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.props.events}
                    renderItem={({item}) => <Text style={styles.event_text}>{item.title}</Text>}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list:{
        padding: 16,
        alignSelf: 'stretch',
    },
    container: {
        borderRadius: 10,
        elevation: 3,
        maxHeight: 100,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    event_text: {
        fontSize: 14,
    }
});

