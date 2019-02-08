import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { storeNewContact, addIdToOfflineList, resetOfflineList, storeMyProfile, storeContacts, storeFriendsProfileJSONString, storeFriendsProfileInView  }  from '../redux/actions/actions';
import { compressProfile } from './../utils/profile-obj-compress';
import { backgroundColor, headerColor, accentColor, dimmedAccentColor, accentColorShadow } from '../utils/style';

import HeadersActions from '../components/HeadersActions';
import { API_URL } from './../config';

const BASE_URL = `${API_URL}/user/add-contacts`;

const canOpenURL = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) console.log('Can\'t handle url: ' + url);
    else return Linking.openURL(url);
  }).catch(err => console.error('An error occurred', err));
};

class AddNewContactView extends Component {

  static navigationOptions = {
    headerBackgroundTransitionPreset: 'toggle',
    title: 'Add Contact',
    headerRight: (
      <HeadersActions></HeadersActions>),
    headerStyle: { backgroundColor: headerColor },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  handleAddContact = async (newContact) => {
      await this.props.addIdToOfflineList(newContact._id);
      // this.props.storeNewContact(newContact);
      console.log('newContact._id :', newContact._id);
      console.log('In Redux : offlineContacts :', this.props.offlineContacts);

      
      if (this.props.offlineContacts.length > 0) {
        console.log('ENTER');
        // Update user's `contacts` DB, retrieve updated contacts objects and store in redux state
        this.updateContactsInDB(this.props.offlineContacts);
      }

  }

  updateContactsInDB = (contactsIdArray) => {
    const payload = { 
      id: this.props.myID,
      contactsIdArray: contactsIdArray
    };

    fetch(BASE_URL, {
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
    })
    .then(() => this.props.navigation.navigate('Dashboard'))
  }


  render() {
    const { navigation } = this.props;
    let newContact = navigation.getParam('newContact');

    const { fName, lName, occupation, currentLocation: loc, email  } = newContact.personal;
    const { facebook, instagram, twitter, blog } = newContact.social;
    const { linkedIn, github, cv, website } = newContact.networking;
    const {photo} = newContact;
    return (
      
      <View style={styles.container}>
        {/* <Button
          icon={
            <Icon
              name='user'
              size={15}
              color='white'
            />
          }
          title={`ADD ${fName.toUpperCase()}`}
          onPress={ () => this.handleAddContact(newContact)}
        /> */}
        <View style={styles.profileWrapper}>
          <Avatar
            avatarStyle={{ borderWidth: 2, borderColor: accentColorShadow }}
            xlarge
            rounded
            source={{ uri: photo }}
            onPress={() => console.log("Works!")}
          />
          <Text numberOfLines={1} style={styles.name}> {`${fName} ${lName}`} </Text>
          <Text style={styles.jobtitle}> {`${occupation}`} </Text>
          <Text style={styles.details}>
            Lives in - {`${loc.country}, ${loc.place}`}
          </Text>

          <TouchableOpacity style={styles.yellowButtonRound}>
            <Icon
              name='person-add'
              size={36}
              color="black"
              onPress={() => this.handleAddContact(newContact)}
            />
          </TouchableOpacity>
          <Text style={styles.miniInfo}>Add {` ${fName}`} </Text>
          
        </View>
    

        <View style={styles.iconsContainer}>

          <Text style={styles.category}> Networking </Text>

          <ScrollView horizontal contentContainerstyle={styles.iconsScrollView}>

          <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}

              type='entypo'
              name='linkedin'
              color='#517fa4'
              size={28}
              raised={true}
              onPress={() => canOpenURL(linkedIn)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}

              type='font-awesome'
              name='github'
              color='#00aced'
              size={28}
              raised={true}
              onPress={() => canOpenURL(github)}
            />

            <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}

              type='entypo'
              name='old-phone'
              color='#517fa4'
              size={28}
              raised={true}
              onPress={() => canOpenURL(cv)}
            />

            <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}

              name='mail-outline'
              color='#0984e3'
              size={28}
              raised={true}
              onPress={() => canOpenURL(email)}
            />

