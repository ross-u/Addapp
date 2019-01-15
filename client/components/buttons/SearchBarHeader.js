import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import { backgroundColor, headerColor, accentColor } from './../../utils/style';

class SearchBarHeader extends Component {
  render() {

    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          lightTheme
          placeholder='Find User' />
      </View>
    );
  };
}



const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 20
  }
});

export default SearchBarHeader = withNavigation(SearchBarHeader);