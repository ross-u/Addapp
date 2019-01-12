import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { storeContacts }  from '../redux/actions/actions';

import ContactTab from './ContactTab';

class ContactsScrollPanel extends Component {
  
  render() {
    const { contacts } = this.props;

    return (
    <View style={styles.container}>
      {contacts.length > 0
        ? (<ScrollView>
            {contacts.map( (c) => (<ContactTab contact={c} key={c._id} /> ))}
          </ScrollView>) 

        :(<View style={styles.spinnerContainer}>
            <ActivityIndicator size={70} color="#487eb0" />
          </View>
      )}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
});

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts)))
})

export default connect(mapStateToProps, mapActionToProps)(ContactsScrollPanel);