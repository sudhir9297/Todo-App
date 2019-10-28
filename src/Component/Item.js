
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Item = ({}) => (
  <View style={styles.container}>
    <Text>I'm Item</Text>
  </View>
);

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
