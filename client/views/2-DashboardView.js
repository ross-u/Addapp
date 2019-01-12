import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { storeContacts, storeMyId, storeMyProfile }  from '../redux/actions/actions';

import HeadersActions from './../components/HeadersActions';
import ContactsScrollPanel from './../components/ContactsScrollPanel';
import DashboardActions from './../components/buttons/DashboardActions';


const BASE_URL = "http://192.168.1.149:3000/user-friends";

class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerRight: (
      <HeadersActions></HeadersActions>),
  };

  getMyContacts = () => {
    console.log('Dashboard - fetch');
    fetch(`${BASE_URL}/${this.props.me._id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(rawData => rawData.json())
    .then( (contacts) => {
      // splice last item in the contacts array, as USERS actuall profile was pushed within `getUsersFriends` as last to avoid making double request
      let myProfile = contacts.splice(contacts.length -1, 1)
      this.props.storeMyProfile(myProfile[0]);
      this.props.storeContacts(contacts);
    });
  };
  
  componentDidMount () {
    this.getMyContacts();
  }
  
  render() {
    const { contacts } = this.props;
     //console.log('CONTACTS', contacts);

     return (
       <View style={styles.container}>

        <View style={styles.scrollWrapper}>
          <ContactsScrollPanel/>
        </View>
        
        <View style={styles.actionsWrapper}>
          <DashboardActions></DashboardActions>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollWrapper: {
    flex: 1,
    padding: 10,
    height: 200,
    alignItems: 'center'
  },
  actionsWrapper: {
    height: 160,
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
});

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
  storeMyId: ((id) => dispatch(storeMyId(id))),
  storeMyProfile: ((myProfile) => dispatch(storeMyProfile(myProfile)))
});

export default connect(mapStateToProps, mapActionToProps)(Dashboard);