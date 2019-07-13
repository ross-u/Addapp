import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/reducers';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginView from './views/LoginView';
import CreateProfile from './views/CreateProfileView';
import Dashboard from './views/DashboardView';
import MyProfile from './views/MyProfileView';
import ShareQRCodeView from './views/ShareQRCodeView';
import AddContactScanQRCView from './views/AddContactScanQRCView';
import AddNewContactView from './views/AddNewContactView';
import ShowContactProfile from './views/ShowContactProfileView';
import FindView from './views/FindView';
import ContactTab from './components/ContactTab';
import CreateProfileAddInfoView from './views/CreateProfileAddInfoView';
import ShareFriendsQRCodeView from './views/ShareFriendsQRCodeView';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// RootStack receives a "Route Config object" & "Options object" and returns a React component
// RootStack is passed to createAppContainer()
const RootStack = createStackNavigator(

  { // Route Config object
    LoginView: LoginView,
    CreateProfile: CreateProfile,
    CreateProfileAddInfo: CreateProfileAddInfoView,
    Dashboard: Dashboard,
    MyProfile: MyProfile,
    ShareQRCode: ShareQRCodeView,
    ShareFriendsQRCodeView: ShareFriendsQRCodeView,
    AddContactScanQRCView: AddContactScanQRCView,
    AddNewContact: AddNewContactView,
    ShowContactProfile: ShowContactProfile,
    ContactTab: ContactTab,
    FindView: FindView,
  },
  { // Options object - specifies the initial route in a stack
    initialRouteName: 'LoginView',
    // initialRouteName: 'CreateProfile',
    // initialRouteName: 'Dashboard',
    // initialRouteName: 'FindView',
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

