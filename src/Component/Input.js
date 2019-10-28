import React from 'react';
import {Text,View,TextInput,StyleSheet} from "react-native";


const Input=({value,placeholder,secureTextEntry,onChangeText,onSubmitEditing})=>{

    const {containerStyle,labelStyle,inputStyle,returnKeyType,returnKeyLabel}=styles;

    return(

        <View style={containerStyle}>
            <TextInput
                style={inputStyle}
                value={value}
                secureTextEntry={secureTextEntry} //for password to return ** if passed true
                placeholder={placeholder}
                autoCorrect={false}
                returnKeyType={returnKeyType}
                returnKeyLabel={returnKeyLabel}
                blurOnSubmit={true}
                maxLength={30}
                multiline={false}
                underlineColorAndroid="transparent"
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                />
        </View>
    );
};

const styles=StyleSheet.create({

 containerStyle:{
    justifyContent: 'center',
    height: 50,
    width:'90%',
    borderRadius:30,
    backgroundColor:'#ffffff',
    margin:10,
    borderWidth: 1,
    borderColor:'#f91890',
    },
    inputStyle:{
      fontSize:20,
      paddingHorizontal: 20,
    }
});

export default Input;
