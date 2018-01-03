import React from 'react';
import {FloatingAction} from 'react-native-floating-action';

export default class Fab extends React.Component {
    render() {
        return (
            <FloatingAction
                actions={fab_actions}
                buttonColor={"#C0392B"}
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
        position: 1
    },{
        text: 'New Recurring Event',
        name: 'Add Recurring Event',
        position: 2
    }
];
