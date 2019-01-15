import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Avatar, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';
import { storeContacts }  from './../../redux/actions/actions';
import { accentColor, backgroundColor } from '../../utils/style';

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

        <View style={styles.buttonLeftWrapper}>
          <Button
            onPress={ () => this.props.navigation.navigate('AddContactScanQRCView')}
            buttonStyle={styles.button}
            icon={{ name: 'person-add', size: 34, color: "black" }}
          />
        </View>

        <View style={styles.buttonRightWrapper}>
          {/* <Button
            buttonStyle={styles.buttonRound}
            onPress={ () => this.props.navigation.navigate('MyProfile', {
              contacts: this.props.contacts
            })}
            large
            rounded
            raised
            icon={{ name: 'share', size: 36 }}
            /> */}

          <TouchableOpacity
            style={styles.buttonRound}
          >
            <Icon 
              type='font-awesome'
              name='share-alt'
              size={36}
              color="black"
           />
          </TouchableOpacity>
        </View>

      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonLeftWrapper: {
    flex: 4,
    paddingRight: 0,
    paddingLeft: 30,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonRightWrapper: {
    flex: 2,
    paddingRight: 20,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: backgroundColor
  },
  button :{
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
    height: 60,
    backgroundColor: accentColor,
    borderRadius: 30,
  },
  buttonRound :{
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    backgroundColor: accentColor,
    borderRadius: 65,
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