import React from 'react';
import { View, Text, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  handleLogin = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>You are currently logged out</Text>
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}
