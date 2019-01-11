import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { storeContacts, storeMyId, storeMyProfileJSONString }  from '../redux/actions/actions';
import { compressProfile } from './../modules/profile-obj-compress';

import HeadersActions from './../components/HeadersActions';

class MyProfileView extends Component {
  static navigationOptions = {
    title: 'Profile View',
    headerRight: (
      <HeadersActions></HeadersActions>),
  };

  canOpenURL = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) console.log('Can\'t handle url: ' + url);
      else return Linking.openURL(url);
    }).catch(err => console.error('An error occurred', err));
  };

  stringifyMyProfile = (myProfile) => {
    const myProfileCompressed = compressProfile(myProfile);
    const jsonString = JSON.stringify(myProfileCompressed);
    this.props.storeMyProfileJSONString(jsonString);
  };

  componentDidMount () {
    this.stringifyMyProfile(this.props.me);
  };

  render() {
    const myProfile = this.props.me;
    
    const { fName, lName, occupation, currentLocation: loc, email, birthplace  } = myProfile.personal;
    const { facebook, instagram, twitter, blog } = myProfile.social;
    const { linkedIn, github, cv, website } = myProfile.networking;
    const {photo} = myProfile;
    return (
      
      <View style={styles.container}>
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
          <Text style={styles.category}>from {`${birthplace.country}`} </Text>

          <Icon
            style={{ position: 'absoulute', top: '100'}}
            type='font-awesome'
            name='share-alt'
            size={22}
            raised={true}
            onPress={ () => this.props.navigation.navigate('ShareQRCode')}
          />

        </View>
        <Text style={styles.category}> Social </Text>
        <View style={styles.iconsContainer}>
          <Icon
            type='entypo'
            name='facebook'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(facebook)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='instagram'
            color='#00aced'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(instagram)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='twitter'
            color='#517fa4'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(twitter)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='meetup'
            color='#517fa4'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(blog)}
          />
        </View>

        <Text style={styles.category}> Networking </Text>
        <View style={styles.iconsContainer}>
          <Icon
            type='entypo'
            name='linkedin'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(linkedIn)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='github'
            color='#00aced'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(github)}
          />

          <Icon style={styles.icons}
            type='font-awesome'
            name='user-circle-o'
            color='#517fa4'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(cv)}
          />

          <Icon style={styles.icons}
            name='mail-outline'
            color='#0984e3'
            size={28}
            raised={true}
            onPress={() => this.canOpenURL(email)}
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
    alignItems: 'center',
  }
});



const mapStateToProps = (state) => ({
  contacts: state.contacts,
  me: state.me,
  meJSONString: state.meJSONString
});

const mapActionToProps = (dispatch) => ({
  storeContacts: ((contacts) => dispatch(storeContacts(contacts))),
  storeMyId: ((id) => dispatch(storeMyId(id))),
  storeMyProfileJSONString: ((JSONString) => dispatch(storeMyProfileJSONString(JSONString)))
});

export default connect(mapStateToProps, mapActionToProps)(MyProfileView);