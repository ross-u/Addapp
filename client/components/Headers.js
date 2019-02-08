import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Headers extends Component {
  state = {
    headersVisible: true
  };

  onPressFind = () => {
    this.setState({ headersVisible: !this.state.headersVisible });
  };

  render() {
    return <View />;
  }
}
