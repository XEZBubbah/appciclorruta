import React, {useState} from "react";
import { View ,Button, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

function TimePicker () {

    const [date, setDate] = useState(new Date(1598051730000));
    const [text, setText] = useState('Empty');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);

      let tDate = date.toTimeString().substring(0,5);
      setText(tDate);
      console.log(tDate)
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
        <View>
            <Button title="Selecciona la Hora" onPress = {showTimepicker}/>
            <Text></Text>
            <Text style={{alignSelf:"center"}}> { text } </Text>
            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                onChange={onChange}
            />
            )}
        </View>
    );
}

export default TimePicker