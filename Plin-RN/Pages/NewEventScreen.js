import React from "react";
import {Text, View, Button, TextInput, StyleSheet } from "react-native";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class NewEventScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
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

    showCalender() {
        //Date Button Going to look for calandar we can show here onPress. 
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create a new event here</Text>
                <Button 
                    style={styles.date}
                    title={this.state.date ? this.state.date : 'Date'}
                    onPress={()=>this.showCalender()}
                />
                <TextInput
                    style={styles.eventInput}
                    onChangeText={(event_name) => this.setState({event_name})}
                    placeholder="Event Name"
                    value={this.state.event_name}
                />
                <MaterialIcon name="event" size={30} color="#900" />
                <TextInput
                    style={styles.eventInput}
                    onChangeText={(description) => this.setState({description})}
                    placeholder="Description"
                    value={this.state.description}
                />
                <MaterialIcon name="description" size={30} color="#900" />
                <TextInput
                    style={styles.eventInput}
                    onChangeText={(location) => this.setState({location})}
                    placeholder="Location"
                    value={this.state.location}
                />
                <EntypoIcon name="location" size={30} color="#900" />
                <MaterialIcon name="date-range" size={30} color="#900" />
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
        height: 80,
        margin: 20,
    }

});