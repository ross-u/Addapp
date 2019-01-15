import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { storeFriendsProfileJSONString, storeFriendsProfileInView }  from '../redux/actions/actions';

const { width } = Dimensions.get('window');



class ContactTab extends Component {
  state = {
    selectedContact: {}
  }
  
  componentDidMount() {

    // this.setState({selectedContact: this.props.contact});
    // this.handleSelectedContact(this.state.selectedContact);
  }
  
  handleSelectedContact = (selectedContact) => {
    this.props.storeFriendsProfileInView(selectedContact);
    // console.log('CONTACT TAB, Profile Store', this.props.friendsProfileInView.personal.fName);
    
    this.props.navigation.navigate('ShowContactProfile', {
      contact: selectedContact
    });
  }


  render() {
    const { fName, lName, occupation } = this.props.contact.personal;
    const {photo} = this.props.contact;

    return (
      <TouchableOpacity
        style={styles.box}
        // `props.navigation` is being accessed with react-navigation's -> withNavigation()
        onPress={ () =>  this.handleSelectedContact(this.props.contact)}
      >
        <View style={styles.avatarWrapper}>
          <Avatar
            medium
            rounded
            raised
            source={{ uri: photo }}
            activeOpacity={0.9}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textName} numberOfLines={1}> {fName} {lName}</Text>
          <Text style={styles.textSmall} numberOfLines={1}> {occupation}</Text>
        </View>
        <View  style={styles.statusIconsWrapper}>

        </View>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'center',
    width: width - 5,
    height: 70,
    padding: 3,
    paddingTop: 5,
    paddingLeft: 20,
    marginBottom: 4,
    backgroundColor: '#262626',
  },
  avatarWrapper: {
    flex: 1,
    paddingTop: 5,
  },
  textWrapper: {
    flex: 5,
    paddingRight: 10,
    flexDirection: 'column',
  },
  textName: {
    color: '#4A90E2',
    fontSize: 20,
    marginLeft: 8,
    color: '#FFFFFF'
  },
  textSmall: {
    color: '#4A90E2',
    fontSize: 12,
    marginLeft: 18,
    color: '#FFFFFF'
  },
  statusIconsWrapper: {
    flex: 1
  }
});

const mapStateToProps = (state) => ({
  friendsProfileInViewJSONString: state.friendsProfileInViewJSONString,
  friendsProfileInView: state.friendsProfileInView,
});

const mapActionToProps = (dispatch) => ({
  storeFriendsProfileInView: ((profile) => dispatch(storeFriendsProfileInView(profile))),
  storeFriendsProfileJSONString: ((JSONString) => dispatch(storeFriendsProfileJSONString(JSONString)))
});

const tabWithReactNavigation = withNavigation(ContactTab);
export default connect(mapStateToProps, mapActionToProps)(tabWithReactNavigation);