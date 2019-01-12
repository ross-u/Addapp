import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, Alert } from 'react-native';
import { Avatar, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { storeNewContact, addIdToOfflineList, resetOfflineList, storeMyProfile, storeContacts }  from '../redux/actions/actions';

import HeadersActions from '../components/HeadersActions';

const BASE_URL = "http://192.168.1.149:3000/add-contacts/";

const canOpenURL = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) console.log('Can\'t handle url: ' + url);
    else return Linking.openURL(url);
  }).catch(err => console.error('An error occurred', err));
};

class AddNewContactView extends Component {
  static navigationOptions = {
    title: 'Add Contact',
    headerRight: (
      <HeadersActions></HeadersActions>),
  }

  handleAddContact = (newContact) => {
    console.log('this.addIdToOfflineList(newContact._id) :', newContact._id);
    this.addIdToOfflineList(newContact._id);
    this.storeNewContact(newContact);

    if (this.props.offlineContacts.length > 0) {
      // Update user's `contacts` DB, retrieve updated contacts objects and store in redux state
      updateContactsInDB(this.props.offlineContacts)
    }
  }

  updateContactsInDB = (contactsIdArray) => {
    const payload = { 
      id: this.props.me._id,
      contactsIdArray: contactsIdArray
    };

    fetch(`${BASE_URL}/${this.props.me._id}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(rawData => rawData.json())
    .then( (updatedContacts) => {
      // splice last item in the contacts array, as USERS actuall profile was pushed within `getUsersFriends` as last to avoid making double request
      let myProfile = updatedContacts.splice(updatedContacts.length -1, 1)
      this.props.storeMyProfile(myProfile[0]);
      this.props.storeContacts(updatedContacts);
      this.props.resetOfflineList();
    });
  }


  render() {
    const { navigation } = this.props;
    let newContact = navigation.getParam('newContact');

    const { fName, lName, occupation, currentLocation: loc, email, birthplace  } = newContact.personal;
    const { facebook, instagram, twitter, blog } = newContact.social;
    const { linkedIn, github, cv, website } = newContact.networking;
    const {photo} = newContact;
    return (
      
      <View style={styles.container}>
        <Button
          icon={
            <Icon
              name='user'
              size={15}
              color='white'
            />
          }
          title={`ADD ${fName.toUpperCase()}`}
          onPress={ () => this.handleAddContact(newContact)}
        />
        <View style={styles.contactsWrapper}>
          <Avatar
            xlarge
            rounded
            source={{ uri: photo }}
            onPress={() => console.log("Works!")}
          />
          <Text style={styles.name}> {`${fName} ${lName}`} </Text>
          <Text style={styles.jobtitle}> {`${occupation} at Codeworks`} </Text>
          <Text style={styles.details}>
            Lives in - {`${loc.country}, ${loc.place}`}
          </Text>
          {/* <Text style={styles.details}>from {`${birthplace.country}`} </Text> */}

          <Text 
            style={styles.website}>
            {`${website}`}
          </Text>

        </View>
        <Text style={styles.category}> Social </Text>
        <View style={styles.iconsContainer}>
          <Icon
            type='entypo'
            name='facebook'
            size={28}
            raised={true}
            onPress={() => canOpenURL(facebook)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='instagram'
            color='#00aced'
            size={28}
            raised={true}
            onPress={() => canOpenURL(instagram)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='twitter'
            color='#517fa4'
            size={28}
            raised={true}
            onPress={() => canOpenURL(twitter)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='meetup'
            color='#517fa4'
            size={28}
            raised={true}
            onPress={() => canOpenURL(blog)}
          />
        </View>

        <Text style={styles.category}> Networking </Text>
        <View style={styles.iconsContainer}>
          <Icon
            type='entypo'
            name='linkedin'
            size={28}
            raised={true}
            onPress={() => canOpenURL(linkedIn)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='github'
            color='#00aced'
            size={28}
            raised={true}
            onPress={() => canOpenURL(github)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='user-circle-o'
            color='#517fa4'
            size={28}
            raised={true}
            onPress={() => canOpenURL(cv)}
          />

          <Icon style={styles.icons}
            name='mail-outline'
            color='#0984e3'
            size={28}
            raised={true}
            onPress={() => canOpenURL(email)}
          />
        </View>
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
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 30
  },
  jobtitle: {
    fontSize: 20,
    marginBottom: 10
  },
  details: {
    fontSize: 16,
  },
  category: {
    fontSize: 14,
    margin: 10,
    alignItems: 'center'
  },
  website: {
    fontSize: 14,
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  me: state.me,
  offlineContacts: state.offlineContacts
});

const mapActionToProps = (dispatch) => ({
  storeNewContact: ((newContact) => dispatch(storeNewContact(newContact))),
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
  storeMyProfile: ((myProfile) => dispatch(storeMyProfile(myProfile))),

  addIdToOfflineList: ((id) => dispatch(addIdToOfflineList(id))),
  resetOfflineList: (() => dispatch(resetOfflineList())),
});

export default connect(mapStateToProps, mapActionToProps)(AddNewContactView);