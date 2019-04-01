import React, { Component } from "react";
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
import { formatTestResults } from "@jest/test-result";
import { Spinner } from "native-base";
import { getCurrencyRates } from "./service";

type Props = {};
export default class Currency extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      currencyRates: {}
    };
  }

  componentDidMount = () => {
    this.getExchangeRates();
  };

  getExchangeRates = () => {
    getCurrencyRates()
      .then(currencyRates => {
        this.setState({ currencyRates, refreshing: false });
      })
      .catch(() => this.setState({ refreshing: false }));
  };

  render() {
    const CAD2USD =
      this.state.currencyRates["USDCAD"] / this.state.currencyRates["USDUSD"];
    const CAD2CAD =
      this.state.currencyRates["USDCAD"] / this.state.currencyRates["USDCAD"];
    const CAD2JPY =
      this.state.currencyRates["USDCAD"] / this.state.currencyRates["USDJPY"];
    const CAD2EUR =
      this.state.currencyRates["USDCAD"] / this.state.currencyRates["USDEUR"];

    return (
      <ScrollView style={styles.container}>
        <Text>$: {CAD2USD.toFixed(2)}</Text>
        <Text>¥: {CAD2JPY.toFixed(2)}</Text>
        <Text>€: {CAD2EUR.toFixed(2)}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
