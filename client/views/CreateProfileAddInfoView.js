import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FormCreateProfileAddInfo from '../components/CreateProfileAddInfo';

export default class CreateProfileAddInfoView extends Component {
  static navigationOptions = {
    title: 'Create profile - Add Info',
  };

  render() {
    return <View style={styles.container}>
        <View style={styles.wrapper}>
            <FormCreateProfileAddInfo />
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