import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import contacts, { compareNames } from './contacts';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';

const ContactsTab = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
    },
  },
);

ContactsTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contacts${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  ),
};

const MainNavigator = createTabNavigator(
  {
    Contacts: ContactsTab,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
    // swipeEnabled: true,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

export default class App extends React.Component {
  state = {
    showContacts: true,
    contacts,
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
