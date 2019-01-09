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
    return (
      <View style={styles.container}>
        <View style={styles.contactsWrapper}>

          <Text> {this.props.name}</Text>   
          <Avatar
            xlarge
            rounded
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />

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