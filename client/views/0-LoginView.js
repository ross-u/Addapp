import React, { Component } from 'react';
import { View, StyleSheet, Image, Keyboard } from 'react-native';

import LoginActions from './../components/buttons/LoginActions';
import { connect } from 'react-redux';
import { storeMyProfile, storeMyId }  from '../redux/actions/actions';
import { backgroundColor } from '../utils/style';
import { API_URL } from './../config';

const BASE_URL = `${API_URL}/me`;

class LoginView extends Component {
  state = {
    logoHeight: 140,
    logoWidth: 140,
    logoTextHeight: 27,
    logoTextWidth: 90,
  }
  static navigationOptions = {
    header: null
  };

   getAndStoreUserId = (username) => {
     let myID = '';
     if ( username === 'ross' ) myID = '5c3baa4c3a9a4827458432cb';
     else if ( username === 'luca' ) myID = '5c3c6b4b03e8521e722e1b96';
     this.props.storeMyId(myID);
  }

  shrinkLogo = () => {
    this.setState({ logoHeight:100, logoWidth:100, logoTextHeight:20,logoTextWidth: 63 })
  }
  resetLogo = () => {
    this.setState({
      logoHeight: 140, logoWidth: 140, logoTextHeight: 27, logoTextWidth: 90 })
  }
  // Refactor - This 2 functions should run upon successfull login after the button click
  componentDidMount () {
    this.getAndStoreUserId('ross');
    // this.getMyProfileFromDB(this.props.me._id);
  }
  
  render() {

    const { logoHeight, logoWidth, logoTextHeight, logoTextWidth } = this.state;


    return (
      <View style={styles.container}>
        <View style={styles.sectionWrapper}>
          <Image
            style={[styles.logo, {height: logoHeight, width: logoWidth}]}
            source={require('../assets/addapp_logo_round_night_new.png')}
            onPress={() => Keyboard.dismiss()}
          />
          <Image
            style={[styles.logoText, { height: logoTextHeight, width: logoTextWidth,}]}
            source={require('../assets/addapp_text_logo_night.png')}
          />
        </View>
        <View style={styles.buttonsWrapper}>
            <LoginActions 
              shrinkLogo={this.shrinkLogo}
              resetLogo={this.resetLogo}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: backgroundColor
  },
  logoLarge: {
    fontSize: 30
  },
  sectionWrapper: {
    flex: 1,
    alignContent: 'center',
  },
  buttonsWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 5,
    marginTop: 30,
  },
  logoText: {
    alignSelf: 'center',
    marginBottom: 40,
  }
});

const mapStateToProps = (state) => ({
  me: state.myProfile
})

const mapActionToProps = (dispatch) => ({
  storeMyProfile: ((myProfile) => dispatch(storeMyProfile(myProfile))),
  storeMyId: ((id) => dispatch(storeMyId(id)))
});

export default connect(mapStateToProps, mapActionToProps)(LoginView);