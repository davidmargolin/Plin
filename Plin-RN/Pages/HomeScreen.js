import React from "react";
import Map from '../Components/Map';
import Toolbar from '../Components/Toolbar'
import Fab from '../Components/Fab'
import {StyleSheet, View} from "react-native";
import RNCalendarEvents from 'react-native-calendar-events';
import moment from "moment";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            date: moment(),
        };
    }

    componentDidMount(){
        this.getCalEvents()
    }

    getCalEvents(){
        // get all calendars
        // for calendar, get events for day
        // geocode locations
        // sort into tasks for events that happen at the same location
        // update events state
        Promise.all([
            RNCalendarEvents.authorizeEventStore(),
            RNCalendarEvents.findCalendars(),
            RNCalendarEvents.fetchAllEvents(this.state.date.format().substr(0,10)+'T00:00:00.000Z', this.state.date.format().substr(0,10)+'T23:59:59.000Z')
        ]).then(async results => {
            for (let event of results[2]){
                await this.addCoordinates(event)
            }
        }).catch(err => {
            console.log(err)
        });
    }

    addEvent(new_event){
        this.setState({events: [...this.state.events, new_event]})
    }

    changeDate(new_date){
        // reset events for the new date
        this.setState({date: new_date, events: []});
        this.getCalEvents()
    }

    async addCoordinates(event){
        let response = await Expo.Location.geocodeAsync(event.location);
        console.log(response);
        event['coordinate'] = response[0];
        event['tasks'] = [{'key': event['id'], 'title': event['title']}];
        event['key'] = event['id'];
        this.setState({events: [...this.state.events, event]});
    }

    render() {
        return (
            <View style ={styles.container}>
                <Map
                    events={this.state.events}
                />
                <Toolbar
                    date={this.state.date}
                    events={this.state.events}
                    change_date={this.changeDate.bind(this)}
                />
                <Fab
                    navigation={this.props.navigation}
                    adder={this.addEvent.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});

