import React , { useState } from "react";
import useAuth from "../hooks/useAuth";
import { URL } from "../store/GoogleMaps";
import { Image, Alert } from "react-native";
import { Button, NativeBaseProvider, Center,Heading, Box, VStack, FormControl, Input, Link, HStack, Text} from 'native-base'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";


export default function LoginScreen ({navigation}) {

    const { login } = useAuth();
    var respuesta = '';

    function asingError(err){
        respuesta = err;
        Alert.alert(
            'Tenemos un problema', 
            `${respuesta}`,
            [
                {text: 'Ok'}
            ]
        );
    }
    
    const onLogin = () => {
        navigation.navigate('Menú Usuario')
    };

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
                login(formValue);
                console.log('Soy: '+formValue.userName);
                axios.post(URL+':5000/userM/signinMov', {...formValue})
                .then(function(response){
                    console.log ("Datos enviados .. ");
                    onLogin();  
                }).catch(function(error){
                    var err = Object.values(error.response.data)[0];
                    console.log(err);
                    console.log(typeof err);
                    asingError(err);
                });

            }       
        },
    );

    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Image 
                style={{ width: 130, height: 130, alignSelf:"center"}}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1059/1059475.png?w=740' }}
            ></Image>
            <Text></Text>
            <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50",
                alignSelf: "center",
            }}>
                BikeApp
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Inicia Sesión para continuar
            </Heading>

                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nombre de Usuario</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.userName}</Text>
                    <Input 
                        autoCapitalize="none"
                        value={formik.values.userName}
                        onChangeText={(text) => formik.setFieldValue("userName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Contraseña</FormControl.Label>
                    <Text fontSize={"12"} color={"danger.500"}>{formik.errors.password}</Text>
                    <Input 
                        type="password" 
                        value={formik.values.password}
                        onChangeText={(text) => formik.setFieldValue("password", text)}
                    />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500"
                    }} alignSelf="flex-end" mt="1"
                    onPress={() => navigation.navigate('Recuperar Contraseña')}>
                    ¿Recuperar Contraseña?
                    </Link>
                </FormControl>
                
                <Button mt="2" colorScheme="indigo" onPress={() =>   
                    {
                        formik.handleSubmit();
                    }
                }
                
                >
                    Iniciar Sesión
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                    }}>
                    Soy nuevo usuario.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                        }} onPress={() => navigation.navigate('Crear Usuario')}>
                        Registrarme
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        </NativeBaseProvider>
    )
}

function initialValues(){

    return {
        userName: "",
        password: ""
    }
}

function validationSchema(){
    return {
        userName: Yup.string().required("Ingrese un nombre de Usuario"),
        password: Yup.string().required("Ingrese una contraseña"), 
    }
}

