import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class SettingsHeaderButton extends Component {
  render() {

    return (
      <View style={styles.settingsBtn}>
        <Icon
          name='ellipsis-v'
          type='font-awesome'
          onPress={() => console.log('Pressed: Settings header BTN')} />
      </View>
    );
  };
}



const styles = StyleSheet.create({
  settingsBtn: {
    padding: 5,
    marginRight: 5,
    marginTop: 3

  }
});

export default SettingsHeaderButton = withNavigation(SettingsHeaderButton);