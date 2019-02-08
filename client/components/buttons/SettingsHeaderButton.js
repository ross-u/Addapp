import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class SettingsHeaderButton extends Component {
  render() {

    return (
      <View style={styles.settingsBtn}>
        <Icon
          name='user-circle'
          type='font-awesome'
          size={32}
          color='white'
          onPress={() => this.props.navigation.navigate('MyProfile')}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  settingsBtn: {
    padding: 2,
    marginRight: 10,
    marginTop: 1,
  }
});

export default SettingsHeaderButton = withNavigation(SettingsHeaderButton);