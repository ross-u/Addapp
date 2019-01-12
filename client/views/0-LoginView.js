import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Keyboard } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import LoginActions from './../components/buttons/LoginActions';
import { connect } from 'react-redux';
import { storeMyProfile, storeMyId }  from '../redux/actions/actions';
import { Formik } from 'formik';
import { TextField } from 'react-native-material-textfield';

const BASE_URL = "http://192.168.1.149:3000/me";
const { width } = Dimensions.get('window');

class LoginView extends Component {
  static navigationOptions = {
    title: 'appname.',
  };

  //  Refactor - This function need to be refactored upon implementing the 
  //  authentication.
  //  Currently it only works as a mock
  getMyIDUponLoginAndStoreIt = () => {
    const myID = "5c37b33210774810473a5361";
    this.props.storeMyId(myID);
  }
  
  getMyProfileFromDB = () => {
    fetch(`${BASE_URL}/${this.props.me._id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(rawData => rawData.json())
    .then( (myProfile) => {
      this.props.storeMyProfile(myProfile[0]);
    });
  };
  
  // Refactor - This 2 functions should run upon successfull login after the button click
  componentDidMount () {
    this.getMyIDUponLoginAndStoreIt();
    this.getMyProfileFromDB(this.props.me._id);
  }
  
  render() {
    const { contacts } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.logoLarge}> {'appname.'} </Text>
              <Avatar
                large
                rounded
                activeOpacity={0.7} 
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/1024px-Circle_Davys-Grey_Solid.svg.png" }}
                onPress={() => console.log("Works!")} 
              />
        
          <LoginActions></LoginActions>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoLarge: {
    fontSize: 40
  },
  wrapper: {
    alignContent: 'center',
    width: width - 100
  },
  formField: {
  }
});

const mapStateToProps = (state) => ({
  me: state.me
})

const mapActionToProps = (dispatch) => ({
  storeMyProfile: ((myProfile) => dispatch(storeMyProfile(myProfile))),
  storeMyId: ((id) => dispatch(storeMyId(id)))
});

export default connect(mapStateToProps, mapActionToProps)(LoginView);