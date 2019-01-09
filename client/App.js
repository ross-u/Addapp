import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/userReducer';
import { StyleSheet, View, Text } from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import Dashboard from './components/views/DashboardView';
import ContactProfileView from './components/views/ContactProfileView';
import ContactTab from './components/ContactTab';
import AddContactView from './components/views/AddQRContactView';
import FindView from './components/views/FindView';
import Headers from './components/Headers';

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
    Dashboard: Dashboard, // Home: { screen : HomeScreen }
    ProfileView: ContactProfileView,  //  ProfileView: {screen : ContactProfileView } 
    ContactTab: ContactTab,  //  ContactTab: {screen : ContactTab}
    AddContactView: AddContactView,
    FindView: FindView
  },
  {
    // options object
    initialRouteName: 'Dashboard',  //  specifies what the initial route in a stack
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

