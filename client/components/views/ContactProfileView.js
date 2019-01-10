import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

import ContactsScrollView from '../ContactsScrollPanel';
import NavigationRowBottom from '../NavigationRowBottom';
import ContactActions from '../buttons/ContactActionsButtons';
import HeadersActions from '../HeadersActions';

export default class ContactProfileView extends Component {
  static navigationOptions = {
    title: 'Profile View',
    headerRight: (
      <HeadersActions></HeadersActions>),
  };

  render() {
    const { navigation } = this.props;
    const contact = navigation.getParam('contact', 'some default value');
    const { fName, lName } = contact.personal;
    const {photo} = contact;
    return (
      <View style={styles.container}>
        <View style={styles.contactsWrapper}>

          <Avatar
            xlarge
            rounded
            source={{ uri: photo }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text
            style={styles.name}
          >
            {`${fName} ${lName}`}
          </Text> 

        </View>
        <ContactActions></ContactActions>
        <NavigationRowBottom />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactsWrapper: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 38,
    alignItems: 'center'
  },
})