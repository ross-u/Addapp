import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class SettingsHeaderButton extends Component {
  render() {

    return (
      <View style={styles.settingsBtn}>
        <Icon
          name='user-circle-o'
          type='font-awesome'
          size={28}
          onPress={() => this.props.navigation.navigate('MyProfile')} />
      </View>
    );
  };
}



const styles = StyleSheet.create({
  settingsBtn: {
    padding: 5,
    marginRight: 5,
    marginTop: 0

  }
});

export default SettingsHeaderButton = withNavigation(SettingsHeaderButton);