/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  AsyncStorage,
} from 'react-native';

import Button from '../Component/Button.js'
import Input from '../Component/Input.js'

import DateTimePicker from "react-native-modal-datetime-picker";

export default class Setting extends Component {
  constructor(props){
    super(props);

    this.state={

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>*Pro Tip</Text>
        <Text style={styles.text}>*Contact Us</Text>
        <Text style={styles.text}>*HelpUs</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text:{
    color:'#ffffff',
    fontSize:24,
  }
});
