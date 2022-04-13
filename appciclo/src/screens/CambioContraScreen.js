import React from "react";
import { Button, Alert } from "react-native";
import { NativeBaseProvider, Box, VStack, FormControl, Input, Center} from 'native-base';
import useAuth from "../hooks/useAuth";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

export default function CambioContraScreen({navigation}) {

    const {auth, logout} = useAuth();

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
        logout()
        navigation.navigate('Login')
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            const Usuario = auth.userName;
            console.log(formValue);
            console.log('Soy '+ Usuario);
            axios.post('http://192.168.1.3:5000/userM/changePassword', {...formValue, Usuario})
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
                        <FormControl.Label>Contraseña Actual</FormControl.Label>
                        <Input 
                            type="password"
                            value={formik.values.Contra_Actual}
                            onChangeText={(text) => formik.setFieldValue("Contra_Actual", text)}    
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Ingresa la nueva Contraseña</FormControl.Label>
                        <Input 
                            type="password"
                            value={formik.values.Nueva_Contra1}
                            onChangeText={(text) => formik.setFieldValue("Nueva_Contra1", text)}   
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirmar la nueva Contraseña</FormControl.Label>
                        <Input 
                            type="password"
                            value={formik.values.Nueva_Contra2}
                            onChangeText={(text) => formik.setFieldValue("Nueva_Contra2", text)} 
                        />
                    </FormControl>
                    <FormControl>
                    <Button
                        title="Confirmar Cambio"
                        onPress={() => {    
                            formik.handleSubmit()
                        }}
                    />
                    </FormControl>
                </VStack>
            </Box>
        </Center>
        </NativeBaseProvider>
    )
}

function initialValues(){

    return {
        Contra_Actual: "",
        Nueva_Contra1: "",
        Nueva_Contra2: "",
    }
}

function validationSchema(){
    return {
        Contra_Actual: Yup.string().required('Este campo es requerido'),
        Nueva_Contra1: Yup.string().required('Este campo es requerido'),
        Nueva_Contra2: Yup.string().required('Este campo es requerido'),
    }
}