            <Icon
              iconStyle={styles.icons}
              containerStyle={styles.iconShadow}

              type='entypo'
              name='facebook'
              size={28}
              raised={true}
              onPress={() => canOpenURL(facebook)}
            />

            <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type='font-awesome'
              name='instagram'
              color='#00aced'
              size={28}
              raised={true}
              onPress={() => canOpenURL(instagram)}
            />

            <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type='font-awesome'
              name='twitter'
              color='#517fa4'
              size={28}
              raised={true}
              onPress={() => canOpenURL(twitter)}
            />

            <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              type='font-awesome'
              name='meetup'
              color='#517fa4'
              size={28}
              raised={true}
              onPress={() => canOpenURL(blog)}
            />

            <Icon iconStyle={styles.icons}
              containerStyle={styles.iconShadow}
              name='web'
              color='#517fa4'
              size={28}
              raised={true}
              onPress={() => canOpenURL(website)}
            />

          </ScrollView>
        
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: backgroundColor
  },
  profileWrapper: {
    flex: 4,
    padding: 10,
    alignItems: "center",
  },
  avatarContainer: {
    borderBottomColor: 'rgb(204, 160, 15)',
    borderLeftColor: 'rgb(204, 160, 15)',
    borderRightColor: 'rgb(204, 160, 15)',
    borderBottomWidth: 5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  iconsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconsScrollView: {
    flex: 1,
    flexDirection: "row",
    color: "black",
  },
  iconShadow: {
    borderBottomColor: 'rgb(204, 160, 15)',
    borderLeftColor: 'rgb(204, 160, 15)',
    borderRightColor: 'rgb(204, 160, 15)',
    borderBottomWidth: 4,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
  },
  icons: {
    color: "black",
  },
  name: {
    fontSize: 30,
    color: "white"
  },
  jobtitle: {
    fontSize: 20,
    marginBottom: 10,
    color: "white"
  },
  details: {
    fontSize: 16,
    color: "white"
  },
  miniInfo: {
    fontSize: 16,
    fontWeight: "800",
    color: dimmedAccentColor
  },
  category: {
    fontSize: 14,
    fontWeight: "700",
    alignItems: "center",
    color: "white",
    marginLeft: 10,
    marginBottom: 5
  },
  website: {
    fontSize: 14,
    alignItems: "center"
  },
  yellowButtonRound: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: accentColor,
    borderRadius: 65,
    marginTop: 20,

    borderBottomColor: 'rgb(204, 160, 15)',
    borderLeftColor: 'rgb(204, 160, 15)',
    borderRightColor: 'rgb(204, 160, 15)',
    borderBottomWidth: 5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  iconShadow: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 65,
    marginTop: 20,

    borderBottomColor: 'rgb(80, 79, 79)',
    borderLeftColor: 'rgb(80, 79, 79)',
    borderRightColor: 'rgb(80, 79, 79)',
    borderBottomWidth: 4,


    // borderBottomColor: 'rgb(87, 87, 87)',
    // borderLeftColor: 'rgb(87, 87, 87)',
    // borderRightColor: 'rgb(87, 87, 87)',
    // borderBottomWidth: 3,

    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  }
});

const mapStateToProps = (state) => ({
  friendsProfileInViewJSONString: state.friendsProfileInViewJSONString,
  friendsProfileInView: state.friendsProfileInView,
  contacts: state.contacts,
  me: state.myProfile,
  myID: state.myID,
  offlineContacts: state.offlineContacts
});

const mapActionToProps = (dispatch) => ({
  storeFriendsProfileInView: ((profile) => dispatch(storeFriendsProfileInView(profile))),
  storeFriendsProfileJSONString: ((JSONString) => dispatch(storeFriendsProfileJSONString(JSONString))),
  
  storeNewContact: ((newContact) => dispatch(storeNewContact(newContact))),
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
  storeMyProfile: ((myProfile) => dispatch(storeMyProfile(myProfile))),

  addIdToOfflineList: ((id) => dispatch(addIdToOfflineList(id))),
  resetOfflineList: (() => dispatch(resetOfflineList())),
});

export default connect(mapStateToProps, mapActionToProps)(AddNewContactView);