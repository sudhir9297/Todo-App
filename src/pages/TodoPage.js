import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  AsyncStorage,
  Dimensions,
  KeyboardAvoidingView,
  Button
} from 'react-native';

import Input from '../Component/Input.js';
import Item from '../Component/Item.js'


export default class Todo extends Component {
constructor(props){
  super(props);

  this.state = {
   tasks:[],
   text: "",
   todoFilter:'All'
 };
}

componentDidMount() {
this.retrieveAsync()
}

// retriving Data From Async torage
retrieveAsync= async () => {
  try {
        const value = await AsyncStorage.getItem('Todo');
        const parsedData=JSON.parse(value)
        console.log(parsedData)
        this.setState({tasks:parsedData})
      }
      catch(error) {
        Alert.alert("couldnt retrive data");
    }
};

//Adding Data from Async storage
addAsync= async (Todo)=>{
      try {
        await AsyncStorage.setItem('Todo',JSON.stringify(Todo));
      }
      catch (error) {
        Alert.alert("couldn't Store Data")
      }
}

// to delete item from above array tasks[] and adding to Async Storage
deleteTask = id => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks
        return { tasks: tasks.filter(item=>item.key!=id) };
      },
      () => this.addAsync(this.state.tasks)
    );
};

//Updating the item to be completed or not
updateTodo=(key)=>{
    this.setState({
      tasks:this.state.tasks.map(item=>{
        if(item.key==key){
          return{
            ...item,
            done: !item.done
          }
        }else{
          return item
        }
      })
    },
    () => this.addAsync(this.state.tasks)
  )
}

//adding the item to async storage and above array in state
addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;

          return {
            tasks: tasks.concat({ key:tasks.length, text: text,done:false }),
            text: ""
          };
        },
          () => this.addAsync(this.state.tasks)
    );
  }
};

//filtering the value
updateTodoFilter=(text)=>{
    this.setState({todoFilter:text})
}

render() {
  const {container,headline,buttonsContainer,todo_list_container,}=styles
   let todos=[];

   if(this.state.todoFilter=='All'){
     todos=this.state.tasks
   }else if(this.state.todoFilter=='Active'){
      todos=this.state.tasks.filter(todo=>!todo.done)
   }else if(this.state.todoFilter=='Completed'){
     todos=this.state.tasks.filter(todo=>todo.done)
   }

    return (
      <View style={container}>
      <Text style={headline}>{this.state.tasks.length>0?'ToDo List':'Add todo'}</Text>
      <View style={buttonsContainer}>
          <Button title='All' color="#ffffff"  onPress={()=>this.updateTodoFilter('All')}/>
          <Button title='Active' color="#2196F3" onPress={()=>this.updateTodoFilter('Active')}/>
          <Button title='Completed' color="#f91890" onPress={()=>this.updateTodoFilter('Completed')}/>
      </View>
      <FlatList style={todo_list_container}
                data={todos}
                keyExtractor={item => item.key.toString()}
                renderItem={({item})=>
                            <Item
                             TextValue={item.text}
                             isDone={item.done}
                             id={item.key}
                             deleteTask={this.deleteTask}
                             updateTodo={this.updateTodo}
                  />
                 }
              />

      <KeyboardAvoidingView style={{width:"100%",alignItems:'center'}} behavior="padding" enabled>
            <Input
                      onChangeText={text=>this.setState({text:text})}
                      onSubmitEditing={this.addTask}
                      value={this.state.text}
                      placeholder="Add Tasks"
                      returnKeyType="done"
                      returnKeyLabel="done"
                    />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },
  headline:{
    color: "#ffffff",
    fontSize:30,
    fontWeight:'bold',
    marginHorizontal:20,
    marginVertical:5,
  },
  buttonsContainer:{
    flexDirection: 'row'
  },
  todo_list_container:{
    width:Dimensions.get('window').width-20,
    margin:10,
  },
});
