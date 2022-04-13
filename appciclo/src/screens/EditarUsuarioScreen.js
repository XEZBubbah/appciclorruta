import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, NativeBaseProvider, Box, VStack, FormControl, Input, Center, ScrollView, Stack, Checkbox, Text} from 'native-base';
import { useFormik }  from 'formik';
import useAuth from "../hooks/useAuth";
import axios from "axios";



export default function EditarUsuario ({navigation}) {
    
        const { auth,logout } = useAuth();
        const [ checkUsername, setcheckUsername ] = useState(false);
        const [ checkEmail, setcheckEmail ] = useState(false);
        const [ checkPhone, setcheckPhone  ] = useState(false);

        const onUpdate = () => {
            logout()
            navigation.navigate('Login')
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
            validateOnChange: false,
            onSubmit: async (formValue) => {
                var userNameOld = auth.userName;
                axios.post('http://192.168.1.3:5000/userM/modifyUserInfo', {...formValue, userNameOld})
                .then(function(response){
                    console.log(response.data.message);
                    onUpdate();
                }
                ).catch(function(e){
                    var err = Object.values(e.response.data)[0];
                    console.log(err);
                    console.log(typeof err);
                    asingError(err);
                })
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
                <Checkbox value="purple" colorScheme="danger" isChecked={checkUsername} onChange={() => setcheckUsername(!checkUsername)} >
                    Username
                </Checkbox>
                <Checkbox value="purple" colorScheme="purple" isChecked={checkEmail} onChange={() => setcheckEmail(!checkEmail)}>
                    Email
                </Checkbox>
                <Checkbox value="purple" colorScheme="orange" isChecked={checkPhone} onChange={() => setcheckPhone(!checkPhone)}>
                    Número Celular
                </Checkbox>
            </Stack>
        </Center>
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290">
                <VStack space={3} mt="5">
                {
                    checkUsername === true ? (
                        <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input 
                            autoCapitalize="none"
                            value={formik.values.userNameNew}
                            onChangeText={(text) => formik.setFieldValue("userNameNew", text)} 
                        />
                        </FormControl>
                    ) : (
                        console.log('Hola :)')
                    )
                }
                {
                    checkEmail === true ? (
                    <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                        <Input 
                            value={formik.values.email}
                            onChangeText={(text) => formik.setFieldValue("email", text)}
                        />
                    </FormControl>
                    ): (
                        console.log('Sayonaraaaa ...')
                    )
                }
                {
                    checkPhone === true ? (
                    <FormControl>
                        <FormControl.Label>Número Celular</FormControl.Label>
                        <Input 
                            value={formik.values.phone}
                            onChangeText={(text) => formik.setFieldValue("phone", text)}
                        />
                    </FormControl>
                    ):(
                        console.log('Abrigadhooo ...')
                    )
                }
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
        userNameNew: "",
        phone: "",
        email: "", 
    }
}

