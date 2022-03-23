import React, { useState } from 'react'
import { View ,Button, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';



function DatePickerComp() {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('Empty');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);

    let fDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    setText(fDate);

    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <Button title="Selecciona la Fecha" onPress = {showDatepicker}/>
      <Text></Text>
      <Text style={{alignSelf:"center"}}> {text}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display='calendar'
          onChange={onChange}
        />
      )}
    </View>
    
  );
}

export default DatePickerComp