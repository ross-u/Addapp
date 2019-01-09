import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, Alert } from 'react-native';
import { Button, Avatar, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { BarCodeScanner, Permissions, Constants, Camera } from 'expo';

import HeadersActions from '../HeadersActions';
import AddQRContactButton from '../buttons/AddQRContactButton';

const { width } = Dimensions.get('window');

export default class BarcodeScanner extends React.Component {
  static navigationOptions = {
    title: 'Add Contact',
    headerRight: (
      <HeadersActions></HeadersActions>),
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
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    console.log('Scan successful!', JSON.stringify(data))
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
              <BarCodeScanner
            
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeRead={this._handleBarCodeRead}
                style={{ height: 200, width: width }}
              />
          }
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    // paddingTop: Constants.statusBarHeight,
  },
  searchWrapper: {
    padding: 10,
    alignItems: 'center'
  },
})