import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class HeadersMenuButton extends Component {
  render() {
    return (
      <View>
        <Icon
          name='g-menu'
          color='#00aced' />
      </View>
    )
  }
}

class HeadersLogo extends Component {
  render() {
    return (
      <View>
        <Image source={}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})

module.exports = {
  HeadersMenuButton,
  HeadersLogo
}