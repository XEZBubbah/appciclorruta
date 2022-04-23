import React, {useEffect, useState} from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, TextArea, Text} from 'native-base';
import { View , Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormik }  from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CrearItinerarioScreen () {

    const { auth, group, inicio, final } = useAuth();

    const navigation = useNavigation()

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

    console.log("Fin: "+hora_Llegada);
    console.log("Inicio: "+hora_Salida);
    console.log("Punto Inicial: "+ inicio);
    console.log("Punto Final: "+ final);

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

    
    const send = () => {
        navigation.navigate('Mis Grupos');
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
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
            onSubmit: async (formValue) => {
                var Usuario = auth.userName;
                console.log(formValue);
                axios.post(URL+'/itineraryM/createItinerary', {...formValue, Hora_Salida: hora_Salida, Hora_Llegada: hora_Llegada,
                    Usuario , Nombre_Grupo: group, Punto_Partida: inicio,  Punto_Llegada: final })
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
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre Itinerario</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.Nombre_Itinerario}</Text>
                    <Input 
                        value={formik.values.Nombre_Itinerario}
                        onChangeText={(text) => formik.setFieldValue("Nombre_Itinerario", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Hora Inicio</FormControl.Label>
                    <TimePicker
                        pickTime={fecthSalida}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Hora Fin</FormControl.Label>
                    <TimePicker
                        pickTime={fecthLlegada}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Seleccionar Ruta</FormControl.Label>
                    <Button mt="2" onPress={() => navigation.navigate('Map View')}>
                        Seleccionar Ruta
                    </Button>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Descripción</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.Descripcion}</Text>
                    <TextArea h={150} placeholder="Descrición del Itinerario" width={275}
                        value={formik.values.Descripcion}
                        onChangeText={(text) => formik.setFieldValue("Descripcion", text)}
                    />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => {
                    formik.handleSubmit();
                }}>
                    Crear Itinerario
                </Button>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )

    function initialValues(){
        return {
            Nombre_Itinerario: "",
            Descripcion: "",
        }
    }
    
    function validationSchema(){
        return {
            Nombre_Itinerario: Yup.string().required("Este campo no se puede dejar vacio"),
            Descripcion: Yup.string().required("Ingrese una contraseña")
        }
    }
}
