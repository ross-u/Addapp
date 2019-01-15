import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode';
import { connect } from 'react-redux';
import { storeFriendsProfileJSONString }  from '../redux/actions/actions';

class ShareFriendsQRCodeView extends Component {

  render() {

    const  QRCstring  = this.props.friendsProfileInViewJSONString;
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
  friendsProfileInViewJSONString: state.friendsProfileInViewJSONString
});

const mapActionToProps = (dispatch) => ({
  storeFriendsProfileJSONString: ((JSONString) => dispatch(storeFriendsProfileJSONString(JSONString)))
});

export default connect(mapStateToProps, mapActionToProps)(ShareFriendsQRCodeView);