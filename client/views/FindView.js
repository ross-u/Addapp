import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NavigationRowBottom from './../components/NavigationRowBottom';
import DashboardActions from './../components/buttons/DashboardActions';
import SearchBarHeader from './../components/buttons/SearchBarHeader';
import { backgroundColor, headerColor, accentColor } from './../utils/style';

export default class FindView extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerBackgroundTransitionPreset: 'toggle',
    title: 'Dashboard',
    header: (
      <SearchBarHeader></SearchBarHeader>),
    headerStyle: { backgroundColor: headerColor },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contactsWrapper}>
          <Text> FIND VIEW</Text>
        </View>
        
        <DashboardActions></DashboardActions>
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