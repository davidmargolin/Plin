import React from 'react';
import {MapView} from 'expo';
import {StyleSheet} from 'react-native';
import TaskList from "./TaskList";
import { mapStyles } from "./MapStyles";

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state={
            default_location:{},
        };
        navigator.geolocation.getCurrentPosition((position) => {
            position.coords['latitudeDelta'] = 0.1;
            position.coords['longitudeDelta'] = 0.1;
            this.setState({
                default_location: position.coords
            });
        }, (error)=>{
            console.log(error)
        },{
            enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
        });
    }

    onRegionChange(region) {
        this.setState({ default_location: region });
    }

	render() {
		return (
            <MapView
                style={styles.map}
                region={this.state.default_location}
                onRegionChange={(region)=>this.onRegionChange(region)}
                pitchEnabled={false}
                customMapStyle={mapStyles}>
                {this.props.events.map((event)=>{
                    if (event.location){
                        return(
                            <MapView.Marker
                                key={event.title}
                                image={require('../Resources/Images/pinmock.png')}
                                coordinate={event.coordinate}
                            >
                                <MapView.Callout
                                    tooltip={true}
                                >
                                    <TaskList
                                        tasks={event.tasks}
                                    />
                                </MapView.Callout>
                            </MapView.Marker>
                        )
                    }
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

