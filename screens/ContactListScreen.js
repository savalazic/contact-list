import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import ContactList from '../components/ContactsList';

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button title="Add" onPress={() => navigation.navigate('AddContact')} />
      ),
    };
  };

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        {/* <Button title="Add Contact" onPress={this.showForm} /> */}
        {this.state.showContacts && (
          <ContactList
            contacts={this.props.screenProps.contacts}
            onSelectContact={contact => {
              this.props.navigation.navigate('ContactDetails', {
                phone: contact.phone,
                name: contact.name,
              });
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
