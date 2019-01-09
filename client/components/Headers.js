import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';

export default class Headers extends Component {  
  state = {
    headersVisible: true
  }

  onPressFind = () => {
    this.setState({ headersVisible : !this.state.headersVisible})
  }

  render() {
    return (
      <View></View>
    // if (this.state.headersVisible) {
    //   return (
    //     <Header
    //     centerComponent={{ text: 'APP NAME GOES HERE', style: { color: '#fff' } }}
    //     rightComponent={{ icon: 'menu', color: '#fff' }}
    //     outerContainerStyles={{ backgroundColor: '#DEE0E2' }}
    //     innerContainerStyles={{ justifyContent: 'space-between' }}
    //   />)
    //   }
    //   else return (
    //   <View style={{paddingTop : 20, backgroundColor: '#DEE0E2' }}>
    //     <SearchBar
    //       lightTheme
    //       onChangeText={() =>{}}
    //       onClearText={() =>{}}
    //       placeholder='Type Here...'   
    //     />
    //   </View>
      );

      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerContainerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button :{
    
  }
})