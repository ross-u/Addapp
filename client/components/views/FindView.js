import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

import ContactsScrollView from '../ContactsScrollPanel';
import NavigationRowBottom from '../NavigationRowBottom';
import ContactActions from '../buttons/ContactActionsButtons';
import SearchBarHeader from '../buttons/SearchBarHeader';

export default class FindView extends Component {
  static navigationOptions = {
    header: (
      <SearchBarHeader></SearchBarHeader>),
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contactsWrapper}>
          <Text> FIND VIEW</Text>
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
  searchWrapper: {
    padding: 10,
    alignItems: 'center'
  },
  boxSmall: {
    width: 200,
    height: 60,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    height: 50,
    backgroundColor: 'steelblue',
  },
  contactActions: {
    justifyContent: 'center',
    width: 200
  }
})