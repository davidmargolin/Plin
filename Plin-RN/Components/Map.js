import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet} from 'react-native';
import TaskList from "./TaskList";
import { mapStyles } from "./MapStyles";

export default class Map extends React.Component {
	render() {
		return (
            <MapView
                region={default_location}
                customMapStyle={mapStyles}>
                {this.props.events.map(function(event){
                    return <MapView.Marker
                        key={event.key}
                        coordinate={event.coordinate}
                    >
                        <MapView.Callout
                            tooltip={true}
                        >
                            <TaskList
                                tasks={event.tasks}
                            />
                        </MapView.Callout>
                    </MapView.Marker>;
                })}
            </MapView>
		)
	}
}

const default_location = {
    latitude: 40.7128,
    longitude: -74.0060,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});