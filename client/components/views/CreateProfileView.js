import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import FormCreateProfile from '../FormCreateProfile';

export default class CreateProfileView extends Component {
  static navigationOptions = {
    title: 'Create profile',
  };

  render() {
    return <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text> {this.props.name}</Text>
            
            <FormCreateProfile />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
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