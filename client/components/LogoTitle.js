import React, { Component } from "react";
import { Image } from "react-native";

export default class LogoTitle extends Component {
  state = {
    showImage: true
  };
  render() {
    return (
      <View>
        <Image
          source={require("../assets/addapp_logo_long_night.png")}
          style={{ width: 90, height: 19, marginLeft: 20 }}
        />
      </View>
    );
  }
}
