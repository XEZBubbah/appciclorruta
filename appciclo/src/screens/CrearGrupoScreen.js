import React , { useState } from 'react';
import { Alert } from 'react-native';
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, TextArea, Radio, Stack, Text} from 'native-base';
import { URL } from "../store/GoogleMaps";
import useAuth from "../hooks/useAuth";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";


export default function CrearGrupoScreen ({navigation}) {
    
    const {auth} = useAuth();
    const [value, setValue] = useState('');

    const onGrupo = () => {
        navigation.navigate('Menú Usuario')
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
            axios.post(URL+'/groupM/createGroupMov', {...formValue, Usuario})
            .then(function(response){
                console.log (response.data.message);
                onGrupo();
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
                    <FormControl.Label>Nombre Grupo</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Nombre_Grupo}</Text>
                    <Input 
                        value={formik.values.Nombre_Grupo}
                        onChangeText={(text) => formik.setFieldValue("Nombre_Grupo", text)}    
                    />
                </FormControl>
                <FormControl>
                <FormControl.Label>Visibilidad</FormControl.Label>
                <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Visibilidad}</Text>
                <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size" value={value} 
                    onChange= { 
                        nextValue => {
                            setValue(nextValue);
                            console.log(nextValue)
                            formik.values.Visibilidad = nextValue;
                        }
                    }
                >
                    <Stack direction={{
                    base: "column",
                    md: "row"
                    }} alignItems="center" space={2} w="75%" maxW="300px">
                        <Radio value={true} colorScheme="green" size="sm" my={1} >
                            Publico
                        </Radio>
                        <Radio value={false} colorScheme="green" size="sm" my={1} >
                            Privado
                        </Radio>
                    </Stack >
                </Radio.Group>
                </FormControl>
                { value === false ? (
                    <FormControl>
                    <FormControl.Label>Contraseña Grupo</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Contraseña_Grupo}</Text>
                    <Input 
                        type="password"
                        value={formik.values.Contraseña_Grupo}
                        onChangeText={(text) => formik.setFieldValue("Contraseña_Grupo", text)} 
                    />
                    </FormControl> 
                ): (
                    console.log('')
                ) 
                }
                <FormControl>
                    <FormControl.Label>Descripción</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.Descripcion}</Text>
                    <TextArea 
                        h={150} placeholder="Descrición del Grupo" width={275} 
                        value={formik.values.Descripcion}
                        onChangeText={(text) => formik.setFieldValue("Descripcion", text)} 
                    />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => formik.handleSubmit()}>
                    Crear grupo
                </Button>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}

function initialValues(){

    return {
        Nombre_Grupo: "",
        Descripcion: "",
        Visibilidad: "",
        Contraseña_Grupo: "",
    }
}

function validationSchema(){
    return {
        Nombre_Grupo: Yup.string().required('Este campo es requerido'),
        Descripcion: Yup.string().required('Este campo es requerido'),
        Visibilidad: Yup.string().required('Este campo es requerido'),
    }
}
