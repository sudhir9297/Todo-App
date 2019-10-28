import React from 'react';
import {Text,View,StyleSheet,Alert,TouchableHighlight} from "react-native";


const Button=({label,onPress})=>{

    const {button,btntext}=styles;

    return(
        <TouchableHighlight style={button} onPress={onPress}>
            <Text style={btntext}> {label}</Text>
        </TouchableHighlight>
    );
};

const styles=StyleSheet.create({

    button:{
        borderRadius:25,
        backgroundColor: '#2196F3',
        padding: 10,
        width:'60%',
        marginVertical:7,
        alignItems:'center',
        justifyContent:'center',

        shadowColor: "#000",
        shadowOffset: {
	        width: 1,
	        height: 5,
            },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 5,
    },
    btntext:{
        fontSize:22,
        fontWeight:'600',

    },

});

export default Button;
