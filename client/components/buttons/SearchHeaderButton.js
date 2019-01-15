import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class SearchHeaderButton extends Component {
  render() {

    return (
      <View style={styles.searchBtn}>
        <Icon
          name='search'
          type='font-awesome'
          size={28}
          color="white"
          onPress={ () => this.props.navigation.navigate('FindView')}/>
      </View>
    );
  };
}



const styles = StyleSheet.create({
  searchBtn: {
    padding: 2,
    marginTop: 3,
    marginRight: 18
  }
});

export default SearchHeaderButton = withNavigation(SearchHeaderButton);