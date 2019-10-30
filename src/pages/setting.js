/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  AsyncStorage,
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import Input from '../Component/Input.js'

export default class Setting extends Component {
  constructor(props){
    super(props);

    this.state={

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:'5%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headline:{
    color: "#ffffff",
    fontSize:30,
    fontWeight:'bold',
    marginHorizontal:20,
    marginVertical:5,
  },
});
