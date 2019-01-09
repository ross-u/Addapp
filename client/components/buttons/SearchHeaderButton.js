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
          onPress={ () => this.props.navigation.navigate('FindView')}/>
      </View>
    );
  };
}



const styles = StyleSheet.create({
  searchBtn: {
    padding: 5,
    marginRight: 8
  }
});

export default SearchHeaderButton = withNavigation(SearchHeaderButton);