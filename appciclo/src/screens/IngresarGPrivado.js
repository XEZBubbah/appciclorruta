import React from "react";
import { Button, Alert } from "react-native";
import { URL } from "../store/GoogleMaps";
import { NativeBaseProvider, Box, VStack, FormControl, Input, Center} from 'native-base';
import useAuth from "../hooks/useAuth";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

export default function IngresarGPrivado({navigation}) {

    const {auth, outGroup, group} = useAuth();

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
        outGroup();
        navigation.navigate('Grupos')
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            const Usuario = auth.userName;
            console.log(formValue);
            console.log('Soy '+ Usuario);
            axios.post(URL+':5000/groupM/vinculateToGroup', {...formValue, Nombre_Grupo: group, Usuario})
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
                        <FormControl.Label>Contraseña del Grupo</FormControl.Label>
                        <Input 
                            type="password"
                            value={formik.values.Contraseña_Grupo}
                            onChangeText={(text) => formik.setFieldValue("Contraseña_Grupo", text)} 
                        />
                    </FormControl>
                    <FormControl>
                    <Button
                        title="Ingresar al Grupo"
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
        Contraseña_Grupo: "",
    }
}

function validationSchema(){
    return {
        Contraseña_Grupo: Yup.string().required('Este campo es requerido'),
    }
}