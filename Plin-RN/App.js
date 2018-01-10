import React from 'react';
import HomeScreen from './Pages/HomeScreen';
import NewEventScreen from './Pages/NewEventScreen';
import ProfileScreen from './Pages/ProfileScreen';
import { StackNavigator } from 'react-navigation';


const PlinApp = StackNavigator({
    /*
    Home: { screen: HomeScreen,
        navigationOptions: {title: 'Event Map', header: null }},
    Profile: { screen: ProfileScreen,
        navigationOptions: {title: 'Profile', header: null }},*/
    NewEvent: { screen: NewEventScreen,
        navigationOptions: {title: 'Add Event', header: null }},
});


export default class App extends React.Component {
  render() {
    return (
        <PlinApp />
    );
  }
}



