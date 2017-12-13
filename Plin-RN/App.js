import React from 'react';
import HomeScreen from './Pages/HomeScreen';
import ProfileScreen from './Pages/ProfileScreen';
import { StackNavigator } from 'react-navigation';


const PlinApp = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});


export default class App extends React.Component {
  render() {
    return (
        <PlinApp/>
    );
  }
}



