import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class ContactActions extends Component {
  state = {
    buttonsVisible: true
  }

  onPressFind = () => {
    this.setState({ buttonsVisible : !this.state.buttonsVisible})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          {/* <Button
            buttonStyle={styles.button}
            onPress={ () => this.props.navigation.navigate('FindView')}
            raised
            title='FIND' 
            fontSize={24}
            /> */}
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={ () => this.props.navigation.navigate('AddContactView')}
            buttonStyle={styles.button}
            raised
            icon={{ name: 'person-add', size: 30 }}
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

export default ContactActions = withNavigation(ContactActions);