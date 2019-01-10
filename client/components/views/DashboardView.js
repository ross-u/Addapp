import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import ContactsScrollPanel from '../ContactsScrollPanel';
import ContactActions from '../buttons/ContactActionsButtons';
import HeadersActions from '../HeadersActions';

import { storeContacts, storeMyId }  from '../../redux/actions/actions';

const BASE_URL = "http://192.168.1.149:3000/user-friends";

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerRight: (
      <HeadersActions></HeadersActions>),
  };
  
  logContacs = () => {
    result = this.props.contacts;
    console.log('logContacs', result);
  };



  getMyContacts = () => {
    fetch(`${BASE_URL}/${this.props.me}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(rawData => rawData.json())
    .then( (parsedContacts) => {
      this.props.storeContacts(parsedContacts);
    });
  };
  
  componentDidMount () {
    this.props.storeMyId(this.props.me);
    this.getMyContacts();
  }
  
  render() {
    const { contacts } = this.props;
    // console.log('CONTATS', contacts);

    return (
      <View style={styles.container}>
      
        <View style={styles.contactsWrapper}>
          <ContactsScrollPanel
            navigation={this.props.navigation}
            contacts={contacts}
          />
        </View>

        <Button
          small
          buttonStyle={ { marginBottom: 10 } }
          onPress={() =>
            this.props.navigation.navigate('CreateProfileView')}
          raised
          icon={{ name: 'cached' }}
          title='Create Profile'
        />
        
        <ContactActions></ContactActions>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactsWrapper: {
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
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  me: state.me
})

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
  storeMyId: ((id) => dispatch(storeMyId(id)))
})

export default connect(mapStateToProps, mapActionToProps)(Dashboard);