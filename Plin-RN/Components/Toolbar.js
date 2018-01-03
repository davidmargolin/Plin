import React from 'react';
import {StyleSheet, View, Text,Button} from "react-native";
import EventList from "./EventList";

export default class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show_events: true,
        };
    }

    _toggle_events(){
        this.setState({show_events: !this.state.show_events})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top_bar}>
                    <View style={styles.text_view}>
                        <Text style={styles.date_text}>{this.props.date}</Text>
                        <Text style={styles.event_text}>{this.props.selected.title}</Text>
                    </View>
                    <View>
                        <Button
                            title={"h"}
                            onPress={()=>this._toggle_events()}
                        />
                    </View>
                </View>
                {this.state.show_events ? <EventList/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        marginTop: 32,
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

