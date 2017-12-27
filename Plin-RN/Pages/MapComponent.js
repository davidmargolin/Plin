import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';

export default class MapComponent extends React.Component {
	render() {
		return (
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                <MapView.Marker
                    coordinate={{latitude: 37.78825,
                        longitude: -122.4324}}
                    title={"marker name"}
                    description={"more info"}
                />
            </MapView>
		)
	}
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

