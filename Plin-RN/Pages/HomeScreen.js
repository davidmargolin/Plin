import React from "react";
import MapComponent from './MapComponent';
import {StyleSheet, View} from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style ={styles.container}>
        <MapComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});