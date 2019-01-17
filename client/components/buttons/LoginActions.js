import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Keyboard, TouchableOpacity, Text, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Formik } from 'formik';
import { accentColor, accentColorShadow } from './../../utils/style';


const { width } = Dimensions.get('window');

class LoginActions extends Component {
  state = {
    borderColorU: 'white',
    borderColorD: 'white',
    borderSize: 0.5,
    inputFontSizeU: 16,
    inputFontSizeD: 16,
    marginBottomD: 120,
    logoResized: false
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.props.shrinkLogo();
  }

  _keyboardDidHide = () => {
    this.props.resetLogo();
  }

  render() {
    const { borderColorU, borderColorD, borderSize, inputFontSizeU, inputFontSizeD, marginBottomD } = this.state;
    // const {shrinkLogo} = this.props;
    const onFocusU = () => {
      this.setState({
        inputFontSizeU: 20,
        inputFontSizeD: 16,
        borderColorU: accentColor,
        marginBottomD: 10,
        // logoResized: true
      });
      // if (!this.state.logoResized) shrinkLogo();
    };
    const onFocusD = () => {
      this.setState({
        inputFontSizeD: 20,
        inputFontSizeU: 16,
        borderColorD: accentColor,
        marginBottomD: 10,
        // logoResized: true
      });
      // if (!this.state.logoResized) shrinkLogo();
    };

    const onBlurU = () => {
      this.setState({
        borderColorU: '#ededed',
      })
    };
    const onBlurD = () => {
      this.setState({
        borderColorD: '#ededed',
        borderSize: 0.2
      })
    };


    return (
      <View style={styles.container}>

      <Formik
          initialValues={{ username: '', password: '' }} 
          onSubmit={ values => {
                Keyboard.dismiss();
                console.log(JSON.stringify(values, null, 2));
                this.props.navigation.navigate('Dashboard');
              }
            }>
          {({ handleChange, handleSubmit, values }) => (

            <View style={styles.wrapper}>
              <TextInput
                textContentType="username"
                keyboardAppearance="dark"
                multiline={false}
                keyboardType="email-address"
                clearButtonMode="always"
                onBlur={() => onBlurU()}
                onFocus={() => onFocusU()}
                style={{borderBottomColor: borderColorU, borderBottomWidth: borderSize, fontSize: inputFontSizeU, color: '#FFFFFF', marginBottom: 25 }}
                returnKeyLabel={'next'}
                onChangeText={handleChange('username')}
                value={values.username}
                label=" "
                placeholder="Username"
              />

              <TextInput
                textContentType="password"
                onBlur={() => onBlurD()}
                onFocus={() => onFocusD()}
                style={{ borderBottomColor: borderColorD, borderBottomWidth: borderSize, fontSize: inputFontSizeD, color: '#FFFFFF', marginBottom: marginBottomD  }}
                onChangeText={handleChange('password')}
                value={values.password}
                returnKeyLabel={'next'}
                secureTextEntry={true}
                label=" "
                placeholder="Password"
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              

              </View>
            )}
          </Formik>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => this.props.navigation.navigate('CreateProfile')}
            title='Sign Up' 
          >
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>

      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 20
  },
  button :{
    width: width - 160,
    padding: 12,
    marginTop: 10,
    backgroundColor: accentColor,
    color: 'black',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderBottomColor: accentColorShadow,
    borderLeftColor: accentColorShadow,
    borderRightColor: accentColorShadow,
    borderBottomWidth: 4,
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
  },
  buttonText: {
    fontSize: 24
  },
  wrapper: {
    marginTop: 20,
    alignContent: 'center',
    width: width - 160
  },

})

export default LoginActions = withNavigation(LoginActions);