import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/userReducer';

import { StyleSheet, View } from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginView from './views/0-LoginView';
import CreateProfile from './views/1-CreateProfileView';
import Dashboard from './views/2-DashboardView';
import MyProfile from './views/3-MyProfileView';
import ShareQRCodeView from './views/4-ShareQRCodeView';
import AddContactScanQRCView from './views/5-AddContactScanQRCView';
import AddNewContactView from './views/6-AddNewContactView';
import ShowContactProfile from './views/7-ShowContactProfileView';
import FindView from './views/FindView';
import ContactTab from './components/ContactTab';
import CreateProfileAddInfoView from './views/2-CreateProfileAddInfoView';
import ShareFriendsQRCodeView from './views/4-ShareFriendsQRCodeView';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// takes a "Route Config object" & "Options object" and returns a React component
// RootStack is passed to createAppContainer()
const RootStack = createStackNavigator(

  { // Route Config object
    LoginView: LoginView, // LoginView: { screen : LoginView }
    CreateProfile: CreateProfile,
    CreateProfileAddInfo: CreateProfileAddInfoView,
    Dashboard: Dashboard, // Dashboard: { screen : Dashboard }
    MyProfile: MyProfile,
    ShareQRCode: ShareQRCodeView,
    ShareFriendsQRCodeView: ShareFriendsQRCodeView,
    AddContactScanQRCView: AddContactScanQRCView,
    AddNewContact: AddNewContactView,
    ShowContactProfile: ShowContactProfile, 
    ContactTab: ContactTab,  
    FindView: FindView,
  },
  { // Options object - specifies what is the initial route in a stack
    // initialRouteName: 'LoginView',
    // initialRouteName: 'CreateProfile',
    // initialRouteName: 'Dashboard',
    initialRouteName: 'FindView',
    // initialRouteName: 'ProfileView',
    // initialRouteName: 'AddContactScanQRCView',  
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
})

