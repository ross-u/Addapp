import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

class ContactTab extends Component {
  render() {
    const { fName, lName, occupation } = this.props.contact.personal;
    const {photo} = this.props.contact;
    return (
      <TouchableOpacity
        style={styles.box}
        // `props.navigation` is being accessed with react-navigation's -> withNavigation()
        onPress={() => this.props.navigation.navigate('ShowContactProfile',{
          contact: this.props.contact
        }
        )}
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
    width: width - 50,
    minHeight: 56,
    padding: 3,
    marginBottom: 4,
    backgroundColor: '#ecf0f1',
  },
  avatarWrapper: {
    flex: 1,
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
  },
  textSmall: {
    color: '#4A90E2',
    fontSize: 12,
    marginLeft: 18,
  },
  statusIconsWrapper: {
    flex: 1
  }
})

const mapStateToProps = (state) => ({
  users: state.users
})

const mapActionToProps = (dispatch) => ({
  getUsers: (() => dispatch(getUsers()))
})


const tabWithReactNavigation = withNavigation(ContactTab);
export default connect(mapStateToProps, mapActionToProps)(tabWithReactNavigation);