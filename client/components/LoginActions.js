import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { withNavigation } from "react-navigation";

import { Formik } from "formik";
import { accentColor, accentColorShadow } from "../utils/style";
import AuthInput from './AuthInput';

const { width } = Dimensions.get("window");

class LoginActions extends Component {
  state = {
    borderSize: 0.5,
    inputFontSizeFieldUsername: 16,
    inputFontSizeFieldPassword: 16,
    marginBottomD: 120,
    logoResized: false
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.props.shrinkLogo();
  };

  _keyboardDidHide = () => {
    this.props.resetLogo();
  };

  render() {

    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={values => {
            Keyboard.dismiss();
            this.props.navigation.navigate("Dashboard");
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View style={styles.wrapper}>
              <AuthInput
                inputName='Username'
                valueFromFormikState={values.username}
                keyboardType="email-address"
                handleChange={handleChange}
              />
              <AuthInput
                inputName='Password'
                valueFromFormikState={values.password}
                keyboardType="email-address"
                handleChange={handleChange}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CreateProfile")}
            title="Sign Up"
          >
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </TouchableOpacity>
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
    marginBottom: 10,
    paddingBottom: 20
  },
  button: {
    width: width - 160,
    padding: 12,
    marginTop: 10,
    backgroundColor: accentColor,
    color: "black",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderBottomColor: accentColorShadow,
    borderLeftColor: accentColorShadow,
    borderRightColor: accentColorShadow,
    borderBottomWidth: 4,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3
  },
  buttonText: {
    fontSize: 24
  },
  wrapper: {
    marginTop: 20,
    alignContent: "center",
    width: width - 160
  }
});

export default (LoginActions = withNavigation(LoginActions));
