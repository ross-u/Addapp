import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class NavigationRowBottom extends Component {
  render() {
    return (
      <View style={styles.navigationContainer}>
        <Icon style={styles.icons}
          name='rowing'
          size={36}
          raised={true}
        />

        <Icon style={styles.icons}
          name='g-translate'
          color='#00aced'
          size={36}
          raised={true}
        />

        <Icon style={styles.icons}
          name='sc-telegram'
          type='evilicon'
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
    backgroundColor: 'steelblue',
  },
  icons: {
    
  }
})