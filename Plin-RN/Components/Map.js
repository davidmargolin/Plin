import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet} from 'react-native';
import TaskList from "./TaskList";
import { mapStyles } from "./MapStyles";

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state={
            default_location:{
                latitude: 40.7128,
                longitude: -74.0060,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            position.coords['latitudeDelta'] = 0.015;
            position.coords['longitudeDelta'] = 0.015;
            this.setState({
                default_location: position.coords
            });
            console.log(position.coords)
        }, (error)=>{
            console.log(error)
        },{
            enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
        })
    }

	render() {
		return (
            <MapView
                style={styles.map}
                region={this.state.default_location}
                customMapStyle={mapStyles}>
                {this.props.events.map((event)=>{
                    return <MapView.Marker
                        key={event.key}
                        image={require('../Resources/Images/pinmock.png')}
                        coordinate={event.coordinate}
                        onPress={(event)=>this.props.changeSelected(event)}
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

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


