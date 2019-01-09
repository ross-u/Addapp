import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

class ContactTab extends Component {
  render() {
    const name = this.props.name ? this.props.name : 'First Name'
    return (
      <TouchableOpacity
        style={styles.box}
        // `props.navigation` is being accessed with react-navigation's -> withNavigation()
        onPress={() => this.props.navigation.navigate('ProfileView')}
      >
        <Avatar
          small
          activeOpacity={0.7}
        />
        <Text style={styles.text}> {name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 200,
    height: 60,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'skyblue',
  },
  text: {
    color: '#4A90E2',
    fontSize: 24,
    marginLeft: 10,
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