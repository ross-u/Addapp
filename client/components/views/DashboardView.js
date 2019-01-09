import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ContactsScrollView from '../ContactsScrollPanel';
import ContactActions from '../buttons/ContactActionsButtons';
import HeadersActions from '../HeadersActions';

import { getUsers }  from '../../redux/actions/index';


class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerRight: (
      <HeadersActions></HeadersActions>),
  };
  
  logUsers = () => {
    result = this.props.users;
    console.log('getUsers', result);
  }
  
  render() {
    
    return (
      <View style={styles.container}>
      
        <View style={styles.contactsWrapper}>
          <ContactsScrollView navigation={this.props.navigation}/>
        </View>
        
        {/* <Button
          small
          buttonStyle={ { marginBottom: 10 } }
          onPress={ () => this.logUsers() }
          raised
          icon={{ name: 'cached' }}
          title='Test Redux: getUsers'
        /> */}
        
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
  users: state.users
})

const mapActionToProps = (dispatch) => ({
  getUsers: (() => dispatch(getUsers()))
})

export default connect(mapStateToProps, mapActionToProps)(Dashboard);