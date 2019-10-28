import React from "react";
import {StyleSheet,Text,View,Dimensions} from "react-native";

const TimerText=({title,val})=>{

    const {container,text,format}=styles;

    var {height, width} = Dimensions.get('window');

    return(
          <View style={container}>
              <Text style={format}>{title}</Text>
              <Text style={text}>{val}</Text>
          </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/6,
    },
    text:{
        margin: 0,
        padding: 0,
        color:'#ffffff',
        width: Dimensions.get('window').width/2,
        fontSize:Dimensions.get('window').height/7,
        fontWeight:'bold',
        marginRight:6,
    },
    format:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:"bold",
        textTransform: 'uppercase',
        width: 50,
    },
});

export default TimerText;
