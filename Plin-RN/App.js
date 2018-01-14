import React from 'react';
import HomeScreen from './Pages/HomeScreen';
import NewEventScreen from './Pages/NewEventScreen';
import ProfileScreen from './Pages/ProfileScreen';
import { StackNavigator } from 'react-navigation';
import {Permissions} from 'expo';
import RNCalendarEvents from 'react-native-calendar-events';


const PlinApp = StackNavigator({
    Home: { screen: HomeScreen,
        navigationOptions: {title: 'Event Map', header: null }},
    Profile: { screen: ProfileScreen,
        navigationOptions: {title: 'Profile', header: null }},
    NewEvent: { screen: NewEventScreen,
        navigationOptions: {title: 'Add Event', header: null }},
});


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            location_enabled: 'undetermined',
            calendar_enabled: 'undetermined'
        }
    }

    render() {
        Permissions.askAsync(Permissions.LOCATION).then(result=>{
            this.setState({location_enabled: result.status})
            RNCalendarEvents.authorizeEventStore().then(result=>{
                this.setState({calendar_enabled: result})
            }).catch(error=> console.log(error));
        }).catch(error=> console.log(error));

        if (this.state.location_enabled == 'granted' && this.state.calendar_enabled == 'authorized') {
            return (
                <PlinApp/>
            );
        }else{
            return null
        }
    }
}



