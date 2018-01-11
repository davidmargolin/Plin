import React from "react";
import Map from '../Components/Map';
import Toolbar from '../Components/Toolbar'
import Fab from '../Components/Fab'
import {StyleSheet, View} from "react-native";
import RNCalendarEvents from 'react-native-calendar-events';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            date: today_full,
            //if not selected, show amount of events. None by default
        };
    }

    getCoordinates(event){
        Expo.Location.geocodeAsync(event.location).then(latlng=>{
            console.log(latlng);
            event['coordinate'] = latlng[0];
            event_object['tasks']=[{'key':event_object['id'],'title': event_object['title']}];
            event_object['key'] = event_object['id'];
            this.setState({events: [...this.state.events, event]})
        }).catch(error => {
            console.log(error)
        })
    }

    componentWillMount(){
        // get all calendars
        // for calendar, get events for day
        // geocode locations
        // sort into tasks for events that happen at the same location
        // update events state
        RNCalendarEvents.authorizeEventStore()
            .then(status => {
                console.log(status);
                RNCalendarEvents.findCalendars()
                    .then(calendars => {
                        //console.log(calendars);
                        console.log(estdate.toISOString());
                        RNCalendarEvents.fetchAllEvents(estdate.toISOString().substr(0,10)+'T00:00:00.000Z', estdate.toISOString().substr(0,10)+'T23:59:59.000Z')
                            .then(events => {
                                for (event_object in events)
                                {
                                    //TODO: this is very expensive and ugly. needs to at least be cached]
                                    this.getCoordinates(events[event_object]);
                                }
                        }).catch(error => {
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

    render() {

        return (
            <View style ={styles.container}>
                <Map
                    events={this.state.events}
                />
                <Toolbar
                    date={this.state.date}
                    events={this.state.events}
                />
                <Fab
                    navigation={this.props.navigation}
                    adder={this.addEvent.bind(this)}
                />
            </View>
        );
    }
}

const today = new Date();
const estdate = new Date(today.setHours(today.getHours()-5));

//TODO: below is prob bad practice
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const today_full = months[today.getMonth()]+' '+today.getDay()+', '+today.getFullYear();

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});