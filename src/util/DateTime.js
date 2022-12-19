import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect } from 'react'
// import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = ({showtime,mod}) => {
    const [date, setDate] = React.useState(new Date(1598051730000));
    const [mode, setMode] = React.useState(mod);
    const [show, setShow] = React.useState(false);
    
  
// console.log("......???",mode)
    
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate||date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    setShow(!show)
    showMode('time');
  };

 
useEffect(()=>{
    if(mode=='time'){
        showTimepicker()
    }
    else{
      showDatepicker()
    }
},[])
  return (
    <View>
       {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
      {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
      {/* <Text style={{color:"#000"}}>selected: {date.toLocaleString()}</Text> */}
      {show && (
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
      />   
      )}
    </View>
  )
}

export default DateTime

const styles = StyleSheet.create({})