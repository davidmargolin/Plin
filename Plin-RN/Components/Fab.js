import React from 'react';
import {StyleSheet} from "react-native";
import {FloatingAction} from 'react-native-floating-action';

export default class Fab extends React.Component {
    render() {
        return (
            <FloatingAction
                actions={fab_actions}
                onPressItem={(name) => {
                    this.props.adder({
                        key: name,
                        coordinate: {latitude: 40.6528, longitude: -74.0160},
                        title: "event new",
                        description: "event new desc"
                    });
                }}
            />
        )
    }
}


const fab_actions = [
    {
        text: 'New Event',
        name: '1',
        position: 1
    },{
        text: 'New Recurring Event',
        name: '2',
        position: 2
    }
];
