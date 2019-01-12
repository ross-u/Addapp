import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';
import { storeContacts }  from './../../redux/actions/actions';

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
            onPress={ () => this.props.navigation.navigate('MyProfile', {
              contacts: this.props.contacts
            })}
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

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts)))
})

const DashboardActionsWithNav = withNavigation(DashboardActions);
export default connect(mapStateToProps, mapActionToProps)(DashboardActionsWithNav);