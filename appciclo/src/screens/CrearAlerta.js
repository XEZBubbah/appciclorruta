import React from "react";
import { Alert } from "react-native";
import { URL } from "../store/GoogleMaps";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, Text, TextArea} from 'native-base'



export default function CrearAlerta({navigation}) {

    const { ubicacUsu } = useAuth();

    function asingError(err){
        Alert.alert(
            'Tenemos un problema', 
            `${err}`,
            [
                {text: 'Ok'}
            ]
        );
    }

    const onUpdate = () => {
        navigation.goBack();
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            console.log("ubi: "+ ubicacUsu.latitude +ubicacUsu.longitude)
            formValue.latitude = ubicacUsu.latitude;
            formValue.longitude = ubicacUsu.longitude;
            console.log(formValue);
            axios.post(URL+'/alertaM/setAlert', {...formValue})
            .then(function(response){
                console.log (response.data.message);
                onUpdate();
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
                        <FormControl.Label>Titulo Alerta</FormControl.Label>
                        <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Nombre_Alerta}</Text>
                        <Input 
                            value={formik.values.Nombre_Alerta}
                            onChangeText={(text) => formik.setFieldValue("Nombre_Alerta", text)} 
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Descripción</FormControl.Label>
                        <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Descripcion}</Text>
                        <TextArea 
                            h={150} placeholder="Descrición del Grupo" width={275} 
                            value={formik.values.Descripcion}
                            onChangeText={(text) => formik.setFieldValue("Descripcion", text)} 
                        />
                    </FormControl>
                </VStack>
                <Button mt="2" colorScheme="indigo" onPress={() => {
                        formik.handleSubmit()
                    }}
                >
                    Enviar
                </Button>
                </Box>
            </Center>
        </NativeBaseProvider>
    )
}

function initialValues(){
    return {
        Nombre_Alerta: "",
        Descripcion: "",
        latitude: "",
        longitude: "",
    }
}

function validationSchema(){
    return {
        Nombre_Alerta: Yup.string().required('Este campo es requerido'),
        Descripcion: Yup.string().required('Este campo es requerido'),
    }
}
