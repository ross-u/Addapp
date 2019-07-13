import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";

import { Formik } from "formik";

import { accentColor, accentColorShadow } from "../utils/style";

class AuthInput extends Component {
  state = {
    borderSize: 0.5,
    inputFontSizeFieldUsername: 16,
    inputFontSizeFieldPassword: 16,
    marginBottomD: 120,
    logoResized: false
  };


  getStyleFromState = (fieldName) => {
    if (fieldName === "Username") {
      return {
        borderBottomColor: this.state.borderColorFieldUsername || 'white',
        borderBottomWidth: this.state.borderSize,
        fontSize: this.state.inputFontSizeFieldUsername,
        color: "white",
        marginBottom: 25
      }
    }
    else if (fieldName === "Password") {
      return {
        borderBottomColor: this.state.borderColorFieldPassword || 'white',
        borderBottomWidth: this.state.borderSize,
        fontSize: this.state.inputFontSizeFieldPassword,
        color: "white",
        marginBottom: this.state.marginBottomD
      }
    }
  }

  onUsernameFocus = () => {
    this.setState({
      inputFontSizeFieldUsername: 20,
      inputFontSizeFieldPassword: 16,
      borderColorFieldUsername: accentColor,
      marginBottomD: 10
    });
  };

  onPasswordFocus = () => {
    this.setState({
      inputFontSizeFieldPassword: 20,
      inputFontSizeFieldUsername: 16,
      borderColorFieldPassword: accentColor,
      marginBottomD: 10
    });
  };

  onFocus = (fieldName) => {
    if (fieldName === 'Username') {
      this.setState({
        inputFontSizeFieldUsername: 20,
        inputFontSizeFieldPassword: 16,
        borderColorFieldUsername: accentColor,
        marginBottomD: 10
      });
    }

    else if (fieldName === "Password") {
      this.setState({
        inputFontSizeFieldPassword: 20,
        inputFontSizeFieldUsername: 16,
        borderColorFieldPassword: accentColor,
        marginBottomD: 10
      });
    }
  }

  onBlur = (fieldName) => {
    this.setState({
      [`borderColorField${fieldName}`]: 'white'
    });
  };

  onPasswordBlur = () => {
    this.setState({
      borderColorFieldPassword: 'white',
      borderSize: 0.2
    });
  };

  render() {
    const { inputName, valueFromFormikState, keyboardType, handleChange } = this.props;
    const inputNameLowercase = inputName.toLowerCase();

    return (
      <TextInput
        style={this.getStyleFromState(inputName)}
        value={valueFromFormikState}
        placeholder={inputName}
        textContentType={inputNameLowercase}
        keyboardType={keyboardType || "default"}
        keyboardAppearance="dark"
        multiline={false}
        clearButtonMode="always"
        returnKeyLabel={"next"}
        onBlur={() => this.onBlur(inputName)}
        onFocus={() => this.onFocus(inputName)}
        onChangeText={handleChange(inputNameLowercase)}
      />
    )

  };
}

export default AuthInput;