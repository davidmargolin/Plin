import React from "react";
import Map from '../Components/Map';
import Toolbar from '../Components/Toolbar'
import Fab from '../Components/Fab'
import {StyleSheet, View} from "react-native";
import RNCalendarEvents from 'react-native-calendar-events';

export default class HomeScreen extends React.Component {
    // hides navigation bar

    constructor(props) {
        super(props);
        // fake events for testing
        this.state = {
            events: fake_events,
            date: 'December 28th, 2017',
            selected: fake_events[0]
        };
    }

    componentWillMount(){
        // get all calendars
        // for calendar, get events for day
        // sort into tasks for events that happen at the same location
        // add pins
        RNCalendarEvents.authorizeEventStore()
            .then(status => {
                console.log(status);
                RNCalendarEvents.findCalendars()
                    .then(calendars => {
                        //console.log(calendars);
                        RNCalendarEvents.fetchAllEvents('2017-12-20T00:00:00.000Z', '2017-12-30T23:59:59.000Z')
                            .then(events => {
                                //console.log(events)
                            })
                            .catch(error => {
                                console.log(error)
                            });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error)
            });
    }

    addEvent(new_event){
        this.setState({events: [...this.state.events, new_event]})
    }

    setSelected(event){
        this.setState({selected: event})
    }

    render() {

        return (
            <View style ={styles.container}>
                <Map
                    events={this.state.events}
                    changeSelected={(event)=>this.setSelected(event)}
                />
                <Toolbar
                    date={this.state.date}
                    events={this.state.events}
                    selected={this.state.selected}
                />
                <Fab
                    navigation={this.props.navigation}
                    adder={this.addEvent.bind(this)}
                />
            </View>
        );
    }
}

let fake_events = [
    {
        key: 1,
        coordinate: {latitude: 40.7128, longitude: -74.0060},
        title: "event 1",
        description: "event 1 desc",
        tasks: [{
            title: '1 Task A'
        },{
            title: '1 Long Task B'
        },]
    },{
        key: 2,
        coordinate: {latitude: 40.6828, longitude: -74.0000},
        title: "event 2",
        description: "event 2 desc",
        tasks: [{
            title: '2 Long Task A'
        },]
    },{
        key: 3,
        coordinate: {latitude: 40.7148, longitude: -74.0080},
        title: "event 3",
        description: "event 3 desc",
        tasks: [{
            title: '3 Task A'
        },]
    },
];


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});