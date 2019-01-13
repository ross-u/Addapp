import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FormCreateProfile from './../components/CreateProfile';
import { ImagePicker } from 'expo';

export default class CreateProfileView extends Component {
  state = {
    image: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/add-icon.png',
  };
  
  static navigationOptions = {
    title: 'Create profile',
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {

    let { image } = this.state;

    return <View style={styles.container}>
        <View style={styles.wrapper}>
          <FormCreateProfile />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  wrapper: {
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
})