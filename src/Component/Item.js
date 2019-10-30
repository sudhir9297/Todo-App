import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Dimensions,TouchableWithoutFeedback,TouchableHighlight} from 'react-native'

const { width } = Dimensions.get('window')

const Item = ({ TextValue,isDone,id,updateTodo,deleteTask}) => {
    return (
        <View style={styles.todoContainer}>
                    <TouchableWithoutFeedback onPress={()=>updateTodo(id)}>
                        <View style={styles.listItemCont}>
                            <View  style={isDone ? styles.status_done : styles.status}/>
                            <Text style={styles.listItem}>{TextValue}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.removeContainer} onPress={()=>deleteTask(id)}>
                        <Text style={styles.remove} >&times;</Text>
                    </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
  todoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 22,
    borderColor: "#ffffff",
    height: 40,
    marginVertical: 5,
    backgroundColor:'#1e1e1e',

    shadowColor: "#dddddd",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  listItemCont: {
    width: Dimensions.get("window").width-120,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginHorizontal: 10,
  },

  listItem: {
      paddingTop: 3,
      paddingBottom: 3,
      marginHorizontal: 10,
      fontSize: 18,
      color:'#ffffff'
    },

  status_done:{
      width:13,
      height:13,
      margin:5,
      borderRadius:50,
      borderWidth: 1,
      backgroundColor: "#f91890",
    },
    status:{
      width:13,
      height:13,
      margin:5,
      borderRadius:50,
      borderWidth: 1,
      borderColor:'#2196F3',
    },
    remove:{
      fontSize: 36,
      color:'#ffffff',
      marginHorizontal: 25,
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "#dddddd",
        width: "100%",

      },
})

export default Item
