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
        <View style={styles.article}>
          {this.state.businessArticles.map(article => (
            <Text key={article.url} style={styles.article}>
              {article.title}
            </Text>
          ))}
        </View>
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
  articles: {
    textAlign: "left"
  },
  article: {
    fontSize: 12,
    margin: 5
  }
});
