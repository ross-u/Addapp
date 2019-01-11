import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class DashboardActions extends Component {
  state = {
    buttonsVisible: true
  }

  onPressFind = () => {
    this.setState({ buttonsVisible : !this.state.buttonsVisible})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Avatar
            onPress={ () => this.props.navigation.navigate('MyProfile')}
            large
            rounded
            raised
            icon={{ name: 'share', size: 36 }}
            />
        </View>

        

        <View style={styles.buttonWrapper}>
          <Button
            onPress={ () => this.props.navigation.navigate('AddContactScanQRCView')}
            buttonStyle={styles.button}
            raised
            icon={{ name: 'person-add', size: 30 }}
          />
        </View>
      </View>

      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 10
  },
  button :{
    width: 225,
  },
  buttonRound :{
    width: 100,
    height: 100,
    borderRadius: 100
  }
})

export default DashboardActions = withNavigation(DashboardActions);
