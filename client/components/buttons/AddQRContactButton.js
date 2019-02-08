import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default class AddQRContactButton extends Component {
  state = {
    buttonsVisible: true
  };

  onPressFind = () => {
    this.setState({ buttonsVisible: !this.state.buttonsVisible });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => console.log("AddQRContactButton pressed!")}
            buttonStyle={styles.button}
            round
            raised
            icon={{ name: "person-add", size: 30 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttonWrapper: {
    alignItems: "center",
    marginBottom: 10
  },
  button: {
    width: 200,
    height: 200
  }
});
