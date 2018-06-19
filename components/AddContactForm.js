import React from 'react';
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
});

class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };

  getHandler = key => {
    return val => {
      this.setState(
        {
          [key]: val,
        },
        this.validateForm,
      );
    };
  };

  // handleNameChange = this.getHndler('name');
  // handlePhoneChange = this.getHndler('phone');

  // handleNameChange = name => {
  //   this.setState({ name }, this.validateForm);
  // };

  // handlePhoneChange = phone => {
  //   if (+phone >= 0 && phone.length <= 10) {
  //     this.setState({ phone }, this.validateForm);
  //   }
  // };

  validateForm = () => {
    if (this.state.name.length > 3 && this.state.phone.length > 0) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    // this.props.onSubmit({ ...this.state });
    // this.props.onSubmit(this.state);
    this.props.onSubmit({ name: this.state.name, phone: this.state.phone });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ paddingTop: 20, flex: 1, justifyContent: 'center' }}
      >
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler('phone')}
          placeholder="Phone"
        />
        <Button
          title="Add contact"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
        behavior="padding"
      </KeyboardAvoidingView>
    );
  }
}

export default AddContactForm;
