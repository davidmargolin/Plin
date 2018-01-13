import React from 'react';
import {FloatingAction} from 'react-native-floating-action';

export default class Fab extends React.Component {
    render() {
        return (
            <FloatingAction
                actions={fab_actions}
                buttonColor={"#E74C3C"}
                onPressItem={(name) => {
                    this.props.navigation.navigate('NewEvent', {name: name,
                        adder: this.props.adder})
                }}
            />
        )
    }
}

const fab_actions = [
    {
        text: 'New Event',
        name: 'Add Event',
        color: '#E74C3C',
        position: 1,
        icon: require('../Resources/Images/cal.png')
    },{
        text: 'New Recurring Event',
        name: 'Add Recurring Event',
        color: '#E74C3C',
        position: 2,
        icon: require('../Resources/Images/cal.png')
    }
];
