import React, { Component } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { BarCodeScanner, Permissions } from "expo";
import { withNavigation } from "react-navigation";
import { accentColor, accentColorShadow, headerColor } from "../utils/style";

import { decompressProfile } from "./../utils/profile-obj-compress";

const { width } = Dimensions.get("window");

class BarcodeScanner extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerBackgroundTransitionPreset: "toggle",
    title: "Add Contact",
    headerStyle: { backgroundColor: headerColor },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = data => {
    let dataParsed = JSON.parse(data.data);
    let decompressed = decompressProfile(dataParsed);
    console.log("Scan successful!", decompressed);
    this.props.navigation.navigate("AddNewContact", {
      newContact: decompressed
    });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {this.state.hasCameraPermission === null ? (
            <Text>Requesting for camera permission</Text>
          ) : this.state.hasCameraPermission === false ? (
            <Text>Camera permission is not granted</Text>
          ) : (
            <BarCodeScanner
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: width, alignItems: "center" }}
            >
              <Image
                source={require("./../assets/addapp_logo_square_transparent.png")}
                style={{ height: 200, width: 200, alignItems: "center" }}
              />
            </BarCodeScanner>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonRound}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon type="entypo" name="cross" size={36} color="black" />
          </TouchableOpacity>
          <Text style={styles.whiteText}>Go Back</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: headerColor,
    alignItems: "center",
    paddingBottom: 20
  },
  buttonRound: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: accentColor,
    borderRadius: 65,

    borderBottomColor: accentColorShadow,
    borderLeftColor: accentColorShadow,
    borderRightColor: accentColorShadow,
    borderBottomWidth: 4,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2
  },
  whiteText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "100",
    color: "#FFFFFF"
  }
});

export default (BarcodeScanner = withNavigation(BarcodeScanner));
