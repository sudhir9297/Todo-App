import React from 'react';
import {Text,View ,StyleSheet,Dimensions,Alert,AsyncStorage} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import TimerText from '../Component/TimerText.js'


class HomePage extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
          time:[
          {
            title:'yrs',
            id: 1,
            val:'00',
          },
          {
            title:'day',
            id: 2,
            val:'00',
          },
          {
            title:'hrs',
            id: 3,
            val:'00',
          },
          {
           title:'min',
            id: 4,
            val:'00',
          },
          {
            title:'sec',
            id: 5,
            val:'00',
          }
          ],
          date:'1997-02-08T19:43:33.000Z'
      };
  }

  // Common LifeCycle Methods
  UNSAFE_componentWillMount() {
      this.retrieveAsync()
      this.getCurrentTime();

  }

  UNSAFE_componentWillUnmount() {
        clearInterval(this.timer);
    }

  componentDidMount() {

        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000); // just to make it run every 1sec

  }


// retriving Data From Async torage
  retrieveAsync= async () => {
    try {
      const value = await AsyncStorage.getItem('date');
      const parsedData=JSON.parse(value)
      this.setState({date:parsedData})
    }
    catch(error) {
      Alert.alert("couldnt retrive data");
    }
  };

//Adding Data from Async storage
addAsync= async ( date)=>{

    try {
      await AsyncStorage.setItem('date',JSON.stringify(date));
    }
    catch (error) {
      Alert.alert("couldn't Store Data")
    }
  }


  getCurrentTime=()=>
  {
      var birthDate= new Date(this.state.date);
      curr=new Date()

      //calculating total Age in Years i.e. currentYear - BirthYear
      age=curr.getFullYear() - birthDate.getFullYear();

      // Calculate total Days From Jan1 current Year to current Day
      jan1 = new Date(`01/01/${curr.getFullYear()}`); // defining jan / 1 / current Year

      diff_in_time = (curr.getTime() - jan1.getTime());  // getting time diff in sec
      total_Days = Math.floor(diff_in_time/ (1000 * 3600 * 24));    //dividing total Sec by a single day sec i.e., (1000 * 60 * 60 * 24)

      // so here we are just getting Current hours ,Current minutes and Current Seconds  and just below checking if its a single digit nuber or note
      // if it is we just add 0 in front of it ....eg if its 8 so it will become 08 thats it ..simple as that.
      currentHour = new Date().getHours();
      currentMinutes = new Date().getMinutes();
      currentSeconds = new Date().getSeconds();

      if (currentHour < 10) {
          currentHour = "0" + currentHour;
      }

      if (currentHour == 0) {
          currentHour = 12;
      }

      if (currentMinutes < 10) {
          currentMinutes = '0' + currentMinutes;
      }

      if (currentSeconds < 10) {
          currentSeconds = '0' + currentSeconds;
      }

      // as this.state  does not provide nested modification of array ...I'm just moving one path ahead and making a copy of it and modifying it

      let timecopy=JSON.parse(JSON.stringify(this.state.time))
      timecopy[0].val=age;
      timecopy[1].val=total_Days;
      timecopy[2].val=currentHour;
      timecopy[3].val=currentMinutes;
      timecopy[4].val=currentSeconds;

      // after done I'm reverting to its old position using this.setState below
      this.setState({
          time:timecopy,
      });
  }

  // some function to show Date Picker and autohide self
  showDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
      this.hideDateTimePicker();  //hiding date Picker
      this.setState({date:date})  // setting State
      this.addAsync(date) // storing in async
    };

    render(){
        return(
            <View style={styles.home}>
                <View style={styles.container1}>
                      <Text style={styles.text1} onPress={this.showDateTimePicker}>Pro Tip! It is just A Number</Text>
                      <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        isDarkModeEnabled={true}
                      />
                </View>
                <View style={styles.container2}>
                    <Text style={styles.text2 } >You Lived</Text>
                    {this.state.time.map(({id,...otherprops}) =>(<TimerText key={id} {...otherprops}/>))}
                </View>

            </View>

        );
    };
}

const styles=StyleSheet.create({
    home:{
      flex:1,
      flexDirection: 'row',
      top:'3%',
      height:'95%',
    },
    container1:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:4,

    },
    text1:{
        color:'#2196F3',
        fontSize:Dimensions.get('window').height/20,
        fontWeight:'bold',
        transform: [
        { rotate: "-90deg" },],
        width:Dimensions.get('window').width,
    },

    text2:{
        color:'#2196F3',
        fontSize:Dimensions.get('window').height/25,
        fontWeight:'bold',
        width:160,
    },
});

export default HomePage;
