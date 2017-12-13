import React from "react";
import MapComponent from './MapComponent';
import {StyleSheet, Text, View} from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});