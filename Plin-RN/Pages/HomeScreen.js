import React from "react";
import MapComponent from './MapComponent';
import {StyleSheet, View, Button} from "react-native";

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
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});