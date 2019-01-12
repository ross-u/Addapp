import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


import { connect } from 'react-redux';
import { storeMyProfile, storeMyId }  from '../../redux/actions/actions';

import { Formik } from 'formik';
import { TextField } from 'react-native-material-textfield';

const BASE_URL = "http://192.168.1.149:3000/me";
const { width } = Dimensions.get('window');

class LoginActions extends Component {

  render() {
    return (
      <View style={styles.container}>

      <Formik 
            initialValues={{ username: '', password: '' }} 
            onSubmit={ values => {
                console.log(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
                this.props.navigation.navigate('Dashboard');
              }
            }>
          {({ handleChange, handleSubmit, values }) => (

            <View style={styles.wrapper}>

              <TextField
                style={styles.formField}
                onChangeText={handleChange('username')}
                value={values.username}
                label="Username"
                placeholder="Username"
              />

              <TextField
                style={styles.formField}
                onChangeText={handleChange('password')}
                value={values.password}
                label="Password"
                placeholder="Password"
              />

              <Button
                onPress={handleSubmit}
                buttonStyle={styles.button}
                raised
                title='Login'
                fontSize={24}
              />

              </View>
            )}
          </Formik>

        <View style={styles.buttonWrapper}>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            buttonStyle={styles.button}
            onPress={ () => this.props.navigation.navigate('CreateProfile')}
            raised
            title='Sign Up' 
            fontSize={24}
            />
        </View>

      </View>

      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 10
  },
  button :{
    width: 225,
  },
  wrapper: {
    alignContent: 'center',
    width: width - 100
  },
  formField: {
  }
})

export default LoginActions = withNavigation(LoginActions);