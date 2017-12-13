import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default class MapComponent extends React.Component {
	render() {
		return (
			<MapView
    			initialRegion={{
      				latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
    			}}
  			/>
		)
	}
}


