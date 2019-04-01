/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { getJpNews } from "./service";

type Props = {};
export default class News extends Component<Props> {
  constructor() {
    super();
    this.state = {
      businessArticles: []
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    getJpNews()
      .then(businessArticles => {
        this.setState({ businessArticles, refreshing: false });
      })
      .catch(() => this.setState({ refreshing: false }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>ニュース</Text>
        {this.state.businessArticles.map(article => (
          <Text key={article.url}>{article.title}</Text>
        ))}
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
    fontSize: 50,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
