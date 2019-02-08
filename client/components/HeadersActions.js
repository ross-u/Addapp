import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import SearchHeaderButton from "./buttons/SearchHeaderButton";
import SettingsHeaderButton from "./buttons/SettingsHeaderButton";

export default class HeadersActions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchHeaderButton />
        <SettingsHeaderButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
