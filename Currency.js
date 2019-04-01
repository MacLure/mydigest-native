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

type Props = {};
export default class Currency extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loaded: true,
      error: null
    };
  }
  baseURL = "https://jsonplaceholder.typicode.com";

  getData = e => {
    this.setState({ loaded: false, error: null });
    let url = this.baseURL + "/comments";
    let h = new Headers();
    h.append("Authorization", "Bearer asdfasdf");
    h.append("X-Client", "malcolm");
    let req = new Request(url, {
      headers: h,
      method: "GET"
    });
    fetch(req)
      .then(response => response.json())
      .then(this.showData)
      .catch(this.errorMessage);
  };

  showData = data => {
    this.setState({ loaded: true, data });
    console.log(data);
  };

  errorMessage = e => {
    this.setState({ loaded: true, error: e.message });
  };

  componentDidMount() {
    // this.getData()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {!this.state.loaded && <Spinner color="cornflowerblue" />}
        <Text style={{ fontSize: 24 }}>API Calls</Text>
        <Button title="Get Data" onPress={this.getData} />
        {this.state.error != null && <Text>{this.state.error}</Text>}
        {this.state.data &&
          this.state.data.length > 0 &&
          this.state.data.map(comment => (
            <Text key={comment.id}>{comment.email}</Text>
          ))}
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
