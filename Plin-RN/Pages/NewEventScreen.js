import React from "react";
import {Text, View, Button, TextInput, StyleSheet} from "react-native";

export default class NewEventScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event_name: 'Event Name',
            description: 'Event Description',
            location: 'Event Location',
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
                <Text>Create a new event here:</Text>
                <TextInput
                    onChangeText={(event_name) => this.setState({event_name})}
                    value={this.state.event_name}
                />
                <TextInput
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                />
                <TextInput
                    onChangeText={(location) => this.setState({location})}
                    value={this.state.location}
                />
                <Button
                    title={this.props.navigation.state.params.name}
                    onPress={()=>this.addEvent()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});