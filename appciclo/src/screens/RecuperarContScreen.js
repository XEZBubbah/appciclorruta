import React from "react";
import { Alert } from "react-native";
import { URL } from "../store/GoogleMaps";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, Text} from 'native-base'



export default function RecuperarContScreen({navigation}) {

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
        navigation.navigate('Login')
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            console.log(formValue);
            axios.post(URL+'/userM/restorePassword', {...formValue})
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
                        <FormControl.Label>Nombre Usuario</FormControl.Label>
                        <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Usuario}</Text>
                        <Input 
                            autoCapitalize="none"
                            value={formik.values.Usuario}
                            onChangeText={(text) => formik.setFieldValue("Usuario", text)} 
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Ingresa el Email de tu cuenta</FormControl.Label>
                        <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Correo}</Text>
                        <Input 
                            value={formik.values.Correo}
                            onChangeText={(text) => formik.setFieldValue("Correo", text)} 
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Ingresa la nueva Contraseña</FormControl.Label>
                        <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Nueva_Contra1}</Text>
                        <Input 
                            type="password"
                            value={formik.values.Nueva_Contra1}
                            onChangeText={(text) => formik.setFieldValue("Nueva_Contra1", text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Ingresa nuevamente la nueva Contraseña</FormControl.Label>
                        <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Nueva_Contra2}</Text>
                        <Input 
                            type="password"
                            value={formik.values.Nueva_Contra2}
                            onChangeText={(text) => formik.setFieldValue("Nueva_Contra2", text)}
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
        Correo: "",
        Nueva_Contra1: "",
        Nueva_Contra2: "",
        Usuario: "",
    }
}

function validationSchema(){
    return {
        Correo: Yup.string().email("Debe digitar un correo valido").required('Este campo es requerido'),
        Nueva_Contra1: Yup.string().required('Este campo es requerido'),
        Nueva_Contra2: Yup.string().required('Este campo es requerido'),
        Usuario: Yup.string().required('Este campo es requerido'),
    }
}


