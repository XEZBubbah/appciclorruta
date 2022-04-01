import * as React from "react";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Link, HStack, Text, Center, ScrollView, Stack, Checkbox} from 'native-base'
import { useState } from 'react'
import { useFormik }  from 'formik';
import * as Yup from 'yup';
import axios from "axios";


export default function EditarUsuario ({navigation}) {
    
        const onUpdate = () => {
            navigation.navigate('Perfil')
        };
        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: Yup.object(validationSchema()),
            validateOnChange: false,
            onSubmit: async (formValue) => {
                try {
                    console.log(formValue);
                    const {data} = await axios.post('http://192.168.1.6:5000/userM/signupMov', {...formValue, birthDate});
                    console.log ("Datos enviados ..");
                    onUpdate();
                } 
                catch (error) {
                    console.log(error)
                }
            },
        });

    return (
       
        <NativeBaseProvider>
        <ScrollView maxW="400" h="80">
        <Center>
            <Stack p={6} direction={{
            base: "row",
            md: "row" 
            }} space={2} alignItems="flex-start">
                <Checkbox value="purple" colorScheme="danger" >
                    Username
                </Checkbox>
                <Checkbox value="purple" colorScheme="purple" >
                    Email
                </Checkbox>
                <Checkbox value="purple" colorScheme="orange" >
                    Número Celular
                </Checkbox>
            </Stack>
        </Center>
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290">
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.userName}</Text>
                    <Input 
                        autoCapitalize="none"
                        value={formik.values.userName}
                        onChangeText={(text) => formik.setFieldValue("userName", text)} 
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.email}</Text>
                    <Input 
                        value={formik.values.email}
                        onChangeText={(text) => formik.setFieldValue("email", text)}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Número Celular</FormControl.Label>
                    <Text fontSize={"10"} color={"danger.500"}>{formik.errors.phone}</Text>
                    <Input 
                        value={formik.values.phone}
                        onChangeText={(text) => formik.setFieldValue("phone", text)}
                    />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={() => 
                    formik.handleSubmit()
                }>
                    Editar Cuenta
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
        firstName: "", 
        lastName: "",
        userName: "",
        phone: "",
        email: "", 
    }
}

function validationSchema(){
    return {
        firstName: Yup.string().required("Este campo no se puede dejar vacio"),
        lastName: Yup.string().required("Este campo no se puede dejar vacio"),
        userName: Yup.string().required("Este campo no se puede dejar vacio"),
        phone: Yup.number().required("Este campo no se puede dejar vacio"),
        email: Yup.string().required("Ingrese un email").email("Email invalido"),
    }
}
