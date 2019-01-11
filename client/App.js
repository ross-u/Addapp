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
import ShowContactProfile from './views/6-ShowContactProfileView';
import FindView from './views/FindView';
import ContactTab from './components/ContactTab';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// takes a "route configuration object" and  "options object" and returns a React component
// RootStack becomes a Navigation Stack component
const RootStack = createStackNavigator(
  {
    // route configuration object
    LoginView: LoginView, // LoginView: { screen : LoginView }
    CreateProfile: CreateProfile,
    Dashboard: Dashboard, // Dashboard: { screen : Dashboard }
    MyProfile: MyProfile,
    ShareQRCode: ShareQRCodeView,
    AddContactScanQRCView: AddContactScanQRCView,
    ShowContactProfile: ShowContactProfile, 
    ContactTab: ContactTab,  
    FindView: FindView,
  },
  {
    // options object
    //  specifies what is the initial route in a stack
    // initialRouteName: 'Dashboard',  
    initialRouteName: 'LoginView',
    // initialRouteName: 'ProfileView',  
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

