import React from "react";
import { Button, Alert } from "react-native";
import { URL } from "../store/GoogleMaps";
import { NativeBaseProvider, Box, VStack, FormControl, Input, Center} from 'native-base';
import useAuth from "../hooks/useAuth";
import { useFormik } from 'formik';
import axios from "axios";

export default function EliminarGrupo({navigation}) {

    const {auth, group} = useAuth();

    const vis = group.Visibilidad;

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
        navigation.navigate('Grupos');
    }

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: async (formValue) => {
            const Usuario = auth.userName;
            console.log(formValue);
            console.log('Soy '+ Usuario);
            axios.post(URL+':5000/groupM/deleteUserGroup', {...formValue, Nombre_Grupo: group.Nombre , Usuario})
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
                        <FormControl.Label>Eliminar Grupo</FormControl.Label>
                    </FormControl>
                    {
                        vis === "Privado" ? (
                            <FormControl>
                            <FormControl.Label>Contraseña del Grupo</FormControl.Label>
                            <Input 
                                type="password"
                                value={formik.values.Contraseña_Grupo}
                                onChangeText={(text) => formik.setFieldValue("Contraseña_Grupo", text)} 
                            />
                            </FormControl>
                        ): (
                            console.log("Grupo No Privado")
                        )
                    }
                    <FormControl>
                    <Button
                        title="Eliminar Grupo"
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
