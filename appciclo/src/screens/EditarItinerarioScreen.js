import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, ScrollView, Stack, Checkbox, View, TextArea} from 'native-base';
import { useFormik }  from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function EditarIitinerario () {
    
        const { auth, group, inicio, final, itinerario } = useAuth();
        const [ checkName, setcheckName ] = useState(false);
        const [ checkHorario, setcheckHorario ] = useState(false);
        const [ checkDescripcion, setcheckDescripcion  ] = useState(false);
        const [ checkRuta, setcheckRuta  ] = useState(false);

        const navigation = useNavigation();

        const [ state, setState ] = useState({
            hora_Llegada: "",
            hora_Salida: ""
        })
    
        const { hora_Llegada, hora_Salida } = state
    
        const fecthLlegada = (data) => {
            setState({
                ...state, hora_Llegada: data,
            }) 
        }
    
        const fecthSalida = (data) => {
            setState({
                ...state, hora_Salida: data,
            }) 
        }

        const TimePicker = ({
            pickTime
          }) => {
            const [date, setDate] = useState(new Date());
            const [mode, setMode] = useState('date');
            const [show, setShow] = useState(false);
    
            const onChange = (event, selectedDate) => {
              console.log("Fecha: "+ selectedDate);  
              setShow(false);
              setDate(selectedDate);
          
              let tDate = selectedDate.toTimeString().substring(0,5);
              pickTime(tDate);
              alertHora(tDate);
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
                    <Button onPress = {showTimepicker}> Selecciona la Hora </Button>
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

        function send() {
            navigation.navigate('Mis Grupos')
        }

        function asingError(err){
            Alert.alert(
                'Tenemos un problema', 
                `${err}`,
                [
                    {text: 'Ok'}
                ]
            );
        }

        function alertHora(hora){
            Alert.alert(
                'La hora seleccionada es', 
                `${hora}`,
                [
                    {text: 'Ok'}
                ]
            );
        }

        const formik = useFormik({
            initialValues: initialValues(),
                onSubmit: async (formValue) => {
                    var Usuario = auth.userName;
                    console.log(formValue);
                    axios.post(URL+'/itineraryM/editItinerary', {...formValue, Hora_Salida: hora_Salida, Hora_Llegada: hora_Llegada,
                        Usuario , Nombre_Grupo: group, Punto_Partida: inicio,  Punto_Llegada: final, Nombre_ItinerarioOld: itinerario })
                    .then(response => {
                        console.log (response.data.result);
                        send();
                    }).catch(e =>{
                        var err = Object.values(e.response.data)[0];
                        asingError(err);
                    });
                }
        });  

    return (
       
        <NativeBaseProvider>
        <ScrollView maxW="400" h="80">
        <Center>
            <Stack p={6} direction={{
            base: "row",
            md: "row" 
            }} space={2} alignItems="flex-start">
                <Checkbox value="purple" colorScheme="danger" isChecked={checkName} onChange={() => setcheckName(!checkName)} >
                    Nombre
                </Checkbox>
                <Checkbox value="purple" colorScheme="purple" isChecked={checkHorario} onChange={() => setcheckHorario(!checkHorario)}>
                    Horario
                </Checkbox>
                <Checkbox value="purple" colorScheme="orange" isChecked={checkRuta} onChange={() => setcheckRuta(!checkRuta)}>
                    Ruta
                </Checkbox>
                <Checkbox value="purple" colorScheme="purple" isChecked={checkDescripcion} onChange={() => setcheckDescripcion(!checkDescripcion)}>
                    Descripción
                </Checkbox>
            </Stack>
        </Center>
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290">
                <VStack space={3} mt="5">
                {
                    checkName === true ? (
                    <FormControl>
                        <FormControl.Label>Nombre Itinerario</FormControl.Label>
                        <Input 
                            value={formik.values.Nombre_ItinerarioNew}
                            onChangeText={(text) => formik.setFieldValue("Nombre_ItinerarioNew", text)} 
                        />
                    </FormControl>
                    ) : (
                        console.log('Hola :)')
                    )
                }
                {
                    checkHorario === true ? (
                    <><FormControl>
                        <FormControl.Label>Hora Inicio</FormControl.Label>
                            <TimePicker
                                pickTime={fecthSalida} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Hora final</FormControl.Label>
                            <TimePicker
                                pickTime={fecthLlegada} />
                    </FormControl></>
                    ): (
                        console.log('Sayonaraaaa ...')
                    )
                }
                {
                    checkRuta === true ? (
                    <FormControl>
                        <FormControl.Label>Seleccionar Ruta</FormControl.Label>
                        <Button mt="2" onPress={() => navigation.navigate('Map View')}>
                            Seleccionar Ruta
                        </Button>
                    </FormControl>
                    ):(
                        console.log('Abrigadhooo ...')
                    )
                }
                {
                    checkDescripcion === true ? (
                    <FormControl>
                        <FormControl.Label>Descripción</FormControl.Label>
                        <TextArea h={150} placeholder="Descrición del Itinerario" width={275}
                            value={formik.values.Descripcion}
                            onChangeText={(text) => formik.setFieldValue("Descripcion", text)}
                        />
                    </FormControl>
                    ):(
                        console.log('Abrigadhooo ...')
                    )
                }
                <Button mt="2" colorScheme="indigo" onPress={() =>
                    formik.handleSubmit()
                }>
                    Editar Itinerario
                </Button>
                </VStack>
            </Box>
        </Center>
        </ScrollView>
        </NativeBaseProvider>
    )
}

function initialValues(){
    return {
        Nombre_ItinerarioNew: "",
        Descripcion: "",
    }
}

