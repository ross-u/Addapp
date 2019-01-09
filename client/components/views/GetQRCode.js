import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode';

export default class GetQRCode extends Component {

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={'http://facebook.github.io/react-native/'}
          size={200}
          bgColor='blue'
          fgColor='white' 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});