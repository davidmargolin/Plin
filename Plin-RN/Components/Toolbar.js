import React from 'react';
import {StyleSheet, View, Text, DatePickerAndroid} from "react-native";
import EventList from "./EventList";
import { Constants } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export default class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show_events: false,
        };
    }
    async showCalender() {
        const {action, year, month, day} = await DatePickerAndroid.open({date: this.props.date});
        if (action !== DatePickerAndroid.dismissedAction) {
            this.props.change_date(new Date(year, month, day))
        }
    }

    toggleEvents(){
        this.setState({show_events: !this.state.show_events})
    }

    fullDate(){
        const dateFormat = require('dateformat');
        return dateFormat(this.props.date, "mmmm dS, yyyy");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top_bar}>
                    <View style={styles.text_view}>
                        <Text
                            style={styles.date_text}
                            onPress={()=>this.showCalender()}
                        >{
                            this.fullDate()
                        }</Text>
                        <Text style={styles.event_text}>{
                             (this.props.events.length>0? this.props.events.length>1? this.props.events.length+' Events': '1 Event': 'No Events')
                        }</Text>
                    </View>
                    <View>
                        <MaterialIcons.Button
                            name="list"
                            size={32}
                            backgroundColor="#ffffff"
                            color="#000000"
                            onPress={()=>this.toggleEvents()}
                        />
                    </View>
                </View>
                {this.state.show_events ? <EventList events={this.props.events}/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        marginTop: Constants.statusBarHeight + 8,
        margin: 8,
    },
    top_bar: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        borderRadius: 10,
        height: 58,
        justifyContent: 'space-between',
        elevation: 3,
        marginBottom: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 16,
    },
    date_text: {
        fontSize: 16,
    },
    event_text: {
        fontSize: 14,
    },
    button: {
        width: 5
    },
    text_view:{
        //alignSelf: 'stretch',
    }
});
