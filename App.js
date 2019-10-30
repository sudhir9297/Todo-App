
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,StatusBar,
} from 'react-native';

import HomePage from './src/pages/HomePage.js';
import SplashPage from './src/pages/SplashPage.js';
import Todo from './src/pages/TodoPage.js';
import Setting from './src/pages/setting.js';


class App extends React.Component {
  render(){
    return (
      <View  style={styles.body}>
        <StatusBar barStyle='light-content' />
        <ScrollView  pagingEnabled={true} horizontal={true} scrollEventThrottle={10} >
              <View style={styles.body1}>
                <Todo/>
              </View>
              <View style={styles.body1}>
                <HomePage/>
              </View>
              <View style={styles.body1}>
                  <Setting/>
              </View>

        </ScrollView>
      </View>

    );
  }
};

const styles=StyleSheet.create({
body:{
    width: Dimensions.get('window').width,
    position: 'relative',
    flex:1,
    backgroundColor: "#000000",
  },
  body1:{
      width: Dimensions.get('window').width,
      position: 'relative',
      flex:1,
    }
});

export default App;
