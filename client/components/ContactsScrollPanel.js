import React, { Component } from 'react';
import { View, ScrollView, Alert, StyleSheet, Button } from 'react-native';
// import { Button } from 'react-native-elements';

import ContactViewTab from './ContactTab';

export default class ContactsScrollPanel extends Component {

  buttonTest = () => {
    
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  render() {

    const names = ['Bob', 'Rob', 'Sarah', 'Amy', 'John'];

    return (
      <View style={styles.container}>
        <ScrollView>
          {names.map( (name, i) => 
            { return <ContactViewTab name={name} data={'test'} key={i} ></ContactViewTab> })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boxSmall: {
    width: 200,
    height: 60,
    marginBottom: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {

    height: 50,
    backgroundColor: 'steelblue',
  },
})