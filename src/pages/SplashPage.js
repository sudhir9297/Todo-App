import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'



class SplashScreen extends React.Component {

render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#ffffff',fontSize:22,}}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SplashScreen;
