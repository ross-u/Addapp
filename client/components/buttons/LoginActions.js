import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class LoginActions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            buttonStyle={styles.button}
            onPress={ () => this.props.navigation.navigate('CreateProfile')}
            raised
            title='Sign Up' 
            fontSize={24}
            />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={ () => this.props.navigation.navigate('Dashboard')}
            buttonStyle={styles.button}
            raised
            title='Login' 
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
  }
})

export default LoginActions = withNavigation(LoginActions);