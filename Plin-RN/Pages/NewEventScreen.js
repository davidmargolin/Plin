import React from "react";
import {Text, View, Button, TextInput, StyleSheet } from "react-native";

export default class NewEventScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event_name: '',
            description: '',
            location: '',
            latlng: {latitude: 40.6528, longitude: -74.0160}
        };
    }

    addEvent()
    {
        this.props.navigation.state.params.adder({
            key: this.props.navigation.state.params.name,
            coordinate: this.state.latlng,
            title: this.state.event_name,
            description: this.state.description,
            tasks: [{
                title: 'New Task A'
            },{
                title: 'New Long Task B'
            },]
        });
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create a new event here</Text>
                <TextInput
                    style={styles.eventInput}
                    onChangeText={(event_name) => this.setState({event_name})}
                    placeholder="Name"
                    value={this.state.event_name}
                />
                <TextInput
                    style={styles.eventInput}
                    onChangeText={(description) => this.setState({description})}
                    placeholder="Description"
                    value={this.state.description}
                />
                <TextInput
                    style={styles.eventInput}
                    onChangeText={(location) => this.setState({location})}
                    placeholder="Location"
                    value={this.state.location}
                />
                <Button
                    style={styles.submitEvent}
                    title="New Event"
                    onPress={()=>this.addEvent()}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    header: {
        textAlign: 'center',
    },
    eventInput: {
        fontSize: 20,
        height: 100,
        margin: 50,
    }

});