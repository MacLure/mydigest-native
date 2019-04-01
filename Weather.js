/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

type Props = {};
export default class Weather extends Component<Props> {
  constructor() {
    super();
    this.state = {
      ready: false,
      where: { lat: null, lon: null },
      error: null
    };
  }

  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24 // seconds * minutes * hours - how often does geolocatin need to update?
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    ); // takes 3 arguments
  }

  geoSuccess = position => {
    console.log(position.coords.latitude);
    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lon: position.coords.longitude }
    });
  };

  geoFailure = err => {
    this.setState({ error: error.message });
  };

  render() {
    return (
      <View>
        <Text style={styles.welcome}>天気</Text>
        {!this.state.ready && <Text>Using Geolocation in React Native.</Text>}
        {this.state.error && <Text>Error.</Text>}
        {this.state.ready && (
          <View>
            <Text>緯度: {this.state.where.lat}</Text>
            <Text>軽度: {this.state.where.lon}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
