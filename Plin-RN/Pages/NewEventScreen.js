import React from "react";
import {Text, View, Button, TextInput, StyleSheet, TouchableOpacity, DatePickerAndroid } from "react-native";
import { Entypo, MaterialIcons } from '@expo/vector-icons';
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

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

    async showCalender() {
        const {action, year, month, day} = await DatePickerAndroid.open({
            date: new Date()
        });
        console.log(year +' '+ month+ ' ' + day)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create a new event here</Text>
                <TouchableOpacity onPress={()=>this.showCalender()}>
                    <Text
                    style={styles.date}>Date</Text>
                </TouchableOpacity>
                <View style={styles.eventSection}>
                    <TextInput
                        style={styles.eventInput}
                        onChangeText={(event_name) => this.setState({event_name})}
                        placeholder="Event Name"
                        value={this.state.event_name}
                        underlineColorAndroid="transparent"
                    />
                    <MaterialIcons name="event" size={40} />
                </View>
                <View style={styles.eventSection}>
                    <TextInput
                        style={styles.eventInput}
                        onChangeText={(description) => this.setState({description})}
                        placeholder="Description"
                        value={this.state.description}
                        underlineColorAndroid="transparent"
                    />
                    <MaterialIcons name="description" size={40} />
                </View>
                <View style={styles.eventSection}>
                    <TextInput
                        style={styles.eventInput}
                        onChangeText={(location) => this.setState({location})}
                        placeholder="Location"
                        value={this.state.location}
                        underlineColorAndroid="transparent"
                    />
                    <Entypo name="location" size={40} />
                </View>
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
        flex: 2 / 3,
        flexDirection: 'column',
        marginTop: 50,
    },
    date: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 2,
        fontSize: 20,
        textAlign: 'center',
        width: 50,
    },
    header: {
        textAlign: 'center',
    },
    eventSection: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
    },
    eventInput: {
        alignSelf: 'stretch',
        alignContent: 'stretch',
        flex: 1,
        fontSize: 20,
        marginLeft: 20,
        width: window.width,
    },
    submitEvent: {
        position: 'absolute',
        bottom: 0,
    },
});