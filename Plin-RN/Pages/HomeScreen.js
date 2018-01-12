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
        };
    }
    componentWillMount(){
        // get all calendars
        // for calendar, get events for day
        // geocode locations
        // sort into tasks for events that happen at the same location
        // update events state
        Promise.all([
            RNCalendarEvents.authorizeEventStore(),
            RNCalendarEvents.findCalendars(),
            RNCalendarEvents.fetchAllEvents(estdate.toISOString().substr(0,10)+'T00:00:00.000Z', estdate.toISOString().substr(0,10)+'T23:59:59.000Z')
        ]).then(results => {
            console.log(results[2]);
            results[2].map(event => {
                //getCoordinates(event)
                Expo.Location.geocodeAsync(event.location).then(latlng=>{
                    console.log(latlng);
                    event['coordinate'] = latlng[0];
                    event['tasks']=[{'key':event['id'],'title': event['title']}];
                    event['key'] = event['id'];
                    this.setState({events: [...this.state.events, event]});
                    console.log(this.state.events)
                }).catch(error => {
                    console.log(error)
                })
            })
        }).catch(err => {
            console.log(err)
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

