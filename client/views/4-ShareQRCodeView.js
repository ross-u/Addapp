import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode';
import { connect } from 'react-redux';
import { storeMyProfileJSONString }  from '../redux/actions/actions';

class ShareQRCode extends Component {

  render() {

    const  QRCstring  = this.props.myProfileJSONString;
    console.log('QRCstring.length', QRCstring.length);
    console.log('QRCstring ', QRCstring );
    return (
      <View style={styles.container}>
        <QRCode
          value={QRCstring}
          size={345}
          bgColor='black'
          fgColor='white'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 5,
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  myProfileJSONString: state.myProfileJSONString
});

const mapActionToProps = (dispatch) => ({
  storeMyProfileJSONString: ((JSONString) => dispatch(storeMyProfileJSONString(JSONString)))
});

export default connect(mapStateToProps, mapActionToProps)(ShareQRCode);