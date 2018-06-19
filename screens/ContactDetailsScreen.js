import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('name'),
    };
  };

  goToRandom = () => {};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>Name: {this.props.navigation.getParam('name')}</Text> */}
        <Text style={{ fontSize: 30 }}>
          {this.props.navigation.getParam('phone')}
        </Text>
        <Button title="Go to random" onPress={this.goToRandom} />
      </View>
    );
  }
}
