import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class NavigationRowBottom extends Component {
  render() {
    return (
      <View style={styles.navigationContainer}>
        <Icon style={styles.icons}
          type='entypo'
          name='network'
          size={36}
          raised={true}
        />

        <Icon style={styles.icons}
          type='font-awesome'
          name='info'
          color='#00aced'
          size={36}
          raised={true}
        />

        <Icon style={styles.icons}
          type='font-awesome'
          name='font-awesome'
          color='#517fa4'
          size={36}
          raised={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icons: {
    
  }
})