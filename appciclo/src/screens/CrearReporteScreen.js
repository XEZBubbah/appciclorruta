import React, {useState} from "react";
import useAuth from "../hooks/useAuth";
import { URL } from "../store/GoogleMaps";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Alert } from 'react-native';
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, TextArea, Radio, Stack, Text} from 'native-base';



export default function CrearReporteScreen ({navigation}) {

    const {auth} = useAuth();
    const [value, setValue] = useState('');

    function salir(){
        navigation.navigate('Reportes');
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

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            const Usuario = auth.userName;
            console.log(formValue);
            console.log('Soy '+ Usuario);
            axios.post(URL+'/reportM/createReport', {...formValue, Usuario})
            .then(function(response){
                console.log (response.data.message);
                salir();
            }).catch(function(e){
                var err = Object.values(e.response.data)[0];
                asingError(err);
            })
        }       

    });

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Asunto</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Asunto}</Text>
                    <Input 
                        value={formik.values.Asunto}
                        onChangeText={(text) => formik.setFieldValue("Asunto", text)}
                    />
                </FormControl>
                <FormControl>
                <FormControl.Label>Tipo de Reporte</FormControl.Label>
                <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Tipo_Reporte}</Text>
                    <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size" value={value} 
                        onChange= { 
                            nextValue => {
                                setValue(nextValue)
                                console.log(nextValue)
                                formik.values.Tipo_Reporte = nextValue;
                            }
                        }
                    >
                        <Stack direction={{
                        base: "column",
                        md: "row"
                        }} alignItems="center" space={2} w="75%" maxW="300px">
                            <Radio value={'Aplicacion'} colorScheme="green" size="sm" my={1} >
                                Aplicación
                            </Radio>
                            <Radio value={'Usuario'} colorScheme="green" size="sm" my={1} >
                                Usuario
                            </Radio>
                        </Stack >
                    </Radio.Group>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Descripción</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Descripcion}</Text>
                    <TextArea 
                        h={150} placeholder="Descrición del Reporte" width={275} 
                        value={formik.values.Descripcion}
                        onChangeText={(text) => formik.setFieldValue("Descripcion", text)}
                    />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => formik.handleSubmit()}>
                    Crear Reporte
                </Button>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}

function initialValues(){

    return {
        Asunto: "",
        Descripcion: "",
        Tipo_Reporte: "",
    }
}

function validationSchema(){
    return {
        Asunto: Yup.string().required('Este campo es requerido'),
        Descripcion: Yup.string().required('Este campo es requerido'),
        Tipo_Reporte: Yup.string().required('Este campo es requerido'),
    }
}
